(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./create"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./create"));
  } else {
    root["mu-jquery-widget/widget"] = factory(root["mu-jquery-widget/create"]);
  }
})(this, function (create) {
  var re_space = /\s+/;

  function falsy() {
    return false;
  }

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
      me.$element.off(name.call(events || "", me.ns), selector, handler);
    },
    "on/_remove": function () {
      var me = this;
      var finalized = me.$.Callbacks("once");
      finalized.fire(me.triggerHandler("finalize", finalized.add));
    },
    "triggerHandler": function (events, args) {
      var me = this;
      return me.$element.triggerHandler(name.call(events, me.ns), args);
    }
  };

  ["on", "one"].forEach(function (op) {
    this[op] = function (events, selector, data, handler) {
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

        case 1:
          throw new Error("not enough arguments");
      }

      me.$element[op](name.call(events, me.ns), selector, data, me.$.proxy(handler, me));
    };
  }, widget);

  return create(function ($element, ns) {
    var me = this;
    var $ = me.$ = $element.constructor;
    var $special = $.event.special;

    $special._remove = $special._remove || {
      "noBubble": true,
      "trigger": falsy,
      "remove": function (handleObj) {
        handleObj.handler($.Event(handleObj.type, {
          "data": handleObj.data,
          "namespace": handleObj.namespace,
          "target": this
        }));
      }
    };

    me.ns = ns;
    me.$element = $element;

    me.constructor.dom.forEach(function (op, index) {
      switch (op.method) {
        case "on":
        case "one":
          me[op.method](op.events, op.selector, op.data, op.handler);
          break;

        case "attr":
        case "prop":
          $element[op.method](op.name, $.isFunction(op.value) ? $.proxy(op.value, me) : op.value);
          break;
      }
    });

    $element.data($.expando + "#" + ns, me);
  }, widget);
});
