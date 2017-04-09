(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/tests/extended"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m.replace(/^\.{2}/, "mu-jquery-widget")];
    }, {
        "jquery": root.jQuery,
        "qunit": root.QUnit
      }));
  }
})([
  "qunit",
  "jquery",
  "../extended"
], this, function (QUnit, $, Widget) {
  //TODO: This file only contain the very most basic tests against the full jQuery API so fill up as we go I guess.
  QUnit.module("mu-jquery-widget/extended#methods");

  QUnit.test("addClass", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var w = new Widget($element, "ns");

    assert.equal(w.addClass("className"), w, "returns widget");
    assert.equal($element.attr("class"), "className", "className was added");
  });

  QUnit.test("append", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var w = new Widget($element, "ns");

    assert.equal(w.append("<p>"), w, "returns widget");
    assert.equal($element.html(), "<p></p>", "html matches");
  });

  QUnit.test("appendTo", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var $section = $("<section></section>");
    var w = new Widget($element, "ns");

    assert.equal(w.appendTo($section), w, "returns widget");
    assert.equal($section.html(), "<div></div>", "html matches");
  });

  QUnit.test("attr", function (assert) {
    assert.expect(3);

    var $element = $("<div></div>");
    var w = new Widget($element, "ns");

    assert.equal(w.attr("test", "abc"), w, "returns widget");
    assert.equal(w.attr("test"), "abc", "widget matches");
    assert.equal($element.attr("test"), "abc", "$element matches");
  });

  QUnit.test("css", function (assert) {
    assert.expect(3);

    var $element = $("<div></div>");
    var w = new Widget($element, "ns");

    assert.equal(w.css("font-size", "10px"), w, "returns widget");
    assert.equal(w.css("font-size"), "10px", "widget matches");
    assert.equal($element.css("font-size"), "10px", "$element matches");
  });

  QUnit.test("data", function (assert) {
    assert.expect(3);

    var $element = $("<div></div>");
    var w = new Widget($element, "ns");

    assert.equal(w.data("key", "value"), w, "returns widget");
    assert.equal(w.data("key"), "value", "widget matches");
    assert.equal($element.data("key"), "value", "$element matches");
  });

  QUnit.test("empty", function (assert) {
    assert.expect(2);

    var $element = $("<div><p></p></div>");
    var w = new Widget($element, "ns");

    assert.equal(w.empty(), w, "returns widget");
    assert.equal($element.html(), "", "$element matches");
  });

  QUnit.test("hasClass", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>", {
      "class": "test"
    });
    var w = new Widget($element, "ns");

    assert.equal(w.hasClass("test"), true, "finds test class");
  });

  QUnit.test("html", function (assert) {
    assert.expect(3);

    var $element = $("<div></div>");
    var w = new Widget($element, "ns");

    assert.equal(w.html("<p></p>"), w, "returns widget");
    assert.equal(w.html(), "<p></p>", "widget matches");
    assert.equal($element.html(), "<p></p>", "$element matches");
  });

  QUnit.test("is", function (assert) {
    assert.expect(1);

    var $element = $("<li></li>");
    var $ul = $("<ul><li></li></ul>").append($element);
    var w = new Widget($element, "ns");

    assert.equal(w.is(":last-child"), true, "checking against selector works");
  });

  QUnit.test("insertAfter", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var $span = $("<span></span>");
    var $section = $("<section></section>").append($span);
    var w = new Widget($element, "ns");

    assert.equal(w.insertAfter($span), w, "returns widget");
    assert.equal($section.html(), "<span></span><div></div>", "html matches");
  });

  QUnit.test("insertBefore", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var $span = $("<span></span>");
    var $section = $("<section></section>").append($span);
    var w = new Widget($element, "ns");

    assert.equal(w.insertBefore($span), w, "returns widget");
    assert.equal($section.html(), "<div></div><span></span>", "html matches");
  });

  QUnit.test("prependTo", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var $span = $("<span></span>");
    var $section = $("<section></section>").append($span);
    var w = new Widget($element, "ns");

    assert.equal(w.prependTo($section), w, "returns widget");
    assert.equal($section.html(), "<div></div><span></span>", "html matches");
  });

  QUnit.test("prop", function (assert) {
    assert.expect(3);

    var $element = $("<input></input>", { "type": "checkbox" });
    var w = new Widget($element, "ns");

    assert.equal(w.prop("checked", true), w, "returns widget");
    assert.equal(w.prop("checked"), true, "widget matches");
    assert.equal($element.prop("checked"), true, "$element matches");
  });

  QUnit.test("removeAttr", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>", { "test": "abc" });
    var w = new Widget($element, "ns");

    assert.equal(w.removeAttr("test"), w, "returns widget");
    assert.equal($element.attr("test"), undefined, "$element matched");
  });

  QUnit.test("removeClass", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>", { "class": "className" });
    var w = new Widget($element, "ns");

    assert.equal(w.removeClass("className"), w, "returns widget");
    assert.equal($element.attr("class"), "", "$element matched");
  });

  QUnit.test("removeProp", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>").prop("test", "abc");
    var w = new Widget($element, "ns");

    assert.equal(w.removeProp("test"), w, "returns widget");
    assert.equal($element.prop("test"), undefined, "$element matched");
  });

  QUnit.test("text", function (assert) {
    assert.expect(3);

    var $element = $("<div></div>");
    var w = new Widget($element, "ns");

    assert.equal(w.text("test"), w, "returns widget");
    assert.equal(w.text(), "test", "widget matches");
    assert.equal($element.text(), "test", "$element matches");
  });

  QUnit.test("toggleClass", function (assert) {
    assert.expect(3);

    var $element = $("<div></div>");
    var w = new Widget($element, "ns");

    assert.equal(w.toggleClass("test"), w, "returns widget");
    assert.equal($element.hasClass("test"), true, "$element has test class");
    w.toggleClass("test");
    assert.equal($element.hasClass("test"), false, "$element does not have test class");
  });

  QUnit.test("val", function (assert) {
    assert.expect(3);

    var $element = $("<input></input>");
    var w = new Widget($element, "ns");

    assert.equal(w.val("test"), w, "returns widget");
    assert.equal(w.val(), "test", "widget matches");
    assert.equal($element.val(), "test", "$element matches");
  });

  QUnit.test("wrap", function (assert) {
    assert.expect(2);

    var $element = $("<span></span>");
    var $section = $("<section></section>").append($element);
    var w = new Widget($element, "ns");

    assert.equal(w.wrap("<div></div>"), w, "returns widget");
    assert.equal($section.html(), "<div><span></span></div>", "html matches");
  });
});