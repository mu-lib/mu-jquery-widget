(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/create"] = factory.apply(root, modules.map(function(m) {
      return root[m.replace(/^\./, "mu-jquery-widget")];
    }));
  }
})([
  "mu-create/create",
  "mu-create/constructor",
  "mu-create/prototype",
  "./dom"
], this, function(create, construct, proto, dom) {
    return create(construct, proto, dom);
});