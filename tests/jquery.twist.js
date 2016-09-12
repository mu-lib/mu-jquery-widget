(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/tests/jquery.twist"] = factory.apply(root, modules.map(function (m) {
      return {
        "jquery": root.jQuery,
        "qunit": root.QUnit
      }[m = m.replace(/^\.{2}/, "mu-jquery-widget")] || root[m];
    }));
  }
})([
  "qunit",
  "jquery",
  "../jquery.twist"
], this, function (QUnit, $, twist) {
  var modules = {
    "widget": function($element, ns) {
      var me = this;

      me.ns = ns;
      me.$element = $element;
    }
  };

  function load(module) {
    return modules[module] || modules.widget;
  }

  function id(i) {
    return this + "@" + i;
  }

  function assert_result(m, $elements) {
    var assert = this;

    return function (result) {
      $.each(result, function (index, widgets) {
        $.each(widgets, function(count, widget) {
          assert.ok(widget instanceof load(m[count]), "instanceof widgets");
          assert.ok(widget.$element.is($elements[index]), "widget.$element");
          assert.strictEqual(widget.ns, id.call(m[count], index * m.length + count + 1), "widget.ns");
        });
      });
    }
  }

  QUnit.module("mu-jquery-widget/jquery.twist#callback");

  QUnit.test("called for each element with correct parameters", function (assert) {
    var m = ["one", "two"];
    var $elements = $("<span></span><div></div>")
      .attr("mu-widget", m.join(" "));

    assert.expect($elements.length * m.length);

    return twist
      .call($elements, "mu-widget", function(module, index) {
        assert.strictEqual(module, m[index], "check that module matches");
        return load.apply(this, arguments);
      });
  });

  QUnit.test("called in correct scope", function (assert) {
    var m = ["one", "two"];
    var $elements = $("<span></span><div></div>")
      .attr("mu-widget", m.join(" "));

    assert.expect($elements.length * m.length);

    return twist
      .call($elements, "mu-widget", function(module, index) {
        assert.strictEqual(this, $elements, "scope matches");
        return load.apply(this, arguments);
      });
  });

  QUnit.module("mu-jquery-widget/jquery.twist#constructor");

  QUnit.test("default arguments", function (assert) {
    var m = [ "one", "two" ];
    var $elements = $("<span></span><div></div>")
      .attr("mu-widget", m.join(" "));
    var count = 0;
    var widget = function ($element, ns) {
      assert.ok($element.is($elements[Math.floor(count / 2)]), "$element");
      assert.strictEqual(ns, id.call(m[count % 2], ++count), "ns");
    };

    assert.expect($elements.length * m.length * 2);

    return twist
      .call($elements, "mu-widget", function(module) {
        return {
          "one": widget,
          "two": widget
        }[module] || load.apply(this, arguments);
      });
  });
  
  QUnit.test("extra arguments", function (assert) {
    var $elements = $("<span></span>")
      .attr("mu-widget", "one");
    var o = {};
    var one = function ($element, ns, extra) {
      assert.strictEqual(extra, o, "extra");
    };

    assert.expect($elements.length);

    return twist
      .call($elements, "mu-widget", function(module) {
        return {
          "one": one
        }[module] || load.apply(this, arguments);
      }, o);
  });

  QUnit.module("mu-jquery-widget/jquery.twist#result");

  QUnit.test("1/1 (widgets/elements)", function (assert) {
    var $elements = $("<span></span>")
      .attr("mu-widget", "one");

    assert.expect($elements.length * 3);

    return twist
      .call($elements, "mu-widget", load)
      .done(assert_result.call(assert, ["one"], $elements));
  });

  QUnit.test("1/n (widgets/elements)", function (assert) {
    var $elements = $("<span></span><div></div>")
      .attr("mu-widget", "one");

    assert.expect($elements.length * 3);

    return twist
      .call($elements, "mu-widget", load)
      .done(assert_result.call(assert, ["one"], $elements));
  });

  QUnit.test("n/1 (widgets/elements)", function (assert) {
    var m = [ "one", "two" ]
    var $elements = $("<span></span>")
      .attr("mu-widget", m.join(" "));

    assert.expect($elements.length * m.length * 3);

    return twist
      .call($elements, "mu-widget", load)
      .done(assert_result.call(assert, m, $elements));
  });

  QUnit.test("n/n (widgets/elements)", function (assert) {
    var m = [ "one", "two" ]
    var $elements = $("<span></span><div></div>")
      .attr("mu-widget", m.join(" "));

    assert.expect($elements.length * m.length * 3);

    return twist
      .call($elements, "mu-widget", load)
      .done(assert_result.call(assert, m, $elements));
  });
});