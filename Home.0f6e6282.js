// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"emU3S":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"aeH4U"}],"v3ZCU":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "af38287a0f6e6282";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gl5nN":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$8907 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$8907.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _home = require("contexts/Home");
var _providerHOC = require("utils/ProviderHOC");
var _s = $RefreshSig$();
const Home = ()=>{
    _s();
    const {} = _home.useHome();
    return(/*#__PURE__*/ _jsxDevRuntime.jsxDEV(HomeContainer, {
        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
            className: "py-20 bg-white",
            children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "lg:text-center",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h2", {
                                className: "text-base text-indigo-600 font-semibold tracking-wide uppercase",
                                children: "bread.tracker"
                            }, void 0, false, {
                                fileName: "src/components/Home/index.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(TypewriterHeaderWrapper, {
                                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                    className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",
                                    children: "A lightweight way to track that bread. 🍞"
                                }, void 0, false, {
                                    fileName: "src/components/Home/index.tsx",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/Home/index.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                className: "outline-neutral-600 border-2 my-6 rounded-full px-5 py-2 w-2/5"
                            }, void 0, false, {
                                fileName: "src/components/Home/index.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Home/index.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                        className: "mt-10",
                        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("dl", {
                            className: "space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
                        }, void 0, false, {
                            fileName: "src/components/Home/index.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Home/index.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Home/index.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "src/components/Home/index.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/Home/index.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, undefined));
};
_s(Home, "VA3x7ujE9bGXKJQNpIuPOoGINA0=", false, function() {
    return [
        _home.useHome
    ];
});
_c = Home;
exports.default = _c1 = _providerHOC.withProvider(_home.HomeProvider, Home);
const HomeContainer = _styledComponentsDefault.default.div``;
_c2 = HomeContainer;
const TypewriterHeaderWrapper = _styledComponentsDefault.default.span`
  @media screen and (min-width: 1024px) {
    p {
      width: 660px;
      overflow: hidden;
      border-right: 0.15em solid indigo;
      white-space: nowrap;
      margin: 0 auto;
      animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
    }

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 660px;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: indigo;
      }
    }
  }
`;
_c3 = TypewriterHeaderWrapper;
var _c, _c1, _c2, _c3;
$RefreshReg$(_c, "Home");
$RefreshReg$(_c1, "%default%");
$RefreshReg$(_c2, "HomeContainer");
$RefreshReg$(_c3, "TypewriterHeaderWrapper");

  $parcel$ReactRefreshHelpers$8907.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"3jZUD","react":"4mchR","styled-components":"dOPCJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13","contexts/Home":"d1Rfi","utils/ProviderHOC":"bPUxl"}],"dOPCJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ServerStyleSheet", ()=>Je
);
parcelHelpers.export(exports, "StyleSheetConsumer", ()=>le
);
parcelHelpers.export(exports, "StyleSheetContext", ()=>ue
);
parcelHelpers.export(exports, "StyleSheetManager", ()=>ye
);
parcelHelpers.export(exports, "ThemeConsumer", ()=>Le
);
parcelHelpers.export(exports, "ThemeContext", ()=>Ge
);
parcelHelpers.export(exports, "ThemeProvider", ()=>Fe
);
parcelHelpers.export(exports, "__PRIVATE__", ()=>Ke
);
parcelHelpers.export(exports, "createGlobalStyle", ()=>We
);
parcelHelpers.export(exports, "css", ()=>Ce
);
parcelHelpers.export(exports, "isStyledComponent", ()=>N
);
parcelHelpers.export(exports, "keyframes", ()=>Ue
);
parcelHelpers.export(exports, "useTheme", ()=>Ze
);
parcelHelpers.export(exports, "version", ()=>C
);
parcelHelpers.export(exports, "withTheme", ()=>Xe
);
var _reactIs = require("react-is");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _shallowequal = require("shallowequal");
var _shallowequalDefault = parcelHelpers.interopDefault(_shallowequal);
var _stylis = require("@emotion/stylis");
var _stylisDefault = parcelHelpers.interopDefault(_stylis);
var _unitless = require("@emotion/unitless");
var _unitlessDefault = parcelHelpers.interopDefault(_unitless);
var _isPropValid = require("@emotion/is-prop-valid");
var _isPropValidDefault = parcelHelpers.interopDefault(_isPropValid);
var _hoistNonReactStatics = require("hoist-non-react-statics");
var _hoistNonReactStaticsDefault = parcelHelpers.interopDefault(_hoistNonReactStatics);
function v() {
    return (v = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }).apply(this, arguments);
}
var g = function(e, t) {
    for(var n = [
        e[0]
    ], r = 0, o = t.length; r < o; r += 1)n.push(t[r], e[r + 1]);
    return n;
}, S = function(t) {
    return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !_reactIs.typeOf(t);
}, w = Object.freeze([]), E = Object.freeze({
});
function b(e) {
    return "function" == typeof e;
}
function _(e) {
    return "string" == typeof e && e || e.displayName || e.name || "Component";
}
function N(e) {
    return e && "string" == typeof e.styledComponentId;
}
var A = "data-styled", C = "5.3.3", I = "undefined" != typeof window && "HTMLElement" in window, P = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : true), O = {
}, R = {
    1: "Cannot create styled-component for component: %s.\n\n",
    2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
    3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
    4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
    5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
    6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
    7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
    8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
    9: "Missing document `<head>`\n\n",
    10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
    11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
    12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
    13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
    14: 'ThemeProvider: "theme" prop is required.\n\n',
    15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
    16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
    17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};
