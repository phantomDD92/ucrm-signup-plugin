"use strict";



define('ucrm-client-signup-form/adapters/application', ['exports', 'ember-data', 'ember-ajax/mixins/ajax-support', 'ucrm-client-signup-form/config/environment'], function (exports, _emberData, _ajaxSupport, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend(_ajaxSupport.default, {
    host: _environment.default.APP.host,
    headers: Ember.computed('host', function () {
      return {
        "Content-Type": 'application/json'
      };
    }),
    pathForType: function pathForType() {
      return '';
    }
  });
});
define('ucrm-client-signup-form/app', ['exports', 'ucrm-client-signup-form/resolver', 'ember-load-initializers', 'ucrm-client-signup-form/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ucrm-client-signup-form/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('ucrm-client-signup-form/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('ucrm-client-signup-form/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('ucrm-client-signup-form/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form', ['exports', 'ember-bootstrap-cp-validations/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element', ['exports', 'ember-bootstrap-cp-validations/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('ucrm-client-signup-form/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define("ucrm-client-signup-form/components/custom-trigger", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: "", // Prevents the component from adding an extra wrapping div

    selectedCountry: null,

    // Computed property to display the selected option's value safely
    selectedCountryDisplay: Ember.computed("selectedCountry", function () {
      return Ember.String.htmlSafe(this.selectedCountry ? this.selectedCountry.name : "");
    })
  });
});
define('ucrm-client-signup-form/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('ucrm-client-signup-form/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('ucrm-client-signup-form/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('ucrm-client-signup-form/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('ucrm-client-signup-form/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('ucrm-client-signup-form/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('ucrm-client-signup-form/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('ucrm-client-signup-form/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('ucrm-client-signup-form/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('ucrm-client-signup-form/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('ucrm-client-signup-form/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define("ucrm-client-signup-form/components/user-details", ["exports", "ucrm-client-signup-form/config/environment"], function (exports, _environment) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    ajax: Ember.inject.service(),
    store: Ember.inject.service(),
    classNames: ["container-fluid"],

    processing: false,
    selectedState: null,
    // states: null,
    // defaultCountry : null, // Set defaultCountry to the default value

    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      this.model.client.countryId = 249;
      this.model.client.stateId = 0;

      this.get('ajax').post(_environment.default.APP.host, {
        data: {
          frontendKey: _environment.default.APP.frontendKey,
          api: {
            type: 'GET',
            endpoint: 'countries/states',
            data: { countryId: 300 }
          }
        }
      }).then(function (response) {
        var country = { id: Number(response.countryId), name: response.countryName, code: response.countryCode };
        _this.set("model.client.countryId", country.id);
        _this.set("selectedCountry", country);
        _this.set("defaultCountry", country);

        var state = { "id": Number(response.stateId), "countryId": Number(response.countryId), "name": response.stateName, "code": response.stateCode };
        _this.set("model.client.stateId", state.id);
        _this.set("selectedState", state);
        // console.log('response', response);
        // this.set('states', response);
      });
      // const test = [{ id: 265, name: 'Zimbabwe', code: 'ZW' },
      //   { id: 31, name: '\u00c5land Islands', code: 'AX' }];
      // this.set('states', test);
    },

    states: Ember.computed("model.client.countryId", function () {
      if (this.get("model.client.countryId") == 249 || this.get("model.client.countryId") == 54) {
        return this.get("ajax").post(_environment.default.APP.host, {
          data: {
            frontendKey: _environment.default.APP.frontendKey,
            api: {
              type: "GET",
              endpoint: "countries/states",
              data: { countryId: this.get("model.client.countryId") }
            }
          }
        });
      } else {
        // this.set('model.client.stateId', null);
        return false;
      }
    }),
    defaultCountry: Ember.computed("model.countries", function () {
      // Retrieve the default country object based on its name
      return this.model.countries.find(function (country) {
        return country.name === "United States";
      });
    }),
    // Set the default state after the states are loaded
    // setDefaultState: computed('states', function() {
    //   if (this.states) {
    //     // Find the default state object based on its name
    //     const defaultState = this.states.find(state => state.name === 'United States');
    //     // Set the default state
    //     this.set('selectedState', defaultState);
    //   }
    // }),

    actions: {
      selectCountry: function selectCountry(country) {
        this.set("model.client.countryId", country.id);
        this.set("selectedCountry", country);
        this.set("defaultCountry", country);

        if (country.id == 249 || country.id == 54) {
          this.set("model.client.stateId", null);
          this.set("selectedState", null);
        } else {
          var state = { "id": 0, "countryId": country.id, "name": "", "code": "" };
          this.set("model.client.stateId", state.id);
          this.set("selectedState", state);
        }
      },
      selectState: function selectState(state) {
        this.set("model.client.stateId", state.id);
        this.set("selectedState", state);

        if (state.id == 249 || state.id == 54) {
          return this.get("ajax").post(_environment.default.APP.host, {
            data: {
              frontendKey: _environment.default.APP.frontendKey,
              api: {
                type: "GET",
                endpoint: "countries/states",
                data: { countryId: state.id }
              }
            }
          });
        } else {
          // this.set('model.client.stateId', null);
          return false;
        }
      },
      submit: function submit(client) {
        var _this2 = this;

        client.validate().then(function (_ref) {
          var validations = _ref.validations;

          _this2.set("pending", true);
          _this2.set("processing", true);
          _this2.set("failure", false);

          var $isLead = _environment.default.APP.isLead === "no" ? false : true;

          if (validations.get("isValid")) {
            _this2.get("ajax").post(_environment.default.APP.host, {
              headers: {
                "Content-Type": "application/json"
              },
              data: {
                frontendKey: _environment.default.APP.frontendKey,
                api: {
                  type: "POST",
                  endpoint: "clients",
                  data: {
                    clientType: 1,
                    isLead: $isLead,
                    firstName: _this2.get("model.client.firstName"),
                    lastName: _this2.get("model.client.lastName"),
                    street1: _this2.get("model.client.street1"),
                    street2: _this2.get("model.client.street2"),
                    city: _this2.get("model.client.city"),
                    countryId: _this2.get("model.client.countryId"),
                    stateId: _this2.get("model.client.stateId"),
                    zipCode: _this2.get("model.client.zipCode"),
                    username: _this2.get("model.client.email"),
                    contacts: [{
                      email: _this2.get("model.client.email"),
                      phone: _this2.get("model.client.phone"),
                      name: _this2.get("model.client.firstName") + " " + _this2.get("model.client.lastName")
                    }]
                    // "attributes": [
                    //   {
                    //     value: String(this.get('model.client.agreedToTAC')),
                    //     customAttributeId: 2,
                    //   }
                    // ]
                  }
                }
              }
            }).catch(function (resp) {
              if (resp.payload !== undefined && resp.payload !== null) {
                if (resp.payload.redirect === true) {
                  _this2.set("failure", false);
                  // this.transitionToRoute('signup.account', { queryParams: { expired: true }});
                  _this2.get("changeRoute")("signup.account");
                } else {
                  _this2.set("errors", resp.payload.errors);
                }
              }
              _this2.set("pending", false);
              _this2.set("failure", true);
            }).then(function () {
              if (_this2.get("failure") !== true) {
                _this2.get("changeRoute")("signup.complete");
              }
              _this2.set("pending", false);
            });

            _this2.set("processing", false);
          }
        });
      }
    }
  });
});
define('ucrm-client-signup-form/controllers/signup/account', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      changeRoute: function changeRoute(route) {
        this.transitionToRoute(route);
      }
    }
  });
});
define('ucrm-client-signup-form/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('ucrm-client-signup-form/helpers/app-version', ['exports', 'ucrm-client-signup-form/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ucrm-client-signup-form/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('ucrm-client-signup-form/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('ucrm-client-signup-form/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('ucrm-client-signup-form/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('ucrm-client-signup-form/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('ucrm-client-signup-form/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('ucrm-client-signup-form/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('ucrm-client-signup-form/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('ucrm-client-signup-form/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('ucrm-client-signup-form/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('ucrm-client-signup-form/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
define('ucrm-client-signup-form/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('ucrm-client-signup-form/helpers/is-value', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isValue = isValue;
  function isValue(params /*, hash*/) {
    return params[0] === params[1];
  }

  exports.default = Ember.Helper.helper(isValue);
});
define('ucrm-client-signup-form/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('ucrm-client-signup-form/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('ucrm-client-signup-form/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('ucrm-client-signup-form/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('ucrm-client-signup-form/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('ucrm-client-signup-form/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('ucrm-client-signup-form/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ucrm-client-signup-form/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ucrm-client-signup-form/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('ucrm-client-signup-form/helpers/v-get', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.vGet = vGet;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function vGet(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        object = _ref2[0],
        key = _ref2[1];

    return object[key];
  }

  exports.default = Ember.Helper.helper(vGet);
});
define('ucrm-client-signup-form/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('ucrm-client-signup-form/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ucrm-client-signup-form/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ucrm-client-signup-form/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ucrm-client-signup-form/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ucrm-client-signup-form/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('ucrm-client-signup-form/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ucrm-client-signup-form/initializers/export-application-global', ['exports', 'ucrm-client-signup-form/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ucrm-client-signup-form/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ucrm-client-signup-form/initializers/load-bootstrap-config', ['exports', 'ucrm-client-signup-form/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('ucrm-client-signup-form/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ucrm-client-signup-form/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ucrm-client-signup-form/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define("ucrm-client-signup-form/models/client", ["exports", "ember-data", "ember-cp-validations"], function (exports, _emberData, _emberCpValidations) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var attr = _emberData.default.attr;


  var Validations = (0, _emberCpValidations.buildValidations)({
    firstName: [(0, _emberCpValidations.validator)("presence", true), (0, _emberCpValidations.validator)("length", {
      min: 3
    })],
    lastName: [(0, _emberCpValidations.validator)("presence", true), (0, _emberCpValidations.validator)("length", {
      min: 3
    })],
    email: [(0, _emberCpValidations.validator)("presence", true), (0, _emberCpValidations.validator)("format", { type: "email" })],
    phone: [(0, _emberCpValidations.validator)("presence", true)],
    street1: [(0, _emberCpValidations.validator)("presence", true)],
    city: [(0, _emberCpValidations.validator)("presence", true)],
    zipCode: [(0, _emberCpValidations.validator)("presence", true)],
    stateId: [(0, _emberCpValidations.validator)("presence", true)]
  });

  exports.default = _emberData.default.Model.extend(Validations, {
    firstName: attr("string"),
    lastName: attr("string"),
    contacts: attr(),
    street1: attr("string"),
    street2: attr("string"),
    zipCode: attr("string"),
    city: attr("string"),
    email: attr("string"),
    phone: attr("string"),
    stateId: attr("number", { defaultValue: null }),
    countryId: attr("number", { defaultValue: null })
    // agreedToTAC: attr('boolean', {defaultValue: false}),
  });
});
define('ucrm-client-signup-form/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ucrm-client-signup-form/router', ['exports', 'ucrm-client-signup-form/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('signup', { path: '/' }, function () {
      this.route('account', { path: '/' });
      this.route('complete');
    });
  });

  exports.default = Router;
});
define('ucrm-client-signup-form/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('ucrm-client-signup-form/routes/signup', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    ajax: Ember.inject.service(),
    model: function model() {
      return Ember.RSVP.hash({
        client: this.get('store').createRecord('client')
      });
    }
  });
});
define("ucrm-client-signup-form/routes/signup/account", ["exports", "ucrm-client-signup-form/config/environment"], function (exports, _environment) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Route.extend({
    ajax: Ember.inject.service(),
    queryParams: {
      expired: {
        refreshModel: true
      }
    },
    model: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (params.expired === true) {
                  this.set("controller.expired", true);
                }
                return _context.abrupt("return", Ember.RSVP.hash({
                  countries: this.get("ajax").post(_environment.default.APP.host, {
                    data: {
                      frontendKey: _environment.default.APP.frontendKey,
                      api: {
                        type: "GET",
                        endpoint: "countries",
                        data: {}
                      }
                    }
                  }),
                  // countries: [
                  //   { id: 19, name: "Afghanistan", code: "AF" },
                  //   { id: 22, name: "Albania", code: "AL" },
                  //   { id: 78, name: "Algeria", code: "DZ" },
                  //   { id: 27, name: "American Samoa", code: "AS" },
                  //   { id: 17, name: "Andorra", code: "AD" },
                  //   { id: 24, name: "Angola", code: "AO" },
                  //   { id: 21, name: "Anguilla", code: "AI" },
                  //   { id: 25, name: "Antarctica", code: "AQ" },
                  //   { id: 20, name: "Antigua and Barbuda", code: "AG" },
                  //   { id: 26, name: "Argentina", code: "AR" },
                  //   { id: 23, name: "Armenia", code: "AM" },
                  //   { id: 30, name: "Aruba", code: "AW" },
                  //   { id: 29, name: "Australia", code: "AU" },
                  //   { id: 28, name: "Austria", code: "AT" },
                  //   { id: 32, name: "Azerbaijan", code: "AZ" },
                  //   { id: 48, name: "Bahamas", code: "BS" },
                  //   { id: 39, name: "Bahrain", code: "BH" },
                  //   { id: 35, name: "Bangladesh", code: "BD" },
                  //   { id: 34, name: "Barbados", code: "BB" },
                  //   { id: 52, name: "Belarus", code: "BY" },
                  //   { id: 36, name: "Belgium", code: "BE" },
                  //   { id: 53, name: "Belize", code: "BZ" },
                  //   { id: 41, name: "Benin", code: "BJ" },
                  //   { id: 43, name: "Bermuda", code: "BM" },
                  //   { id: 49, name: "Bhutan", code: "BT" },
                  //   { id: 45, name: "Bolivia", code: "BO" },
                  //   { id: 33, name: "Bosnia and Herzegovina", code: "BA" },
                  //   { id: 51, name: "Botswana", code: "BW" },
                  //   { id: 50, name: "Bouvet Island", code: "BV" },
                  //   { id: 47, name: "Brazil", code: "BR" },
                  //   { id: 122, name: "British Indian Ocean Territory", code: "IO" },
                  //   { id: 44, name: "Brunei Darussalam", code: "BN" },
                  //   { id: 38, name: "Bulgaria", code: "BG" },
                  //   { id: 37, name: "Burkina Faso", code: "BF" },
                  //   { id: 40, name: "Burundi", code: "BI" },
                  //   { id: 133, name: "Cambodia", code: "KH" },
                  //   { id: 63, name: "Cameroon", code: "CM" },
                  //   { id: 54, name: "Canada", code: "CA" },
                  //   { id: 68, name: "Cape Verde", code: "CV" },
                  //   { id: 46, name: "Caribbean Netherlands ", code: "BQ" },
                  //   { id: 140, name: "Cayman Islands", code: "KY" },
                  //   { id: 57, name: "Central African Republic", code: "CF" },
                  //   { id: 231, name: "Chad", code: "TD" },
                  //   { id: 62, name: "Chile", code: "CL" },
                  //   { id: 64, name: "China", code: "CN" },
                  //   { id: 70, name: "Christmas Island", code: "CX" },
                  //   { id: 55, name: "Cocos (Keeling) Islands", code: "CC" },
                  //   { id: 65, name: "Colombia", code: "CO" },
                  //   { id: 135, name: "Comoros", code: "KM" },
                  //   { id: 58, name: "Congo", code: "CG" },
                  //   { id: 56, name: "Congo, Democratic Republic of", code: "CD" },
                  //   { id: 61, name: "Cook Islands", code: "CK" },
                  //   { id: 66, name: "Costa Rica", code: "CR" },
                  //   { id: 114, name: "Croatia", code: "HR" },
                  //   { id: 69, name: "Cura\u00e7ao", code: "CW" },
                  //   { id: 71, name: "Cyprus", code: "CY" },
                  //   { id: 72, name: "Czech Republic", code: "CZ" },
                  //   { id: 60, name: "C\u00f4te d'Ivoire", code: "CI" },
                  //   { id: 75, name: "Denmark", code: "DK" },
                  //   { id: 74, name: "Djibouti", code: "DJ" },
                  //   { id: 76, name: "Dominica", code: "DM" },
                  //   { id: 77, name: "Dominican Republic", code: "DO" },
                  //   { id: 79, name: "Ecuador", code: "EC" },
                  //   { id: 81, name: "Egypt", code: "EG" },
                  //   { id: 226, name: "El Salvador", code: "SV" },
                  //   { id: 104, name: "Equatorial Guinea", code: "GQ" },
                  //   { id: 83, name: "Eritrea", code: "ER" },
                  //   { id: 80, name: "Estonia", code: "EE" },
                  //   { id: 85, name: "Ethiopia", code: "ET" },
                  //   { id: 88, name: "Falkland Islands", code: "FK" },
                  //   { id: 90, name: "Faroe Islands", code: "FO" },
                  //   { id: 87, name: "Fiji", code: "FJ" },
                  //   { id: 86, name: "Finland", code: "FI" },
                  //   { id: 91, name: "France", code: "FR" },
                  //   { id: 96, name: "French Guiana", code: "GF" },
                  //   { id: 191, name: "French Polynesia", code: "PF" },
                  //   { id: 232, name: "French Southern Territories", code: "TF" },
                  //   { id: 92, name: "Gabon", code: "GA" },
                  //   { id: 101, name: "Gambia", code: "GM" },
                  //   { id: 95, name: "Georgia", code: "GE" },
                  //   { id: 73, name: "Germany", code: "DE" },
                  //   { id: 98, name: "Ghana", code: "GH" },
                  //   { id: 99, name: "Gibraltar", code: "GI" },
                  //   { id: 105, name: "Greece", code: "GR" },
                  //   { id: 100, name: "Greenland", code: "GL" },
                  //   { id: 94, name: "Grenada", code: "GD" },
                  //   { id: 103, name: "Guadeloupe", code: "GP" },
                  //   { id: 108, name: "Guam", code: "GU" },
                  //   { id: 107, name: "Guatemala", code: "GT" },
                  //   { id: 97, name: "Guernsey", code: "GG" },
                  //   { id: 102, name: "Guinea", code: "GN" },
                  //   { id: 109, name: "Guinea-Bissau", code: "GW" },
                  //   { id: 110, name: "Guyana", code: "GY" },
                  //   { id: 115, name: "Haiti", code: "HT" },
                  //   { id: 112, name: "Heard and McDonald Islands", code: "HM" },
                  //   { id: 113, name: "Honduras", code: "HN" },
                  //   { id: 111, name: "Hong Kong", code: "HK" },
                  //   { id: 116, name: "Hungary", code: "HU" },
                  //   { id: 125, name: "Iceland", code: "IS" },
                  //   { id: 121, name: "India", code: "IN" },
                  //   { id: 117, name: "Indonesia", code: "ID" },
                  //   { id: 123, name: "Iraq", code: "IQ" },
                  //   { id: 118, name: "Ireland", code: "IE" },
                  //   { id: 120, name: "Isle of Man", code: "IM" },
                  //   { id: 119, name: "Israel", code: "IL" },
                  //   { id: 126, name: "Italy", code: "IT" },
                  //   { id: 128, name: "Jamaica", code: "JM" },
                  //   { id: 130, name: "Japan", code: "JP" },
                  //   { id: 127, name: "Jersey", code: "JE" },
                  //   { id: 129, name: "Jordan", code: "JO" },
                  //   { id: 141, name: "Kazakhstan", code: "KZ" },
                  //   { id: 131, name: "Kenya", code: "KE" },
                  //   { id: 134, name: "Kiribati", code: "KI" },
                  //   { id: 139, name: "Kuwait", code: "KW" },
                  //   { id: 132, name: "Kyrgyzstan", code: "KG" },
                  //   { id: 142, name: "Lao People's Democratic Republic", code: "LA" },
                  //   { id: 151, name: "Latvia", code: "LV" },
                  //   { id: 143, name: "Lebanon", code: "LB" },
                  //   { id: 148, name: "Lesotho", code: "LS" },
                  //   { id: 147, name: "Liberia", code: "LR" },
                  //   { id: 152, name: "Libya", code: "LY" },
                  //   { id: 145, name: "Liechtenstein", code: "LI" },
                  //   { id: 149, name: "Lithuania", code: "LT" },
                  //   { id: 150, name: "Luxembourg", code: "LU" },
                  //   { id: 164, name: "Macau", code: "MO" },
                  //   { id: 160, name: "Macedonia", code: "MK" },
                  //   { id: 158, name: "Madagascar", code: "MG" },
                  //   { id: 172, name: "Malawi", code: "MW" },
                  //   { id: 174, name: "Malaysia", code: "MY" },
                  //   { id: 171, name: "Maldives", code: "MV" },
                  //   { id: 161, name: "Mali", code: "ML" },
                  //   { id: 169, name: "Malta", code: "MT" },
                  //   { id: 159, name: "Marshall Islands", code: "MH" },
                  //   { id: 166, name: "Martinique", code: "MQ" },
                  //   { id: 167, name: "Mauritania", code: "MR" },
                  //   { id: 170, name: "Mauritius", code: "MU" },
                  //   { id: 262, name: "Mayotte", code: "YT" },
                  //   { id: 173, name: "Mexico", code: "MX" },
                  //   { id: 89, name: "Micronesia, Federated States of", code: "FM" },
                  //   { id: 155, name: "Moldova", code: "MD" },
                  //   { id: 154, name: "Monaco", code: "MC" },
                  //   { id: 163, name: "Mongolia", code: "MN" },
                  //   { id: 156, name: "Montenegro", code: "ME" },
                  //   { id: 168, name: "Montserrat", code: "MS" },
                  //   { id: 153, name: "Morocco", code: "MA" },
                  //   { id: 175, name: "Mozambique", code: "MZ" },
                  //   { id: 162, name: "Myanmar", code: "MM" },
                  //   { id: 176, name: "Namibia", code: "NA" },
                  //   { id: 185, name: "Nauru", code: "NR" },
                  //   { id: 184, name: "Nepal", code: "NP" },
                  //   { id: 177, name: "New Caledonia", code: "NC" },
                  //   { id: 187, name: "New Zealand", code: "NZ" },
                  //   { id: 181, name: "Nicaragua", code: "NI" },
                  //   { id: 178, name: "Niger", code: "NE" },
                  //   { id: 180, name: "Nigeria", code: "NG" },
                  //   { id: 186, name: "Niue", code: "NU" },
                  //   { id: 179, name: "Norfolk Island", code: "NF" },
                  //   { id: 165, name: "Northern Mariana Islands", code: "MP" },
                  //   { id: 183, name: "Norway", code: "NO" },
                  //   { id: 188, name: "Oman", code: "OM" },
                  //   { id: 194, name: "Pakistan", code: "PK" },
                  //   { id: 201, name: "Palau", code: "PW" },
                  //   { id: 199, name: "Palestine, State of", code: "PS" },
                  //   { id: 189, name: "Panama", code: "PA" },
                  //   { id: 192, name: "Papua New Guinea", code: "PG" },
                  //   { id: 202, name: "Paraguay", code: "PY" },
                  //   { id: 190, name: "Peru", code: "PE" },
                  //   { id: 193, name: "Philippines", code: "PH" },
                  //   { id: 197, name: "Pitcairn", code: "PN" },
                  //   { id: 195, name: "Poland", code: "PL" },
                  //   { id: 200, name: "Portugal", code: "PT" },
                  //   { id: 198, name: "Puerto Rico", code: "PR" },
                  //   { id: 203, name: "Qatar", code: "QA" },
                  //   { id: 266, name: "Republic of Kosovo", code: "XK" },
                  //   { id: 205, name: "Romania", code: "RO" },
                  //   { id: 207, name: "Russian Federation", code: "RU" },
                  //   { id: 208, name: "Rwanda", code: "RW" },
                  //   { id: 204, name: "R\u00e9union", code: "RE" },
                  //   { id: 42, name: "Saint Barth\u00e9lemy", code: "BL" },
                  //   { id: 215, name: "Saint Helena", code: "SH" },
                  //   { id: 136, name: "Saint Kitts and Nevis", code: "KN" },
                  //   { id: 144, name: "Saint Lucia", code: "LC" },
                  //   { id: 253, name: "Saint Vincent and the Grenadines", code: "VC" },
                  //   { id: 157, name: "Saint-Martin (France)", code: "MF" },
                  //   { id: 260, name: "Samoa", code: "WS" },
                  //   { id: 220, name: "San Marino", code: "SM" },
                  //   { id: 225, name: "Sao Tome and Principe", code: "ST" },
                  //   { id: 209, name: "Saudi Arabia", code: "SA" },
                  //   { id: 221, name: "Senegal", code: "SN" },
                  //   { id: 206, name: "Serbia", code: "RS" },
                  //   { id: 211, name: "Seychelles", code: "SC" },
                  //   { id: 219, name: "Sierra Leone", code: "SL" },
                  //   { id: 214, name: "Singapore", code: "SG" },
                  //   { id: 227, name: "Sint Maarten (Dutch part)", code: "SX" },
                  //   { id: 218, name: "Slovakia", code: "SK" },
                  //   { id: 216, name: "Slovenia", code: "SI" },
                  //   { id: 210, name: "Solomon Islands", code: "SB" },
                  //   { id: 222, name: "Somalia", code: "SO" },
                  //   { id: 263, name: "South Africa", code: "ZA" },
                  //   {
                  //     id: 106,
                  //     name: "South Georgia and the South Sandwich Islands",
                  //     code: "GS",
                  //   },
                  //   { id: 138, name: "South Korea", code: "KR" },
                  //   { id: 224, name: "South Sudan", code: "SS" },
                  //   { id: 84, name: "Spain", code: "ES" },
                  //   { id: 146, name: "Sri Lanka", code: "LK" },
                  //   { id: 196, name: "St. Pierre and Miquelon", code: "PM" },
                  //   { id: 212, name: "Sudan", code: "SD" },
                  //   { id: 223, name: "Suriname", code: "SR" },
                  //   { id: 217, name: "Svalbard and Jan Mayen Islands", code: "SJ" },
                  //   { id: 229, name: "Swaziland", code: "SZ" },
                  //   { id: 213, name: "Sweden", code: "SE" },
                  //   { id: 59, name: "Switzerland", code: "CH" },
                  //   { id: 244, name: "Taiwan", code: "TW" },
                  //   { id: 235, name: "Tajikistan", code: "TJ" },
                  //   { id: 245, name: "Tanzania", code: "TZ" },
                  //   { id: 234, name: "Thailand", code: "TH" },
                  //   { id: 182, name: "The Netherlands", code: "NL" },
                  //   { id: 237, name: "Timor-Leste", code: "TL" },
                  //   { id: 233, name: "Togo", code: "TG" },
                  //   { id: 236, name: "Tokelau", code: "TK" },
                  //   { id: 240, name: "Tonga", code: "TO" },
                  //   { id: 242, name: "Trinidad and Tobago", code: "TT" },
                  //   { id: 239, name: "Tunisia", code: "TN" },
                  //   { id: 241, name: "Turkey", code: "TR" },
                  //   { id: 238, name: "Turkmenistan", code: "TM" },
                  //   { id: 230, name: "Turks and Caicos Islands", code: "TC" },
                  //   { id: 243, name: "Tuvalu", code: "TV" },
                  //   { id: 247, name: "Uganda", code: "UG" },
                  //   { id: 246, name: "Ukraine", code: "UA" },
                  //   { id: 18, name: "United Arab Emirates", code: "AE" },
                  //   { id: 93, name: "United Kingdom", code: "GB" },
                  //   { id: 249, name: "United States", code: "US" },
                  //   { id: 248, name: "United States Minor Outlying Islands", code: "UM" },
                  //   { id: 250, name: "Uruguay", code: "UY" },
                  //   { id: 251, name: "Uzbekistan", code: "UZ" },
                  //   { id: 258, name: "Vanuatu", code: "VU" },
                  //   { id: 252, name: "Vatican", code: "VA" },
                  //   { id: 254, name: "Venezuela", code: "VE" },
                  //   { id: 257, name: "Vietnam", code: "VN" },
                  //   { id: 255, name: "Virgin Islands (British)", code: "VG" },
                  //   { id: 256, name: "Virgin Islands (U.S.)", code: "VI" },
                  //   { id: 259, name: "Wallis and Futuna Islands", code: "WF" },
                  //   { id: 82, name: "Western Sahara", code: "EH" },
                  //   { id: 261, name: "Yemen", code: "YE" },
                  //   { id: 264, name: "Zambia", code: "ZM" },
                  //   { id: 265, name: "Zimbabwe", code: "ZW" },
                  //   { id: 31, name: "\u00c5land Islands", code: "AX" },
                  // ],
                  client: this.modelFor("signup").client
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function model(_x) {
        return _ref.apply(this, arguments);
      }

      return model;
    }()
  });
});
define("ucrm-client-signup-form/routes/signup/complete", ["exports", "ucrm-client-signup-form/config/environment"], function (exports, _environment) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return _environment.default.APP.completionText;
    }
  });
});
define('ucrm-client-signup-form/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ajax.default.extend({
    contentType: 'application/json; charset=utf-8'
  });
});
define('ucrm-client-signup-form/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define("ucrm-client-signup-form/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "18+zaeeG", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"application-wrapper\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "ucrm-client-signup-form/templates/application.hbs" } });
});
define('ucrm-client-signup-form/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('ucrm-client-signup-form/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("ucrm-client-signup-form/templates/components/user-details", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Zl892KqO", "block": "{\"symbols\":[\"form\",\"form\",\"key\",\"value\",\"state\",\"country\"],\"statements\":[[4,\"bs-form\",null,[[\"model\",\"novalidate\",\"onSubmit\"],[[20,[\"model\",\"client\"]],true,[25,\"action\",[[19,0,[]],\"submit\",[20,[\"model\",\"client\"]]],null]]],{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"form-row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 mb-2\"],[7],[0,\"\\n      \"],[1,[25,\"component\",[[19,1,[\"element\"]]],[[\"controlType\",\"id\",\"autocomplete\",\"placeholder\",\"property\",\"required\"],[\"text\",\"firstName\",\"given-name\",\"First Name\",\"firstName\",true]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 mb-2\"],[7],[0,\"\\n      \"],[1,[25,\"component\",[[19,1,[\"element\"]]],[[\"controlType\",\"id\",\"autocomplete\",\"placeholder\",\"property\",\"required\"],[\"text\",\"lastName\",\"family-name\",\"Last Name\",\"lastName\",true]]],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"form-row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 mb-2\"],[7],[0,\"\\n      \"],[1,[25,\"component\",[[19,1,[\"element\"]]],[[\"controlType\",\"id\",\"autocomplete\",\"placeholder\",\"property\",\"required\"],[\"email\",\"email\",\"email\",\"Email\",\"email\",true]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 mb-2\"],[7],[0,\"\\n      \"],[1,[25,\"component\",[[19,1,[\"element\"]]],[[\"controlType\",\"id\",\"autocomplete\",\"placeholder\",\"property\",\"required\"],[\"phone\",\"phone\",\"tel tel-national\",\"Phone Number\",\"phone\",true]]],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"form-row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 mb-2\"],[7],[0,\"\\n      \"],[1,[25,\"component\",[[19,1,[\"element\"]]],[[\"controlType\",\"id\",\"autocomplete\",\"placeholder\",\"property\",\"required\"],[\"text\",\"street1\",\"street-address\",\"Street Address\",\"street1\",true]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 mb-2\"],[7],[0,\"\\n      \"],[1,[25,\"component\",[[19,1,[\"element\"]]],[[\"controlType\",\"id\",\"autocomplete\",\"placeholder\",\"property\",\"required\"],[\"text\",\"street2\",\"\",\"Street Address 2\",\"street2\",true]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 mb-2\"],[7],[0,\"\\n      \"],[1,[25,\"component\",[[19,1,[\"element\"]]],[[\"controlType\",\"id\",\"autocomplete\",\"placeholder\",\"property\",\"required\"],[\"text\",\"city\",\"address-level2\",\"City\",\"city\",true]]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 mb-2\"],[7],[0,\"\\n      \"],[1,[25,\"component\",[[19,1,[\"element\"]]],[[\"controlType\",\"id\",\"autocomplete\",\"placeholder\",\"property\",\"required\"],[\"text\",\"zip\",\"postal-code\",\"Postal Code\",\"zipCode\",true]]],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"form-row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 mb-4\"],[7],[0,\"\\n\"],[4,\"power-select\",null,[[\"searchField\",\"placeholder\",\"selected\",\"options\",\"onchange\"],[\"name\",\"Choose Country\",[20,[\"defaultCountry\"]],[20,[\"model\",\"countries\"]],[25,\"action\",[[19,0,[]],\"selectCountry\"],null]]],{\"statements\":[[0,\"        \"],[1,[19,6,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-6 mb-4\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"states\"]]],null,{\"statements\":[[4,\"power-select\",null,[[\"searchField\",\"placeholder\",\"selected\",\"options\",\"onchange\"],[\"name\",\"Choose State\",[20,[\"selectedState\"]],[20,[\"states\"]],[25,\"action\",[[19,0,[]],\"selectState\"],null]]],{\"statements\":[[0,\"          \"],[1,[19,5,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[5]},null]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\"],[4,\"unless\",[[20,[\"error\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"pending\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"alert alert-primary\"],[9,\"role\",\"alert\"],[7],[0,\"Submitting Information\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"failure\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"alert alert-danger\"],[9,\"role\",\"alert\"],[7],[0,\"Sorry, there was an error\\n          with your request.\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"errors\"]]],null,{\"statements\":[[4,\"bs-form\",null,[[\"class\",\"model\",\"novalidate\"],[\"container-fluid\",[20,[\"model\",\"client\"]],true]],{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"-each-in\",[[20,[\"errors\"]]],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"col-12 error-text\"],[7],[0,\"\\n\"],[4,\"if\",[[25,\"is-value\",[[19,3,[]],\"username\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[9,\"style\",\"text-transform:capitalize;color:red\"],[7],[0,\"email\"],[8],[0,\"\\n                    -\\n                    \"],[1,[19,4,[]],false],[0,\"\\n                    \"],[1,[25,\"component\",[[19,2,[\"element\"]]],[[\"controlType\",\"id\",\"autocomplete\",\"placeholder\",\"property\",\"required\",\"disabled\"],[\"email\",\"email\",\"email\",\"Email\",\"email\",true,true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[6,\"span\"],[9,\"style\",\"text-transform:capitalize;\"],[7],[1,[19,3,[]],false],[8],[0,\"\\n                    -\\n                    \"],[1,[19,4,[]],false],[0,\"\\n                    \"],[1,[25,\"component\",[[19,2,[\"element\"]]],[[\"placeholder\",\"property\",\"required\"],[[19,3,[]],[19,3,[]],true]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                \"],[8],[0,\"\\n\"]],\"parameters\":[3,4]},null],[0,\"            \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col text-center\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"processing\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"btn btn-dark disabled\"],[9,\"id\",\"proceed\"],[7],[6,\"span\"],[7],[0,\"Processing\"],[8],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"get\",[[20,[\"model\",\"client\",\"validations\"]],\"isInvalid\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"btn btn-dark disabled\"],[9,\"id\",\"proceed\"],[7],[6,\"span\"],[7],[0,\"Provide Info\"],[8],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"button\"],[9,\"class\",\"btn btn-secondary\"],[9,\"id\",\"proceed\"],[9,\"type\",\"submit\"],[7],[6,\"span\"],[7],[0,\"Signup\"],[8],[8],[0,\"\\n      \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "ucrm-client-signup-form/templates/components/user-details.hbs" } });
});
define("ucrm-client-signup-form/templates/signup", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dJHpZFw8", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"signup-wrapper\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ucrm-client-signup-form/templates/signup.hbs" } });
});
define("ucrm-client-signup-form/templates/signup/account", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VwMivuel", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"account-wrapper\"],[7],[0,\"\\n  \"],[1,[25,\"user-details\",null,[[\"model\",\"changeRoute\"],[[20,[\"model\"]],[25,\"action\",[[19,0,[]],\"changeRoute\"],null]]]],false],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "ucrm-client-signup-form/templates/signup/account.hbs" } });
});
define("ucrm-client-signup-form/templates/signup/complete", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kI4m7Nsa", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[9,\"class\",\"text-center\"],[7],[0,\"Signup Complete\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"text-center complete-text\"],[7],[0,\"\\n  \"],[1,[18,\"model\"],false],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ucrm-client-signup-form/templates/signup/complete.hbs" } });
});
define('ucrm-client-signup-form/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
define('ucrm-client-signup-form/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
define('ucrm-client-signup-form/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('ucrm-client-signup-form/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
define('ucrm-client-signup-form/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
define('ucrm-client-signup-form/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
define('ucrm-client-signup-form/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
define('ucrm-client-signup-form/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
define('ucrm-client-signup-form/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
define('ucrm-client-signup-form/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
define('ucrm-client-signup-form/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
define('ucrm-client-signup-form/validators/inline', ['exports', 'ember-cp-validations/validators/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('ucrm-client-signup-form/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
define('ucrm-client-signup-form/validators/messages', ['exports', 'ember-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
define('ucrm-client-signup-form/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
define('ucrm-client-signup-form/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
  });
});


define('ucrm-client-signup-form/config/environment', [], function() {
  var prefix = 'ucrm-client-signup-form';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ucrm-client-signup-form/app")["default"].create({"rootElement":"#ember-signup","host":"http://localhost:8080/_plugins/ucrm-airmax-client-signup/public.php","completionText":"completiontextinformation","frontendKey":"development_key","isLead":"yes","name":"ucrm-client-signup-form","version":"1.0.0"});
}
//# sourceMappingURL=ucrm-client-signup-form.map
