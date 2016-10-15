(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget/tests/dom"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m.replace(/^\.{2}/, "mu-jquery-widget")];
    }, {
        "qunit": root.QUnit
      }));
  }
})([
  "qunit",
  "../dom",
], this, function (QUnit, dom) {
  var root = this;

  QUnit.module("mu-jquery-dom/dom");

  QUnit.test("returns undefined if no match", function (assert) {
    var o = {};

    assert.expect(1);

    assert.strictEqual(dom(o, {
      "key": "value",
    }), undefined, "return should be undefined");
  });

  QUnit.test("returns false if match", function (assert) {
    var o = {};

    assert.expect(3);

    assert.strictEqual(dom(o, {
      "key": "on/events",
    }), false, "return should be false");

    assert.strictEqual(dom(o, {
      "key": "attr/events",
    }), false, "return should be false");

    assert.strictEqual(dom(o, {
      "key": "prop/events",
    }), false, "return should be false");
  });

  QUnit.module("mu-jquery-dom/dom#on");

  QUnit.test("handler value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "on/events(selector)",
      "value": "handler"
    });

    assert.deepEqual(o, {
      "dom": [{
        "events": "events",
        "handler": "handler",
        "method": "on",
        "selector": "selector"
      }]
    }, "o.dom should match spec");
  });

  QUnit.test("default object value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "on/events(selector)",
      "value": {
        "custom": "value"
      }
    });

    assert.deepEqual(o, {
      "dom": [{
        "method": "on",
        "events": "events",
        "selector": "selector",
        "custom": "value"
      }]
    }, "o.dom should match spec");
  });

  QUnit.test("override object value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "on/events(selector)",
      "value": {
        "events": undefined,
        "custom": "value"
      }
    });

    assert.deepEqual(o, {
      "dom": [{
        "method": "on",
        "events": undefined,
        "selector": "selector",
        "custom": "value"
      }]
    }, "o.dom should match spec");
  });

  QUnit.module("mu-jquery-dom/dom#one");

  QUnit.test("default object value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "one/events(selector)",
      "value": {
        "custom": "value"
      }
    });

    assert.deepEqual(o, {
      "dom": [{
        "method": "one",
        "events": "events",
        "selector": "selector",
        "custom": "value"
      }]
    }, "o.dom should match spec");
  });

  QUnit.test("override object value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "on/events(selector)",
      "value": {
        "events": undefined,
        "custom": "value"
      }
    });

    assert.deepEqual(o, {
      "dom": [{
        "method": "on",
        "events": undefined,
        "selector": "selector",
        "custom": "value"
      }]
    }, "o.dom should match spec");
  });

  QUnit.module("mu-jquery-dom/dom#attr");

  QUnit.test("value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "attr/name",
      "value": "value"
    });

    assert.deepEqual(o, {
      "dom": [{
        "name": "name",
        "value": "value",
        "method": "attr"
      }]
    }, "o.dom should match spec");
  });

  QUnit.test("default object value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "attr/name",
      "value": {
        "custom": "value"
      }
    });

    assert.deepEqual(o, {
      "dom": [{
        "method": "attr",
        "name": "name",
        "custom": "value"
      }]
    }, "o.dom should match spec");
  });

  QUnit.test("override object value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "attr/name",
      "value": {
        "name": undefined,
        "custom": "value"
      }
    });

    assert.deepEqual(o, {
      "dom": [{
        "method": "attr",
        "name": undefined,
        "custom": "value"
      }]
    }, "o.dom should match spec");
  });

  QUnit.module("mu-jquery-dom/dom#prop");

  QUnit.test("value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "prop/name",
      "value": "value"
    });

    assert.deepEqual(o, {
      "dom": [{
        "name": "name",
        "value": "value",
        "method": "prop"
      }]
    }, "o.dom should match spec");
  });

  QUnit.test("default object value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "prop/name",
      "value": {
        "custom": "value"
      }
    });

    assert.deepEqual(o, {
      "dom": [{
        "method": "prop",
        "name": "name",
        "custom": "value"
      }]
    }, "o.dom should match spec");
  });

  QUnit.test("override object value", function (assert) {
    var o = {};

    assert.expect(1);

    dom(o, {
      "key": "prop/name",
      "value": {
        "name": undefined,
        "custom": "value"
      }
    });

    assert.deepEqual(o, {
      "dom": [{
        "method": "prop",
        "name": undefined,
        "custom": "value"
      }]
    }, "o.dom should match spec");
  });
});