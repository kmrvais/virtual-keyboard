// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"button/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Button = /*#__PURE__*/function () {
  function Button(letter, additionalLetter, type, keyCode) {
    _classCallCheck(this, Button);

    this.letter = letter;
    this.additionalLetter = additionalLetter;
    this.type = type;
    this.keyCode = keyCode;
    this.buttonElement = document.createElement('button');
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var additionalLetter = this.additionalLetter ? "<div class=\"button__additional-letter\">".concat(this.additionalLetter, "</div>") : '';
      this.buttonElement.innerHTML = "<div class=\"button__letter\">".concat(this.letter, "</div>").concat(additionalLetter);
      this.buttonElement.classList.add('button');
      this.buttonElement.classList.add("button_".concat(this.type));
      this.buttonElement.setAttribute('data-key-code', this.keyCode);
      this.attachEvents();
      return this.buttonElement;
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      this.keydownHandler = this.keydownHandler.bind(this);
      this.keyupHandler = this.keyupHandler.bind(this);
      this.deactivateHandler = this.deactivateHandler.bind(this);
      document.addEventListener("keydown:".concat(this.keyCode), this.keydownHandler);
      document.addEventListener("keyup:".concat(this.keyCode), this.keyupHandler);
      document.addEventListener('button:deactivate', this.deactivateHandler);
    }
  }, {
    key: "detachEvents",
    value: function detachEvents() {
      document.removeEventListener("keydown:".concat(this.keyCode), this.keydownHandler);
      document.removeEventListener("keyup:".concat(this.keyCode), this.keyupHandler);
      document.removeEventListener('button:deactivate', this.deactivateHandler);
    }
  }, {
    key: "keydownHandler",
    value: function keydownHandler(event) {
      this.buttonElement.classList.add('button_pressed');
      document.dispatchEvent(new CustomEvent('textarea:input', {
        detail: {
          letter: event.detail.isShift || event.detail.isCapsLock ? this.additionalLetter : this.letter
        }
      }));
    }
  }, {
    key: "keyupHandler",
    value: function keyupHandler(event) {
      this.buttonElement.classList.remove('button_pressed');
    }
  }, {
    key: "deactivateHandler",
    value: function deactivateHandler() {
      this.buttonElement.classList.remove('button_pressed');
    }
  }]);

  return Button;
}();

