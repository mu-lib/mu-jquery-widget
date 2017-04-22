(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.call(root);
  } else {
    root["mu-jquery-widget/get"] = factory.call(root);
  }
})([], this, function () {
  return function (search) {
    var me = this;
    var $ = me.constructor;
    return $.map(me.data(), function (value, key) {
      return key.startsWith($.expando + "#" + search) ? value : undefined;
    });
  }
});
