(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root["mu-jquery-widget/expr"] = factory();
  }
})(this, function () {
  function matches($, element, search) {
    search = $.expando + "#" + $.camelCase(search || "");
    return Object.keys($.data(element)).some(function (key) {
      return key.startsWith(search);
    });
  }

  return function ($) {
    return $.expr.createPseudo
      ? $.expr.createPseudo(function (search) {
        return function (element) {
          return matches($, element, search);
        }
      })
      : function (element, index, match) {
        return matches($, element, match[3]);
      };
  }
});
