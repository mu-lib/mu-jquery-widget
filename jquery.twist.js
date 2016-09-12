(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/jquery.twist"] = factory.apply(root, modules.map(function(m) {
      return {
        "jquery": root.jQuery
      }[m = m.replace(/^\./, "mu-jquery-widget")] || root[m];
    }));
  }
})([
  "jquery",
  "mu-jquery-wire/jquery.wire",
  "./create"
], this, function($, wire, create) {
  var slice = Array.prototype.slice;
  var re_space = /\s+/;
  var re_clean = /@\d+$/;

  function clean(value) {
    return !re_clean.test(value);
  }

  return function(attr, callback) {
    var args = slice.call(arguments, 2);
    var count = 0;

    return wire.call(this,
      function($element) {
        return ($element.attr(attr) || "").split(re_space).filter(clean);
      },
      function($element, index, module) {
        var self = this;

        return $.when(callback.call(self, module, index)).then(function(result) {
          result = create(result, [$element, module = module + "@" + ++count].concat(args));

          $element.attr(attr, function(i, value) {
            value = value.split(re_space);
            value[index] = module;
            return value.join(" ");
          });

          return result;
        });
      });
  }
});