exports.default = Button;
},{}],"data/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPES = exports.LANG = exports.CAPSLOCK = void 0;
var CAPSLOCK = 20;
exports.CAPSLOCK = CAPSLOCK;
var TYPES = {
  NUMBER: 'number',
  LETTER: 'letter',
  CAPSLOCK: 'capslock',
  BACKSPACE: 'backspace',
  TAB: 'tab',
  DEL: 'del',
  SHIFT: 'shift',
  CTRL: 'ctrl',
  WIN: 'win',
  ALT: 'alt',
  ENTER: 'enter',
  SPACE: 'space',
  ARROW: 'arrow',
  SYMBOL: 'symbol'
};
exports.TYPES = TYPES;
var LANG = {
  RUS: [{
    letter: 'ё',
    additionalLetter: 'Ё',
    keyCode: 192,
    type: TYPES.LETTER
  }, {
    letter: '1',
    additionalLetter: '!',
    keyCode: 49,
    type: TYPES.NUMBER
  }, {
    letter: '2',
    additionalLetter: '"',
    keyCode: 50,
    type: TYPES.NUMBER
  }, {
    letter: '3',
    additionalLetter: '№',
    keyCode: 51,
    type: TYPES.NUMBER
  }, {
    letter: '4',
    additionalLetter: ';',
    keyCode: 52,
    type: TYPES.NUMBER
  }, {
    letter: '5',
    additionalLetter: '%',
    keyCode: 53,
    type: TYPES.NUMBER
  }, {
    letter: '6',
    additionalLetter: ':',
    keyCode: 54,
    type: TYPES.NUMBER
  }, {
    letter: '7',
    additionalLetter: '?',
    keyCode: 55,
    type: TYPES.NUMBER
  }, {
    letter: '8',
    additionalLetter: '*',
    keyCode: 56,
    type: TYPES.NUMBER
  }, {
    letter: '9',
    additionalLetter: '(',
    keyCode: 57,
    type: TYPES.NUMBER
  }, {
    letter: '0',
    additionalLetter: ')',
    keyCode: 48,
    type: TYPES.NUMBER
  }, {
    letter: '-',
    additionalLetter: '_',
    keyCode: 189,
    type: TYPES.NUMBER
  }, {
    letter: '=',
    additionalLetter: '+',
    keyCode: 187,
    type: TYPES.NUMBER
  }, {
    letter: 'backspace',
    additionalLetter: null,
    keyCode: 8,
    type: TYPES.BACKSPACE
  }, {
    letter: 'tab',
    additionalLetter: null,
    keyCode: 9,
    type: TYPES.TAB
  }, {
    letter: 'й',
    additionalLetter: 'Й',
    keyCode: 81,
    type: TYPES.LETTER
  }, {
    letter: 'ц',
    additionalLetter: 'Ц',
    keyCode: 87,
    type: TYPES.LETTER
  }, {
    letter: 'у',
    additionalLetter: 'У',
    keyCode: 69,
    type: TYPES.LETTER
  }, {
    letter: 'к',
    additionalLetter: 'К',
    keyCode: 82,
    type: TYPES.LETTER
  }, {
    letter: 'е',
    additionalLetter: 'Е',
    keyCode: 84,
    type: TYPES.LETTER
  }, {
    letter: 'н',
    additionalLetter: 'Н',
    keyCode: 89,
    type: TYPES.LETTER
  }, {
    letter: 'г',
    additionalLetter: 'Г',
    keyCode: 85,
    type: TYPES.LETTER
  }, {
    letter: 'ш',
    additionalLetter: 'Ш',
    keyCode: 73,
    type: TYPES.LETTER
  }, {
    letter: 'щ',
    additionalLetter: 'Щ',
    keyCode: 79,
    type: TYPES.LETTER
  }, {
    letter: 'з',
    additionalLetter: 'З',
    keyCode: 80,
    type: TYPES.LETTER
  }, {
    letter: 'х',
    additionalLetter: 'Х',
    keyCode: 219,
    type: TYPES.LETTER
  }, {
    letter: 'ъ',
    additionalLetter: 'Ъ',
    keyCode: 221,
    type: TYPES.LETTER
  }, {
    letter: '|',
    additionalLetter: '|',
    keyCode: 220,
    type: TYPES.LETTER
  }, {
    letter: 'del',
    additionalLetter: null,
    keyCode: 46,
    type: TYPES.DEL
  }, {
    letter: 'capslock',
    additionalLetter: null,
    keyCode: 20,
    type: TYPES.CAPSLOCK
  }, {
    letter: 'ф',
    additionalLetter: 'Ф',
    keyCode: 65,
    type: TYPES.LETTER
  }, {
    letter: 'ы',
    additionalLetter: 'Ы',
    keyCode: 83,
    type: TYPES.LETTER
  }, {
    letter: 'в',
    additionalLetter: 'В',
    keyCode: 68,
    type: TYPES.LETTER
  }, {
    letter: 'а',
    additionalLetter: 'А',
    keyCode: 70,
    type: TYPES.LETTER
  }, {
    letter: 'п',
    additionalLetter: 'П',
    keyCode: 71,
    type: TYPES.LETTER
  }, {
    letter: 'р',
    additionalLetter: 'Р',
    keyCode: 72,
    type: TYPES.LETTER
  }, {
    letter: 'о',
    additionalLetter: 'О',
    keyCode: 74,
    type: TYPES.LETTER
  }, {
    letter: 'л',
    additionalLetter: 'Л',
    keyCode: 75,
    type: TYPES.LETTER
  }, {
    letter: 'д',
    additionalLetter: 'Д',
    keyCode: 76,
    type: TYPES.LETTER
  }, {
    letter: 'ж',
    additionalLetter: 'Ж',
    keyCode: 186,
    type: TYPES.LETTER
  }, {
    letter: 'э',
    additionalLetter: 'Э',
    keyCode: 222,
    type: TYPES.LETTER
  }, {
    letter: 'enter',
    additionalLetter: null,
    keyCode: 13,
    type: TYPES.ENTER
  }, {
    letter: 'shift',
    additionalLetter: null,
    keyCode: 16,
    type: TYPES.SHIFT
  }, {
    letter: 'я',
    additionalLetter: 'Я',
    keyCode: 90,
    type: TYPES.LETTER
  }, {
    letter: 'ч',
    additionalLetter: 'Ч',
    keyCode: 88,
    type: TYPES.LETTER
  }, {
    letter: 'с',
    additionalLetter: 'С',
    keyCode: 67,
    type: TYPES.LETTER
  }, {
    letter: 'м',
    additionalLetter: 'М',
    keyCode: 86,
    type: TYPES.LETTER
  }, {
    letter: 'и',
    additionalLetter: 'И',
    keyCode: 66,
    type: TYPES.LETTER
  }, {
    letter: 'т',
    additionalLetter: 'Т',
    keyCode: 78,
    type: TYPES.LETTER
  }, {
    letter: 'ь',
    additionalLetter: 'Ь',
    keyCode: 77,
    type: TYPES.LETTER
  }, {
    letter: 'б',
    additionalLetter: 'Б',
    keyCode: 188,
    type: TYPES.LETTER
  }, {
    letter: 'ю',
    additionalLetter: 'Ю',
    keyCode: 190,
    type: TYPES.LETTER
  }, {
    letter: '.',
    additionalLetter: ',',
    keyCode: 191,
    type: TYPES.LETTER
  }],
  EN: [{
    letter: '`',
    additionalLetter: '`',
    keyCode: 192,
    type: TYPES.LETTER
  }, {
    letter: '1',
    additionalLetter: '!',
    keyCode: 49,
    type: TYPES.NUMBER
  }, {
    letter: '2',
    additionalLetter: '@',
    keyCode: 50,
    type: TYPES.NUMBER
  }, {
    letter: '3',
    additionalLetter: '№',
    keyCode: 51,
    type: TYPES.NUMBER
  }, {
    letter: '4',
    additionalLetter: ';',
    keyCode: 52,
    type: TYPES.NUMBER
  }, {
    letter: '5',
    additionalLetter: '%',
    keyCode: 53,
    type: TYPES.NUMBER
  }, {
    letter: '6',
    additionalLetter: ':',
    keyCode: 54,
    type: TYPES.NUMBER
  }, {
    letter: '7',
    additionalLetter: '?',
    keyCode: 55,
    type: TYPES.NUMBER
  }, {
    letter: '8',
    additionalLetter: '*',
    keyCode: 56,
    type: TYPES.NUMBER
  }, {
    letter: '9',
    additionalLetter: '(',
    keyCode: 57,
    type: TYPES.NUMBER
  }, {
    letter: '0',
    additionalLetter: ')',
    keyCode: 48,
    type: TYPES.NUMBER
  }, {
    letter: '-',
    additionalLetter: '_',
    keyCode: 189,
    type: TYPES.NUMBER
  }, {
    letter: '=',
    additionalLetter: '+',
    keyCode: 187,
    type: TYPES.NUMBER
  }, {
    letter: 'backspace',
    additionalLetter: null,
    keyCode: 8,
    type: TYPES.BACKSPACE
  }, {
    letter: 'tab',
    additionalLetter: null,
    keyCode: 9,
    type: TYPES.TAB
  }, {
    letter: 'q',
    additionalLetter: 'Q',
    keyCode: 81,
    type: TYPES.LETTER
  }, {
    letter: 'w',
    additionalLetter: 'W',
    keyCode: 87,
    type: TYPES.LETTER
  }, {
    letter: 'e',
    additionalLetter: 'E',
    keyCode: 69,
    type: TYPES.LETTER
  }, {
    letter: 'r',
    additionalLetter: 'R',
    keyCode: 82,
    type: TYPES.LETTER
  }, {
    letter: 't',
    additionalLetter: 'T',
    keyCode: 84,
    type: TYPES.LETTER
  }, {
    letter: 'y',
    additionalLetter: 'Y',
    keyCode: 89,
    type: TYPES.LETTER
  }, {
    letter: 'u',
    additionalLetter: 'U',
    keyCode: 85,
    type: TYPES.LETTER
  }, {
    letter: 'i',
    additionalLetter: 'I',
    keyCode: 73,
    type: TYPES.LETTER
  }, {
    letter: 'o',
    additionalLetter: 'O',
    keyCode: 79,
    type: TYPES.LETTER
  }, {
    letter: 'p',
    additionalLetter: 'P',
    keyCode: 80,
    type: TYPES.LETTER
  }, {
    letter: '[',
    additionalLetter: '{',
    keyCode: 219,
    type: TYPES.SYMBOL
  }, {
    letter: ']',
    additionalLetter: '}',
    keyCode: 221,
    type: TYPES.LETTER
  }, {
    letter: '|',
    additionalLetter: '|',
    keyCode: 220,
    type: TYPES.LETTER
  }, {
    letter: 'del',
    additionalLetter: null,
    keyCode: 46,
    type: TYPES.DEL
  }, {
    letter: 'capslock',
    additionalLetter: null,
    keyCode: 20,
    type: TYPES.CAPSLOCK
  }, {
    letter: 'a',
    additionalLetter: 'A',
    keyCode: 65,
    type: TYPES.LETTER
  }, {
    letter: 's',
    additionalLetter: 'S',
    keyCode: 83,
    type: TYPES.LETTER
  }, {
    letter: 'd',
    additionalLetter: 'D',
    keyCode: 68,
    type: TYPES.LETTER
  }, {
    letter: 'f',
    additionalLetter: 'F',
    keyCode: 70,
    type: TYPES.LETTER
  }, {
    letter: 'g',
    additionalLetter: 'G',
    keyCode: 71,
    type: TYPES.LETTER
  }, {
    letter: 'h',
    additionalLetter: 'H',
    keyCode: 72,
    type: TYPES.LETTER
  }, {
    letter: 'j',
    additionalLetter: 'J',
    keyCode: 74,
    type: TYPES.LETTER
  }, {
    letter: 'k',
    additionalLetter: 'K',
    keyCode: 75,
    type: TYPES.LETTER
  }, {
    letter: 'l',
    additionalLetter: 'L',
    keyCode: 76,
    type: TYPES.LETTER
  }, {
    letter: ';',
    additionalLetter: ':',
    keyCode: 186,
    type: TYPES.LETTER
  }, {
    letter: '\'',
    additionalLetter: '\"',
    keyCode: 222,
    type: TYPES.LETTER
  }, {
    letter: 'enter',
    additionalLetter: null,
    keyCode: 13,
    type: TYPES.ENTER
  }, {
    letter: 'shift',
    additionalLetter: null,
    keyCode: 16,
    type: TYPES.SHIFT
  }, {
    letter: 'z',
    additionalLetter: 'Z',
    keyCode: 90,
    type: TYPES.LETTER
  }, {
    letter: 'x',
    additionalLetter: 'X',
    keyCode: 88,
    type: TYPES.LETTER
  }, {
    letter: 'c',
    additionalLetter: 'C',
    keyCode: 67,
    type: TYPES.LETTER
  }, {
    letter: 'v',
    additionalLetter: 'V',
    keyCode: 86,
    type: TYPES.LETTER
  }, {
    letter: 'b',
    additionalLetter: 'B',
    keyCode: 66,
    type: TYPES.LETTER
  }, {
    letter: 'n',
    additionalLetter: 'N',
    keyCode: 78,
    type: TYPES.LETTER
  }, {
    letter: 'm',
    additionalLetter: 'M',
    keyCode: 77,
    type: TYPES.LETTER
  }, {
    letter: ',',
    additionalLetter: '<',
    keyCode: 188,
    type: TYPES.LETTER
  }, {
    letter: '.',
    additionalLetter: '>',
    keyCode: 190,
    type: TYPES.LETTER
  }, {
    letter: '/',
    additionalLetter: '?',
    keyCode: 191,
    type: TYPES.LETTER
  }]
};
exports.LANG = LANG;
},{}],"button/capslock/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Capslock = /*#__PURE__*/function (_Button) {
  _inherits(Capslock, _Button);

  var _super = _createSuper(Capslock);

  function Capslock(letter, additionalLetter, type, keyCode) {
    _classCallCheck(this, Capslock);

    return _super.call(this, letter, additionalLetter, type, keyCode);
  }

  _createClass(Capslock, [{
    key: "keydownHandler",
    value: function keydownHandler(event) {
      this.buttonElement.classList.toggle('button_pressed');
    }
  }, {
    key: "keyupHandler",
    value: function keyupHandler(event) {}
  }, {
    key: "deactivateHandler",
    value: function deactivateHandler() {}
  }]);

  return Capslock;
}(_index.default);

