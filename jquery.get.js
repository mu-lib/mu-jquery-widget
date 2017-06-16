(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root["mu-jquery-widget/jquery.get"] = factory();
  }
})(this, function () {
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
