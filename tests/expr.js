(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/tests/expr"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m.replace(/^\.{2}/, "mu-jquery-widget")];
    }, {
        "qunit": root.QUnit,
        "jquery": root.jQuery
      }));
  }
})([
  "qunit",
  "jquery",
  "../expr",
], this, function (QUnit, $, expr) {
  var expando = $.expando;
  var name = "mu-jquery-widget/expr";

  QUnit.module(name);

  QUnit.testStart(function(details) {
    if (details.module.startsWith(name)) {
      $.expr[":"].widget = expr($);
    }
  });

  QUnit.testDone(function(details) {
    if (details.skipped) {
      return;
    }
    else if (details.module.startsWith(name)) {
      delete $.expr[":"].widget;
    }
  });

  QUnit.test("not matching selector", function (assert) {
    assert.expect(1);

    var $element = $("<div>");

    assert.notOk($element.is(":widget"), "selector does not match");
  });

  QUnit.test("matching selector", function (assert) {
    assert.expect(1);

    var $element = $("<div>").data(expando + "#test", "test");

    assert.ok($element.is(":widget"), "selector matches");
  });

  QUnit.test("matching search selector", function (assert) {
    assert.expect(1);

    var $element = $("<div>").data(expando + "#test", "test");

    assert.ok($element.is(":widget(tes)"), "selector matches");
  });

  QUnit.test("matching selector for several $elements", function (assert) {
    assert.expect(1);

    var $elements = $("<div></div><div></div><div></div>");
    var $element1 = $elements.eq(0).data(expando + "#test1", "test1");
    var $element2 = $elements.eq(2).data(expando + "#test2", "test2");

    assert.deepEqual($elements.filter(":widget").get(), [ $element1.get(0), $element2.get(0) ] , "finds matching elements");
  });
});