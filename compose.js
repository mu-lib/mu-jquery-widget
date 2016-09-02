(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(function(m) {
      return require(m);
    }));
  } else {
    root["mu-jquery-widget/compose"] = factory.apply(root, modules.map(function(m) {
      return root[m];
    }));
  }
})(["mu-compose/regexp"], this, function(regexp) {
  return regexp(/^(on|attr|prop)\/(.+)/, function(result, data, method, type) {
    (result.dom = result.dom || []).push({
      "method": method,
      "type": type,
      "value": data.value
    });

    return false;
  });
});
