(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.call(root);
  } else {
    root["mu-jquery-widget/jquery"] = factory.apply(root, modules.map(function (m) {
      return root[m.replace(/^\./, "mu-jquery-widget")];
    }));
  }
})([], this, function () {
  var map = Array.prototype.map;
  var blueprints = {};
  var jq = /^(?:children|closest|contents|find|next(?:All|Until)?|parent(?:s|sUntil)?|prev(?:Until)?|siblings)$/;

  function blueprint(method) {
    return blueprints[method] || (blueprints[method] = {
      "key": method,
      "value": function () {
        var me = this;
        var $element = me.$element;
        var result = $element[method].apply($element, arguments);
        return !jq.test(method) && result instanceof $element.constructor ? me : result;
      }
    });
  }

  return function () {
    return map.call(arguments, blueprint);
  }
});