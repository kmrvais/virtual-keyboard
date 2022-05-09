parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uFvr":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function e(n,i,a,o){t(this,e),this.letter=n,this.additionalLetter=i,this.type=a,this.keyCode=o,this.buttonElement=document.createElement("button")}return n(e,[{key:"render",value:function(){var t=this.additionalLetter?'<div class="button__additional-letter">'.concat(this.additionalLetter,"</div>"):"";return this.buttonElement.innerHTML='<div class="button__letter">'.concat(this.letter,"</div>").concat(t),this.buttonElement.classList.add("button"),this.buttonElement.classList.add("button_".concat(this.type)),this.buttonElement.setAttribute("data-key-code",this.keyCode),this.attachEvents(),this.buttonElement}},{key:"attachEvents",value:function(){this.keydownHandler=this.keydownHandler.bind(this),this.keyupHandler=this.keyupHandler.bind(this),this.deactivateHandler=this.deactivateHandler.bind(this),document.addEventListener("keydown:".concat(this.keyCode),this.keydownHandler),document.addEventListener("keyup:".concat(this.keyCode),this.keyupHandler),document.addEventListener("button:deactivate",this.deactivateHandler)}},{key:"detachEvents",value:function(){document.removeEventListener("keydown:".concat(this.keyCode),this.keydownHandler),document.removeEventListener("keyup:".concat(this.keyCode),this.keyupHandler),document.removeEventListener("button:deactivate",this.deactivateHandler)}},{key:"keydownHandler",value:function(t){this.buttonElement.classList.add("button_pressed"),document.dispatchEvent(new CustomEvent("textarea:input",{detail:{letter:t.detail.isShift||t.detail.isCapsLock?this.additionalLetter:this.letter}}))}},{key:"keyupHandler",value:function(t){this.buttonElement.classList.remove("button_pressed")}},{key:"deactivateHandler",value:function(){this.buttonElement.classList.remove("button_pressed")}}]),e}();exports.default=i;
},{}],"xHVY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TYPES=exports.SHIFT=exports.LANG=exports.CAPSLOCK=void 0;var e=20;exports.CAPSLOCK=e;var t=16;exports.SHIFT=t;var d={NUMBER:"number",LETTER:"letter",CAPSLOCK:"capslock",BACKSPACE:"backspace",TAB:"tab",DEL:"del",SHIFT:"shift",CTRL:"ctrl",WIN:"win",ALT:"alt",ENTER:"enter",SPACE:"space",ARROW:"arrow",SYMBOL:"symbol"};exports.TYPES=d;var l={RUS:[{letter:"ё",additionalLetter:"Ё",keyCode:192,type:d.LETTER},{letter:"1",additionalLetter:"!",keyCode:49,type:d.NUMBER},{letter:"2",additionalLetter:'"',keyCode:50,type:d.NUMBER},{letter:"3",additionalLetter:"№",keyCode:51,type:d.NUMBER},{letter:"4",additionalLetter:";",keyCode:52,type:d.NUMBER},{letter:"5",additionalLetter:"%",keyCode:53,type:d.NUMBER},{letter:"6",additionalLetter:":",keyCode:54,type:d.NUMBER},{letter:"7",additionalLetter:"?",keyCode:55,type:d.NUMBER},{letter:"8",additionalLetter:"*",keyCode:56,type:d.NUMBER},{letter:"9",additionalLetter:"(",keyCode:57,type:d.NUMBER},{letter:"0",additionalLetter:")",keyCode:48,type:d.NUMBER},{letter:"-",additionalLetter:"_",keyCode:189,type:d.SYMBOL},{letter:"=",additionalLetter:"+",keyCode:187,type:d.SYMBOL},{letter:"backspace",additionalLetter:null,keyCode:8,type:d.BACKSPACE},{letter:"tab",additionalLetter:null,keyCode:9,type:d.TAB},{letter:"й",additionalLetter:"Й",keyCode:81,type:d.LETTER},{letter:"ц",additionalLetter:"Ц",keyCode:87,type:d.LETTER},{letter:"у",additionalLetter:"У",keyCode:69,type:d.LETTER},{letter:"к",additionalLetter:"К",keyCode:82,type:d.LETTER},{letter:"е",additionalLetter:"Е",keyCode:84,type:d.LETTER},{letter:"н",additionalLetter:"Н",keyCode:89,type:d.LETTER},{letter:"г",additionalLetter:"Г",keyCode:85,type:d.LETTER},{letter:"ш",additionalLetter:"Ш",keyCode:73,type:d.LETTER},{letter:"щ",additionalLetter:"Щ",keyCode:79,type:d.LETTER},{letter:"з",additionalLetter:"З",keyCode:80,type:d.LETTER},{letter:"х",additionalLetter:"Х",keyCode:219,type:d.LETTER},{letter:"ъ",additionalLetter:"Ъ",keyCode:221,type:d.LETTER},{letter:"\\",additionalLetter:"|",keyCode:220,type:d.SYMBOL},{letter:"del",additionalLetter:null,keyCode:46,type:d.DEL},{letter:"capslock",additionalLetter:null,keyCode:20,type:d.CAPSLOCK},{letter:"ф",additionalLetter:"Ф",keyCode:65,type:d.LETTER},{letter:"ы",additionalLetter:"Ы",keyCode:83,type:d.LETTER},{letter:"в",additionalLetter:"В",keyCode:68,type:d.LETTER},{letter:"а",additionalLetter:"А",keyCode:70,type:d.LETTER},{letter:"п",additionalLetter:"П",keyCode:71,type:d.LETTER},{letter:"р",additionalLetter:"Р",keyCode:72,type:d.LETTER},{letter:"о",additionalLetter:"О",keyCode:74,type:d.LETTER},{letter:"л",additionalLetter:"Л",keyCode:75,type:d.LETTER},{letter:"д",additionalLetter:"Д",keyCode:76,type:d.LETTER},{letter:"ж",additionalLetter:"Ж",keyCode:186,type:d.LETTER},{letter:"э",additionalLetter:"Э",keyCode:222,type:d.LETTER},{letter:"enter",additionalLetter:null,keyCode:13,type:d.ENTER},{letter:"shift",additionalLetter:null,keyCode:16,type:d.SHIFT},{letter:"я",additionalLetter:"Я",keyCode:90,type:d.LETTER},{letter:"ч",additionalLetter:"Ч",keyCode:88,type:d.LETTER},{letter:"с",additionalLetter:"С",keyCode:67,type:d.LETTER},{letter:"м",additionalLetter:"М",keyCode:86,type:d.LETTER},{letter:"и",additionalLetter:"И",keyCode:66,type:d.LETTER},{letter:"т",additionalLetter:"Т",keyCode:78,type:d.LETTER},{letter:"ь",additionalLetter:"Ь",keyCode:77,type:d.LETTER},{letter:"б",additionalLetter:"Б",keyCode:188,type:d.LETTER},{letter:"ю",additionalLetter:"Ю",keyCode:190,type:d.LETTER},{letter:".",additionalLetter:",",keyCode:191,type:d.SYMBOL},{letter:"↑",additionalLetter:"↑",keyCode:38,type:d.ARROW},{letter:"shift",additionalLetter:null,keyCode:16,type:d.SHIFT},{letter:"ctrl",additionalLetter:null,keyCode:17,type:d.CTRL},{letter:"win",additionalLetter:null,keyCode:91,type:d.WIN},{letter:"alt",additionalLetter:null,keyCode:18,type:d.ALT},{letter:" ",additionalLetter:" ",keyCode:32,type:d.SPACE},{letter:"alt",additionalLetter:null,keyCode:18,type:d.ALT},{letter:"←",additionalLetter:"←",keyCode:37,type:d.ARROW},{letter:"↓",additionalLetter:"↓",keyCode:40,type:d.ARROW},{letter:"→",additionalLetter:"→",keyCode:39,type:d.ARROW},{letter:"ctrl",additionalLetter:null,keyCode:17,type:d.CTRL}],EN:[{letter:"`",additionalLetter:"~",keyCode:192,type:d.SYMBOL},{letter:"1",additionalLetter:"!",keyCode:49,type:d.NUMBER},{letter:"2",additionalLetter:"@",keyCode:50,type:d.NUMBER},{letter:"3",additionalLetter:"№",keyCode:51,type:d.NUMBER},{letter:"4",additionalLetter:";",keyCode:52,type:d.NUMBER},{letter:"5",additionalLetter:"%",keyCode:53,type:d.NUMBER},{letter:"6",additionalLetter:":",keyCode:54,type:d.NUMBER},{letter:"7",additionalLetter:"?",keyCode:55,type:d.NUMBER},{letter:"8",additionalLetter:"*",keyCode:56,type:d.NUMBER},{letter:"9",additionalLetter:"(",keyCode:57,type:d.NUMBER},{letter:"0",additionalLetter:")",keyCode:48,type:d.NUMBER},{letter:"-",additionalLetter:"_",keyCode:189,type:d.SYMBOL},{letter:"=",additionalLetter:"+",keyCode:187,type:d.SYMBOL},{letter:"backspace",additionalLetter:null,keyCode:8,type:d.BACKSPACE},{letter:"tab",additionalLetter:null,keyCode:9,type:d.TAB},{letter:"q",additionalLetter:"Q",keyCode:81,type:d.LETTER},{letter:"w",additionalLetter:"W",keyCode:87,type:d.LETTER},{letter:"e",additionalLetter:"E",keyCode:69,type:d.LETTER},{letter:"r",additionalLetter:"R",keyCode:82,type:d.LETTER},{letter:"t",additionalLetter:"T",keyCode:84,type:d.LETTER},{letter:"y",additionalLetter:"Y",keyCode:89,type:d.LETTER},{letter:"u",additionalLetter:"U",keyCode:85,type:d.LETTER},{letter:"i",additionalLetter:"I",keyCode:73,type:d.LETTER},{letter:"o",additionalLetter:"O",keyCode:79,type:d.LETTER},{letter:"p",additionalLetter:"P",keyCode:80,type:d.LETTER},{letter:"[",additionalLetter:"{",keyCode:219,type:d.SYMBOL},{letter:"]",additionalLetter:"}",keyCode:221,type:d.SYMBOL},{letter:"\\",additionalLetter:"|",keyCode:220,type:d.SYMBOL},{letter:"del",additionalLetter:null,keyCode:46,type:d.DEL},{letter:"capslock",additionalLetter:null,keyCode:20,type:d.CAPSLOCK},{letter:"a",additionalLetter:"A",keyCode:65,type:d.LETTER},{letter:"s",additionalLetter:"S",keyCode:83,type:d.LETTER},{letter:"d",additionalLetter:"D",keyCode:68,type:d.LETTER},{letter:"f",additionalLetter:"F",keyCode:70,type:d.LETTER},{letter:"g",additionalLetter:"G",keyCode:71,type:d.LETTER},{letter:"h",additionalLetter:"H",keyCode:72,type:d.LETTER},{letter:"j",additionalLetter:"J",keyCode:74,type:d.LETTER},{letter:"k",additionalLetter:"K",keyCode:75,type:d.LETTER},{letter:"l",additionalLetter:"L",keyCode:76,type:d.LETTER},{letter:";",additionalLetter:":",keyCode:186,type:d.SYMBOL},{letter:"'",additionalLetter:'"',keyCode:222,type:d.SYMBOL},{letter:"enter",additionalLetter:null,keyCode:13,type:d.ENTER},{letter:"shift",additionalLetter:null,keyCode:16,type:d.SHIFT},{letter:"z",additionalLetter:"Z",keyCode:90,type:d.LETTER},{letter:"x",additionalLetter:"X",keyCode:88,type:d.LETTER},{letter:"c",additionalLetter:"C",keyCode:67,type:d.LETTER},{letter:"v",additionalLetter:"V",keyCode:86,type:d.LETTER},{letter:"b",additionalLetter:"B",keyCode:66,type:d.LETTER},{letter:"n",additionalLetter:"N",keyCode:78,type:d.LETTER},{letter:"m",additionalLetter:"M",keyCode:77,type:d.LETTER},{letter:",",additionalLetter:"<",keyCode:188,type:d.SYMBOL},{letter:".",additionalLetter:">",keyCode:190,type:d.SYMBOL},{letter:"/",additionalLetter:"?",keyCode:191,type:d.SYMBOL},{letter:"↑",additionalLetter:"↑",keyCode:38,type:d.ARROW},{letter:"shift",additionalLetter:null,keyCode:16,type:d.SHIFT},{letter:"ctrl",additionalLetter:null,keyCode:17,type:d.CTRL},{letter:"win",additionalLetter:null,keyCode:91,type:d.WIN},{letter:"alt",additionalLetter:null,keyCode:18,type:d.ALT},{letter:" ",additionalLetter:" ",keyCode:32,type:d.SPACE},{letter:"alt",additionalLetter:null,keyCode:18,type:d.ALT},{letter:"←",additionalLetter:"←",keyCode:37,type:d.ARROW},{letter:"↓",additionalLetter:"↓",keyCode:40,type:d.ARROW},{letter:"→",additionalLetter:"→",keyCode:39,type:d.ARROW},{letter:"ctrl",additionalLetter:null,keyCode:17,type:d.CTRL}]};exports.LANG=l;
},{}],"dYuo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../index"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=p();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t,e,u,c){return n(this,o),r.call(this,t,e,u,c)}return u(o,[{key:"keydownHandler",value:function(t){this.buttonElement.classList.toggle("button_pressed")}},{key:"keyupHandler",value:function(t){}},{key:"deactivateHandler",value:function(){}}]),o}();exports.default=y;
},{"../index":"uFvr"}],"pnXh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../index"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=s();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t,e,u,c){return n(this,o),r.call(this,t,e,u,c)}return u(o,[{key:"keydownHandler",value:function(t){this.buttonElement.classList.add("button_pressed"),document.dispatchEvent(new CustomEvent("textarea:remove"))}}]),o}();exports.default=y;
},{"../index":"uFvr"}],"DtK6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../index"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=s();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){i(o,t.default);var r=f(o);function o(t,e,u,i){return n(this,o),r.call(this,t,e,u,i)}return u(o,[{key:"keydownHandler",value:function(t){this.buttonElement.classList.add("button_pressed"),document.dispatchEvent(new CustomEvent("textarea:input",{detail:{letter:t.detail.isShift?this.additionalLetter:this.letter}}))}}]),o}();exports.default=y;
},{"../index":"uFvr"}],"PkjD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../index"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=p();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t,e,u,c){return n(this,o),r.call(this,t,e,u,c)}return u(o,[{key:"keydownHandler",value:function(t){this.buttonElement.classList.add("button_pressed")}}]),o}();exports.default=y;
},{"../index":"uFvr"}],"mprK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../index"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=p();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t,e,u,c){return n(this,o),r.call(this,t,e,u,c)}return u(o,[{key:"keydownHandler",value:function(t){this.buttonElement.classList.add("button_pressed"),document.dispatchEvent(new CustomEvent("textarea:input",{detail:{letter:"\n"}}))}}]),o}();exports.default=y;
},{"../index":"uFvr"}],"DeGX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../index"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=s();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t,e,u,c){return n(this,o),r.call(this,t,e,u,c)}return u(o,[{key:"keydownHandler",value:function(t){this.buttonElement.classList.add("button_pressed"),document.dispatchEvent(new CustomEvent("textarea:del"))}}]),o}();exports.default=y;
},{"../index":"uFvr"}],"ltxl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../index"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=s();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t,e,u,c){return n(this,o),r.call(this,t,e,u,c)}return u(o,[{key:"keydownHandler",value:function(t){this.buttonElement.classList.add("button_pressed"),document.dispatchEvent(new CustomEvent("textarea:tab"))}}]),o}();exports.default=y;
},{"../index":"uFvr"}],"ExnZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=y(require("../button")),t=require("../data"),n=y(require("../button/capslock")),o=y(require("../button/backspace")),u=y(require("../button/number")),r=y(require("../button/shift")),a=y(require("../button/enter")),s=y(require("../button/del")),i=y(require("../button/tab")),d=y(require("../button/alt")),c=y(require("../button/ctrl")),l=y(require("../button/win")),h=y(require("../button/symbol"));function y(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var b=function(y,k,f,v){return f===t.TYPES.CAPSLOCK?new n.default(y,k,f,v):f===t.TYPES.BACKSPACE?new o.default(y,k,f,v):f===t.TYPES.NUMBER?new u.default(y,k,f,v):f===t.TYPES.SHIFT?new r.default(y,k,f,v):f===t.TYPES.ENTER?new a.default(y,k,f,v):f===t.TYPES.DEL?new s.default(y,k,f,v):f===t.TYPES.TAB?new i.default(y,k,f,v):f===t.TYPES.ALT?new d.default(y,k,f,v):f===t.TYPES.CTRL?new c.default(y,k,f,v):f===t.TYPES.WIN?new l.default(y,k,f,v):f===t.TYPES.SYMBOL?new h.default(y,k,f,v):new e.default(y,k,f,v)},p=function(){function e(t){k(this,e),this.buttons=[];for(var n=0;n<t.length;n++)this.buttons.push(b(t[n].letter,t[n].additionalLetter,t[n].type,t[n].keyCode));this.keyboard=document.createElement("div"),this.keyboard.classList.add("keyboard"),this.capsLock=!1,this.shift=!1}return v(e,[{key:"render",value:function(){this.clear(),document.querySelector(".container").append(this.keyboard);for(var e=0;e<this.buttons.length;e++)this.keyboard.append(this.buttons[e].render());this.attachEvents()}},{key:"clear",value:function(){var e=document.querySelector(".keyboard");e&&e.remove()}},{key:"attachEvents",value:function(){this.keydownHandler=this.keydownHandler.bind(this),this.keyupHandler=this.keyupHandler.bind(this),this.mousedownHandler=this.mousedownHandler.bind(this),document.addEventListener("keydown",this.keydownHandler),document.addEventListener("keyup",this.keyupHandler),this.keyboard.addEventListener("mousedown",this.mousedownHandler),this.keyboard.addEventListener("mouseup",this.mouseupHandler)}},{key:"detachEvents",value:function(){document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("keyup",this.keyupHandler),this.keyboard.removeEventListener("mousedown",this.mousedownHandler),this.keyboard.removeEventListener("mouseup",this.mouseupHandler);for(var e=0;e<this.buttons.length;e++)this.buttons[e].detachEvents()}},{key:"keydownHandler",value:function(e){e.altKey&&e.ctrlKey||(e.preventDefault(),t.CAPSLOCK===e.keyCode&&(this.capsLock=!this.capsLock),t.SHIFT===e.keyCode&&(this.shift=!0),document.dispatchEvent(new CustomEvent("keydown:".concat(e.keyCode),{detail:{isShift:this.shift,isCapsLock:this.capsLock}})))}},{key:"keyupHandler",value:function(e){t.SHIFT===e.keyCode&&(this.shift=!1),document.dispatchEvent(new CustomEvent("keyup:".concat(e.keyCode)))}},{key:"mousedownHandler",value:function(e){if(e.target.closest(".button")){var n=+e.target.closest(".button").getAttribute("data-key-code");t.CAPSLOCK===n&&(this.capsLock=!this.capsLock),document.dispatchEvent(new CustomEvent("button:deactivate")),document.dispatchEvent(new CustomEvent("keydown:".concat(n),{detail:{isShift:this.shift,isCapsLock:this.capsLock}}))}}},{key:"mouseupHandler",value:function(e){var t=e.target.closest(".button");t&&document.dispatchEvent(new CustomEvent("keyup:".concat(t.getAttribute("data-key-code"))))}}]),e}();exports.default=p;
},{"../button":"uFvr","../data":"xHVY","../button/capslock":"dYuo","../button/backspace":"pnXh","../button/number":"DtK6","../button/shift":"PkjD","../button/enter":"mprK","../button/del":"DeGX","../button/tab":"ltxl","../button/alt":"PkjD","../button/ctrl":"PkjD","../button/win":"PkjD","../button/symbol":"DtK6"}],"WjUY":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function t(){e(this,t)}return a(t,[{key:"render",value:function(){this.textarea=document.createElement("textarea"),this.textarea.classList.add("textarea"),document.querySelector(".container").append(this.textarea),this.attachEvents()}},{key:"attachEvents",value:function(){document.addEventListener("textarea:input",this.inputHandler.bind(this)),document.addEventListener("textarea:remove",this.removeHandler.bind(this)),document.addEventListener("textarea:del",this.delHandler.bind(this)),document.addEventListener("textarea:tab",this.tabHandler.bind(this))}},{key:"inputHandler",value:function(e){this.textarea.value+=e.detail.letter}},{key:"removeHandler",value:function(){this.textarea.value=this.textarea.value.substring(0,this.textarea.value.length-1)}},{key:"delHandler",value:function(){var e=this.textarea.value,t=this.textarea.selectionStart;if(t>0&&t<=e.length){var a=e.slice(0,t),n=e.slice(t+1,e.length);this.textarea.value=a+n,this.textarea.setSelectionRange(t,t)}}},{key:"tabHandler",value:function(){this.textarea.value=this.textarea.value+"    ",this.textarea.setSelectionRange(this.textarea.value.length-1,this.textarea.value.length-1)}}]),t}();exports.default=n;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=a(require("./keyboard")),t=require("./data"),n=a(require("./textarea"));function a(e){return e&&e.__esModule?e:{default:e}}var r=function(n){var a=new e.default(t.LANG[n]);return a.render(),localStorage.setItem("lang",n),a};document.addEventListener("DOMContentLoaded",function(){var e=document.createElement("div");e.classList.add("container"),document.body.append(e),e.append("Клавиатура сделана в Windows. Для переключения языка комбинация: ctrl + alt"),(new n.default).render();var t=localStorage.getItem("lang")||"RUS",a=r(t);document.addEventListener("keydown",function(e){e.altKey&&e.ctrlKey&&(t="RUS"===t?"EN":"RUS",a.detachEvents(),a=r(t))})});
},{"./keyboard":"ExnZ","./data":"xHVY","./textarea":"WjUY"}]},{},["Focm"], null)
//# sourceMappingURL=/virtual-keyboard/src.bd73aac0.js.map