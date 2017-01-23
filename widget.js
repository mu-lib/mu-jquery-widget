(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.call(root);
  } else {
    root["mu-jquery-widget/widget"] = factory.call(root);
  }
})([], this, function () {
  var re_space = /\s+/;

  function name(ns) {
    return this
      .split(re_space)
      .map(function (type) {
        return type + "." + ns;
      })
      .join(" ");
  }

  var widget = {
    "off": function (events, selector, handler) {
      var me = this;
      me.$element.off(name.call(events, me.ns), selector, handler);
    },
    "on/_remove": function () {
      this.$element.triggerHandler("finalize." + this.ns);
    }
  };
  var _remove = {
    "noBubble": true,
    "trigger": function () {
      return false;
    },
    "remove": function (handleObj) {
      var me = this;

      if (handleObj.handler) {
        handleObj.handler.call(me, me.constructor.Event(handleObj.type, {
          "data": handleObj.data,
          "namespace": handleObj.namespace,
          "target": me
        }));
      }
    }
  };

  ["on", "one"].forEach(function (op) {
    this[op] = function (events, selector, data, handler) {
      var me = this;
      var $element = me.$element;

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

        case 1:
          throw new Error("not enough arguments");
      }

      $element[op](name.call(events, me.ns), selector, data, $element.constructor.proxy(handler, me));
    };
  }, widget);

  return [function ($element, ns) {
    var me = this;
    var $ = $element.constructor;
    var $special = $.event.special;

    $special._remove = $special._remove || _remove;

    me.ns = ns;
    me.$element = $element;

    $.each(me.constructor.dom, function (index, op) {
      switch (op.method) {
        case "on":
        case "one":
          me[op.method](op.events, op.selector, op.data, op.handler);
          break;

        case "attr":
        case "prop":
          $element[op.method](op.name, op.value);
          break;
      }
    });
  }, widget];
});
