(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/dom"] = factory.apply(root, modules.map(function (m) {
      return root[m];
    }));
  }
})(["mu-create/regexp"], this, function (regexp) {
  var toString = Object.prototype.toString;

  function copy(o) {
    return Object.keys(o).reduce(function (result, key) {
      if (!result.hasOwnProperty(key)) {
        result[key] = o[key];
      }
      return result;
    }, this);
  }

  return regexp(/^(on|attr|prop)\/(.+?)(?:\((.*)\))?$/, function (result, data, method, type, args) {
    var dom = toString.call(data.value) === "[object Object]"
      ? data.value
      : method === "on"
        ? { "handler": data.value }
        : { "value": data.value };

    dom = copy.call(dom, method === "on"
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
