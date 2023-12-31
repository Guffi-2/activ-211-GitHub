import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/vue-burger-menu/dist/vue-burger-menu.common.js
var require_vue_burger_menu_common = __commonJS({
  "node_modules/vue-burger-menu/dist/vue-burger-menu.common.js"(exports, module) {
    module.exports = /******/
    function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          /******/
          i: moduleId,
          /******/
          l: false,
          /******/
          exports: {}
          /******/
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, (function(key2) {
              return value[key2];
            }).bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? (
          /******/
          function getDefault() {
            return module2["default"];
          }
        ) : (
          /******/
          function getModuleExports() {
            return module2;
          }
        );
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = "fb15");
    }({
      /***/
      "01f9": (
        /***/
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var LIBRARY = __webpack_require__("2d00");
          var $export = __webpack_require__("5ca1");
          var redefine = __webpack_require__("2aba");
          var hide = __webpack_require__("32e9");
          var Iterators = __webpack_require__("84f2");
          var $iterCreate = __webpack_require__("41a0");
          var setToStringTag = __webpack_require__("7f20");
          var getPrototypeOf = __webpack_require__("38fd");
          var ITERATOR = __webpack_require__("2b4c")("iterator");
          var BUGGY = !([].keys && "next" in [].keys());
          var FF_ITERATOR = "@@iterator";
          var KEYS = "keys";
          var VALUES = "values";
          var returnThis = function() {
            return this;
          };
          module2.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
              if (!BUGGY && kind in proto)
                return proto[kind];
              switch (kind) {
                case KEYS:
                  return function keys() {
                    return new Constructor(this, kind);
                  };
                case VALUES:
                  return function values() {
                    return new Constructor(this, kind);
                  };
              }
              return function entries() {
                return new Constructor(this, kind);
              };
            };
            var TAG = NAME + " Iterator";
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
            var $default = $native || getMethod(DEFAULT);
            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
            var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            if ($anyNative) {
              IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
              if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                setToStringTag(IteratorPrototype, TAG, true);
                if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
                  hide(IteratorPrototype, ITERATOR, returnThis);
              }
            }
            if (DEF_VALUES && $native && $native.name !== VALUES) {
              VALUES_BUG = true;
              $default = function values() {
                return $native.call(this);
              };
            }
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
              hide(proto, ITERATOR, $default);
            }
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
              methods = {
                values: DEF_VALUES ? $default : getMethod(VALUES),
                keys: IS_SET ? $default : getMethod(KEYS),
                entries: $entries
              };
              if (FORCED)
                for (key in methods) {
                  if (!(key in proto))
                    redefine(proto, key, methods[key]);
                }
              else
                $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
          };
        }
      ),
      /***/
      "097d": (
        /***/
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var $export = __webpack_require__("5ca1");
          var core = __webpack_require__("8378");
          var global = __webpack_require__("7726");
          var speciesConstructor = __webpack_require__("ebd6");
          var promiseResolve = __webpack_require__("bcaa");
          $export($export.P + $export.R, "Promise", { "finally": function(onFinally) {
            var C = speciesConstructor(this, core.Promise || global.Promise);
            var isFunction = typeof onFinally == "function";
            return this.then(
              isFunction ? function(x) {
                return promiseResolve(C, onFinally()).then(function() {
                  return x;
                });
              } : onFinally,
              isFunction ? function(e) {
                return promiseResolve(C, onFinally()).then(function() {
                  throw e;
                });
              } : onFinally
            );
          } });
        }
      ),
      /***/
      "0d58": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var $keys = __webpack_require__("ce10");
          var enumBugKeys = __webpack_require__("e11e");
          module2.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
          };
        }
      ),
      /***/
      "1495": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var dP = __webpack_require__("86cc");
          var anObject = __webpack_require__("cb7c");
          var getKeys = __webpack_require__("0d58");
          module2.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while (length > i)
              dP.f(O, P = keys[i++], Properties[P]);
            return O;
          };
        }
      ),
      /***/
      "1991": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var ctx = __webpack_require__("9b43");
          var invoke = __webpack_require__("31f4");
          var html = __webpack_require__("fab2");
          var cel = __webpack_require__("230e");
          var global = __webpack_require__("7726");
          var process = global.process;
          var setTask = global.setImmediate;
          var clearTask = global.clearImmediate;
          var MessageChannel = global.MessageChannel;
          var Dispatch = global.Dispatch;
          var counter = 0;
          var queue = {};
          var ONREADYSTATECHANGE = "onreadystatechange";
          var defer, channel, port;
          var run = function() {
            var id = +this;
            if (queue.hasOwnProperty(id)) {
              var fn = queue[id];
              delete queue[id];
              fn();
            }
          };
          var listener = function(event) {
            run.call(event.data);
          };
          if (!setTask || !clearTask) {
            setTask = function setImmediate(fn) {
              var args = [];
              var i = 1;
              while (arguments.length > i)
                args.push(arguments[i++]);
              queue[++counter] = function() {
                invoke(typeof fn == "function" ? fn : Function(fn), args);
              };
              defer(counter);
              return counter;
            };
            clearTask = function clearImmediate(id) {
              delete queue[id];
            };
            if (__webpack_require__("2d95")(process) == "process") {
              defer = function(id) {
                process.nextTick(ctx(run, id, 1));
              };
            } else if (Dispatch && Dispatch.now) {
              defer = function(id) {
                Dispatch.now(ctx(run, id, 1));
              };
            } else if (MessageChannel) {
              channel = new MessageChannel();
              port = channel.port2;
              channel.port1.onmessage = listener;
              defer = ctx(port.postMessage, port, 1);
            } else if (global.addEventListener && typeof postMessage == "function" && !global.importScripts) {
              defer = function(id) {
                global.postMessage(id + "", "*");
              };
              global.addEventListener("message", listener, false);
            } else if (ONREADYSTATECHANGE in cel("script")) {
              defer = function(id) {
                html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
                  html.removeChild(this);
                  run.call(id);
                };
              };
            } else {
              defer = function(id) {
                setTimeout(ctx(run, id, 1), 0);
              };
            }
          }
          module2.exports = {
            set: setTask,
            clear: clearTask
          };
        }
      ),
      /***/
      "1eb2": (
        /***/
        function(module2, exports2, __webpack_require__) {
          if (typeof window !== "undefined") {
            var i;
            if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
              __webpack_require__.p = i[1];
            }
          }
        }
      ),
      /***/
      "1fa8": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__("cb7c");
          module2.exports = function(iterator, fn, value, entries) {
            try {
              return entries ? fn(anObject(value)[0], value[1]) : fn(value);
            } catch (e) {
              var ret = iterator["return"];
              if (ret !== void 0)
                anObject(ret.call(iterator));
              throw e;
            }
          };
        }
      ),
      /***/
      "230e": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var isObject = __webpack_require__("d3f4");
          var document2 = __webpack_require__("7726").document;
          var is = isObject(document2) && isObject(document2.createElement);
          module2.exports = function(it) {
            return is ? document2.createElement(it) : {};
          };
        }
      ),
      /***/
      "2350": (
        /***/
        function(module2, exports2) {
          module2.exports = function(useSourceMap) {
            var list = [];
            list.toString = function toString() {
              return this.map(function(item) {
                var content = cssWithMappingToString(item, useSourceMap);
                if (item[2]) {
                  return "@media " + item[2] + "{" + content + "}";
                } else {
                  return content;
                }
              }).join("");
            };
            list.i = function(modules, mediaQuery) {
              if (typeof modules === "string")
                modules = [[null, modules, ""]];
              var alreadyImportedModules = {};
              for (var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if (typeof id === "number")
                  alreadyImportedModules[id] = true;
              }
              for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                  if (mediaQuery && !item[2]) {
                    item[2] = mediaQuery;
                  } else if (mediaQuery) {
                    item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                  }
                  list.push(item);
                }
              }
            };
            return list;
          };
          function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || "";
            var cssMapping = item[3];
            if (!cssMapping) {
              return content;
            }
            if (useSourceMap && typeof btoa === "function") {
              var sourceMapping = toComment(cssMapping);
              var sourceURLs = cssMapping.sources.map(function(source) {
                return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
              });
              return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
            }
            return [content].join("\n");
          }
          function toComment(sourceMap) {
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
            var data = "sourceMappingURL=data:application/json;charset=utf-8;base64," + base64;
            return "/*# " + data + " */";
          }
        }
      ),
      /***/
      "23c6": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var cof = __webpack_require__("2d95");
          var TAG = __webpack_require__("2b4c")("toStringTag");
          var ARG = cof(function() {
            return arguments;
          }()) == "Arguments";
          var tryGet = function(it, key) {
            try {
              return it[key];
            } catch (e) {
            }
          };
          module2.exports = function(it) {
            var O, T, B;
            return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
          };
        }
      ),
      /***/
      "27ee": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var classof = __webpack_require__("23c6");
          var ITERATOR = __webpack_require__("2b4c")("iterator");
          var Iterators = __webpack_require__("84f2");
          module2.exports = __webpack_require__("8378").getIteratorMethod = function(it) {
            if (it != void 0)
              return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
          };
        }
      ),
      /***/
      "2aba": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var global = __webpack_require__("7726");
          var hide = __webpack_require__("32e9");
          var has = __webpack_require__("69a8");
          var SRC = __webpack_require__("ca5a")("src");
          var TO_STRING = "toString";
          var $toString = Function[TO_STRING];
          var TPL = ("" + $toString).split(TO_STRING);
          __webpack_require__("8378").inspectSource = function(it) {
            return $toString.call(it);
          };
          (module2.exports = function(O, key, val, safe) {
            var isFunction = typeof val == "function";
            if (isFunction)
              has(val, "name") || hide(val, "name", key);
            if (O[key] === val)
              return;
            if (isFunction)
              has(val, SRC) || hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
            if (O === global) {
              O[key] = val;
            } else if (!safe) {
              delete O[key];
              hide(O, key, val);
            } else if (O[key]) {
              O[key] = val;
            } else {
              hide(O, key, val);
            }
          })(Function.prototype, TO_STRING, function toString() {
            return typeof this == "function" && this[SRC] || $toString.call(this);
          });
        }
      ),
      /***/
      "2aeb": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__("cb7c");
          var dPs = __webpack_require__("1495");
          var enumBugKeys = __webpack_require__("e11e");
          var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
          var Empty = function() {
          };
          var PROTOTYPE = "prototype";
          var createDict = function() {
            var iframe = __webpack_require__("230e")("iframe");
            var i = enumBugKeys.length;
            var lt = "<";
            var gt = ">";
            var iframeDocument;
            iframe.style.display = "none";
            __webpack_require__("fab2").appendChild(iframe);
            iframe.src = "javascript:";
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--)
              delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
          };
          module2.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
              Empty[PROTOTYPE] = anObject(O);
              result = new Empty();
              Empty[PROTOTYPE] = null;
              result[IE_PROTO] = O;
            } else
              result = createDict();
            return Properties === void 0 ? result : dPs(result, Properties);
          };
        }
      ),
      /***/
      "2b4c": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var store = __webpack_require__("5537")("wks");
          var uid = __webpack_require__("ca5a");
          var Symbol2 = __webpack_require__("7726").Symbol;
          var USE_SYMBOL = typeof Symbol2 == "function";
          var $exports = module2.exports = function(name) {
            return store[name] || (store[name] = USE_SYMBOL && Symbol2[name] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
          };
          $exports.store = store;
        }
      ),
      /***/
      "2d00": (
        /***/
        function(module2, exports2) {
          module2.exports = false;
        }
      ),
      /***/
      "2d95": (
        /***/
        function(module2, exports2) {
          var toString = {}.toString;
          module2.exports = function(it) {
            return toString.call(it).slice(8, -1);
          };
        }
      ),
      /***/
      "31f4": (
        /***/
        function(module2, exports2) {
          module2.exports = function(fn, args, that) {
            var un = that === void 0;
            switch (args.length) {
              case 0:
                return un ? fn() : fn.call(that);
              case 1:
                return un ? fn(args[0]) : fn.call(that, args[0]);
              case 2:
                return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
              case 3:
                return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
              case 4:
                return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
            }
            return fn.apply(that, args);
          };
        }
      ),
      /***/
      "32e9": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var dP = __webpack_require__("86cc");
          var createDesc = __webpack_require__("4630");
          module2.exports = __webpack_require__("9e1e") ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
          } : function(object, key, value) {
            object[key] = value;
            return object;
          };
        }
      ),
      /***/
      "33a4": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var Iterators = __webpack_require__("84f2");
          var ITERATOR = __webpack_require__("2b4c")("iterator");
          var ArrayProto = Array.prototype;
          module2.exports = function(it) {
            return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
          };
        }
      ),
      /***/
      "38fd": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var has = __webpack_require__("69a8");
          var toObject = __webpack_require__("4bf8");
          var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
          var ObjectProto = Object.prototype;
          module2.exports = Object.getPrototypeOf || function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO))
              return O[IE_PROTO];
            if (typeof O.constructor == "function" && O instanceof O.constructor) {
              return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
          };
        }
      ),
      /***/
      "41a0": (
        /***/
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var create = __webpack_require__("2aeb");
          var descriptor = __webpack_require__("4630");
          var setToStringTag = __webpack_require__("7f20");
          var IteratorPrototype = {};
          __webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")("iterator"), function() {
            return this;
          });
          module2.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
            setToStringTag(Constructor, NAME + " Iterator");
          };
        }
      ),
      /***/
      "4588": (
        /***/
        function(module2, exports2) {
          var ceil = Math.ceil;
          var floor = Math.floor;
          module2.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
          };
        }
      ),
      /***/
      "4630": (
        /***/
        function(module2, exports2) {
          module2.exports = function(bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value
            };
          };
        }
      ),
      /***/
      "499e": (
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          function listToStyles(parentId, list) {
            var styles = [];
            var newStyles = {};
            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var id = item[0];
              var css = item[1];
              var media = item[2];
              var sourceMap = item[3];
              var part = {
                id: parentId + ":" + i,
                css,
                media,
                sourceMap
              };
              if (!newStyles[id]) {
                styles.push(newStyles[id] = { id, parts: [part] });
              } else {
                newStyles[id].parts.push(part);
              }
            }
            return styles;
          }
          __webpack_require__.d(__webpack_exports__, "default", function() {
            return addStylesClient;
          });
          var hasDocument = typeof document !== "undefined";
          if (typeof DEBUG !== "undefined" && DEBUG) {
            if (!hasDocument) {
              throw new Error(
                "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
              );
            }
          }
          var stylesInDom = {
            /*
              [id: number]: {
                id: number,
                refs: number,
                parts: Array<(obj?: StyleObjectPart) => void>
              }
            */
          };
          var head = hasDocument && (document.head || document.getElementsByTagName("head")[0]);
          var singletonElement = null;
          var singletonCounter = 0;
          var isProduction = false;
          var noop = function() {
          };
          var options = null;
          var ssrIdKey = "data-vue-ssr-id";
          var isOldIE = typeof navigator !== "undefined" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function addStylesClient(parentId, list, _isProduction, _options) {
            isProduction = _isProduction;
            options = _options || {};
            var styles = listToStyles(parentId, list);
            addStylesToDom(styles);
            return function update(newList) {
              var mayRemove = [];
              for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                domStyle.refs--;
                mayRemove.push(domStyle);
              }
              if (newList) {
                styles = listToStyles(parentId, newList);
                addStylesToDom(styles);
              } else {
                styles = [];
              }
              for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (domStyle.refs === 0) {
                  for (var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j]();
                  }
                  delete stylesInDom[domStyle.id];
                }
              }
            };
          }
          function addStylesToDom(styles) {
            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];
              if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) {
                  domStyle.parts[j](item.parts[j]);
                }
                for (; j < item.parts.length; j++) {
                  domStyle.parts.push(addStyle(item.parts[j]));
                }
                if (domStyle.parts.length > item.parts.length) {
                  domStyle.parts.length = item.parts.length;
                }
              } else {
                var parts = [];
                for (var j = 0; j < item.parts.length; j++) {
                  parts.push(addStyle(item.parts[j]));
                }
                stylesInDom[item.id] = { id: item.id, refs: 1, parts };
              }
            }
          }
          function createStyleElement() {
            var styleElement = document.createElement("style");
            styleElement.type = "text/css";
            head.appendChild(styleElement);
            return styleElement;
          }
          function addStyle(obj) {
            var update, remove;
            var styleElement = document.querySelector("style[" + ssrIdKey + '~="' + obj.id + '"]');
            if (styleElement) {
              if (isProduction) {
                return noop;
              } else {
                styleElement.parentNode.removeChild(styleElement);
              }
            }
            if (isOldIE) {
              var styleIndex = singletonCounter++;
              styleElement = singletonElement || (singletonElement = createStyleElement());
              update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
              remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
            } else {
              styleElement = createStyleElement();
              update = applyToTag.bind(null, styleElement);
              remove = function() {
                styleElement.parentNode.removeChild(styleElement);
              };
            }
            update(obj);
            return function updateStyle(newObj) {
              if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                  return;
                }
                update(obj = newObj);
              } else {
                remove();
              }
            };
          }
          var replaceText = function() {
            var textStore = [];
            return function(index, replacement) {
              textStore[index] = replacement;
              return textStore.filter(Boolean).join("\n");
            };
          }();
          function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (styleElement.styleSheet) {
              styleElement.styleSheet.cssText = replaceText(index, css);
            } else {
              var cssNode = document.createTextNode(css);
              var childNodes = styleElement.childNodes;
              if (childNodes[index])
                styleElement.removeChild(childNodes[index]);
              if (childNodes.length) {
                styleElement.insertBefore(cssNode, childNodes[index]);
              } else {
                styleElement.appendChild(cssNode);
              }
            }
          }
          function applyToTag(styleElement, obj) {
            var css = obj.css;
            var media = obj.media;
            var sourceMap = obj.sourceMap;
            if (media) {
              styleElement.setAttribute("media", media);
            }
            if (options.ssrId) {
              styleElement.setAttribute(ssrIdKey, obj.id);
            }
            if (sourceMap) {
              css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */";
              css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
            }
            if (styleElement.styleSheet) {
              styleElement.styleSheet.cssText = css;
            } else {
              while (styleElement.firstChild) {
                styleElement.removeChild(styleElement.firstChild);
              }
              styleElement.appendChild(document.createTextNode(css));
            }
          }
        }
      ),
      /***/
      "4a59": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var ctx = __webpack_require__("9b43");
          var call = __webpack_require__("1fa8");
          var isArrayIter = __webpack_require__("33a4");
          var anObject = __webpack_require__("cb7c");
          var toLength = __webpack_require__("9def");
          var getIterFn = __webpack_require__("27ee");
          var BREAK = {};
          var RETURN = {};
          var exports2 = module2.exports = function(iterable, entries, fn, that, ITERATOR) {
            var iterFn = ITERATOR ? function() {
              return iterable;
            } : getIterFn(iterable);
            var f = ctx(fn, that, entries ? 2 : 1);
            var index = 0;
            var length, step, iterator, result;
            if (typeof iterFn != "function")
              throw TypeError(iterable + " is not iterable!");
            if (isArrayIter(iterFn))
              for (length = toLength(iterable.length); length > index; index++) {
                result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                if (result === BREAK || result === RETURN)
                  return result;
              }
            else
              for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
                result = call(iterator, f, step.value, entries);
                if (result === BREAK || result === RETURN)
                  return result;
              }
          };
          exports2.BREAK = BREAK;
          exports2.RETURN = RETURN;
        }
      ),
      /***/
      "4bf8": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var defined = __webpack_require__("be13");
          module2.exports = function(it) {
            return Object(defined(it));
          };
        }
      ),
      /***/
      "551c": (
        /***/
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var LIBRARY = __webpack_require__("2d00");
          var global = __webpack_require__("7726");
          var ctx = __webpack_require__("9b43");
          var classof = __webpack_require__("23c6");
          var $export = __webpack_require__("5ca1");
          var isObject = __webpack_require__("d3f4");
          var aFunction = __webpack_require__("d8e8");
          var anInstance = __webpack_require__("f605");
          var forOf = __webpack_require__("4a59");
          var speciesConstructor = __webpack_require__("ebd6");
          var task = __webpack_require__("1991").set;
          var microtask = __webpack_require__("8079")();
          var newPromiseCapabilityModule = __webpack_require__("a5b8");
          var perform = __webpack_require__("9c80");
          var userAgent = __webpack_require__("a25f");
          var promiseResolve = __webpack_require__("bcaa");
          var PROMISE = "Promise";
          var TypeError2 = global.TypeError;
          var process = global.process;
          var versions = process && process.versions;
          var v8 = versions && versions.v8 || "";
          var $Promise = global[PROMISE];
          var isNode = classof(process) == "process";
          var empty = function() {
          };
          var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
          var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
          var USE_NATIVE = !!function() {
            try {
              var promise = $Promise.resolve(1);
              var FakePromise = (promise.constructor = {})[__webpack_require__("2b4c")("species")] = function(exec) {
                exec(empty, empty);
              };
              return (isNode || typeof PromiseRejectionEvent == "function") && promise.then(empty) instanceof FakePromise && v8.indexOf("6.6") !== 0 && userAgent.indexOf("Chrome/66") === -1;
            } catch (e) {
            }
          }();
          var isThenable = function(it) {
            var then;
            return isObject(it) && typeof (then = it.then) == "function" ? then : false;
          };
          var notify = function(promise, isReject) {
            if (promise._n)
              return;
            promise._n = true;
            var chain = promise._c;
            microtask(function() {
              var value = promise._v;
              var ok = promise._s == 1;
              var i = 0;
              var run = function(reaction) {
                var handler = ok ? reaction.ok : reaction.fail;
                var resolve = reaction.resolve;
                var reject = reaction.reject;
                var domain = reaction.domain;
                var result, then, exited;
                try {
                  if (handler) {
                    if (!ok) {
                      if (promise._h == 2)
                        onHandleUnhandled(promise);
                      promise._h = 1;
                    }
                    if (handler === true)
                      result = value;
                    else {
                      if (domain)
                        domain.enter();
                      result = handler(value);
                      if (domain) {
                        domain.exit();
                        exited = true;
                      }
                    }
                    if (result === reaction.promise) {
                      reject(TypeError2("Promise-chain cycle"));
                    } else if (then = isThenable(result)) {
                      then.call(result, resolve, reject);
                    } else
                      resolve(result);
                  } else
                    reject(value);
                } catch (e) {
                  if (domain && !exited)
                    domain.exit();
                  reject(e);
                }
              };
              while (chain.length > i)
                run(chain[i++]);
              promise._c = [];
              promise._n = false;
              if (isReject && !promise._h)
                onUnhandled(promise);
            });
          };
          var onUnhandled = function(promise) {
            task.call(global, function() {
              var value = promise._v;
              var unhandled = isUnhandled(promise);
              var result, handler, console;
              if (unhandled) {
                result = perform(function() {
                  if (isNode) {
                    process.emit("unhandledRejection", value, promise);
                  } else if (handler = global.onunhandledrejection) {
                    handler({ promise, reason: value });
                  } else if ((console = global.console) && console.error) {
                    console.error("Unhandled promise rejection", value);
                  }
                });
                promise._h = isNode || isUnhandled(promise) ? 2 : 1;
              }
              promise._a = void 0;
              if (unhandled && result.e)
                throw result.v;
            });
          };
          var isUnhandled = function(promise) {
            return promise._h !== 1 && (promise._a || promise._c).length === 0;
          };
          var onHandleUnhandled = function(promise) {
            task.call(global, function() {
              var handler;
              if (isNode) {
                process.emit("rejectionHandled", promise);
              } else if (handler = global.onrejectionhandled) {
                handler({ promise, reason: promise._v });
              }
            });
          };
          var $reject = function(value) {
            var promise = this;
            if (promise._d)
              return;
            promise._d = true;
            promise = promise._w || promise;
            promise._v = value;
            promise._s = 2;
            if (!promise._a)
              promise._a = promise._c.slice();
            notify(promise, true);
          };
          var $resolve = function(value) {
            var promise = this;
            var then;
            if (promise._d)
              return;
            promise._d = true;
            promise = promise._w || promise;
            try {
              if (promise === value)
                throw TypeError2("Promise can't be resolved itself");
              if (then = isThenable(value)) {
                microtask(function() {
                  var wrapper = { _w: promise, _d: false };
                  try {
                    then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                  } catch (e) {
                    $reject.call(wrapper, e);
                  }
                });
              } else {
                promise._v = value;
                promise._s = 1;
                notify(promise, false);
              }
            } catch (e) {
              $reject.call({ _w: promise, _d: false }, e);
            }
          };
          if (!USE_NATIVE) {
            $Promise = function Promise2(executor) {
              anInstance(this, $Promise, PROMISE, "_h");
              aFunction(executor);
              Internal.call(this);
              try {
                executor(ctx($resolve, this, 1), ctx($reject, this, 1));
              } catch (err) {
                $reject.call(this, err);
              }
            };
            Internal = function Promise2(executor) {
              this._c = [];
              this._a = void 0;
              this._s = 0;
              this._d = false;
              this._v = void 0;
              this._h = 0;
              this._n = false;
            };
            Internal.prototype = __webpack_require__("dcbc")($Promise.prototype, {
              // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
              then: function then(onFulfilled, onRejected) {
                var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
                reaction.fail = typeof onRejected == "function" && onRejected;
                reaction.domain = isNode ? process.domain : void 0;
                this._c.push(reaction);
                if (this._a)
                  this._a.push(reaction);
                if (this._s)
                  notify(this, false);
                return reaction.promise;
              },
              // 25.4.5.1 Promise.prototype.catch(onRejected)
              "catch": function(onRejected) {
                return this.then(void 0, onRejected);
              }
            });
            OwnPromiseCapability = function() {
              var promise = new Internal();
              this.promise = promise;
              this.resolve = ctx($resolve, promise, 1);
              this.reject = ctx($reject, promise, 1);
            };
            newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
              return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
            };
          }
          $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
          __webpack_require__("7f20")($Promise, PROMISE);
          __webpack_require__("7a56")(PROMISE);
          Wrapper = __webpack_require__("8378")[PROMISE];
          $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
            // 25.4.4.5 Promise.reject(r)
            reject: function reject(r) {
              var capability = newPromiseCapability(this);
              var $$reject = capability.reject;
              $$reject(r);
              return capability.promise;
            }
          });
          $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
            // 25.4.4.6 Promise.resolve(x)
            resolve: function resolve(x) {
              return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
            }
          });
          $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5cc5")(function(iter) {
            $Promise.all(iter)["catch"](empty);
          })), PROMISE, {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var resolve = capability.resolve;
              var reject = capability.reject;
              var result = perform(function() {
                var values = [];
                var index = 0;
                var remaining = 1;
                forOf(iterable, false, function(promise) {
                  var $index = index++;
                  var alreadyCalled = false;
                  values.push(void 0);
                  remaining++;
                  C.resolve(promise).then(function(value) {
                    if (alreadyCalled)
                      return;
                    alreadyCalled = true;
                    values[$index] = value;
                    --remaining || resolve(values);
                  }, reject);
                });
                --remaining || resolve(values);
              });
              if (result.e)
                reject(result.v);
              return capability.promise;
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var reject = capability.reject;
              var result = perform(function() {
                forOf(iterable, false, function(promise) {
                  C.resolve(promise).then(capability.resolve, reject);
                });
              });
              if (result.e)
                reject(result.v);
              return capability.promise;
            }
          });
        }
      ),
      /***/
      "5537": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var core = __webpack_require__("8378");
          var global = __webpack_require__("7726");
          var SHARED = "__core-js_shared__";
          var store = global[SHARED] || (global[SHARED] = {});
          (module2.exports = function(key, value) {
            return store[key] || (store[key] = value !== void 0 ? value : {});
          })("versions", []).push({
            version: core.version,
            mode: __webpack_require__("2d00") ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
          });
        }
      ),
      /***/
      "5ca1": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var global = __webpack_require__("7726");
          var core = __webpack_require__("8378");
          var hide = __webpack_require__("32e9");
          var redefine = __webpack_require__("2aba");
          var ctx = __webpack_require__("9b43");
          var PROTOTYPE = "prototype";
          var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
            var exports3 = IS_GLOBAL ? core : core[name] || (core[name] = {});
            var expProto = exports3[PROTOTYPE] || (exports3[PROTOTYPE] = {});
            var key, own, out, exp;
            if (IS_GLOBAL)
              source = name;
            for (key in source) {
              own = !IS_FORCED && target && target[key] !== void 0;
              out = (own ? target : source)[key];
              exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
              if (target)
                redefine(target, key, out, type & $export.U);
              if (exports3[key] != out)
                hide(exports3, key, exp);
              if (IS_PROTO && expProto[key] != out)
                expProto[key] = out;
            }
          };
          global.core = core;
          $export.F = 1;
          $export.G = 2;
          $export.S = 4;
          $export.P = 8;
          $export.B = 16;
          $export.W = 32;
          $export.U = 64;
          $export.R = 128;
          module2.exports = $export;
        }
      ),
      /***/
      "5cc5": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var ITERATOR = __webpack_require__("2b4c")("iterator");
          var SAFE_CLOSING = false;
          try {
            var riter = [7][ITERATOR]();
            riter["return"] = function() {
              SAFE_CLOSING = true;
            };
            Array.from(riter, function() {
              throw 2;
            });
          } catch (e) {
          }
          module2.exports = function(exec, skipClosing) {
            if (!skipClosing && !SAFE_CLOSING)
              return false;
            var safe = false;
            try {
              var arr = [7];
              var iter = arr[ITERATOR]();
              iter.next = function() {
                return { done: safe = true };
              };
              arr[ITERATOR] = function() {
                return iter;
              };
              exec(arr);
            } catch (e) {
            }
            return safe;
          };
        }
      ),
      /***/
      "5e6f": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__("6d18");
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          if (content.locals)
            module2.exports = content.locals;
          var add = __webpack_require__("499e").default;
          var update = add("55c52291", content, true, { "sourceMap": false, "shadowMode": false });
        }
      ),
      /***/
      "613b": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var shared = __webpack_require__("5537")("keys");
          var uid = __webpack_require__("ca5a");
          module2.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
          };
        }
      ),
      /***/
      "626a": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var cof = __webpack_require__("2d95");
          module2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return cof(it) == "String" ? it.split("") : Object(it);
          };
        }
      ),
      /***/
      "6821": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var IObject = __webpack_require__("626a");
          var defined = __webpack_require__("be13");
          module2.exports = function(it) {
            return IObject(defined(it));
          };
        }
      ),
      /***/
      "69a8": (
        /***/
        function(module2, exports2) {
          var hasOwnProperty = {}.hasOwnProperty;
          module2.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
          };
        }
      ),
      /***/
      "6a99": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var isObject = __webpack_require__("d3f4");
          module2.exports = function(it, S) {
            if (!isObject(it))
              return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
              return val;
            if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it)))
              return val;
            if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
              return val;
            throw TypeError("Can't convert object to primitive value");
          };
        }
      ),
      /***/
      "6d18": (
        /***/
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__("2350")(false);
          exports2.push([module2.i, "\nhtml{height:100%\n}\n.bm-burger-button{cursor:pointer;height:30px;left:36px;position:absolute;top:36px;width:36px\n}\n.bm-burger-button.hidden{display:none\n}\n.bm-burger-bars{background-color:#373a47\n}\n.line-style{height:20%;left:0;position:absolute;right:0\n}\n.cross-style{cursor:pointer;position:absolute;right:2px;top:12px\n}\n.bm-cross{background:#bdc3c7\n}\n.bm-cross-button{height:24px;width:24px\n}\n.bm-cross-button.hidden{display:none\n}\n.bm-menu{background-color:#3f3f41;height:100%;left:0;overflow-x:hidden;padding-top:60px;position:fixed;top:0;transition:.5s;width:0;z-index:1000\n}\n.bm-overlay{background:rgba(0,0,0,.3)\n}\n.bm-item-list{color:#b8b7ad;font-size:20px;margin-left:10%\n}\n.bm-item-list>*{display:flex;padding:.7em;text-decoration:none\n}\n.bm-item-list>*>span{color:#fff;font-weight:700;margin-left:10px\n}", ""]);
        }
      ),
      /***/
      "7726": (
        /***/
        function(module2, exports2) {
          var global = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
          if (typeof __g == "number")
            __g = global;
        }
      ),
      /***/
      "77f1": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var toInteger = __webpack_require__("4588");
          var max = Math.max;
          var min = Math.min;
          module2.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
          };
        }
      ),
      /***/
      "79e5": (
        /***/
        function(module2, exports2) {
          module2.exports = function(exec) {
            try {
              return !!exec();
            } catch (e) {
              return true;
            }
          };
        }
      ),
      /***/
      "7a56": (
        /***/
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var global = __webpack_require__("7726");
          var dP = __webpack_require__("86cc");
          var DESCRIPTORS = __webpack_require__("9e1e");
          var SPECIES = __webpack_require__("2b4c")("species");
          module2.exports = function(KEY) {
            var C = global[KEY];
            if (DESCRIPTORS && C && !C[SPECIES])
              dP.f(C, SPECIES, {
                configurable: true,
                get: function() {
                  return this;
                }
              });
          };
        }
      ),
      /***/
      "7f20": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var def = __webpack_require__("86cc").f;
          var has = __webpack_require__("69a8");
          var TAG = __webpack_require__("2b4c")("toStringTag");
          module2.exports = function(it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG))
              def(it, TAG, { configurable: true, value: tag });
          };
        }
      ),
      /***/
      "8079": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var global = __webpack_require__("7726");
          var macrotask = __webpack_require__("1991").set;
          var Observer = global.MutationObserver || global.WebKitMutationObserver;
          var process = global.process;
          var Promise2 = global.Promise;
          var isNode = __webpack_require__("2d95")(process) == "process";
          module2.exports = function() {
            var head, last, notify;
            var flush = function() {
              var parent, fn;
              if (isNode && (parent = process.domain))
                parent.exit();
              while (head) {
                fn = head.fn;
                head = head.next;
                try {
                  fn();
                } catch (e) {
                  if (head)
                    notify();
                  else
                    last = void 0;
                  throw e;
                }
              }
              last = void 0;
              if (parent)
                parent.enter();
            };
            if (isNode) {
              notify = function() {
                process.nextTick(flush);
              };
            } else if (Observer && !(global.navigator && global.navigator.standalone)) {
              var toggle = true;
              var node = document.createTextNode("");
              new Observer(flush).observe(node, { characterData: true });
              notify = function() {
                node.data = toggle = !toggle;
              };
            } else if (Promise2 && Promise2.resolve) {
              var promise = Promise2.resolve(void 0);
              notify = function() {
                promise.then(flush);
              };
            } else {
              notify = function() {
                macrotask.call(global, flush);
              };
            }
            return function(fn) {
              var task = { fn, next: void 0 };
              if (last)
                last.next = task;
              if (!head) {
                head = task;
                notify();
              }
              last = task;
            };
          };
        }
      ),
      /***/
      "8378": (
        /***/
        function(module2, exports2) {
          var core = module2.exports = { version: "2.5.7" };
          if (typeof __e == "number")
            __e = core;
        }
      ),
      /***/
      "84f2": (
        /***/
        function(module2, exports2) {
          module2.exports = {};
        }
      ),
      /***/
      "86cc": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__("cb7c");
          var IE8_DOM_DEFINE = __webpack_require__("c69a");
          var toPrimitive = __webpack_require__("6a99");
          var dP = Object.defineProperty;
          exports2.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE)
              try {
                return dP(O, P, Attributes);
              } catch (e) {
              }
            if ("get" in Attributes || "set" in Attributes)
              throw TypeError("Accessors not supported!");
            if ("value" in Attributes)
              O[P] = Attributes.value;
            return O;
          };
        }
      ),
      /***/
      "9b43": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var aFunction = __webpack_require__("d8e8");
          module2.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === void 0)
              return fn;
            switch (length) {
              case 1:
                return function(a) {
                  return fn.call(that, a);
                };
              case 2:
                return function(a, b) {
                  return fn.call(that, a, b);
                };
              case 3:
                return function(a, b, c) {
                  return fn.call(that, a, b, c);
                };
            }
            return function() {
              return fn.apply(that, arguments);
            };
          };
        }
      ),
      /***/
      "9c6c": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var UNSCOPABLES = __webpack_require__("2b4c")("unscopables");
          var ArrayProto = Array.prototype;
          if (ArrayProto[UNSCOPABLES] == void 0)
            __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
          module2.exports = function(key) {
            ArrayProto[UNSCOPABLES][key] = true;
          };
        }
      ),
      /***/
      "9c80": (
        /***/
        function(module2, exports2) {
          module2.exports = function(exec) {
            try {
              return { e: false, v: exec() };
            } catch (e) {
              return { e: true, v: e };
            }
          };
        }
      ),
      /***/
      "9def": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var toInteger = __webpack_require__("4588");
          var min = Math.min;
          module2.exports = function(it) {
            return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
          };
        }
      ),
      /***/
      "9e1e": (
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = !__webpack_require__("79e5")(function() {
            return Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a != 7;
          });
        }
      ),
      /***/
      "a25f": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var global = __webpack_require__("7726");
          var navigator2 = global.navigator;
          module2.exports = navigator2 && navigator2.userAgent || "";
        }
      ),
      /***/
      "a5b8": (
        /***/
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var aFunction = __webpack_require__("d8e8");
          function PromiseCapability(C) {
            var resolve, reject;
            this.promise = new C(function($$resolve, $$reject) {
              if (resolve !== void 0 || reject !== void 0)
                throw TypeError("Bad Promise constructor");
              resolve = $$resolve;
              reject = $$reject;
            });
            this.resolve = aFunction(resolve);
            this.reject = aFunction(reject);
          }
          module2.exports.f = function(C) {
            return new PromiseCapability(C);
          };
        }
      ),
      /***/
      "bcaa": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__("cb7c");
          var isObject = __webpack_require__("d3f4");
          var newPromiseCapability = __webpack_require__("a5b8");
          module2.exports = function(C, x) {
            anObject(C);
            if (isObject(x) && x.constructor === C)
              return x;
            var promiseCapability = newPromiseCapability.f(C);
            var resolve = promiseCapability.resolve;
            resolve(x);
            return promiseCapability.promise;
          };
        }
      ),
      /***/
      "be13": (
        /***/
        function(module2, exports2) {
          module2.exports = function(it) {
            if (it == void 0)
              throw TypeError("Can't call method on  " + it);
            return it;
          };
        }
      ),
      /***/
      "c366": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var toIObject = __webpack_require__("6821");
          var toLength = __webpack_require__("9def");
          var toAbsoluteIndex = __webpack_require__("77f1");
          module2.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
              var O = toIObject($this);
              var length = toLength(O.length);
              var index = toAbsoluteIndex(fromIndex, length);
              var value;
              if (IS_INCLUDES && el != el)
                while (length > index) {
                  value = O[index++];
                  if (value != value)
                    return true;
                }
              else
                for (; length > index; index++)
                  if (IS_INCLUDES || index in O) {
                    if (O[index] === el)
                      return IS_INCLUDES || index || 0;
                  }
              return !IS_INCLUDES && -1;
            };
          };
        }
      ),
      /***/
      "c69a": (
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function() {
            return Object.defineProperty(__webpack_require__("230e")("div"), "a", { get: function() {
              return 7;
            } }).a != 7;
          });
        }
      ),
      /***/
      "ca5a": (
        /***/
        function(module2, exports2) {
          var id = 0;
          var px = Math.random();
          module2.exports = function(key) {
            return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
          };
        }
      ),
      /***/
      "cadf": (
        /***/
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var addToUnscopables = __webpack_require__("9c6c");
          var step = __webpack_require__("d53b");
          var Iterators = __webpack_require__("84f2");
          var toIObject = __webpack_require__("6821");
          module2.exports = __webpack_require__("01f9")(Array, "Array", function(iterated, kind) {
            this._t = toIObject(iterated);
            this._i = 0;
            this._k = kind;
          }, function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
              this._t = void 0;
              return step(1);
            }
            if (kind == "keys")
              return step(0, index);
            if (kind == "values")
              return step(0, O[index]);
            return step(0, [index, O[index]]);
          }, "values");
          Iterators.Arguments = Iterators.Array;
          addToUnscopables("keys");
          addToUnscopables("values");
          addToUnscopables("entries");
        }
      ),
      /***/
      "cb7c": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var isObject = __webpack_require__("d3f4");
          module2.exports = function(it) {
            if (!isObject(it))
              throw TypeError(it + " is not an object!");
            return it;
          };
        }
      ),
      /***/
      "ce10": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var has = __webpack_require__("69a8");
          var toIObject = __webpack_require__("6821");
          var arrayIndexOf = __webpack_require__("c366")(false);
          var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
          module2.exports = function(object, names) {
            var O = toIObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O)
              if (key != IE_PROTO)
                has(O, key) && result.push(key);
            while (names.length > i)
              if (has(O, key = names[i++])) {
                ~arrayIndexOf(result, key) || result.push(key);
              }
            return result;
          };
        }
      ),
      /***/
      "d3f4": (
        /***/
        function(module2, exports2) {
          module2.exports = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
          };
        }
      ),
      /***/
      "d53b": (
        /***/
        function(module2, exports2) {
          module2.exports = function(done, value) {
            return { value, done: !!done };
          };
        }
      ),
      /***/
      "d8e8": (
        /***/
        function(module2, exports2) {
          module2.exports = function(it) {
            if (typeof it != "function")
              throw TypeError(it + " is not a function!");
            return it;
          };
        }
      ),
      /***/
      "dcbc": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var redefine = __webpack_require__("2aba");
          module2.exports = function(target, src, safe) {
            for (var key in src)
              redefine(target, key, src[key], safe);
            return target;
          };
        }
      ),
      /***/
      "e11e": (
        /***/
        function(module2, exports2) {
          module2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }
      ),
      /***/
      "ebd6": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__("cb7c");
          var aFunction = __webpack_require__("d8e8");
          var SPECIES = __webpack_require__("2b4c")("species");
          module2.exports = function(O, D) {
            var C = anObject(O).constructor;
            var S;
            return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? D : aFunction(S);
          };
        }
      ),
      /***/
      "efa6": (
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e6f");
          var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
          var _unused_webpack_default_export = _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;
        }
      ),
      /***/
      "f605": (
        /***/
        function(module2, exports2) {
          module2.exports = function(it, Constructor, name, forbiddenField) {
            if (!(it instanceof Constructor) || forbiddenField !== void 0 && forbiddenField in it) {
              throw TypeError(name + ": incorrect invocation!");
            }
            return it;
          };
        }
      ),
      /***/
      "fab2": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var document2 = __webpack_require__("7726").document;
          module2.exports = document2 && document2.documentElement;
        }
      ),
      /***/
      "fb15": (
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          var setPublicPath = __webpack_require__("1eb2");
          var render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("Menu", _vm._b({ on: { "openMenu": _vm.openMenu, "closeMenu": _vm.closeMenu } }, "Menu", this.$attrs, false), [_vm._t("default")], 2)], 1);
          };
          var staticRenderFns = [];
          var Menuvue_type_template_id_0a659602_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("div", { ref: "sideNav", staticClass: "bm-menu" }, [_c("nav", { staticClass: "bm-item-list" }, [_vm._t("default")], 2), _c("span", { staticClass: "bm-cross-button cross-style", class: { hidden: !_vm.crossIcon }, on: { "click": _vm.closeMenu } }, _vm._l(2, function(x, index) {
              return _c("span", { key: x, staticClass: "bm-cross", style: { position: "absolute", width: "3px", height: "14px", transform: index === 1 ? "rotate(45deg)" : "rotate(-45deg)" } });
            }))]), _c("div", { ref: "bmBurgerButton", staticClass: "bm-burger-button", class: { hidden: !_vm.burgerIcon }, on: { "click": _vm.openMenu } }, _vm._l(3, function(x, index) {
              return _c("span", { key: index, staticClass: "bm-burger-bars line-style", style: { top: 20 * (index * 2) + "%" } });
            }))]);
          };
          var Menuvue_type_template_id_0a659602_staticRenderFns = [];
          var Menuvue_type_script_lang_js_ = {
            name: "menubar",
            data: function data() {
              return {
                isSideBarOpen: false
              };
            },
            props: {
              isOpen: {
                type: Boolean,
                required: false
              },
              right: {
                type: Boolean,
                required: false
              },
              width: {
                type: [String],
                required: false,
                default: "300"
              },
              disableEsc: {
                type: Boolean,
                required: false
              },
              noOverlay: {
                type: Boolean,
                required: false
              },
              onStateChange: {
                type: Function,
                required: false
              },
              burgerIcon: {
                type: Boolean,
                required: false,
                default: true
              },
              crossIcon: {
                type: Boolean,
                required: false,
                default: true
              },
              disableOutsideClick: {
                type: Boolean,
                required: false,
                default: false
              },
              closeOnNavigation: {
                type: Boolean,
                required: false,
                default: false
              }
            },
            methods: {
              openMenu: function openMenu() {
                this.$emit("openMenu");
                this.isSideBarOpen = true;
                if (!this.noOverlay) {
                  document.body.classList.add("bm-overlay");
                }
                if (this.right) {
                  this.$refs.sideNav.style.left = "auto";
                  this.$refs.sideNav.style.right = "0px";
                }
                this.$nextTick(function() {
                  this.$refs.sideNav.style.width = this.width ? this.width + "px" : "300px";
                });
              },
              closeMenu: function closeMenu() {
                this.$emit("closeMenu");
                this.isSideBarOpen = false;
                document.body.classList.remove("bm-overlay");
                this.$refs.sideNav.style.width = "0px";
              },
              closeMenuOnEsc: function closeMenuOnEsc(e) {
                e = e || window.event;
                if (e.key === "Escape" || e.keyCode === 27) {
                  this.closeMenu();
                }
              },
              documentClick: function documentClick(e) {
                var element = this.$refs.bmBurgerButton;
                var target = null;
                if (e && e.target) {
                  target = e.target;
                }
                if (element && element !== target && !element.contains(target) && !this.hasClass(target, "bm-menu") && this.isSideBarOpen && !this.disableOutsideClick) {
                  this.closeMenu();
                } else if (element && this.hasClass(target, "bm-menu") && this.isSideBarOpen && this.closeOnNavigation) {
                  this.closeMenu();
                }
              },
              hasClass: function hasClass(element, className) {
                do {
                  if (element.classList && element.classList.contains(className)) {
                    return true;
                  }
                  element = element.parentNode;
                } while (element);
                return false;
              }
            },
            mounted: function mounted() {
              if (!this.disableEsc) {
                document.addEventListener("keyup", this.closeMenuOnEsc);
              }
            },
            created: function created() {
              document.addEventListener("click", this.documentClick);
            },
            destroyed: function destroyed() {
              document.removeEventListener("keyup", this.closeMenuOnEsc);
              document.removeEventListener("click", this.documentClick);
            },
            watch: {
              isOpen: {
                deep: true,
                immediate: true,
                handler: function handler(newValue, oldValue) {
                  var _this = this;
                  this.$nextTick(function() {
                    if (!oldValue && newValue) {
                      _this.openMenu();
                    }
                    if (oldValue && !newValue) {
                      _this.closeMenu();
                    }
                  });
                }
              },
              right: {
                deep: true,
                immediate: true,
                handler: function handler(oldValue, newValue) {
                  var _this2 = this;
                  if (oldValue) {
                    this.$nextTick(function() {
                      _this2.$refs.bmBurgerButton.style.left = "auto";
                      _this2.$refs.bmBurgerButton.style.right = "36px";
                      _this2.$refs.sideNav.style.left = "auto";
                      _this2.$refs.sideNav.style.right = "0px";
                      document.querySelector(".bm-burger-button").style.left = "auto";
                      document.querySelector(".bm-burger-button").style.right = "36px";
                      document.querySelector(".bm-menu").style.left = "auto";
                      document.querySelector(".bm-menu").style.right = "0px";
                      document.querySelector(".cross-style").style.right = "250px";
                    });
                  }
                  if (newValue) {
                    if (this.$refs.bmBurgerButton.hasAttribute("style")) {
                      this.$refs.bmBurgerButton.removeAttribute("style");
                      this.$refs.sideNav.style.right = "auto";
                      document.querySelector(".bm-burger-button").removeAttribute("style");
                      document.getElementById("sideNav").style.right = "auto";
                      document.querySelector(".cross-style").style.right = "0px";
                    }
                  }
                }
              }
            }
          };
          var components_Menuvue_type_script_lang_js_ = Menuvue_type_script_lang_js_;
          var Menuvue_type_style_index_0_lang_css_ = __webpack_require__("efa6");
          function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
            var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
            if (render2) {
              options.render = render2;
              options.staticRenderFns = staticRenderFns2;
              options._compiled = true;
            }
            if (functionalTemplate) {
              options.functional = true;
            }
            if (scopeId) {
              options._scopeId = "data-v-" + scopeId;
            }
            var hook;
            if (moduleIdentifier) {
              hook = function(context) {
                context = context || // cached call
                this.$vnode && this.$vnode.ssrContext || // stateful
                this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
                if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
                  context = __VUE_SSR_CONTEXT__;
                }
                if (injectStyles) {
                  injectStyles.call(this, context);
                }
                if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
                }
              };
              options._ssrRegister = hook;
            } else if (injectStyles) {
              hook = shadowMode ? function() {
                injectStyles.call(this, this.$root.$options.shadowRoot);
              } : injectStyles;
            }
            if (hook) {
              if (options.functional) {
                options._injectStyles = hook;
                var originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
                };
              } else {
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
              }
            }
            return {
              exports: scriptExports,
              options
            };
          }
          var component = normalizeComponent(
            components_Menuvue_type_script_lang_js_,
            Menuvue_type_template_id_0a659602_render,
            Menuvue_type_template_id_0a659602_staticRenderFns,
            false,
            null,
            null,
            null
          );
          component.options.__file = "Menu.vue";
          var Menu = component.exports;
          var slidevue_type_script_lang_js_ = {
            name: "slide",
            components: {
              Menu
            },
            methods: {
              openMenu: function openMenu() {
                this.$emit("openMenu");
              },
              closeMenu: function closeMenu() {
                this.$emit("closeMenu");
              }
            }
          };
          var Menu_slidevue_type_script_lang_js_ = slidevue_type_script_lang_js_;
          var slide_component = normalizeComponent(
            Menu_slidevue_type_script_lang_js_,
            render,
            staticRenderFns,
            false,
            null,
            null,
            null
          );
          slide_component.options.__file = "slide.vue";
          var slide = slide_component.exports;
          var bubblevue_type_template_id_e3d93326_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("Menu", _vm._b({ ref: "sideNav", on: { "openMenu": _vm.openMenu, "closeMenu": _vm.closeMenu } }, "Menu", this.$attrs, false), [_vm._t("default")], 2)], 1);
          };
          var bubblevue_type_template_id_e3d93326_staticRenderFns = [];
          var bubblevue_type_script_lang_js_ = {
            name: "bubble",
            components: {
              Menu
            },
            data: function data() {
              return {
                propsToPass: {
                  isOpen: this.$attrs.isOpen,
                  right: this.$attrs.right,
                  width: this.$attrs.width,
                  disableEsc: this.$attrs.disableEsc,
                  noOverlay: this.$attrs.noOverlay,
                  onStateChange: this.$attrs.onStateChange
                }
              };
            },
            methods: {
              openMenu: function openMenu() {
                var set = this.$refs.sideNav.$el.querySelector(".bm-menu");
                set.style.borderRadius = "150% / 70%";
                if (this.$attrs.right) {
                  set.style.borderTopRightRadius = "0px 900px";
                  set.style.borderBottomRightRadius = "0px";
                } else {
                  set.style.borderTopLeftRadius = "0px 900px";
                  set.style.borderBottomLeftRadius = "0px";
                }
                set.style.transitionTimingFunction = "easy-in";
                this.$emit("openMenu");
                setTimeout(function() {
                  set.style.transitionTimingFunction = "cubic-bezier(.29, 1.01, 1, -0.68)";
                  set.style.borderRadius = "0px";
                }, 300);
              },
              closeMenu: function closeMenu() {
                var set = this.$refs.sideNav.$el.querySelector(".bm-menu");
                set.style.transitionTimingFunction = null;
                this.$emit("closeMenu");
              }
            }
          };
          var Menu_bubblevue_type_script_lang_js_ = bubblevue_type_script_lang_js_;
          var bubble_component = normalizeComponent(
            Menu_bubblevue_type_script_lang_js_,
            bubblevue_type_template_id_e3d93326_render,
            bubblevue_type_template_id_e3d93326_staticRenderFns,
            false,
            null,
            null,
            null
          );
          bubble_component.options.__file = "bubble.vue";
          var bubble = bubble_component.exports;
          var revealvue_type_template_id_01427236_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("Menu", _vm._b({ on: { "openMenu": _vm.push, "closeMenu": _vm.pull } }, "Menu", this.$attrs, false), [_vm._t("default")], 2)], 1);
          };
          var revealvue_type_template_id_01427236_staticRenderFns = [];
          var revealvue_type_script_lang_js_ = {
            name: "reveal",
            data: function data() {
              return {
                bodyOldStyle: ""
              };
            },
            components: {
              Menu
            },
            methods: {
              openMenu: function openMenu() {
                this.$emit("openMenu");
              },
              closeMenu: function closeMenu() {
                this.$emit("closeMenu");
              },
              push: function push2() {
                this.openMenu();
                var width = this.$attrs.width ? this.$attrs.width + "px" : "300px";
                this.bodyOldStyle = document.body.getAttribute("style") || "";
                document.body.style.overflowX = "hidden";
                if (this.$attrs.right) {
                  document.querySelector("#page-wrap").style.transform = "translate3d(-".concat(width, ", 0px, 0px )");
                } else {
                  document.querySelector("#page-wrap").style.transform = "translate3d(".concat(width, ", 0px, 0px )");
                }
                document.querySelector("#page-wrap").style.position = "relative";
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
              },
              pull: function pull() {
                this.closeMenu();
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
                document.querySelector("#page-wrap").style.transform = "";
                document.querySelector("#page-wrap").style.position = "";
                document.body.setAttribute("style", this.bodyOldStyle);
              }
            }
          };
          var Menu_revealvue_type_script_lang_js_ = revealvue_type_script_lang_js_;
          var reveal_component = normalizeComponent(
            Menu_revealvue_type_script_lang_js_,
            revealvue_type_template_id_01427236_render,
            revealvue_type_template_id_01427236_staticRenderFns,
            false,
            null,
            null,
            null
          );
          reveal_component.options.__file = "reveal.vue";
          var reveal = reveal_component.exports;
          var pushvue_type_template_id_1e67cf34_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("Menu", _vm._b({ on: { "openMenu": _vm.push, "closeMenu": _vm.pull } }, "Menu", this.$attrs, false), [_vm._t("default")], 2)], 1);
          };
          var pushvue_type_template_id_1e67cf34_staticRenderFns = [];
          var es6_array_iterator = __webpack_require__("cadf");
          var es6_promise = __webpack_require__("551c");
          var es7_promise_finally = __webpack_require__("097d");
          var pushvue_type_script_lang_js_ = {
            name: "push",
            data: function data() {
              return {
                bodyOldStyle: ""
              };
            },
            components: {
              Menu
            },
            methods: {
              openMenu: function openMenu() {
                this.$emit("openMenu");
              },
              closeMenu: function closeMenu() {
                this.$emit("closeMenu");
              },
              push: function push2() {
                this.openMenu();
                var width = this.$attrs.width ? this.$attrs.width + "px" : "300px";
                this.bodyOldStyle = document.body.getAttribute("style") || "";
                document.body.style.overflowX = "hidden";
                if (this.$attrs.right) {
                  document.querySelector("#page-wrap").style.transform = "translate3d(-".concat(width, ", 0px, 0px )");
                } else {
                  document.querySelector("#page-wrap").style.transform = "translate3d(".concat(width, ", 0px, 0px )");
                }
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
              },
              pull: function pull() {
                this.closeMenu();
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
                document.querySelector("#page-wrap").style.transform = "";
                document.body.setAttribute("style", this.bodyOldStyle);
              }
            }
          };
          var Menu_pushvue_type_script_lang_js_ = pushvue_type_script_lang_js_;
          var push_component = normalizeComponent(
            Menu_pushvue_type_script_lang_js_,
            pushvue_type_template_id_1e67cf34_render,
            pushvue_type_template_id_1e67cf34_staticRenderFns,
            false,
            null,
            null,
            null
          );
          push_component.options.__file = "push.vue";
          var push = push_component.exports;
          var elasticvue_type_template_id_378b43ec_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("Menu", _vm._b({ attrs: { "openMenu": "openMenu" }, on: { "closeMenu": _vm.closeMenu } }, "Menu", _vm.propsToPass, false), [_vm._t("default")], 2)], 1);
          };
          var elasticvue_type_template_id_378b43ec_staticRenderFns = [];
          var elasticvue_type_script_lang_js_ = {
            name: "elastic",
            components: {
              Menu
            },
            data: function data() {
              return {
                propsToPass: {
                  isOpen: this.$attrs.isOpen,
                  right: this.$attrs.right,
                  width: this.$attrs.width,
                  disableEsc: this.$attrs.disableEsc,
                  noOverlay: this.$attrs.noOverlay,
                  onStateChange: this.$attrs.onStateChange
                }
              };
            },
            methods: {
              openMenu: function openMenu() {
                this.$emit("openMenu");
              },
              closeMenu: function closeMenu() {
                this.$emit("closeMenu");
              }
            }
          };
          var Menu_elasticvue_type_script_lang_js_ = elasticvue_type_script_lang_js_;
          var elastic_component = normalizeComponent(
            Menu_elasticvue_type_script_lang_js_,
            elasticvue_type_template_id_378b43ec_render,
            elasticvue_type_template_id_378b43ec_staticRenderFns,
            false,
            null,
            null,
            null
          );
          elastic_component.options.__file = "elastic.vue";
          var elastic = elastic_component.exports;
          var fallDownvue_type_template_id_1b3f33be_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("Menu", _vm._b({ ref: "sideNav", on: { "openMenu": _vm.openMenu, "closeMenu": _vm.closeMenu } }, "Menu", this.$attrs, false), [_vm._t("default")], 2)], 1);
          };
          var fallDownvue_type_template_id_1b3f33be_staticRenderFns = [];
          var fallDownvue_type_script_lang_js_ = {
            name: "elastic",
            components: {
              Menu
            },
            data: function data() {
              return {
                bodyOldStyle: "",
                propsToPass: {
                  isOpen: this.$attrs.isOpen,
                  right: this.$attrs.right,
                  width: this.$attrs.width,
                  disableEsc: this.$attrs.disableEsc,
                  noOverlay: this.$attrs.noOverlay,
                  onStateChange: this.$attrs.onStateChange
                }
              };
            },
            methods: {
              openMenu: function openMenu() {
                var _this = this;
                this.$emit("openMenu");
                var width = this.$attrs.width ? this.$attrs.width + "px" : "300px";
                this.$refs.sideNav.$el.querySelector(".bm-menu").style.overflowY = "hidden";
                this.bodyOldStyle = document.body.getAttribute("style") || "";
                document.body.style.overflowX = "hidden";
                this.$refs.sideNav.$el.querySelector(".bm-menu").style.transition = "0.5s";
                if (this.$attrs.right) {
                  document.querySelector("#page-wrap").style.transform = "translate3d(-".concat(width, ", 0px, 0px )");
                } else {
                  document.querySelector("#page-wrap").style.transform = "translate3d(".concat(width, ", 0px, 0px )");
                }
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
                this.$nextTick(function() {
                  _this.$refs.sideNav.$el.querySelector(".bm-menu").style.height = "100%";
                });
              },
              closeMenu: function closeMenu() {
                this.$emit("closeMenu");
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
                document.querySelector("#page-wrap").style.transform = "";
                document.body.setAttribute("style", this.bodyOldStyle);
                this.$refs.sideNav.$el.querySelector(".bm-menu").style.height = "0px";
              }
            },
            mounted: function mounted() {
              this.$refs.sideNav.$el.querySelector(".bm-menu").style.height = "0px";
            }
          };
          var Menu_fallDownvue_type_script_lang_js_ = fallDownvue_type_script_lang_js_;
          var fallDown_component = normalizeComponent(
            Menu_fallDownvue_type_script_lang_js_,
            fallDownvue_type_template_id_1b3f33be_render,
            fallDownvue_type_template_id_1b3f33be_staticRenderFns,
            false,
            null,
            null,
            null
          );
          fallDown_component.options.__file = "fallDown.vue";
          var fallDown = fallDown_component.exports;
          var pushRotatevue_type_template_id_b055c8f2_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("Menu", _vm._b({ on: { "openMenu": _vm.push, "closeMenu": _vm.pull } }, "Menu", this.$attrs, false), [_vm._t("default")], 2)], 1);
          };
          var pushRotatevue_type_template_id_b055c8f2_staticRenderFns = [];
          var pushRotatevue_type_script_lang_js_ = {
            name: "pushrotate",
            components: {
              Menu
            },
            data: function data() {
              return {
                bodyOldStyle: "",
                appOldStyle: ""
              };
            },
            methods: {
              openMenu: function openMenu() {
                this.$emit("openMenu");
              },
              closeMenu: function closeMenu() {
                this.$emit("closeMenu");
              },
              push: function push2() {
                this.openMenu();
                var width = this.$attrs.width ? this.$attrs.width + "px" : "300px";
                this.bodyOldStyle = document.body.getAttribute("style") || "";
                document.body.style.overflowX = "hidden";
                if (this.$attrs.right) {
                  document.querySelector("#page-wrap").style.transform = "translate3d(-".concat(width, ", 0px, 0px ) rotateY(15deg)");
                  document.querySelector("#page-wrap").style.transformOrigin = "100% 50% 0px";
                } else {
                  document.querySelector("#page-wrap").style.transform = "translate3d(".concat(width, ", 0px, 0px ) rotateY(-15deg)");
                  document.querySelector("#page-wrap").style.transformOrigin = "0% 50% 0px";
                }
                document.querySelector("#page-wrap").style.transformStyle = "preserve-3d";
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
                this.appOldStyle = document.querySelector("#app").getAttribute("style") || "";
                document.querySelector("#app").style.perspective = "1500px";
                document.querySelector("#app").style.overflow = "hidden";
              },
              pull: function pull() {
                this.closeMenu();
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
                document.querySelector("#page-wrap").style.transform = "";
                document.querySelector("#page-wrap").style.transformStyle = "";
                document.querySelector("#page-wrap").style.transformOrigin = "";
                document.querySelector("#app").setAttribute("style", this.appOldStyle);
                document.body.setAttribute("style", this.bodyOldStyle);
              }
            }
          };
          var Menu_pushRotatevue_type_script_lang_js_ = pushRotatevue_type_script_lang_js_;
          var pushRotate_component = normalizeComponent(
            Menu_pushRotatevue_type_script_lang_js_,
            pushRotatevue_type_template_id_b055c8f2_render,
            pushRotatevue_type_template_id_b055c8f2_staticRenderFns,
            false,
            null,
            null,
            null
          );
          pushRotate_component.options.__file = "pushRotate.vue";
          var pushRotate = pushRotate_component.exports;
          var stackvue_type_template_id_9093ae04_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("Menu", _vm._b({ attrs: { "openMenu": "openMenu" }, on: { "closeMenu": _vm.closeMenu } }, "Menu", _vm.propsToPass, false), [_vm._t("default")], 2)], 1);
          };
          var stackvue_type_template_id_9093ae04_staticRenderFns = [];
          var stackvue_type_script_lang_js_ = {
            name: "stack",
            components: {
              Menu
            },
            data: function data() {
              return {
                propsToPass: {
                  isOpen: this.$attrs.isOpen,
                  right: this.$attrs.right,
                  width: this.$attrs.width,
                  disableEsc: this.$attrs.disableEsc,
                  noOverlay: this.$attrs.noOverlay,
                  onStateChange: this.$attrs.onStateChange
                }
              };
            },
            methods: {
              openMenu: function openMenu() {
                this.$emit("openMenu");
              },
              closeMenu: function closeMenu() {
                this.$emit("closeMenu");
              }
            }
          };
          var Menu_stackvue_type_script_lang_js_ = stackvue_type_script_lang_js_;
          var stack_component = normalizeComponent(
            Menu_stackvue_type_script_lang_js_,
            stackvue_type_template_id_9093ae04_render,
            stackvue_type_template_id_9093ae04_staticRenderFns,
            false,
            null,
            null,
            null
          );
          stack_component.options.__file = "stack.vue";
          var stack = stack_component.exports;
          var scaleRotatevue_type_template_id_5c3b7fd8_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("Menu", _vm._b({ on: { "openMenu": _vm.push, "closeMenu": _vm.pull } }, "Menu", this.$attrs, false), [_vm._t("default")], 2)], 1);
          };
          var scaleRotatevue_type_template_id_5c3b7fd8_staticRenderFns = [];
          var scaleRotatevue_type_script_lang_js_ = {
            name: "scalerotate",
            components: {
              Menu
            },
            data: function data() {
              return {
                bodyOldStyle: "",
                appOldStyle: ""
              };
            },
            methods: {
              openMenu: function openMenu() {
                this.$emit("openMenu");
              },
              closeMenu: function closeMenu() {
                this.$emit("closeMenu");
              },
              push: function push2() {
                this.openMenu();
                var width = this.$attrs.width ? this.$attrs.width + "px" : "100px";
                this.bodyOldStyle = document.body.getAttribute("style") || "";
                document.body.style.overflowX = "hidden";
                if (this.$attrs.right) {
                  document.querySelector("#page-wrap").style.transform = "translate3d(-".concat(width, ", 0px, -600px ) rotateY(20deg)");
                } else {
                  document.querySelector("#page-wrap").style.transform = "translate3d(".concat(width, ", 0px, -600px ) rotateY(-20deg)");
                }
                document.querySelector("#page-wrap").style.transformStyle = "preserve-3d";
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
                document.querySelector("#page-wrap").style.overflow = "hidden";
                this.appOldStyle = document.querySelector("#app").getAttribute("style") || "";
                document.querySelector("#app").style.perspective = "1500px";
                document.querySelector("#app").style.overflow = "hidden";
                document.querySelector("#app").style.height = "100%";
              },
              pull: function pull() {
                this.closeMenu();
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
                document.querySelector("#page-wrap").style.transform = "";
                document.querySelector("#page-wrap").style.transformStyle = "";
                document.querySelector("#page-wrap").style.transformOrigin = "";
                document.querySelector("#page-wrap").style.overflow = "auto";
                document.querySelector("#app").setAttribute("style", this.appOldStyle);
                document.body.setAttribute("style", this.bodyOldStyle);
              }
            }
          };
          var Menu_scaleRotatevue_type_script_lang_js_ = scaleRotatevue_type_script_lang_js_;
          var scaleRotate_component = normalizeComponent(
            Menu_scaleRotatevue_type_script_lang_js_,
            scaleRotatevue_type_template_id_5c3b7fd8_render,
            scaleRotatevue_type_template_id_5c3b7fd8_staticRenderFns,
            false,
            null,
            null,
            null
          );
          scaleRotate_component.options.__file = "scaleRotate.vue";
          var scaleRotate = scaleRotate_component.exports;
          var scaleDownvue_type_template_id_34b586d9_render = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_c("Menu", _vm._b({ on: { "openMenu": _vm.push, "closeMenu": _vm.pull } }, "Menu", this.$attrs, false), [_vm._t("default")], 2)], 1);
          };
          var scaleDownvue_type_template_id_34b586d9_staticRenderFns = [];
          var scaleDownvue_type_script_lang_js_ = {
            name: "scaledown",
            components: {
              Menu
            },
            data: function data() {
              return {
                bodyOldStyle: "",
                appOldStyle: ""
              };
            },
            methods: {
              openMenu: function openMenu() {
                this.$emit("openMenu");
              },
              closeMenu: function closeMenu() {
                this.$emit("closeMenu");
              },
              push: function push2() {
                this.openMenu();
                var width = this.$attrs.width ? this.$attrs.width + "px" : "100px";
                this.bodyOldStyle = document.body.getAttribute("style") || "";
                document.body.style.overflowX = "hidden";
                if (this.$attrs.right) {
                  document.querySelector("#page-wrap").style.transform = "translate3d(-".concat(width, ", 0px, -600px ) ");
                } else {
                  document.querySelector("#page-wrap").style.transform = "translate3d(".concat(width, ", 0px, -600px ) ");
                }
                document.querySelector("#page-wrap").style.transformStyle = "preserve-3d";
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
                document.querySelector("#page-wrap").style.overflow = "hidden";
                this.appOldStyle = document.querySelector("#app").getAttribute("style") || "";
                document.querySelector("#app").style.perspective = "1500px";
                document.querySelector("#app").style.overflow = "hidden";
                document.querySelector("#app").style.height = "100%";
              },
              pull: function pull() {
                this.closeMenu();
                document.querySelector("#page-wrap").style.transition = "all 0.5s ease 0s";
                document.querySelector("#page-wrap").style.transform = "";
                document.querySelector("#page-wrap").style.transformStyle = "";
                document.querySelector("#page-wrap").style.transformOrigin = "";
                document.querySelector("#page-wrap").style.overflow = "auto";
                document.querySelector("#app").setAttribute("style", this.appOldStyle);
                document.body.setAttribute("style", this.bodyOldStyle);
              }
            }
          };
          var Menu_scaleDownvue_type_script_lang_js_ = scaleDownvue_type_script_lang_js_;
          var scaleDown_component = normalizeComponent(
            Menu_scaleDownvue_type_script_lang_js_,
            scaleDownvue_type_template_id_34b586d9_render,
            scaleDownvue_type_template_id_34b586d9_staticRenderFns,
            false,
            null,
            null,
            null
          );
          scaleDown_component.options.__file = "scaleDown.vue";
          var scaleDown = scaleDown_component.exports;
          var components = {
            Menu,
            Slide: slide,
            Bubble: bubble,
            Reveal: reveal,
            Push: push,
            PushRotate: pushRotate,
            ScaleDown: scaleDown,
            ScaleRotate: scaleRotate,
            Stack: stack,
            FallDown: fallDown,
            Elastic: elastic
          };
          var entry_lib = __webpack_exports__["default"] = components;
        }
      )
      /******/
    })["default"];
  }
});
export default require_vue_burger_menu_common();
//# sourceMappingURL=vue-burger-menu.js.map
