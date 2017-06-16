(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-create/regexp"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-create/regexp"));
  } else {
    root["mu-jquery-widget/dom"] = factory(root["mu-create/regexp"]);
  }
})(this, function (regexp) {
  var toString = Object.prototype.toString;
  var re_on = /^one?$/;

  function copy(o) {
    return Object.keys(o).reduce(function (result, key) {
      if (!result.hasOwnProperty(key)) {
        result[key] = o[key];
      }
      return result;
    }, this);
  }

  return regexp(/^(one?|attr|prop)\/(.+?)(?:\((.*)\))?$/, function (result, data, method, type, args) {
    var dom = toString.call(data.value) === "[object Object]"
      ? data.value
      : re_on.test(method)
        ? { "handler": data.value }
        : { "value": data.value };

    dom = copy.call(dom, re_on.test(method)
      ? {
        "method": method,
        "events": type,
        "selector": args
      }
      : {
        "method": method,
        "name": type
      });

    (result.dom = result.dom || []).push(dom);

    return false;
  });
});
