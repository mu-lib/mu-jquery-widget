# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="13.2.0"></a>
# [13.2.0](https://github.com/mu-lib/mu-jquery-widget/compare/v13.1.2...v13.2.0) (2017-04-09)


### Bug Fixes

* use me.$ vs $element.constructor ([62bd05c](https://github.com/mu-lib/mu-jquery-widget/commit/62bd05c))


### Features

* added trigger and triggerHandler ([7fd1f6c](https://github.com/mu-lib/mu-jquery-widget/commit/7fd1f6c))
* extended widget ([c3a9e6f](https://github.com/mu-lib/mu-jquery-widget/commit/c3a9e6f))



<a name="13.1.2"></a>
## [13.1.2](https://github.com/mu-lib/mu-jquery-widget/compare/v13.1.1...v13.1.2) (2017-04-07)


### Bug Fixes

* attr/name and attr/prop executed in widget scope ([fad267a](https://github.com/mu-lib/mu-jquery-widget/commit/fad267a)), closes [#2](https://github.com/mu-lib/mu-jquery-widget/issues/2)



<a name="13.1.1"></a>
## [13.1.1](https://github.com/mu-lib/mu-jquery-widget/compare/v13.1.0...v13.1.1) (2017-04-06)


### Bug Fixes

* added tests for widget instance variables ([1317206](https://github.com/mu-lib/mu-jquery-widget/commit/1317206))
* bumped deps ([f4bd890](https://github.com/mu-lib/mu-jquery-widget/commit/f4bd890))



<a name="13.1.0"></a>
# [13.1.0](https://github.com/mu-lib/mu-jquery-widget/compare/v13.0.0...v13.1.0) (2017-04-06)


### Bug Fixes

* bumped deps ([ce3753c](https://github.com/mu-lib/mu-jquery-widget/commit/ce3753c))


### Features

* added widget.$ ([5917bac](https://github.com/mu-lib/mu-jquery-widget/commit/5917bac))



<a name="13.0.0"></a>
# [13.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v12.0.0...v13.0.0) (2017-03-22)


### Features

* finalize.callback called with result ([05a5db9](https://github.com/mu-lib/mu-jquery-widget/commit/05a5db9))


### BREAKING CHANGES

* The removal of event handlers in `finalize` is removed in this commit as it's just as easy to do `w.off()` on your own when needed.



<a name="12.0.0"></a>
# [12.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v11.0.1...v12.0.0) (2017-03-19)


* fix(packaging) remove main an streamline package.json ([6c176bb](https://github.com/mu-lib/mu-jquery-widget/commit/6c176bb))


### Bug Fixes

* ensure finalize is triggered on dom removal ([6a2bcc4](https://github.com/mu-lib/mu-jquery-widget/commit/6a2bcc4))
* update group names in tests ([83a54c2](https://github.com/mu-lib/mu-jquery-widget/commit/83a54c2))


### Features

* remove widget handlers after finalization ([2ac1f58](https://github.com/mu-lib/mu-jquery-widget/commit/2ac1f58))


### BREAKING CHANGES

* removing unused main module.



<a name="11.0.1"></a>
## [11.0.1](https://github.com/mu-lib/mu-jquery-widget/compare/v11.0.0...v11.0.1) (2017-03-19)


### Bug Fixes

* bumped mu-create[@6](https://github.com/6).0.1 ([7453482](https://github.com/mu-lib/mu-jquery-widget/commit/7453482))



<a name="11.0.0"></a>
# [11.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v10.1.0...v11.0.0) (2017-03-18)


### Features

* make widget use local create ([6fa9330](https://github.com/mu-lib/mu-jquery-widget/commit/6fa9330))


### BREAKING CHANGES

* `mu-jquery-widget/widget` is now the **constructor** and not the **blueprint**.



<a name="10.1.0"></a>
# [10.1.0](https://github.com/mu-lib/mu-jquery-widget/compare/v10.0.1...v10.1.0) (2017-03-18)


### Features

* added create ([5669de3](https://github.com/mu-lib/mu-jquery-widget/commit/5669de3))



<a name="10.0.1"></a>
## [10.0.1](https://github.com/mu-lib/mu-jquery-widget/compare/v10.0.0...v10.0.1) (2017-03-18)


### Bug Fixes

* bower version of mu-create mismatch ([2ffbe6f](https://github.com/mu-lib/mu-jquery-widget/commit/2ffbe6f))
* include correct version of mu-create in tests ([4d62ad7](https://github.com/mu-lib/mu-jquery-widget/commit/4d62ad7))



<a name="10.0.0"></a>
# [10.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v9.1.0...v10.0.0) (2017-03-18)


### Bug Fixes

* **packaging:** bumped deps ([a8793a0](https://github.com/mu-lib/mu-jquery-widget/commit/a8793a0))


### BREAKING CHANGES

* packaging: Overlapping rules and specs are now filtered



<a name="9.1.0"></a>
# [9.1.0](https://github.com/mu-lib/mu-jquery-widget/compare/v9.0.1...v9.1.0) (2017-01-23)


### Features

* moved support for finalizing widgets from mu-jquery-app ([b710824](https://github.com/mu-lib/mu-jquery-widget/commit/b710824))



<a name="9.0.1"></a>
## [9.0.1](https://github.com/mu-lib/mu-jquery-widget/compare/v9.0.0...v9.0.1) (2016-10-19)


### Bug Fixes

* **packaging:** bumped deps ([48221e2](https://github.com/mu-lib/mu-jquery-widget/commit/48221e2))
* **widget:** UMD fixes ([f1b8cbe](https://github.com/mu-lib/mu-jquery-widget/commit/f1b8cbe))
* **widget:** use provided jQuery ([5c8d803](https://github.com/mu-lib/mu-jquery-widget/commit/5c8d803))



<a name="9.0.0"></a>
# [9.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v8.1.1...v9.0.0) (2016-10-16)


### Features

* **packaging:** bumped deps ([5752aed](https://github.com/mu-lib/mu-jquery-widget/commit/5752aed))


### BREAKING CHANGES

* packaging: - mu-create@5.0.0



<a name="8.1.1"></a>
## [8.1.1](https://github.com/mu-lib/mu-jquery-widget/compare/v8.1.0...v8.1.1) (2016-10-16)


### Bug Fixes

* **packaging:** bumped deps ([06dc23a](https://github.com/mu-lib/mu-jquery-widget/commit/06dc23a))



<a name="8.1.0"></a>
# [8.1.0](https://github.com/mu-lib/mu-jquery-widget/compare/v8.0.0...v8.1.0) (2016-10-16)


### Features

* **packaging:** bumped deps ([075452d](https://github.com/mu-lib/mu-jquery-widget/commit/075452d))



<a name="8.0.0"></a>
# [8.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v7.2.0...v8.0.0) (2016-10-16)


### Bug Fixes

* **widget:** remove trigger and triggerHandler ([f26b6cf](https://github.com/mu-lib/mu-jquery-widget/commit/f26b6cf))


### BREAKING CHANGES

* widget: After some thought I've decided to remove support for `trigger` and
`triggerHandler` as I don't see them promoting any good dev patterns.



<a name="7.2.0"></a>
# [7.2.0](https://github.com/mu-lib/mu-jquery-widget/compare/v7.1.0...v7.2.0) (2016-10-16)


### Bug Fixes

* **tests:** add full tests for one ([2f70eac](https://github.com/mu-lib/mu-jquery-widget/commit/2f70eac))
* **tests:** test cleanup ([ef6deda](https://github.com/mu-lib/mu-jquery-widget/commit/ef6deda))


### Features

* **widget:** added trigger and triggerHandler methods ([258de18](https://github.com/mu-lib/mu-jquery-widget/commit/258de18))



<a name="7.1.0"></a>
# [7.1.0](https://github.com/mu-lib/mu-jquery-widget/compare/v7.0.1...v7.1.0) (2016-10-15)


### Features

* added once method ([c477a60](https://github.com/mu-lib/mu-jquery-widget/commit/c477a60))



<a name="7.0.1"></a>
## [7.0.1](https://github.com/mu-lib/mu-jquery-widget/compare/v7.0.0...v7.0.1) (2016-10-13)


### Bug Fixes

* **packaging:** Updated package.json and buped deps ([2f2fb18](https://github.com/mu-lib/mu-jquery-widget/commit/2f2fb18))
* **tests:** test cleanup ([7130c88](https://github.com/mu-lib/mu-jquery-widget/commit/7130c88))
* UMD fixes and formatting ([62dd08d](https://github.com/mu-lib/mu-jquery-widget/commit/62dd08d))



<a name="7.0.0"></a>
# [7.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v6.0.0...v7.0.0) (2016-09-25)


### Features

* **widget:** revert on exposing .widget and .blueprint separately ([a20a5b2](https://github.com/mu-lib/mu-jquery-widget/commit/a20a5b2))


### BREAKING CHANGES

* widget: We no longer expose `widget.widget` and
`widget.blueprints`.



<a name="6.0.0"></a>
# [6.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v5.2.0...v6.0.0) (2016-09-23)


### Features

* **widget:** Export constructor and blueprint together but separately. ([4ba5b17](https://github.com/mu-lib/mu-jquery-widget/commit/4ba5b17))


* Removed create.js ([f69c5d6](https://github.com/mu-lib/mu-jquery-widget/commit/f69c5d6))


### BREAKING CHANGES

* We no longer provide a configured create module as it's
shown itself to be unsused by downstream developers.



<a name="5.2.0"></a>
# [5.2.0](https://github.com/mu-lib/mu-jquery-widget/compare/v5.1.0...v5.2.0) (2016-09-22)


### Features

* **deps:** bumped mu-create ([2bfd890](https://github.com/mu-lib/mu-jquery-widget/commit/2bfd890))



<a name="5.1.0"></a>
# [5.1.0](https://github.com/mu-lib/mu-jquery-widget/compare/v5.0.1...v5.1.0) (2016-09-15)


### Features

* pass object as value in blueprints ([32fbcec](https://github.com/mu-lib/mu-jquery-widget/commit/32fbcec))



<a name="5.0.1"></a>
## [5.0.1](https://github.com/mu-lib/mu-jquery-widget/compare/v5.0.0...v5.0.1) (2016-09-14)



<a name="5.0.0"></a>
# [5.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v4.0.0...v5.0.0) (2016-09-13)


### Features

* dep rename ([fb6a726](https://github.com/mu-lib/mu-jquery-widget/commit/fb6a726))


### BREAKING CHANGES

* While renaming mu-compose to mu-create we also renamed
the mirrored compose.js to create.js.



<a name="4.0.0"></a>
# [4.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v3.3.0...v4.0.0) (2016-09-13)


### Features

* break out sub-components ([7bbfc98](https://github.com/mu-lib/mu-jquery-widget/commit/7bbfc98))


### BREAKING CHANGES

* we broke out some components into
mu-lib/mu-jquery-component, developers please update your code
accordingly.



<a name="3.3.0"></a>
# [3.3.0](https://github.com/mu-lib/mu-jquery-widget/compare/v3.2.0...v3.3.0) (2016-09-13)


### Features

* bump deps ([dd46d41](https://github.com/mu-lib/mu-jquery-widget/commit/dd46d41))



<a name="3.2.0"></a>
# [3.2.0](https://github.com/mu-lib/mu-jquery-widget/compare/v3.1.0...v3.2.0) (2016-09-12)


### Features

* bumped mu-compose ([da688ff](https://github.com/mu-lib/mu-jquery-widget/commit/da688ff))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/mu-lib/mu-jquery-widget/compare/v3.0.0...v3.1.0) (2016-09-12)


### Features

* bump mu-compose ([f6dbba0](https://github.com/mu-lib/mu-jquery-widget/commit/f6dbba0))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v2.4.2...v3.0.0) (2016-09-12)


### Features

* refactor and QUnit tests([#1](https://github.com/mu-lib/mu-jquery-widget/issues/1)) ([d719759](https://github.com/mu-lib/mu-jquery-widget/commit/d719759))


### BREAKING CHANGES

* a lot of files have been moved around and created



<a name="2.4.2"></a>
## [2.4.2](https://github.com/mu-lib/mu-jquery-widget/compare/v2.4.1...v2.4.2) (2016-09-08)


### Bug Fixes

* bump deps ([2b2f53d](https://github.com/mu-lib/mu-jquery-widget/commit/2b2f53d))
* UMD fixes ([44d9be3](https://github.com/mu-lib/mu-jquery-widget/commit/44d9be3))



<a name="2.4.1"></a>
## [2.4.1](https://github.com/mu-lib/mu-jquery-widget/compare/v2.4.0...v2.4.1) (2016-09-06)


### Bug Fixes

* bump mu-jquery-wire to 4.0.1 ([22f2760](https://github.com/mu-lib/mu-jquery-widget/commit/22f2760))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/mu-lib/mu-jquery-widget/compare/v2.3.0...v2.4.0) (2016-09-06)


### Features

* bump mu-jquery-wire to 4.0.0 ([0e55e9d](https://github.com/mu-lib/mu-jquery-widget/commit/0e55e9d))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/mu-lib/mu-jquery-widget/compare/v2.2.0...v2.3.0) (2016-09-06)


### Features

* Added support for selector and data ([383511a](https://github.com/mu-lib/mu-jquery-widget/commit/383511a))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/mu-lib/mu-jquery-widget/compare/v2.1.1...v2.2.0) (2016-09-03)


### Features

* don't rewire ([e5da12c](https://github.com/mu-lib/mu-jquery-widget/commit/e5da12c))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/mu-lib/mu-jquery-widget/compare/v2.1.0...v2.1.1) (2016-09-03)


### Bug Fixes

* UMD fixes ([f383b13](https://github.com/mu-lib/mu-jquery-widget/commit/f383b13))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/mu-lib/mu-jquery-widget/compare/v2.0.0...v2.1.0) (2016-09-02)


### Features

* added jquery.weave ([70800e5](https://github.com/mu-lib/mu-jquery-widget/commit/70800e5))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/mu-lib/mu-jquery-widget/compare/v1.0.0...v2.0.0) (2016-09-02)


### Features

* added mu-compose support ([a68af14](https://github.com/mu-lib/mu-jquery-widget/commit/a68af14))
* removed legacy jquery.widget.js ([83ea13a](https://github.com/mu-lib/mu-jquery-widget/commit/83ea13a))


### BREAKING CHANGES

* The purpose of mu-jquery-widget has shifted so support
for the old jquery.widget.js has been removed.



<a name="1.0.0"></a>
# 1.0.0 (2016-09-02)
