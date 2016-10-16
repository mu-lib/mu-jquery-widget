(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/tests/widget"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m.replace(/^\.{2}/, "mu-jquery-widget")];
    }, {
        "jquery": root.jQuery,
        "qunit": root.QUnit
      }));
  }
})([
  "qunit",
  "jquery",
  "mu-create/create",
  "mu-create/constructor",
  "mu-create/prototype",
  "../widget",
  "../dom"
], this, function (QUnit, $, create, construct, proto, widget, dom) {
  var c = create(construct, proto, dom);

  QUnit.module("mu-jquery-dom/widget#constructor");

  QUnit.test("instanceof", function (assert) {
    assert.expect(1);

    var W = c(widget);
    var w = new W($("<div></div>"), "ns");

    assert.ok(w instanceof W, "w is an incence of W");
  });

  QUnit.test("arguments", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var ns = "ns";

    var W = c(widget);
    var w = new W($element, ns);

    assert.ok(w.$element.is($element), "$element matches");
    assert.strictEqual(w.ns, ns, "ns matches");
  });

  QUnit.module("mu-jquery-dom/widget#trigger");

  QUnit.test("handler called", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    function ok($event) {
      assert.ok(true, "handler called");
    }

    $element
      .on("test", function () {
        assert.notOk(true, "handler should not be called");
      })
      .on("test." + w.ns, ok)
      .appendTo($("<div></div>").on("test." + w.ns, ok));

    w.trigger("test");
  });

  QUnit.test("extra parameters plain object", function (assert) {
    assert.expect(6);

    function ok($event, extraParams) {
      assert.strictEqual(arguments.length, 2, "arguments.length matches");
      assert.ok($event instanceof $.Event, "$event is an instance of $.Event");
      assert.strictEqual(extraParams, o, "extraParams matches");
    }

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");
    var o = {};

    $element
      .on("test", function ($event) {
        assert.notOk(true, "handler should not be called");
      })
      .on("test." + w.ns, ok)
      .appendTo($("<div></div>").on("test." + w.ns, ok));

    w.trigger("test", o);
  });

  QUnit.test("extra parameters array", function (assert) {
    assert.expect(8);

    function ok($event, one, _$element) {
      assert.strictEqual(arguments.length, 3, "arguments.length matches");
      assert.ok($event instanceof $.Event, "$event is an instance of $.Event");
      assert.strictEqual(one, 1, "one matches");
      assert.strictEqual(_$element, $element, "_$element matches");
    }

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    $element
      .on("test", function ($event) {
        assert.notOk(true, "handler should not be called");
      })
      .on("test." + w.ns, ok)
      .appendTo($("<div></div>").on("test." + w.ns, ok));

    w.trigger("test", [1, $element]);
  });

  QUnit.module("mu-jquery-dom/widget#triggerHandler");

  QUnit.test("handler called", function (assert) {
    assert.expect(1);

    function notOk() {
      assert.notOk(true, "handler should not be called");
    }

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    $element
      .on("test", notOk)
      .on("test." + w.ns, function ok($event) {
        assert.ok(true, "handler called");
      })
      .appendTo($("<div></div>").on("test." + w.ns, notOk));

    w.triggerHandler("test");
  });

  QUnit.test("extra parameters plain object", function (assert) {
    assert.expect(3);

    function notOk() {
      assert.notOk(true, "handler should not be called");
    }

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");
    var o = {};

    $element
      .on("test", notOk)
      .on("test." + w.ns, function ok($event, extraParams) {
        assert.strictEqual(arguments.length, 2, "arguments.length matches");
        assert.ok($event instanceof $.Event, "$event is an instance of $.Event");
        assert.strictEqual(extraParams, o, "extraParams matches");
      })
      .appendTo($("<div></div>").on("test." + w.ns, notOk));

    w.triggerHandler("test", o);
  });

  QUnit.test("extra parameters array", function (assert) {
    assert.expect(4);

    function notOk() {
      assert.notOk(true, "handler should not be called");
    }

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    $element
      .on("test", notOk)
      .on("test." + w.ns, function ok($event, one, _$element) {
        assert.strictEqual(arguments.length, 3, "arguments.length matches");
        assert.ok($event instanceof $.Event, "$event is an instance of $.Event");
        assert.strictEqual(one, 1, "one matches");
        assert.strictEqual(_$element, $element, "_$element matches");
      })
      .appendTo($("<div></div>").on("test." + w.ns, notOk));

    w.triggerHandler("test", [1, $element]);
  });

  QUnit.module("mu-jquery-dom/widget#on");

  QUnit.test("handler called", function (assert) {
    assert.expect(4);

    function ok() {
      assert.ok(true, "handler called");
    }

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", ok);
    w.on("test", ok);

    $element
      .trigger("test")
      .trigger("test");
  });

  QUnit.test("handler called when trigger on child", function (assert) {
    assert.expect(4);

    function ok() {
      assert.ok(true, "handler called");
    }

    var $element = $("<div><span></span></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", ok);
    w.on("test", ok);

    $element
      .find("span")
      .trigger("test")
      .trigger("test");
  });

  QUnit.test("handler called with ns", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", function () {
      assert.ok(true, "handler called");
    });

    $element.trigger("test." + w.ns);
  });

  QUnit.test("handler called in scope", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", function () {
      assert.strictEqual(this, w, "scope matches");
    });

    $element.trigger("test");
  });

  QUnit.test("handler called with default arguments", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", function ($event) {
      assert.strictEqual(arguments.length, 1, "arguments.length matches");
      assert.ok($event instanceof $.Event, "$event is an instance of $.Event");
    });

    $element.trigger("test");
  });

  QUnit.test("handler called with extra arguments", function (assert) {
    assert.expect(4);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", function ($event, one, _$element) {
      assert.strictEqual(arguments.length, 3, "arguments.length matches");
      assert.ok($event instanceof $.Event, "$event is an instance of $.Event");
      assert.strictEqual(one, 1, "one matches");
      assert.strictEqual(_$element, $element, "_$element matches");
    });

    $element.trigger("test", [1, $element]);
  });

  QUnit.test("args.events can be multiple", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test1 test2", function () {
      assert.ok(true, "handler called");
    });

    $element
      .trigger("test1")
      .trigger("test2");
  });

  QUnit.test("args.selector filters sub events", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", ".x", function () {
      assert.notOk(true, "handler should never be called");
    });
    w.on("test", ".c", function () {
      assert.ok(true, "handler called");
    });

    $element
      .find("span")
      .trigger("test");
  });

  QUnit.test("args.selector can be falsy", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", void 0, function () {
      assert.ok(true, "handler should never be called");
    });

    $element.trigger("test");
  });

  QUnit.test("args.data is passed as $event.data", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", void 0, $element, function ($event) {
      assert.deepEqual($event.data, $element, "data matches");
    });

    $element.trigger("test");
  });

  QUnit.module("mu-jquery-dom/widget#one");

  QUnit.test("handler called once", function (assert) {
    assert.expect(2);

    function ok($event) {
      assert.ok(true, "handler called");
    }

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.one("test", ok);
    w.one("test", ok);

    $element
      .trigger("test")
      .trigger("test");
  });

  QUnit.test("handler called once when trigger on child", function (assert) {
    assert.expect(2);

    function ok() {
      assert.ok(true, "handler called");
    }

    var $element = $("<div><span></span></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.one("test", ok);
    w.one("test", ok);

    $element
      .find("span")
      .trigger("test")
      .trigger("test");
  });

  QUnit.test("handler called once with ns", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.one("test", function () {
      assert.ok(true, "handler called");
    });

    $element.trigger("test." + w.ns);
  });

  QUnit.test("handler called once in scope", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.one("test", function () {
      assert.strictEqual(this, w, "scope matches");
    });

    $element.trigger("test");
  });

  QUnit.test("handler called once with default arguments", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.one("test", function ($event) {
      assert.strictEqual(arguments.length, 1, "arguments.length matches");
      assert.ok($event instanceof $.Event, "$event is an instance of $.Event");
    });

    $element.trigger("test");
  });

  QUnit.test("handler called once with extra arguments", function (assert) {
    assert.expect(4);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.one("test", function ($event, one, _$element) {
      assert.strictEqual(arguments.length, 3, "arguments.length matches");
      assert.ok($event instanceof $.Event, "$event is an instance of $.Event");
      assert.strictEqual(one, 1, "one matches");
      assert.strictEqual(_$element, $element, "_$element matches");
    });

    $element.trigger("test", [1, $element]);
  });

  QUnit.test("args.events can be multiple", function (assert) {
    assert.expect(2);

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.one("test1 test2", function () {
      assert.ok(true, "handler called");
    });

    $element
      .trigger("test1")
      .trigger("test2")
      .trigger("test1")
      .trigger("test2");
  });

  QUnit.test("args.selector filters sub events", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.one("test", ".x", function () {
      assert.notOk(true, "handler should never be called");
    });
    w.one("test", ".c", function () {
      assert.ok(true, "handler called");
    });

    $element
      .find("span")
      .trigger("test")
      .trigger("test");
  });

  QUnit.test("args.selector can be falsy", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.one("test", void 0, function () {
      assert.ok(true, "handler called");
    });

    $element
      .trigger("test")
      .trigger("test");
  });

  QUnit.test("args.data is passed as $event.data", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.one("test", void 0, $element, function ($event) {
      assert.deepEqual($event.data, $element, "data matches");
    });

    $element
      .trigger("test")
      .trigger("test");
  });

  QUnit.module("mu-jquery-dom/widget#off");

  QUnit.test("handlers removed", function (assert) {
    assert.expect(0);

    function notOk() {
      assert.notOk(true, "handler should never be called");
    }

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", notOk);
    w.on("test", notOk);
    w.off("test");

    $element.trigger("test");
  });

  QUnit.test("args.events can be multiple", function (assert) {
    assert.expect(0);

    function notOk() {
      assert.notOk(true, "handler should never be called");
    }

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test1", notOk);
    w.on("test2", notOk);
    w.off("test1 test2");

    $element
      .trigger("test1")
      .trigger("test2");
  });

  QUnit.test("args.selector filters handlers", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='a b'></span></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", ".a", function () {
      assert.notOk(true, "handler should never be called");
    });
    w.on("test", ".b", function () {
      assert.ok(true, "handler called");
    });
    w.off("test", ".a");

    $element
      .find("span")
      .trigger("test");
  });

  QUnit.test("args.selector can be falsy", function (assert) {
    assert.expect(0);

    function notOk() {
      assert.notOk(true, "handler should never be called");
    }

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", ".c", notOk);
    w.on("test", ".c", notOk);
    w.off("test", void 0);

    $element
      .find("span")
      .trigger("test");
  });

  QUnit.test("args.handler filters handler", function (assert) {
    assert.expect(1);

    function notOk() {
      assert.notOk(true, "handler should never be called");
    }

    var $element = $("<div></div>");
    var W = c(widget);
    var w = new W($element, "ns");

    w.on("test", notOk);
    w.on("test", function () {
      assert.ok(true, "handler called");
    });
    w.off("test", void 0, notOk);

    $element.trigger("test");
  });

  QUnit.module("mu-jquery-dom/widget#dom.on");

  QUnit.test("on/event", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "on/test": function () {
        assert.ok(true, "handler called");
      }
    });
    var w = new W($element, "ns");

    $element.trigger("test");
  });

  QUnit.test("on/event with ns", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "on/test": function () {
        assert.ok(true, "handler called");
      }
    });
    var w = new W($element, "ns");

    $element.trigger("test." + w.ns);
  });

  QUnit.test("on/event(.selector)", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='a'></span></div>");
    var W = c(widget, {
      "on/test(.a)": function () {
        assert.ok(true, "handler called");
      },
      "on/test(.b)": function () {
        assert.notOk(true, "handler should never be called");
      }
    });
    var w = new W($element, "ns");

    $element
      .find("span")
      .trigger("test");
  });

  QUnit.test("on/event value.handler", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "on/test": {
        "handler": function () {
          assert.ok(true, "handler called");
        }
      }
    });
    var w = new W($element, "ns");

    $element.trigger("test");
  });

  QUnit.test("on/event value.selector", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget, {
      "on/test": {
        "handler": function () {
          assert.ok(true, "handler called");
        },
        "selector": ".c"
      }
    });
    var w = new W($element, "ns");

    $element
      .find("span")
      .trigger("test");
  });

  QUnit.test("on/event(selector) value.selector override", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget, {
      "on/test(.a)": {
        "handler": function () {
          assert.ok(true, "handler called");
        },
        "selector": ".c"
      }
    });
    var w = new W($element, "ns");

    $element
      .find("span")
      .trigger("test");
  });

  QUnit.test("on/event value.data passed as $event.data", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "on/test": {
        "handler": function ($event) {
          assert.strictEqual($event.data, $element, "data matches");
        },
        "data": $element
      }
    });
    var w = new W($element, "ns");

    $element.trigger("test");
  });

  QUnit.module("mu-jquery-dom/widget#dom.one");

  QUnit.test("one/event", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "one/test": function () {
        assert.ok(true, "handler called");
      }
    });
    var w = new W($element, "ns");

    $element
      .trigger("test")
      .trigger("test");
  });

  QUnit.test("one/event with ns", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "one/test": function () {
        assert.ok(true, "handler called");
      }
    });
    var w = new W($element, "ns");

    $element.trigger("test." + w.ns);
  });

  QUnit.test("one/event(.selector)", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='a'></span></div>");
    var W = c(widget, {
      "one/test(.a)": function () {
        assert.ok(true, "handler called");
      },
      "one/test(.b)": function () {
        assert.notOk(true, "handler should never be called");
      }
    });
    var w = new W($element, "ns");

    $element
      .find("span")
      .trigger("test");
  });

  QUnit.test("one/event value.handler", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "one/test": {
        "handler": function () {
          assert.ok(true, "handler called");
        }
      }
    });
    var w = new W($element, "ns");

    $element.trigger("test");
  });

  QUnit.test("one/event value.selector", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget, {
      "one/test": {
        "handler": function () {
          assert.ok(true, "handler called");
        },
        "selector": ".c"
      }
    });
    var w = new W($element, "ns");

    $element
      .find("span")
      .trigger("test");
  });

  QUnit.test("one/event(selector) value.selector override", function (assert) {
    assert.expect(1);

    var $element = $("<div><span class='c'></span></div>");
    var W = c(widget, {
      "one/test(.a)": {
        "handler": function () {
          assert.ok(true, "handler called");
        },
        "selector": ".c"
      }
    });
    var w = new W($element, "ns");

    $element
      .find("span")
      .trigger("test");
  });

  QUnit.test("one/event value.data passed as $event.data", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "one/test": {
        "handler": function ($event) {
          assert.strictEqual($event.data, $element, "data matches");
        },
        "data": $element
      }
    });
    var w = new W($element, "ns");

    $element.trigger("test");
  });

  QUnit.module("mu-jquery-dom/widget#dom.attr");

  QUnit.test("attr/name:string", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "attr/name": "value"
    });
    var w = new W($element, "ns");

    assert.strictEqual($element.attr("name"), "value", "attr matches");
  });

  QUnit.test("attr/name:object", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "attr/name": {
        "name": "override",
        "value": "value"
      }
    });
    var w = new W($element, "ns");

    assert.strictEqual($element.attr("override"), "value", "attr matches");
  });

  QUnit.test("attr/name:function", function (assert) {
    assert.expect(2);

    var $element = $("<div></div><div></div>").each(function (index, element) {
      $(element).attr("name", "test" + (index + 1));
    });
    var W = c(widget, {
      "attr/name": function (index, value) {
        return value + "value" + index;
      }
    });
    var w = new W($element, "ns");

    $element.each(function (index, element) {
      assert.strictEqual($(element).attr("name"), "test" + (index + 1) + "value" + index, "attr matches");
    });
  });

  QUnit.module("mu-jquery-dom/widget#dom.prop");

  QUnit.test("prop/name:string", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "prop/name": "value"
    });
    var w = new W($element, "ns");

    assert.strictEqual($element.prop("name"), "value", "prop matches");
  });

  QUnit.test("prop/name:object", function (assert) {
    assert.expect(1);

    var $element = $("<div></div>");
    var W = c(widget, {
      "prop/name": {
        "name": "override",
        "value": "value"
      }
    });
    var w = new W($element, "ns");

    assert.strictEqual($element.prop("override"), "value", "prop matches");
  });

  QUnit.test("prop/name:function", function (assert) {
    assert.expect(2);

    var $element = $("<div></div><div></div>").each(function (index, element) {
      $(element).prop("name", "test" + (index + 1));
    });
    var W = c(widget, {
      "prop/name": function (index, value) {
        return value + "value" + index;
      }
    });
    var w = new W($element, "ns");

    $element.each(function (index, element) {
      assert.strictEqual($(element).prop("name"), "test" + (index + 1) + "value" + index, "prop matches");
    });
  });
});