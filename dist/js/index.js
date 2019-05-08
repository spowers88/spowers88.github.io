"use strict";

var _preact = require("/web_modules/preact");

var _home = _interopRequireDefault(require("../pages/home"));

var _algorithms = _interopRequireDefault(require("../pages/algorithms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Framework
// Pages
(0, _preact.render)(h(_home["default"], null), document.body);