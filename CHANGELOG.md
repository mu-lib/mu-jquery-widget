# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
