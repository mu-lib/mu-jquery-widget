(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/main"] = factory.apply(root, modules.map(function (m) {
      return root[m.replace(/^\./, "mu-jquery-widget")];
    }));
  }
})(["./dom", "./widget"], this, function (dom, widget) {
  return {
    dom: dom,
    widget: widget
  };
});
