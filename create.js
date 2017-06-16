(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-create/create", "mu-create/constructor", "mu-create/prototype", "./dom"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-create/create"), require("mu-create/constructor"), require("mu-create/prototype"), require("./dom"));
  } else {
    root["mu-jquery-widget/create"] = factory(root["mu-create/create"], root["mu-create/constructor"], root["mu-create/prototype"], root["mu-jquery-widget/dom"]);
  }
})(this, function (create, construct, proto, dom) {
  return create(construct, dom, proto);
});