exports.default = Capslock;
},{"../index":"button/index.js"}],"button/backspace/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Backspace = /*#__PURE__*/function (_Button) {
  _inherits(Backspace, _Button);

  var _super = _createSuper(Backspace);

  function Backspace(letter, additionalLetter, type, keyCode) {
    _classCallCheck(this, Backspace);

    return _super.call(this, letter, additionalLetter, type, keyCode);
  }

  _createClass(Backspace, [{
    key: "keydownHandler",
    value: function keydownHandler(event) {
      this.buttonElement.classList.add('button_pressed');
      document.dispatchEvent(new CustomEvent('textarea:remove'));
    }
  }]);

  return Backspace;
}(_index.default);

exports.default = Backspace;
},{"../index":"button/index.js"}],"button/number/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NumberButton = /*#__PURE__*/function (_Button) {
  _inherits(NumberButton, _Button);

  var _super = _createSuper(NumberButton);

  function NumberButton(letter, additionalLetter, type, keyCode) {
    _classCallCheck(this, NumberButton);

    return _super.call(this, letter, additionalLetter, type, keyCode);
  }

  _createClass(NumberButton, [{
    key: "keydownHandler",
    value: function keydownHandler(event) {
      this.buttonElement.classList.add('button_pressed');
      document.dispatchEvent(new CustomEvent('textarea:input', {
        detail: {
          letter: event.detail.isShift ? this.additionalLetter : this.letter
        }
      }));
    }
  }]);

  return NumberButton;
}(_index.default);

