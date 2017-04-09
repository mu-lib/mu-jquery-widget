(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.call(root);
  } else {
    root["mu-jquery-widget/extended"] = factory.apply(root, modules.map(function (m) {
      return root[m.replace(/^\./, "mu-jquery-widget")];
    }));
  }
})(["./widget"], this, function (widget) {
  var methods = ["addClass", "append", "appendTo", "attr", "css", "data", "empty", "hasClass", "html", "is", "insertAfter", "insertBefore", "prependTo", "prop", "removeAttr", "removeClass", "removeProp", "text", "toggleClass", "val", "wrap"];

  function blueprint(method) {
    return {
      "key": method,
      "value": function () {
        var me = this;
        var $element = me.$element;
        var result = $element[method].apply($element, arguments);
        return result instanceof $element.constructor ? me : result;
      }
    };
  }

  return widget.extend(methods.map(blueprint));
});
