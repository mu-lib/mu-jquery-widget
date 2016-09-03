(function(modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules);
  } else {
    root["mu-jquery-widget/widget"] = factory(root.jQuery);
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
            me.on(op.type, op.value);
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
      "on": function(events, handler) {
        var me = this;

        me.$element.on(name.call(events, me.ns), $.proxy(handler, me));
      },
      "off": function(events, handler) {
        var me = this;

        me.$element.off(name.call(events, me.ns), handler);
      }
    }
  ]
});
