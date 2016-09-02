(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("jquery"));
  } else {
    root["mu-jquery-widget/jquery.widget"] = factory(root.jQuery);
  }
}(this, function($) {
  var re = /,+/;
  var space = " ";

  return $.fn.widget = function(ops, ns, data) {
    function namespace(type) {
      return type + "." + ns;
    }

    return this.each(function(i, element) {
      var $element = $(this);

      $.each(ops || false, function(j, op) {
        switch (op.method) {
          case "on":
            $element.on($.map(op.type.split(re), namespace).join(space), data, op.value);
            break;

          case "attr":
            $element.attr(op.type, op.value);
            break;

          case "prop":
            $element.prop(op.type, op.value);
            break;
        }
      });
    });
  }
}));
