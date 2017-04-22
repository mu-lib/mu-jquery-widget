(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules);
  } else {
    root["mu-jquery-widget/expr"] = factory.apply(root, modules);
  }
})([], this, function () {
  function matches($, element, search) {
    search = $.expando + "#" + (search || "");
    return Object.keys($.data(element)).some(function(key) {
      return key.startsWith(search);
    });
  }

  return function ($) {
    return $.expr.createPseudo
      ? $.expr.createPseudo(function(search) {
        return function(element) {
          return matches($, element, search);
        }
      })
      : function(element, index, match) {
          return matches($, element, match[3]);
      };
  }
});