exports.default = NumberButton;
},{"../index":"button/index.js"}],"keyboard/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = _interopRequireDefault(require("../button"));

var _data = require("../data");

var _capslock = _interopRequireDefault(require("../button/capslock"));

var _backspace = _interopRequireDefault(require("../button/backspace"));

var _number = _interopRequireDefault(require("../button/number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var buttonCreate = function buttonCreate(letter, additionalLetter, type, keyCode) {
  if (type === _data.TYPES.CAPSLOCK) {
    return new _capslock.default(letter, additionalLetter, type, keyCode);
  }

  if (type === _data.TYPES.BACKSPACE) {
    return new _backspace.default(letter, additionalLetter, type, keyCode);
  }

  if (type === _data.TYPES.NUMBER) {
    return new _number.default(letter, additionalLetter, type, keyCode);
  }

  return new _button.default(letter, additionalLetter, type, keyCode);
};

var Keyboard = /*#__PURE__*/function () {
  function Keyboard(buttons) {
    _classCallCheck(this, Keyboard);

    this.buttons = [];

    for (var i = 0; i < buttons.length; i++) {
      this.buttons.push(buttonCreate(buttons[i].letter, buttons[i].additionalLetter, buttons[i].type, buttons[i].keyCode));
    }

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.capsLock = false;
  }

  _createClass(Keyboard, [{
    key: "render",
    value: function render() {
      this.clear();
      var container = document.querySelector('.container');
      container.append(this.keyboard);

      for (var i = 0; i < this.buttons.length; i++) {
        this.keyboard.append(this.buttons[i].render());
      }

      this.attachEvents();
    }
  }, {
    key: "clear",
    value: function clear() {
      var keyboardElement = document.querySelector('.keyboard');

      if (keyboardElement) {
        keyboardElement.remove();
      }
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      document.addEventListener('keydown', this.keydownHandler);
      document.addEventListener('keyup', this.keyupHandler);
      this.keyboard.addEventListener('mousedown', this.mousedownHandler);
      this.keyboard.addEventListener('mouseup', this.mouseupHandler);
    }
  }, {
    key: "detachEvents",
    value: function detachEvents() {
      document.removeEventListener('keydown', this.keydownHandler);
      document.removeEventListener('keyup', this.keyupHandler);
      this.keyboard.removeEventListener('mousedown', this.mousedownHandler);
      this.keyboard.removeEventListener('mouseup', this.mouseupHandler);

      for (var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].detachEvents();
      }
    }
  }, {
    key: "keydownHandler",
    value: function keydownHandler(event) {
      if (event.altKey && event.ctrlKey) {
        return;
      }

      event.preventDefault();

      if (_data.CAPSLOCK === event.keyCode) {
        this.capsLock = !this.capsLock;
      }

      document.dispatchEvent(new CustomEvent("keydown:".concat(event.keyCode), {
        detail: {
          isShift: event.shiftKey,
          isCapsLock: this.capsLock
        }
      }));
    }
  }, {
    key: "keyupHandler",
    value: function keyupHandler(event) {
      document.dispatchEvent(new CustomEvent("keyup:".concat(event.keyCode)));
    }
  }, {
    key: "mousedownHandler",
    value: function mousedownHandler(event) {
      var target = event.target.closest('.button');

      if (!target) {
        return;
      }

      document.dispatchEvent(new CustomEvent("button:deactivate"));
      document.dispatchEvent(new CustomEvent("keydown:".concat(target.getAttribute('data-key-code')), {
        detail: {
          isShift: false,
          isCapsLock: this.capsLock
        }
      }));
    }
  }, {
    key: "mouseupHandler",
    value: function mouseupHandler(event) {
      var target = event.target.closest('.button');

      if (!target) {
        return;
      }

      document.dispatchEvent(new CustomEvent("keyup:".concat(target.getAttribute('data-key-code'))));
    }
  }]);

  return Keyboard;
}();

