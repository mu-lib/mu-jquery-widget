(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/tests/jquery.get"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m.replace(/^\.{2}/, "mu-jquery-widget")];
    }, {
        "qunit": root.QUnit,
        "jquery": root.jQuery
      }));
  }
})([
  "qunit",
  "jquery",
  "../jquery.get",
], this, function (QUnit, $, get) {
  var expando = $.expando;

  QUnit.module("mu-jquery-widget/jquery.get");

  QUnit.test("returns empty array if no match", function (assert) {
    assert.expect(1);

    var $element = $("<div>");

    assert.deepEqual(get.call($element, "xxx"), [], "should match empty array");
  });

  QUnit.test("returns data that starts with signature + search", function (assert) {
    assert.expect(1);

    var $element = $("<div>")
      .data(expando + "#test", "test")
      .data(expando + "#ztest", "ztest")
      .data(expando + "#tests", "tests");

    assert.deepEqual(get.call($element, "test"), ["test", "tests"], "should match data");
  });

  QUnit.test("returns data that starts with signature if search is empty", function (assert) {
    assert.expect(1);

    var $element = $("<div>")
      .data(expando + "#test1", "test1")
      .data("skip", "this")
      .data(expando + "#test2", "test2");

    assert.deepEqual(get.call($element), ["test1", "test2"], "should match data");
  });

  QUnit.test("gets from all elements in $elements", function (assert) {
    assert.expect(1);

    var $elements = $("<div></div><div></div>");

    $elements.eq(0).data(expando + "#test1", "test1")
    $elements.eq(1).data(expando + "#test2", "test2");

    assert.deepEqual(get.call($elements), ["test1", "test2"], "should match data");
  });

  QUnit.test("only unique values are returned", function (assert) {
    assert.expect(1);

    var $elements = $("<div></div><div></div>");

    $elements.eq(0).data(expando + "#test1", "test1")
    $elements.eq(0).data(expando + "#test2", "test2")
    $elements.eq(1).data(expando + "#test2", "test2");

    assert.deepEqual(get.call($elements), ["test1", "test2"], "should match data");
  });
});