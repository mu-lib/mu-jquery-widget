(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/jquery.weave"] = factory.apply(root, modules.map(function(m) {
      return {
        "jquery": root.jQuery
      }[m] || root[m.replace(/^\./, "mu-jquery-widget")];
    }));
  }
})([
  "jquery",
  "./jquery.create",
  "mu-jquery-crank/jquery.crank"
], this, function($, create, crank) {
  var slice = Array.prototype.slice;
  var re = /\s+/;

  return function() {
    var self = this;
    
    return create.apply(this, slice.call(arguments)).then(function() {
      return $.when.apply(null, $.map(slice.call(arguments), function(widget, index) {
        return crank.call(self.eq(index), function() {
          return $.map($.isArray(widget) ? widget : [widget], function (w) { return w.ns; });;
        }, "initialize");
      }));
    });
  }
});
