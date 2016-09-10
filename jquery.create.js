(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/jquery.create"] = factory.apply(root, modules.map(function(m) {
      return {
        "jquery": root.jQuery
      }[m] || root[m];
    }));
  }
})([
  "jquery",
  "mu-jquery-wire/jquery.wire"
], this, function($, wire) {
  var slice = Array.prototype.slice;
  var bind = Function.prototype.bind;
  var re_space = /\s+/;
  var re_instance = /@\d+$/;

  function create(c, args) {
    return new (bind.apply(c, [null].concat(args)))();
  }

  return function(attr, callback) {
    var args = slice.call(arguments, 2);
    var count = 0;

    return wire.call(this,
      function(element) {
        return ($(element).attr(attr) || "").split(re_space);
      },
      function(element, index, module) {
        var self = this;

        return re_instance.test(module) ? module : $.when(callback.call(self, module, index)).then(function(result) {
          var $element;

          if ($.type(result) === "function") {
            // create instance and update `$element` and `module`
            result = create(result, [$element = $(element), module = module + "@" + ++count].concat(args));

            // update attribute
            $element.attr(attr, function(i, value) {
              value = value.split(/\s+/);
              value[index] = module;
              return value.join(" ");
            });
          }

          return result;
        });
      });
  }
});
