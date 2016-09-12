(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/compose"] = factory.apply(root, modules.map(function(m) {
      return root[m.replace(/^\./, "mu-jquery-widget")];
    }));
  }
})([
  "mu-compose/compose",
  "mu-compose/constructor",
  "mu-compose/prototype",
  "./dom"
], this, function(compose, construct, proto, dom) {
    return compose(construct, proto, dom);
});