function D() {
    for(var e = arguments.length <= 0 ? void 0 : arguments[0], t1 = [], n = 1, r = arguments.length; n < r; n += 1)t1.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t1.forEach(function(t) {
        e = e.replace(/%[a-z]/, t);
    }), e;
}
function j(e) {
    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r];
    throw new Error(D.apply(void 0, [
        R[e]
    ].concat(n)).trim());
}
var T = function() {
    function e1(e) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    var t2 = e1.prototype;
    return t2.indexOfGroup = function(e) {
        for(var t = 0, n = 0; n < e; n++)t += this.groupSizes[n];
        return t;
    }, t2.insertRules = function(e, t) {
        if (e >= this.groupSizes.length) {
            for(var n = this.groupSizes, r = n.length, o = r; e >= o;)(o <<= 1) < 0 && j(16, "" + e);
            this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
            for(var s = r; s < o; s++)this.groupSizes[s] = 0;
        }
        for(var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++)this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
    }, t2.clearGroup = function(e) {
        if (e < this.length) {
            var t = this.groupSizes[e], n = this.indexOfGroup(e), r = n + t;
            this.groupSizes[e] = 0;
            for(var o = n; o < r; o++)this.tag.deleteRule(n);
        }
    }, t2.getGroup = function(e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for(var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++)t += this.tag.getRule(s) + "/*!sc*/\n";
        return t;
    }, e1;
}(), x = new Map, k = new Map, V = 1, B = function(e) {
    if (x.has(e)) return x.get(e);
    for(; k.has(V);)V++;
    var t = V++;
    return ((0 | t) < 0 || t > 1073741824) && j(16, "" + t), x.set(e, t), k.set(t, e), t;
}, z = function(e) {
    return k.get(e);
}, M = function(e, t) {
    t >= V && (V = t + 1), x.set(e, t), k.set(t, e);
}, G = "style[" + A + '][data-styled-version="5.3.3"]', L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), F = function(e, t, n) {
    for(var r, o = n.split(","), s = 0, i = o.length; s < i; s++)(r = o[s]) && e.registerName(t, r);
}, Y = function(e, t) {
    for(var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++){
        var i = n[o].trim();
        if (i) {
            var a = i.match(L);
            if (a) {
                var c = 0 | parseInt(a[1], 10), u = a[2];
                0 !== c && (M(u, c), F(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
            } else r.push(i);
        }
    }
}, q = function() {
    return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null;
}, H = function(e2) {
    var t3 = document.head, n1 = e2 || t3, r1 = document.createElement("style"), o = function(e) {
        for(var t = e.childNodes, n = t.length; n >= 0; n--){
            var r = t[n];
            if (r && 1 === r.nodeType && r.hasAttribute(A)) return r;
        }
    }(n1), s = void 0 !== o ? o.nextSibling : null;
    r1.setAttribute(A, "active"), r1.setAttribute("data-styled-version", "5.3.3");
    var i = q();
    return i && r1.setAttribute("nonce", i), n1.insertBefore(r1, s), r1;
}, $ = function() {
    function e3(e4) {
        var t5 = this.element = H(e4);
        t5.appendChild(document.createTextNode("")), this.sheet = (function(e) {
            if (e.sheet) return e.sheet;
            for(var t = document.styleSheets, n = 0, r = t.length; n < r; n++){
                var o = t[n];
                if (o.ownerNode === e) return o;
            }
            j(17);
        })(t5), this.length = 0;
    }
    var t4 = e3.prototype;
    return t4.insertRule = function(e, t) {
        try {
            return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e5) {
            return !1;
        }
    }, t4.deleteRule = function(e) {
        this.sheet.deleteRule(e), this.length--;
    }, t4.getRule = function(e) {
        var t = this.sheet.cssRules[e];
        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
    }, e3;
}(), W = function() {
    function e6(e) {
        var t = this.element = H(e);
        this.nodes = t.childNodes, this.length = 0;
    }
    var t6 = e6.prototype;
    return t6.insertRule = function(e, t) {
        if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t), r = this.nodes[e];
            return this.element.insertBefore(n, r || null), this.length++, !0;
        }
        return !1;
    }, t6.deleteRule = function(e) {
        this.element.removeChild(this.nodes[e]), this.length--;
    }, t6.getRule = function(e) {
        return e < this.length ? this.nodes[e].textContent : "";
    }, e6;
}(), U = function() {
    function e7(e) {
        this.rules = [], this.length = 0;
    }
    var t7 = e7.prototype;
    return t7.insertRule = function(e, t) {
        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, t7.deleteRule = function(e) {
        this.rules.splice(e, 1), this.length--;
    }, t7.getRule = function(e) {
        return e < this.length ? this.rules[e] : "";
    }, e7;
}(), J = I, X = {
    isServer: !I,
    useCSSOMInjection: !P
}, Z = function() {
    function e8(e9, t9, n2) {
        void 0 === e9 && (e9 = E), void 0 === t9 && (t9 = {
        }), this.options = v({
        }, X, {
        }, e9), this.gs = t9, this.names = new Map(n2), this.server = !!e9.isServer, !this.server && I && J && (J = !1, (function(e) {
            for(var t = document.querySelectorAll(G), n = 0, r = t.length; n < r; n++){
                var o = t[n];
                o && "active" !== o.getAttribute(A) && (Y(e, o), o.parentNode && o.parentNode.removeChild(o));
            }
        })(this));
    }
    e8.registerId = function(e) {
        return B(e);
    };
    var t8 = e8.prototype;
    return t8.reconstructWithOptions = function(t, n) {
        return void 0 === n && (n = !0), new e8(v({
        }, this.options, {
        }, t), this.gs, n && this.names || void 0);
    }, t8.allocateGSInstance = function(e) {
        return this.gs[e] = (this.gs[e] || 0) + 1;
    }, t8.getTag = function() {
        var e, t, n, r, o;
        return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new U(o) : r ? new $(o) : new W(o), new T(e)));
    }, t8.hasNameForId = function(e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
    }, t8.registerName = function(e, t) {
        if (B(e), this.names.has(e)) this.names.get(e).add(t);
        else {
            var n = new Set;
            n.add(t), this.names.set(e, n);
        }
    }, t8.insertRules = function(e, t, n) {
        this.registerName(e, t), this.getTag().insertRules(B(e), n);
    }, t8.clearNames = function(e) {
        this.names.has(e) && this.names.get(e).clear();
    }, t8.clearRules = function(e) {
        this.getTag().clearGroup(B(e)), this.clearNames(e);
    }, t8.clearTag = function() {
        this.tag = void 0;
    }, t8.toString = function() {
        return (function(e10) {
            for(var t = e10.getTag(), n = t.length, r = "", o = 0; o < n; o++){
                var s = z(o);
                if (void 0 !== s) {
                    var i = e10.names.get(s), a = t.getGroup(o);
                    if (i && a && i.size) {
                        var c = A + ".g" + o + '[id="' + s + '"]', u = "";
                        void 0 !== i && i.forEach(function(e) {
                            e.length > 0 && (u += e + ",");
                        }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
                    }
                }
            }
            return r;
        })(this);
    }, e8;
}(), K = /(a)(d)/gi, Q = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ee(e) {
    var t, n = "";
    for(t = Math.abs(e); t > 52; t = t / 52 | 0)n = Q(t % 52) + n;
    return (Q(t % 52) + n).replace(K, "$1-$2");
}
var te = function(e, t) {
    for(var n = t.length; n;)e = 33 * e ^ t.charCodeAt(--n);
    return e;
}, ne = function(e) {
    return te(5381, e);
};
function re(e) {
    for(var t = 0; t < e.length; t += 1){
        var n = e[t];
        if (b(n) && !N(n)) return !1;
    }
    return !0;
}
var oe = ne("5.3.3"), se = function() {
    function e11(e, t, n) {
        this.rules = e, this.staticRulesId = "", this.isStatic = false, this.componentId = t, this.baseHash = te(oe, t), this.baseStyle = n, Z.registerId(t);
    }
    return e11.prototype.generateAndInjectStyles = function(e, t, n) {
        var r = this.componentId, o = [];
        if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
            if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
            else {
                var s = Ne(this.rules, e, t, n).join(""), i = ee(te(this.baseHash, s) >>> 0);
                if (!t.hasNameForId(r, i)) {
                    var a = n(s, "." + i, void 0, r);
                    t.insertRules(r, i, a);
                }
                o.push(i), this.staticRulesId = i;
            }
        } else {
            for(var c = this.rules.length, u = te(this.baseHash, n.hash), l = "", d = 0; d < c; d++){
                var h = this.rules[d];
                if ("string" == typeof h) l += h, u = te(u, h + d);
                else if (h) {
                    var p = Ne(h, e, t, n), f = Array.isArray(p) ? p.join("") : p;
                    u = te(u, f + d), l += f;
                }
            }
            if (l) {
                var m = ee(u >>> 0);
                if (!t.hasNameForId(r, m)) {
                    var y = n(l, "." + m, void 0, r);
                    t.insertRules(r, m, y);
                }
                o.push(m);
            }
        }
        return o.join(" ");
    }, e11;
}(), ie = /^\s*\/\/.*$/gm, ae = [
    ":",
    "[",
    ".",
    "#"
];
function ce(e12) {
    var t10, n3, r2, o1, s1 = void 0 === e12 ? E : e12, i1 = s1.options, a1 = void 0 === i1 ? E : i1, c1 = s1.plugins, u1 = void 0 === c1 ? w : c1, l1 = new _stylisDefault.default(a1), d1 = [], h = function(e) {
        function t11(t) {
            if (t) try {
                e(t + "}");
            } catch (e) {
            }
        }
        return function(n, r, o, s, i, a, c, u, l, d) {
            switch(n){
                case 1:
                    if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                    break;
                case 2:
                    if (0 === u) return r + "/*|*/";
                    break;
                case 3:
                    switch(u){
                        case 102:
                        case 112:
                            return e(o[0] + r), "";
                        default:
                            return r + (0 === d ? "/*|*/" : "");
                    }
                case -2:
                    r.split("/*|*/}").forEach(t11);
            }
        };
    }(function(e) {
        d1.push(e);
    }), f = function(e, r, s) {
        return 0 === r && -1 !== ae.indexOf(s[n3.length]) || s.match(o1) ? e : "." + t10;
    };
    function m(e, s, i, a) {
        void 0 === a && (a = "&");
        var c = e.replace(ie, ""), u = s && i ? i + " " + s + " { " + c + " }" : c;
        return t10 = a, n3 = s, r2 = new RegExp("\\" + n3 + "\\b", "g"), o1 = new RegExp("(\\" + n3 + "\\b){2,}"), l1(i || !s ? "" : s, u);
    }
    return l1.use([].concat(u1, [
        function(e, t, o) {
            2 === e && o.length && o[0].lastIndexOf(n3) > 0 && (o[0] = o[0].replace(r2, f));
        },
        h,
        function(e) {
            if (-2 === e) {
                var t = d1;
                return d1 = [], t;
            }
        }
    ])), m.hash = u1.length ? u1.reduce(function(e, t) {
        return t.name || j(15), te(e, t.name);
    }, 5381).toString() : "", m;
}
var ue = _reactDefault.default.createContext(), le = ue.Consumer, de = _reactDefault.default.createContext(), he = (de.Consumer, new Z), pe = ce();
function fe() {
    return _react.useContext(ue) || he;
}
function me() {
    return _react.useContext(de) || pe;
}
function ye(e) {
    var t12 = _react.useState(e.stylisPlugins), n = t12[0], s = t12[1], c = fe(), u = _react.useMemo(function() {
        var t = c;
        return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
            target: e.target
        }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
            useCSSOMInjection: !1
        })), t;
    }, [
        e.disableCSSOMInjection,
        e.sheet,
        e.target
    ]), l = _react.useMemo(function() {
        return ce({
            options: {
                prefix: !e.disableVendorPrefixes
            },
            plugins: n
        });
    }, [
        e.disableVendorPrefixes,
        n
    ]);
    return _react.useEffect(function() {
        _shallowequalDefault.default(n, e.stylisPlugins) || s(e.stylisPlugins);
    }, [
        e.stylisPlugins
    ]), _reactDefault.default.createElement(ue.Provider, {
        value: u
    }, _reactDefault.default.createElement(de.Provider, {
        value: l
    }, _reactDefault.default.Children.only(e.children)));
}
var ve = function() {
    function e13(e14, t13) {
        var n = this;
        this.inject = function(e, t) {
            void 0 === t && (t = pe);
            var r = n.name + t.hash;
            e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
        }, this.toString = function() {
            return j(12, String(n.name));
        }, this.name = e14, this.id = "sc-keyframes-" + e14, this.rules = t13;
    }
    return e13.prototype.getName = function(e) {
        return void 0 === e && (e = pe), this.name + e.hash;
    }, e13;
}(), ge = /([A-Z])/, Se = /([A-Z])/g, we = /^ms-/, Ee = function(e) {
    return "-" + e.toLowerCase();
};
function be(e) {
    return ge.test(e) ? e.replace(Se, Ee).replace(we, "-ms-") : e;
}
var _e = function(e) {
    return null == e || !1 === e || "" === e;
};
function Ne(e15, n4, r3, o2) {
    if (Array.isArray(e15)) {
        for(var s, i = [], a = 0, c = e15.length; a < c; a += 1)"" !== (s = Ne(e15[a], n4, r3, o2)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
        return i;
    }
    if (_e(e15)) return "";
    if (N(e15)) return "." + e15.styledComponentId;
    if (b(e15)) {
        if ("function" != typeof (l = e15) || l.prototype && l.prototype.isReactComponent || !n4) return e15;
        var u = e15(n4);
        return _reactIs.isElement(u) && console.warn(_(e15) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(u, n4, r3, o2);
    }
    var l;
    return e15 instanceof ve ? r3 ? (e15.inject(r3, o2), e15.getName(o2)) : e15 : S(e15) ? (function e(t, n) {
        var r, o, s = [];
        for(var i in t)t.hasOwnProperty(i) && !_e(t[i]) && (Array.isArray(t[i]) && t[i].isCss || b(t[i]) ? s.push(be(i) + ":", t[i], ";") : S(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(be(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in _unitlessDefault.default ? String(o).trim() : o + "px") + ";"));
        return n ? [
            n + " {"
        ].concat(s, [
            "}"
        ]) : s;
    })(e15) : e15.toString();
}
var Ae = function(e) {
    return Array.isArray(e) && (e.isCss = !0), e;
};
function Ce(e) {
    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r];
    return b(e) || S(e) ? Ae(Ne(g(w, [
        e
    ].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ae(Ne(g(e, n)));
}
var Ie = /invalid hook call/i, Pe = new Set, Oe = function(e16, t14) {
    var n = "The component " + e16 + (t14 ? ' with the id of "' + t14 + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", r = console.error;
    try {
        var o = !0;
        console.error = function(e) {
            if (Ie.test(e)) o = !1, Pe.delete(n);
            else {
                for(var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)s[i - 1] = arguments[i];
                r.apply(void 0, [
                    e
                ].concat(s));
            }
        }, _react.useRef(), o && !Pe.has(n) && (console.warn(n), Pe.add(n));
    } catch (e) {
        Ie.test(e.message) && Pe.delete(n);
    } finally{
        console.error = r;
    }
}, Re = function(e, t, n) {
    return void 0 === n && (n = E), e.theme !== n.theme && e.theme || t || n.theme;
}, De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, je = /(^-|-$)/g;
function Te(e) {
    return e.replace(De, "-").replace(je, "");
}
var xe = function(e) {
    return ee(ne(e) >>> 0);
};
function ke(e) {
    return "string" == typeof e && e.charAt(0) === e.charAt(0).toLowerCase();
}
var Ve = function(e) {
    return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
}, Be = function(e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
};
function ze(e, t, n) {
    var r = e[n];
    Ve(t) && Ve(r) ? Me(r, t) : e[n] = t;
}
function Me(e) {
    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r];
    for(var o = 0, s = n; o < s.length; o++){
        var i = s[o];
        if (Ve(i)) for(var a in i)Be(a) && ze(e, i[a], a);
    }
    return e;
}
var Ge = _reactDefault.default.createContext(), Le = Ge.Consumer;
function Fe(e17) {
    var t15 = _react.useContext(Ge), n5 = _react.useMemo(function() {
        return (function(e, t) {
            if (!e) return j(14);
            if (b(e)) {
                var n = e(t);
                return null !== n && !Array.isArray(n) && "object" == typeof n ? n : j(7);
            }
            return Array.isArray(e) || "object" != typeof e ? j(8) : t ? v({
            }, t, {
            }, e) : e;
        })(e17.theme, t15);
    }, [
        e17.theme,
        t15
    ]);
    return e17.children ? _reactDefault.default.createElement(Ge.Provider, {
        value: n5
    }, e17.children) : null;
}
var Ye = {
};
function qe(e18, t16, n6) {
    var o3 = N(e18), i2 = !ke(e18), a2 = t16.attrs, c2 = void 0 === a2 ? w : a2, d2 = t16.componentId, h1 = void 0 === d2 ? function(e, t) {
        var n = "string" != typeof e ? "sc" : Te(e);
        Ye[n] = (Ye[n] || 0) + 1;
        var r = n + "-" + xe("5.3.3" + n + Ye[n]);
        return t ? t + "-" + r : r;
    }(t16.displayName, t16.parentComponentId) : d2, p1 = t16.displayName, f1 = void 0 === p1 ? function(e) {
        return ke(e) ? "styled." + e : "Styled(" + _(e) + ")";
    }(e18) : p1, g1 = t16.displayName && t16.componentId ? Te(t16.displayName) + "-" + t16.componentId : t16.componentId || h1, S1 = o3 && e18.attrs ? Array.prototype.concat(e18.attrs, c2).filter(Boolean) : c2, A1 = t16.shouldForwardProp;
    o3 && e18.shouldForwardProp && (A1 = t16.shouldForwardProp ? function(n, r, o) {
        return e18.shouldForwardProp(n, r, o) && t16.shouldForwardProp(n, r, o);
    } : e18.shouldForwardProp);
    var C1, I1 = new se(n6, g1, o3 ? e18.componentStyle : void 0), P1 = I1.isStatic && 0 === c2.length, O1 = function(e19, t17) {
        return (function(e20, t18, n7, r4) {
            var o4 = e20.attrs, i3 = e20.componentStyle, a = e20.defaultProps, c = e20.foldedComponentIds, d = e20.shouldForwardProp, h = e20.styledComponentId, p = e20.target;
            _react.useDebugValue(h);
            var f = function(e21, t19, n8) {
                void 0 === e21 && (e21 = E);
                var r = v({
                }, t19, {
                    theme: e21
                }), o = {
                };
                return n8.forEach(function(e) {
                    var t, n, s, i = e;
                    for(t in b(i) && (i = i(r)), i)r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
                }), [
                    r,
                    o
                ];
            }(Re(t18, _react.useContext(Ge), a) || E, t18, o4), y = f[0], g2 = f[1], S2 = function(e, t, n, r) {
                var o = fe(), s = me(), i = t ? e.generateAndInjectStyles(E, o, s) : e.generateAndInjectStyles(n, o, s);
                return _react.useDebugValue(i), !t && r && r(i), i;
            }(i3, r4, y, e20.warnTooManyClasses), w1 = n7, _1 = g2.$as || t18.$as || g2.as || t18.as || p, N1 = ke(_1), A2 = g2 !== t18 ? v({
            }, t18, {
            }, g2) : t18, C2 = {
            };
            for(var I2 in A2)"$" !== I2[0] && "as" !== I2 && ("forwardedAs" === I2 ? C2.as = A2[I2] : (d ? d(I2, _isPropValidDefault.default, _1) : !N1 || _isPropValidDefault.default(I2)) && (C2[I2] = A2[I2]));
            return t18.style && g2.style !== t18.style && (C2.style = v({
            }, t18.style, {
            }, g2.style)), C2.className = Array.prototype.concat(c, h, S2 !== h ? S2 : null, t18.className, g2.className).filter(Boolean).join(" "), C2.ref = w1, _react.createElement(_1, C2);
        })(C1, e19, t17, P1);
    };
    return O1.displayName = f1, (C1 = _reactDefault.default.forwardRef(O1)).attrs = S1, C1.componentStyle = I1, C1.displayName = f1, C1.shouldForwardProp = A1, C1.foldedComponentIds = o3 ? Array.prototype.concat(e18.foldedComponentIds, e18.styledComponentId) : w, C1.styledComponentId = g1, C1.target = o3 ? e18.target : e18, C1.withComponent = function(e22) {
        var r5 = t16.componentId, o5 = function(e, t) {
            if (null == e) return {
            };
            var n, r, o = {
            }, s = Object.keys(e);
            for(r = 0; r < s.length; r++)n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        }(t16, [
            "componentId"
        ]), s2 = r5 && r5 + "-" + (ke(e22) ? e22 : Te(_(e22)));
        return qe(e22, v({
        }, o5, {
            attrs: S1,
            componentId: s2
        }), n6);
    }, Object.defineProperty(C1, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps;
        },
        set: function(t) {
            this._foldedDefaultProps = o3 ? Me({
            }, e18.defaultProps, t) : t;
        }
    }), Oe(f1, g1), C1.warnTooManyClasses = (function(e, t) {
        var n = {
        }, r = !1;
        return function(o) {
            if (!r && (n[o] = !0, Object.keys(n).length >= 200)) {
                var s = t ? ' with the id of "' + t + '"' : "";
                console.warn("Over 200 classes were generated for component " + e + s + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r = !0, n = {
                };
            }
        };
    })(f1, g1), C1.toString = function() {
        return "." + C1.styledComponentId;
    }, i2 && _hoistNonReactStaticsDefault.default(C1, e18, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
    }), C1;
}
var He = function(e23) {
    return (function e(t, r, o) {
        if (void 0 === o && (o = E), !_reactIs.isValidElementType(r)) return j(1, String(r));
        var s = function() {
            return t(r, o, Ce.apply(void 0, arguments));
        };
        return s.withConfig = function(n) {
            return e(t, r, v({
            }, o, {
            }, n));
        }, s.attrs = function(n) {
            return e(t, r, v({
            }, o, {
                attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
            }));
        }, s;
    })(qe, e23);
};
[
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "textPath",
    "tspan"
].forEach(function(e) {
    He[e] = He(e);
});
var $e = function() {
    function e24(e, t) {
        this.rules = e, this.componentId = t, this.isStatic = re(e), Z.registerId(this.componentId + 1);
    }
    var t20 = e24.prototype;
    return t20.createStyles = function(e, t, n, r) {
        var o = r(Ne(this.rules, t, n, r).join(""), ""), s = this.componentId + e;
        n.insertRules(s, s, o);
    }, t20.removeStyles = function(e, t) {
        t.clearRules(this.componentId + e);
    }, t20.renderStyles = function(e, t, n, r) {
        e > 2 && Z.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
    }, e24;
}();
function We(e25) {
    for(var t21 = arguments.length, n9 = new Array(t21 > 1 ? t21 - 1 : 0), o6 = 1; o6 < t21; o6++)n9[o6 - 1] = arguments[o6];
    var i = Ce.apply(void 0, [
        e25
    ].concat(n9)), a = "sc-global-" + xe(JSON.stringify(i)), u = new $e(i, a);
    function l2(e26) {
        var t = fe(), n = me(), o = _react.useContext(Ge), l = _react.useRef(t.allocateGSInstance(a)).current;
        return _reactDefault.default.Children.count(e26.children) && console.warn("The global style component " + a + " was given child JSX. createGlobalStyle does not render children."), i.some(function(e) {
            return "string" == typeof e && -1 !== e.indexOf("@import");
        }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), t.server && h(l, e26, t, o, n), _react.useLayoutEffect(function() {
            if (!t.server) return h(l, e26, t, o, n), function() {
                return u.removeStyles(l, t);
            };
        }, [
            l,
            e26,
            t,
            o,
            n
        ]), null;
    }
    function h(e, t, n, r, o) {
        if (u.isStatic) u.renderStyles(e, O, n, o);
        else {
            var s = v({
            }, t, {
                theme: Re(t, r, l2.defaultProps)
            });
            u.renderStyles(e, s, n, o);
        }
    }
    return Oe(a), _reactDefault.default.memo(l2);
}
function Ue(e) {
    "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r];
    var o = Ce.apply(void 0, [
        e
    ].concat(n)).join(""), s = xe(o);
    return new ve(s, o);
}
var Je = function() {
    function e27() {
        var e = this;
        this._emitSheetCSS = function() {
            var t = e.instance.toString();
            if (!t) return "";
            var n = q();
            return "<style " + [
                n && 'nonce="' + n + '"',
                A + '="true"',
                'data-styled-version="5.3.3"'
            ].filter(Boolean).join(" ") + ">" + t + "</style>";
        }, this.getStyleTags = function() {
            return e.sealed ? j(2) : e._emitSheetCSS();
        }, this.getStyleElement = function() {
            var t;
            if (e.sealed) return j(2);
            var n = ((t = {
            })[A] = "", t["data-styled-version"] = "5.3.3", t.dangerouslySetInnerHTML = {
                __html: e.instance.toString()
            }, t), o = q();
            return o && (n.nonce = o), [
                _reactDefault.default.createElement("style", v({
                }, n, {
                    key: "sc-0-0"
                }))
            ];
        }, this.seal = function() {
            e.sealed = !0;
        }, this.instance = new Z({
            isServer: !0
        }), this.sealed = !1;
    }
    var t22 = e27.prototype;
    return t22.collectStyles = function(e) {
        return this.sealed ? j(2) : _reactDefault.default.createElement(ye, {
            sheet: this.instance
        }, e);
    }, t22.interleaveWithNodeStream = function(e) {
        return j(3);
    }, e27;
}(), Xe = function(e) {
    var t23 = _reactDefault.default.forwardRef(function(t, n) {
        var o = _react.useContext(Ge), i = e.defaultProps, a = Re(t, o, i);
        return void 0 === a && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + _(e) + '"'), _reactDefault.default.createElement(e, v({
        }, t, {
            theme: a,
            ref: n
        }));
    });
    return _hoistNonReactStaticsDefault.default(t23, e), t23.displayName = "WithTheme(" + _(e) + ")", t23;
}, Ze = function() {
    return _react.useContext(Ge);
}, Ke = {
    StyleSheet: Z,
    masterSheet: he
};
"undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
exports.default = He;

},{"react-is":"5KyfE","react":"4mchR","shallowequal":"7Ze5V","@emotion/stylis":"jzMzQ","@emotion/unitless":"fRt0C","@emotion/is-prop-valid":"kT6X9","hoist-non-react-statics":"6NILB","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5KyfE":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-is.development.js');

},{"./cjs/react-is.development.js":"dWfYV"}],"dWfYV":[function(require,module,exports) {
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) return true;
        }
        return false;
    }
    function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof;
            switch($$typeof){
                case REACT_ELEMENT_TYPE:
                    var type = object.type;
                    switch(type){
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                        case REACT_SUSPENSE_LIST_TYPE:
                            return type;
                        default:
                            var $$typeofType = type && type.$$typeof;
                            switch($$typeofType){
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                case REACT_PROVIDER_TYPE:
                                    return $$typeofType;
                                default:
                                    return $$typeof;
                            }
                    }
                case REACT_PORTAL_TYPE:
                    return $$typeof;
            }
        }
        return undefined;
    }
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false;
    var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated
    function isAsyncMode(object) {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
            console['warn']("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
        }
        return false;
    }
    function isConcurrentMode(object) {
        if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint
            console['warn']("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
        }
        return false;
    }
    function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
})();

},{}],"7Ze5V":[function(require,module,exports) {
//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) return !!ret;
    if (objA === objB) return true;
    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) return false;
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++){
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) return false;
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) return false;
    }
    return true;
};

},{}],"jzMzQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function stylis_min(W) {
    function M(d, c, e, h, a) {
        for(var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;){
            g = e.charCodeAt(l);
            l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
            if (0 === b + n + v + m) {
                if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
                    switch(g){
                        case 32:
                        case 9:
                        case 59:
                        case 13:
                        case 10:
                            break;
                        default:
                            f += e.charAt(l);
                    }
                    g = 59;
                }
                switch(g){
                    case 123:
                        f = f.trim();
                        q = f.charCodeAt(0);
                        k = 1;
                        for(t = ++l; l < B;){
                            switch(g = e.charCodeAt(l)){
                                case 123:
                                    k++;
                                    break;
                                case 125:
                                    k--;
                                    break;
                                case 47:
                                    switch(g = e.charCodeAt(l + 1)){
                                        case 42:
                                        case 47:
                                            a: {
                                                for(u = l + 1; u < J; ++u)switch(e.charCodeAt(u)){
                                                    case 47:
                                                        if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                                            l = u + 1;
                                                            break a;
                                                        }
                                                        break;
                                                    case 10:
                                                        if (47 === g) {
                                                            l = u + 1;
                                                            break a;
                                                        }
                                                }
                                                l = u;
                                            }
                                    }
                                    break;
                                case 91:
                                    g++;
                                case 40:
                                    g++;
                                case 34:
                                case 39:
                                    for(; (l++) < J && e.charCodeAt(l) !== g;);
                            }
                            if (0 === k) break;
                            l++;
                        }
                        k = e.substring(t, l);
                        0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
                        switch(q){
                            case 64:
                                0 < r && (f = f.replace(N, ''));
                                g = f.charCodeAt(1);
                                switch(g){
                                    case 100:
                                    case 109:
                                    case 115:
                                    case 45:
                                        r = c;
                                        break;
                                    default:
                                        r = O;
                                }
                                k = M(c, r, k, g, a + 1);
                                t = k.length;
                                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                                if (0 < t) switch(g){
                                    case 115:
                                        f = f.replace(da, ea);
                                    case 100:
                                    case 109:
                                    case 45:
                                        k = f + '{' + k + '}';
                                        break;
                                    case 107:
                                        f = f.replace(fa, '$1 $2');
                                        k = f + '{' + k + '}';
                                        k = 1 === w1 || 2 === w1 && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                                        break;
                                    default:
                                        k = f + k, 112 === h && (k = (p += k, ''));
                                }
                                else k = '';
                                break;
                            default:
                                k = M(c, X(c, f, I), k, h, a + 1);
                        }
                        F += k;
                        k = I = r = u = q = 0;
                        f = '';
                        g = e.charCodeAt(++l);
                        break;
                    case 125:
                    case 59:
                        f = (0 < r ? f.replace(N, '') : f).trim();
                        if (1 < (t = f.length)) switch(0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q){
                            case 0:
                                break;
                            case 64:
                                if (105 === g || 99 === g) {
                                    G += f + e.charAt(l);
                                    break;
                                }
                            default:
                                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                        }
                        I = r = u = q = 0;
                        f = '';
                        g = e.charCodeAt(++l);
                }
            }
            switch(g){
                case 13:
                case 10:
                    47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
                    0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
                    z = 1;
                    D++;
                    break;
                case 59:
                case 125:
                    if (0 === b + n + v + m) {
                        z++;
                        break;
                    }
                default:
                    z++;
                    y = e.charAt(l);
                    switch(g){
                        case 9:
                        case 32:
                            if (0 === n + m + b) switch(x){
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    y = '';
                                    break;
                                default:
                                    32 !== g && (y = ' ');
                            }
                            break;
                        case 0:
                            y = '\\0';
                            break;
                        case 12:
                            y = '\\f';
                            break;
                        case 11:
                            y = '\\v';
                            break;
                        case 38:
                            0 === n + b + m && (r = I = 1, y = '\f' + y);
                            break;
                        case 108:
                            if (0 === n + b + m + E && 0 < u) switch(l - u){
                                case 2:
                                    112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                                case 8:
                                    111 === K && (E = K);
                            }
                            break;
                        case 58:
                            0 === n + b + m && (u = l);
                            break;
                        case 44:
                            0 === b + v + n + m && (r = 1, y += '\r');
                            break;
                        case 34:
                        case 39:
                            0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                            break;
                        case 91:
                            0 === n + b + v && m++;
                            break;
                        case 93:
                            0 === n + b + v && m--;
                            break;
                        case 41:
                            0 === n + b + m && v--;
                            break;
                        case 40:
                            if (0 === n + b + m) {
                                if (0 === q) switch(2 * x + 3 * K){
                                    case 533:
                                        break;
                                    default:
                                        q = 1;
                                }
                                v++;
                            }
                            break;
                        case 64:
                            0 === b + v + n + m + u + k && (k = 1);
                            break;
                        case 42:
                        case 47:
                            if (!(0 < n + m + v)) switch(b){
                                case 0:
                                    switch(2 * g + 3 * e.charCodeAt(l + 1)){
                                        case 235:
                                            b = 47;
                                            break;
                                        case 220:
                                            t = l, b = 42;
                                    }
                                    break;
                                case 42:
                                    47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
                            }
                    }
                    0 === b && (f += y);
            }
            K = x;
            x = g;
            l++;
        }
        t = p.length;
        if (0 < t) {
            r = c;
            if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
            p = r.join(',') + '{' + p + '}';
            if (0 !== w1 * E) {
                2 !== w1 || L(p, 2) || (E = 0);
                switch(E){
                    case 111:
                        p = p.replace(ha, ':-moz-$1') + p;
                        break;
                    case 112:
                        p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
                }
                E = 0;
            }
        }
        return G + p + F;
    }
    function X(d, c, e) {
        var h = c.trim().split(ia);
        c = h;
        var a = h.length, m = d.length;
        switch(m){
            case 0:
            case 1:
                var b = 0;
                for(d = 0 === m ? '' : d[0] + ' '; b < a; ++b)c[b] = Z(d, c[b], e).trim();
                break;
            default:
                var v = b = 0;
                for(c = []; b < a; ++b)for(var n = 0; n < m; ++n)c[v++] = Z(d[n] + ' ', h[b], e).trim();
        }
        return c;
    }
    function Z(d, c, e) {
        var h = c.charCodeAt(0);
        33 > h && (h = (c = c.trim()).charCodeAt(0));
        switch(h){
            case 38:
                return c.replace(F1, '$1' + d.trim());
            case 58:
                return d.trim() + c.replace(F1, '$1' + d.trim());
            default:
                if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F1, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
        }
        return d + c;
    }
    function P(d, c, e, h) {
        var a = d + ';', m = 2 * c + 3 * e + 4 * h;
        if (944 === m) {
            d = a.indexOf(':', 9) + 1;
            var b = a.substring(d, a.length - 1).trim();
            b = a.substring(0, d).trim() + b + ';';
            return 1 === w1 || 2 === w1 && L(b, 1) ? '-webkit-' + b + b : b;
        }
        if (0 === w1 || 2 === w1 && !L(a, 1)) return a;
        switch(m){
            case 1015:
                return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
            case 951:
                return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
            case 963:
                return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
            case 1009:
                if (100 !== a.charCodeAt(4)) break;
            case 969:
            case 942:
                return '-webkit-' + a + a;
            case 978:
                return '-webkit-' + a + '-moz-' + a + a;
            case 1019:
            case 983:
                return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
            case 883:
                if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
                if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
                break;
            case 932:
                if (45 === a.charCodeAt(4)) switch(a.charCodeAt(5)){
                    case 103:
                        return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
                    case 115:
                        return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
                    case 98:
                        return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
                }
                return '-webkit-' + a + '-ms-' + a + a;
            case 964:
                return '-webkit-' + a + '-ms-flex-' + a + a;
            case 1023:
                if (99 !== a.charCodeAt(8)) break;
                b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
                return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
            case 1005:
                return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
            case 1000:
                b = a.substring(13).trim();
                c = b.indexOf('-') + 1;
                switch(b.charCodeAt(0) + b.charCodeAt(c)){
                    case 226:
                        b = a.replace(G1, 'tb');
                        break;
                    case 232:
                        b = a.replace(G1, 'tb-rl');
                        break;
                    case 220:
                        b = a.replace(G1, 'lr');
                        break;
                    default:
                        return a;
                }
                return '-webkit-' + a + '-ms-' + b + a;
            case 1017:
                if (-1 === a.indexOf('sticky', 9)) break;
            case 975:
                c = (a = d).length - 10;
                b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
                switch(m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)){
                    case 203:
                        if (111 > b.charCodeAt(8)) break;
                    case 115:
                        a = a.replace(b, '-webkit-' + b) + ';' + a;
                        break;
                    case 207:
                    case 102:
                        a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
                }
                return a + ';';
            case 938:
                if (45 === a.charCodeAt(5)) switch(a.charCodeAt(6)){
                    case 105:
                        return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
                    case 115:
                        return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
                    default:
                        return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
                }
                break;
            case 973:
            case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
            case 931:
            case 953:
                if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
                break;
            case 962:
                if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
        }
        return a;
    }
    function L(d, c) {
        var e = d.indexOf(1 === c ? ':' : '{'), h = d.substring(0, 3 !== c ? e : 10);
        e = d.substring(e + 1, d.length - 1);
        return R(2 !== c ? h : h.replace(na, '$1'), e, c);
    }
    function ea(d, c) {
        var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
        return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
    }
    function H(d, c, e, h, a, m, b, v, n, q) {
        for(var g = 0, x = c, w; g < A; ++g)switch(w = S[g].call(B1, d, x, e, h, a, m, b, v, n, q)){
            case void 0:
            case !1:
            case !0:
            case null:
                break;
            default:
                x = w;
        }
        if (x !== c) return x;
    }
    function T(d) {
        switch(d){
            case void 0:
            case null:
                A = S.length = 0;
                break;
            default:
                if ('function' === typeof d) S[A++] = d;
                else if ('object' === typeof d) for(var c = 0, e = d.length; c < e; ++c)T(d[c]);
                else Y = !!d | 0;
        }
        return T;
    }
    function U(d) {
        d = d.prefix;
        void 0 !== d && (R = null, d ? 'function' !== typeof d ? w1 = 1 : (w1 = 2, R = d) : w1 = 0);
        return U;
    }
    function B1(d, c) {
        var e = d;
        33 > e.charCodeAt(0) && (e = e.trim());
        V = e;
        e = [
            V
        ];
        if (0 < A) {
            var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
            void 0 !== h && 'string' === typeof h && (c = h);
        }
        var a = M(O, e, c, 0, 0);
        0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
        V = '';
        E = 0;
        z = D = 1;
        return a;
    }
    var ca = /^\0+/g, N = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F1 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q = /::(place)/g, ha = /:(read-only)/g, G1 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z = 1, D = 1, E = 0, w1 = 1, O = [], S = [], A = 0, R = null, Y = 0, V = '';
    B1.use = T;
    B1.set = U;
    void 0 !== W && U(W);
    return B1;
}
exports.default = stylis_min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fRt0C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
exports.default = unitlessKeys;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kT6X9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _memoize = require("@emotion/memoize");
var _memoizeDefault = parcelHelpers.interopDefault(_memoize);
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var index = _memoizeDefault.default(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
exports.default = index;

},{"@emotion/memoize":"5uNbV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5uNbV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function memoize(fn) {
    var cache = {
    };
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
exports.default = memoize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6NILB":[function(require,module,exports) {
'use strict';
var reactIs = require('react-is');
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {
};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) return MEMO_STATICS;
     // React v16.12 and above
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {
                }
            }
        }
    }
    return targetComponent;
}
module.exports = hoistNonReactStatics;

},{"react-is":"i49kc"}],"i49kc":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-is.development.js');

},{"./cjs/react-is.development.js":"8WE48"}],"8WE48":[function(require,module,exports) {
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 60103;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 60106;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 60107;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 60108;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 60114;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 60109;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 60110; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 60111;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 60111;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 60112;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 60113;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 60120;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 60115;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 60116;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 60121;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 60117;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 60118;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 60119;
    function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof;
            switch($$typeof){
                case REACT_ELEMENT_TYPE:
                    var type = object.type;
                    switch(type){
                        case REACT_ASYNC_MODE_TYPE:
                        case REACT_CONCURRENT_MODE_TYPE:
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                            return type;
                        default:
                            var $$typeofType = type && type.$$typeof;
                            switch($$typeofType){
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                case REACT_PROVIDER_TYPE:
                                    return $$typeofType;
                                default:
                                    return $$typeof;
                            }
                    }
                case REACT_PORTAL_TYPE:
                    return $$typeof;
            }
        }
        return undefined;
    } // AsyncMode is deprecated along with isAsyncMode
    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
    function isAsyncMode(object) {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
            console['warn']("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
})();

},{}],"d1Rfi":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$36f6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$36f6.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HomeContext", ()=>_homeContext.HomeContext
);
parcelHelpers.export(exports, "HomeProvider", ()=>_homeProvider.HomeProvider
);
parcelHelpers.export(exports, "useHome", ()=>useHome
);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _homeContext = require("./HomeContext");
var _homeProvider = require("./HomeProvider");
var _s = $RefreshSig$();
const useHome = ()=>{
    _s();
    const context = _reactDefault.default.useContext(_homeContext.HomeContext);
    return context;
};
_s(useHome, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

  $parcel$ReactRefreshHelpers$36f6.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"4mchR","./HomeContext":"9bX35","./HomeProvider":"lIr6S","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"9bX35":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a552 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a552.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initValue", ()=>initValue
);
parcelHelpers.export(exports, "HomeContext", ()=>HomeContext
);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const initValue = {
    isFetching: false,
    /* Actions */ fetchData: ()=>{
    }
};
const HomeContext = /*#__PURE__*/ _reactDefault.default.createContext(initValue);

  $parcel$ReactRefreshHelpers$a552.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"4mchR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"lIr6S":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b37c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b37c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HomeProvider", ()=>HomeProvider
);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _homeContext = require("./HomeContext");
class HomeProvider extends _reactDefault.default.PureComponent {
    constructor(props){
        super(props);
        this.fetchData = async ()=>{
            try {
                this.setState({
                    isFetching: true
                });
            } finally{
                this.setState({
                    isFetching: false
                });
            }
        };
        this.actions = {
            fetchData: this.fetchData
        };
        this.state = {
            ..._homeContext.initValue,
            ...this.actions
        };
    }
    render() {
        return(/*#__PURE__*/ _jsxDevRuntime.jsxDEV(_homeContext.HomeContext.Provider, {
            value: this.state,
            ...this.props
        }, void 0, false, {
            fileName: "src/contexts/Home/HomeProvider.tsx",
            lineNumber: 30,
            columnNumber: 12
        }, this));
    }
}

  $parcel$ReactRefreshHelpers$b37c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"3jZUD","react":"4mchR","./HomeContext":"9bX35","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"bPUxl":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$31f2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$31f2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withProvider", ()=>withProvider
);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function withProvider(Provider, Component) {
    const ProviderComp = (props)=>{
        return(/*#__PURE__*/ _jsxDevRuntime.jsxDEV(Provider, {
            ...props,
            children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(Component, {
            }, void 0, false, {
                fileName: "src/utils/ProviderHOC.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/utils/ProviderHOC.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this));
    };
    return ProviderComp;
}

  $parcel$ReactRefreshHelpers$31f2.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"3jZUD","react":"4mchR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}]},["emU3S","v3ZCU"], null, "parcelRequire4e1e")

//# sourceMappingURL=Home.0f6e6282.js.map
