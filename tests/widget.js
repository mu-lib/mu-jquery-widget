(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/tests/widget"] = factory.apply(root, modules.map(function (m) {
      return {
        "jquery": root.jQuery,
        "qunit": root.QUnit
      }[m = m.replace(/^\.{2}/, "mu-jquery-widget")] || root[m];
    }));
  }
})([
  "qunit",
  "jquery",
  "../widget",
], this, function (QUnit, $, widget) {
  var root = this;

  QUnit.module("mu-jquery-dom/widget");

  QUnit.test("exposes .widget and .blueprint", function (assert) {
      assert.expect(2);

      assert.ok($.isFunction(widget.widget));
      assert.ok($.isPlainObject(widget.blueprint));
  });
});