(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.call(root);
  } else {
    root["mu-jquery-widget/jquery.get"] = factory.call(root);
  }
})([], this, function () {
  return function (search) {
    var me = this;
    var $ = me.constructor;
    var values = {};

    search = $.expando + "#" + $.camelCase(search || "");

    return $.map(me, function (element) {
      return $.map($.data(element), function (value, key) {
        return values.hasOwnProperty(key) ? undefined : values[key] = key.startsWith(search) ? value : undefined;
      });
    });
  }
});
