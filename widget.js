(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/widget"] = factory.apply(root, modules.map(function(m) {
      return {
        "jquery": root.jQuery
      }[m] || root[m];
    }));
  }
})(["jquery"], this, function($) {
  function name(ns) {
    return this
      .split(/\s+/)
      .map(function(type) {
        return type + "." + ns;
      })
      .join(" ");
  }

  return [
    function($element, ns) {
      var me = this;

      me.ns = ns;
      me.$element = $element;

      $.each(me.constructor.dom || false, function(index, op) {
        switch (op.method) {
          case "on":
            me.on(op.type, op.args, op.value);
            break;

          case "attr":
            $element.attr(op.type, op.value);
            break;

          case "prop":
            $element.prop(op.type, op.value);
            break;
        }
      });
    },
    {
      "on": function(events, selector, data, handler) {
        var me = this;

        switch (arguments.length) {
          case 3:
            handler = data;
            data = undefined;
            break;

          case 2:
            handler = selector;
            selector = undefined;
            data = undefined;
            break;

          default:
            throw new Error("not enough arguments");
        }

        me.$element.on(name.call(events, me.ns), selector, data, $.proxy(handler, me));
      },
      "off": function(events, selector, handler) {
        var me = this;

        me.$element.off(name.call(events, me.ns), selector, handler);
      }
    }
  ]
});