exports.default = Keyboard;
},{"../button":"button/index.js","../data":"data/index.js","../button/capslock":"button/capslock/index.js","../button/backspace":"button/backspace/index.js","../button/number":"button/number/index.js"}],"textarea/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Textarea = /*#__PURE__*/function () {
  function Textarea() {
    _classCallCheck(this, Textarea);
  }

  _createClass(Textarea, [{
    key: "render",
    value: function render() {
      this.textarea = document.createElement('textarea');
      this.textarea.classList.add('textarea');
      var container = document.querySelector('.container');
      container.append(this.textarea);
      this.attachEvents();
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      document.addEventListener('textarea:input', this.inputHandler.bind(this));
      document.addEventListener('textarea:remove', this.removeHandler.bind(this));
    }
  }, {
    key: "inputHandler",
    value: function inputHandler(event) {
      this.textarea.value += event.detail.letter;
    }
  }, {
    key: "removeHandler",
    value: function removeHandler() {
      this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1);
    }
  }]);

  return Textarea;
}();

exports.default = Textarea;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _keyboard = _interopRequireDefault(require("./keyboard"));

var _data = require("./data");

var _textarea = _interopRequireDefault(require("./textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderKeyboard = function renderKeyboard(lang) {
  var keyboard = new _keyboard.default(_data.LANG[lang]);
  keyboard.render();
  localStorage.setItem('lang', lang);
  return keyboard;
};

document.addEventListener("DOMContentLoaded", function () {
  var textarea = new _textarea.default();
  textarea.render();
  var lang = localStorage.getItem('lang') || 'RUS';
  var keyboard = renderKeyboard(lang);
  document.addEventListener('keydown', function (event) {
    if (event.altKey && event.ctrlKey) {
      lang = lang === 'RUS' ? 'EN' : 'RUS';
      keyboard.detachEvents();
      keyboard = renderKeyboard(lang);
    }
  });
});
},{"./keyboard":"keyboard/index.js","./data":"data/index.js","./textarea":"textarea/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58764" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map