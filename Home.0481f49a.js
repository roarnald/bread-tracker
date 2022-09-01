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
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("react-refresh/runtime");
var ErrorOverlay = require("react-error-overlay");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"8Ewuh":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "70b2c2470481f49a";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    bundle.hotData = {};
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

},{}],"jCJ5K":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a4b9 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a4b9.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _home = require("~/src/contexts/Home");
var _providerHOC = require("~/src/utils/ProviderHOC");
var _footer = require("../Public/Footer");
var _footerDefault = parcelHelpers.interopDefault(_footer);
var _homeSearchBar = require("./HomeSearchBar");
var _homeSearchBarDefault = parcelHelpers.interopDefault(_homeSearchBar);
var _homeTokenList = require("./HomeTokenList");
var _homeTokenListDefault = parcelHelpers.interopDefault(_homeTokenList);
const Home = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(HomeContainer, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "pt-20 pb-10 bg-white",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(HomeHeaderContainer, {
                            className: "lg:text-center flex items-center flex-col ",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                    className: "text-base text-indigo-600 font-semibold tracking-wide",
                                    children: "breadtracker.xyz"
                                }, void 0, false, {
                                    fileName: "src/components/Home/index.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(TypewriterHeaderWrapper, {
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        className: "mt-2 text-3xl leading-normal font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-loose",
                                        children: "A lightweight way to track that bread. \uD83C\uDF5E"
                                    }, void 0, false, {
                                        fileName: "src/components/Home/index.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/Home/index.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Home/index.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeSearchBarDefault.default), {}, void 0, false, {
                            fileName: "src/components/Home/index.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Home/index.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Home/index.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeTokenListDefault.default), {}, void 0, false, {
                fileName: "src/components/Home/index.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _footerDefault.default), {}, void 0, false, {
                fileName: "src/components/Home/index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Home/index.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, undefined);
};
_c = Home;
exports.default = _c1 = (0, _providerHOC.withProvider)((0, _home.HomeProvider), Home);
const HomeContainer = (0, _styledComponentsDefault.default).div``;
_c2 = HomeContainer;
const HomeHeaderContainer = (0, _styledComponentsDefault.default).div`
  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
`;
_c3 = HomeHeaderContainer;
const TypewriterHeaderWrapper = (0, _styledComponentsDefault.default).span`
  height: max-content;

  @media screen and (min-width: 1024px) {
    p {
      width: 100%;
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
        width: 100%;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: rgb(79 70 229 / var(--tw-text-opacity));
      }
    }
  }
`;
_c4 = TypewriterHeaderWrapper;
var _c, _c1, _c2, _c3, _c4;
$RefreshReg$(_c, "Home");
$RefreshReg$(_c1, "%default%");
$RefreshReg$(_c2, "HomeContainer");
$RefreshReg$(_c3, "HomeHeaderContainer");
$RefreshReg$(_c4, "TypewriterHeaderWrapper");

  $parcel$ReactRefreshHelpers$a4b9.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","styled-components":"1U3k6","~/src/contexts/Home":"kN0Rb","~/src/utils/ProviderHOC":"kGJyk","../Public/Footer":"jqIkn","./HomeSearchBar":"gONTT","./HomeTokenList":"8kY5x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"1U3k6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ServerStyleSheet", ()=>Je);
parcelHelpers.export(exports, "StyleSheetConsumer", ()=>le);
parcelHelpers.export(exports, "StyleSheetContext", ()=>ue);
parcelHelpers.export(exports, "StyleSheetManager", ()=>ye);
parcelHelpers.export(exports, "ThemeConsumer", ()=>Le);
parcelHelpers.export(exports, "ThemeContext", ()=>Ge);
parcelHelpers.export(exports, "ThemeProvider", ()=>Fe);
parcelHelpers.export(exports, "__PRIVATE__", ()=>Ke);
parcelHelpers.export(exports, "createGlobalStyle", ()=>We);
parcelHelpers.export(exports, "css", ()=>Ce);
parcelHelpers.export(exports, "isStyledComponent", ()=>N);
parcelHelpers.export(exports, "keyframes", ()=>Ue);
parcelHelpers.export(exports, "useTheme", ()=>Ze);
parcelHelpers.export(exports, "version", ()=>C);
parcelHelpers.export(exports, "withTheme", ()=>Xe);
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
var process = require("process");
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
    return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !(0, _reactIs.typeOf)(t);
}, w = Object.freeze([]), E = Object.freeze({});
function b(e) {
    return "function" == typeof e;
}
function _(e) {
    return "string" == typeof e && e || e.displayName || e.name || "Component";
}
function N(e) {
    return e && "string" == typeof e.styledComponentId;
}
var A = ("undefined" != typeof process && undefined, "data-styled"), C = "5.3.3", I = "undefined" != typeof window && "HTMLElement" in window, P = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : (typeof process, typeof process, true)), O = {}, R = {
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
    for(var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1)t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t.forEach(function(t) {
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
    function e(e) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    var t = e.prototype;
    return t.indexOfGroup = function(e) {
        for(var t = 0, n = 0; n < e; n++)t += this.groupSizes[n];
        return t;
    }, t.insertRules = function(e, t) {
        if (e >= this.groupSizes.length) {
            for(var n = this.groupSizes, r = n.length, o = r; e >= o;)(o <<= 1) < 0 && j(16, "" + e);
            this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
            for(var s = r; s < o; s++)this.groupSizes[s] = 0;
        }
        for(var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++)this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
    }, t.clearGroup = function(e) {
        if (e < this.length) {
            var t = this.groupSizes[e], n = this.indexOfGroup(e), r = n + t;
            this.groupSizes[e] = 0;
            for(var o = n; o < r; o++)this.tag.deleteRule(n);
        }
    }, t.getGroup = function(e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for(var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++)t += this.tag.getRule(s) + "/*!sc*/\n";
        return t;
    }, e;
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
}, H = function(e) {
    var t = document.head, n = e || t, r = document.createElement("style"), o = function(e) {
        for(var t = e.childNodes, n = t.length; n >= 0; n--){
            var r = t[n];
            if (r && 1 === r.nodeType && r.hasAttribute(A)) return r;
        }
    }(n), s = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(A, "active"), r.setAttribute("data-styled-version", "5.3.3");
    var i = q();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
}, $ = function() {
    function e(e) {
        var t = this.element = H(e);
        t.appendChild(document.createTextNode("")), this.sheet = function(e) {
            if (e.sheet) return e.sheet;
            for(var t = document.styleSheets, n = 0, r = t.length; n < r; n++){
                var o = t[n];
                if (o.ownerNode === e) return o;
            }
            j(17);
        }(t), this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function(e, t) {
        try {
            return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e1) {
            return !1;
        }
    }, t.deleteRule = function(e) {
        this.sheet.deleteRule(e), this.length--;
    }, t.getRule = function(e) {
        var t = this.sheet.cssRules[e];
        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
    }, e;
}(), W = function() {
    function e(e) {
        var t = this.element = H(e);
        this.nodes = t.childNodes, this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function(e, t) {
        if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t), r = this.nodes[e];
            return this.element.insertBefore(n, r || null), this.length++, !0;
        }
        return !1;
    }, t.deleteRule = function(e) {
        this.element.removeChild(this.nodes[e]), this.length--;
    }, t.getRule = function(e) {
        return e < this.length ? this.nodes[e].textContent : "";
    }, e;
}(), U = function() {
    function e(e) {
        this.rules = [], this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function(e, t) {
        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, t.deleteRule = function(e) {
        this.rules.splice(e, 1), this.length--;
    }, t.getRule = function(e) {
        return e < this.length ? this.rules[e] : "";
    }, e;
}(), J = I, X = {
    isServer: !I,
    useCSSOMInjection: !P
}, Z = function() {
    function e(e, t, n) {
        void 0 === e && (e = E), void 0 === t && (t = {}), this.options = v({}, X, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && I && J && (J = !1, function(e) {
            for(var t = document.querySelectorAll(G), n = 0, r = t.length; n < r; n++){
                var o = t[n];
                o && "active" !== o.getAttribute(A) && (Y(e, o), o.parentNode && o.parentNode.removeChild(o));
            }
        }(this));
    }
    e.registerId = function(e) {
        return B(e);
    };
    var t = e.prototype;
    return t.reconstructWithOptions = function(t, n) {
        return void 0 === n && (n = !0), new e(v({}, this.options, {}, t), this.gs, n && this.names || void 0);
    }, t.allocateGSInstance = function(e) {
        return this.gs[e] = (this.gs[e] || 0) + 1;
    }, t.getTag = function() {
        var e, t, n, r, o;
        return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new U(o) : r ? new $(o) : new W(o), new T(e)));
    }, t.hasNameForId = function(e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
    }, t.registerName = function(e, t) {
        if (B(e), this.names.has(e)) this.names.get(e).add(t);
        else {
            var n = new Set;
            n.add(t), this.names.set(e, n);
        }
    }, t.insertRules = function(e, t, n) {
        this.registerName(e, t), this.getTag().insertRules(B(e), n);
    }, t.clearNames = function(e) {
        this.names.has(e) && this.names.get(e).clear();
    }, t.clearRules = function(e) {
        this.getTag().clearGroup(B(e)), this.clearNames(e);
    }, t.clearTag = function() {
        this.tag = void 0;
    }, t.toString = function() {
        return function(e) {
            for(var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++){
                var s = z(o);
                if (void 0 !== s) {
                    var i = e.names.get(s), a = t.getGroup(o);
                    if (i && a && i.size) {
                        var c = A + ".g" + o + '[id="' + s + '"]', u = "";
                        void 0 !== i && i.forEach(function(e) {
                            e.length > 0 && (u += e + ",");
                        }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
                    }
                }
            }
            return r;
        }(this);
    }, e;
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
    function e(e, t, n) {
        this.rules = e, this.staticRulesId = "", this.isStatic = false, this.componentId = t, this.baseHash = te(oe, t), this.baseStyle = n, Z.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function(e, t, n) {
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
    }, e;
}(), ie = /^\s*\/\/.*$/gm, ae = [
    ":",
    "[",
    ".",
    "#"
];
function ce(e) {
    var t, n, r, o, s = void 0 === e ? E : e, i = s.options, a = void 0 === i ? E : i, c = s.plugins, u = void 0 === c ? w : c, l = new (0, _stylisDefault.default)(a), d = [], h = function(e) {
        function t(t) {
            if (t) try {
                e(t + "}");
            } catch (e1) {}
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
                    r.split("/*|*/}").forEach(t);
            }
        };
    }(function(e) {
        d.push(e);
    }), f = function(e, r, s) {
        return 0 === r && -1 !== ae.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
    };
    function m(e, s, i, a) {
        void 0 === a && (a = "&");
        var c = e.replace(ie, ""), u = s && i ? i + " " + s + " { " + c + " }" : c;
        return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
    }
    return l.use([].concat(u, [
        function(e, t, o) {
            2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
        },
        h,
        function(e) {
            if (-2 === e) {
                var t = d;
                return d = [], t;
            }
        }
    ])), m.hash = u.length ? u.reduce(function(e, t) {
        return t.name || j(15), te(e, t.name);
    }, 5381).toString() : "", m;
}
var ue = (0, _reactDefault.default).createContext(), le = ue.Consumer, de = (0, _reactDefault.default).createContext(), he = (de.Consumer, new Z), pe = ce();
function fe() {
    return (0, _react.useContext)(ue) || he;
}
function me() {
    return (0, _react.useContext)(de) || pe;
}
function ye(e) {
    var t = (0, _react.useState)(e.stylisPlugins), n = t[0], s = t[1], c = fe(), u = (0, _react.useMemo)(function() {
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
    ]), l = (0, _react.useMemo)(function() {
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
    return (0, _react.useEffect)(function() {
        (0, _shallowequalDefault.default)(n, e.stylisPlugins) || s(e.stylisPlugins);
    }, [
        e.stylisPlugins
    ]), (0, _reactDefault.default).createElement(ue.Provider, {
        value: u
    }, (0, _reactDefault.default).createElement(de.Provider, {
        value: l
    }, (0, _reactDefault.default).Children.only(e.children)));
}
var ve = function() {
    function e(e, t) {
        var n = this;
        this.inject = function(e, t) {
            void 0 === t && (t = pe);
            var r = n.name + t.hash;
            e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
        }, this.toString = function() {
            return j(12, String(n.name));
        }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
    }
    return e.prototype.getName = function(e) {
        return void 0 === e && (e = pe), this.name + e.hash;
    }, e;
}(), ge = /([A-Z])/, Se = /([A-Z])/g, we = /^ms-/, Ee = function(e) {
    return "-" + e.toLowerCase();
};
function be(e) {
    return ge.test(e) ? e.replace(Se, Ee).replace(we, "-ms-") : e;
}
var _e = function(e) {
    return null == e || !1 === e || "" === e;
};
function Ne(e, n, r, o) {
    if (Array.isArray(e)) {
        for(var s, i = [], a = 0, c = e.length; a < c; a += 1)"" !== (s = Ne(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
        return i;
    }
    if (_e(e)) return "";
    if (N(e)) return "." + e.styledComponentId;
    if (b(e)) {
        if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
        var u = e(n);
        return (0, _reactIs.isElement)(u) && console.warn(_(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(u, n, r, o);
    }
    var l;
    return e instanceof ve ? r ? (e.inject(r, o), e.getName(o)) : e : S(e) ? function e(t, n) {
        var r, o, s = [];
        for(var i in t)t.hasOwnProperty(i) && !_e(t[i]) && (Array.isArray(t[i]) && t[i].isCss || b(t[i]) ? s.push(be(i) + ":", t[i], ";") : S(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(be(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in (0, _unitlessDefault.default) ? String(o).trim() : o + "px") + ";"));
        return n ? [
            n + " {"
        ].concat(s, [
            "}"
        ]) : s;
    }(e) : e.toString();
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
var Ie = /invalid hook call/i, Pe = new Set, Oe = function(e, t) {
    var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", r = console.error;
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
        }, (0, _react.useRef)(), o && !Pe.has(n) && (console.warn(n), Pe.add(n));
    } catch (e1) {
        Ie.test(e1.message) && Pe.delete(n);
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
var Ge = (0, _reactDefault.default).createContext(), Le = Ge.Consumer;
function Fe(e) {
    var t = (0, _react.useContext)(Ge), n = (0, _react.useMemo)(function() {
        return function(e, t) {
            if (!e) return j(14);
            if (b(e)) {
                var n = e(t);
                return null !== n && !Array.isArray(n) && "object" == typeof n ? n : j(7);
            }
            return Array.isArray(e) || "object" != typeof e ? j(8) : t ? v({}, t, {}, e) : e;
        }(e.theme, t);
    }, [
        e.theme,
        t
    ]);
    return e.children ? (0, _reactDefault.default).createElement(Ge.Provider, {
        value: n
    }, e.children) : null;
}
var Ye = {};
function qe(e, t, n) {
    var o = N(e), i = !ke(e), a = t.attrs, c = void 0 === a ? w : a, d = t.componentId, h = void 0 === d ? function(e, t) {
        var n = "string" != typeof e ? "sc" : Te(e);
        Ye[n] = (Ye[n] || 0) + 1;
        var r = n + "-" + xe("5.3.3" + n + Ye[n]);
        return t ? t + "-" + r : r;
    }(t.displayName, t.parentComponentId) : d, p = t.displayName, f = void 0 === p ? function(e) {
        return ke(e) ? "styled." + e : "Styled(" + _(e) + ")";
    }(e) : p, g = t.displayName && t.componentId ? Te(t.displayName) + "-" + t.componentId : t.componentId || h, S = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c, A = t.shouldForwardProp;
    o && e.shouldForwardProp && (A = t.shouldForwardProp ? function(n, r, o) {
        return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
    } : e.shouldForwardProp);
    var C, I = new se(n, g, o ? e.componentStyle : void 0), P = I.isStatic && 0 === c.length, O = function(e, t) {
        return function(e, t, n, r) {
            var o = e.attrs, i = e.componentStyle, a = e.defaultProps, c = e.foldedComponentIds, d = e.shouldForwardProp, h = e.styledComponentId, p = e.target;
            (0, _react.useDebugValue)(h);
            var f = function(e, t, n) {
                void 0 === e && (e = E);
                var r = v({}, t, {
                    theme: e
                }), o = {};
                return n.forEach(function(e) {
                    var t, n, s, i = e;
                    for(t in b(i) && (i = i(r)), i)r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
                }), [
                    r,
                    o
                ];
            }(Re(t, (0, _react.useContext)(Ge), a) || E, t, o), y = f[0], g = f[1], S = function(e, t, n, r) {
                var o = fe(), s = me(), i = t ? e.generateAndInjectStyles(E, o, s) : e.generateAndInjectStyles(n, o, s);
                return (0, _react.useDebugValue)(i), !t && r && r(i), i;
            }(i, r, y, e.warnTooManyClasses), w = n, _ = g.$as || t.$as || g.as || t.as || p, N = ke(_), A = g !== t ? v({}, t, {}, g) : t, C = {};
            for(var I in A)"$" !== I[0] && "as" !== I && ("forwardedAs" === I ? C.as = A[I] : (d ? d(I, (0, _isPropValidDefault.default), _) : !N || (0, _isPropValidDefault.default)(I)) && (C[I] = A[I]));
            return t.style && g.style !== t.style && (C.style = v({}, t.style, {}, g.style)), C.className = Array.prototype.concat(c, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "), C.ref = w, (0, _react.createElement)(_, C);
        }(C, e, t, P);
    };
    return O.displayName = f, (C = (0, _reactDefault.default).forwardRef(O)).attrs = S, C.componentStyle = I, C.displayName = f, C.shouldForwardProp = A, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : w, C.styledComponentId = g, C.target = o ? e.target : e, C.withComponent = function(e) {
        var r = t.componentId, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {}, s = Object.keys(e);
            for(r = 0; r < s.length; r++)n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        }(t, [
            "componentId"
        ]), s = r && r + "-" + (ke(e) ? e : Te(_(e)));
        return qe(e, v({}, o, {
            attrs: S,
            componentId: s
        }), n);
    }, Object.defineProperty(C, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps;
        },
        set: function(t) {
            this._foldedDefaultProps = o ? Me({}, e.defaultProps, t) : t;
        }
    }), Oe(f, g), C.warnTooManyClasses = function(e, t) {
        var n = {}, r = !1;
        return function(o) {
            if (!r && (n[o] = !0, Object.keys(n).length >= 200)) {
                var s = t ? ' with the id of "' + t + '"' : "";
                console.warn("Over 200 classes were generated for component " + e + s + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r = !0, n = {};
            }
        };
    }(f, g), C.toString = function() {
        return "." + C.styledComponentId;
    }, i && (0, _hoistNonReactStaticsDefault.default)(C, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
    }), C;
}
var He = function(e) {
    return function e(t, r, o) {
        if (void 0 === o && (o = E), !(0, _reactIs.isValidElementType)(r)) return j(1, String(r));
        var s = function() {
            return t(r, o, Ce.apply(void 0, arguments));
        };
        return s.withConfig = function(n) {
            return e(t, r, v({}, o, {}, n));
        }, s.attrs = function(n) {
            return e(t, r, v({}, o, {
                attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
            }));
        }, s;
    }(qe, e);
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
    function e(e, t) {
        this.rules = e, this.componentId = t, this.isStatic = re(e), Z.registerId(this.componentId + 1);
    }
    var t = e.prototype;
    return t.createStyles = function(e, t, n, r) {
        var o = r(Ne(this.rules, t, n, r).join(""), ""), s = this.componentId + e;
        n.insertRules(s, s, o);
    }, t.removeStyles = function(e, t) {
        t.clearRules(this.componentId + e);
    }, t.renderStyles = function(e, t, n, r) {
        e > 2 && Z.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
    }, e;
}();
function We(e) {
    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)n[o - 1] = arguments[o];
    var i = Ce.apply(void 0, [
        e
    ].concat(n)), a = "sc-global-" + xe(JSON.stringify(i)), u = new $e(i, a);
    function l(e) {
        var t = fe(), n = me(), o = (0, _react.useContext)(Ge), l = (0, _react.useRef)(t.allocateGSInstance(a)).current;
        return (0, _reactDefault.default).Children.count(e.children) && console.warn("The global style component " + a + " was given child JSX. createGlobalStyle does not render children."), i.some(function(e) {
            return "string" == typeof e && -1 !== e.indexOf("@import");
        }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), t.server && h(l, e, t, o, n), (0, _react.useLayoutEffect)(function() {
            if (!t.server) return h(l, e, t, o, n), function() {
                return u.removeStyles(l, t);
            };
        }, [
            l,
            e,
            t,
            o,
            n
        ]), null;
    }
    function h(e, t, n, r, o) {
        if (u.isStatic) u.renderStyles(e, O, n, o);
        else {
            var s = v({}, t, {
                theme: Re(t, r, l.defaultProps)
            });
            u.renderStyles(e, s, n, o);
        }
    }
    return Oe(a), (0, _reactDefault.default).memo(l);
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
    function e() {
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
            var n = ((t = {})[A] = "", t["data-styled-version"] = "5.3.3", t.dangerouslySetInnerHTML = {
                __html: e.instance.toString()
            }, t), o = q();
            return o && (n.nonce = o), [
                (0, _reactDefault.default).createElement("style", v({}, n, {
                    key: "sc-0-0"
                }))
            ];
        }, this.seal = function() {
            e.sealed = !0;
        }, this.instance = new Z({
            isServer: !0
        }), this.sealed = !1;
    }
    var t = e.prototype;
    return t.collectStyles = function(e) {
        return this.sealed ? j(2) : (0, _reactDefault.default).createElement(ye, {
            sheet: this.instance
        }, e);
    }, t.interleaveWithNodeStream = function(e) {
        return j(3);
    }, e;
}(), Xe = function(e) {
    var t = (0, _reactDefault.default).forwardRef(function(t, n) {
        var o = (0, _react.useContext)(Ge), i = e.defaultProps, a = Re(t, o, i);
        return void 0 === a && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + _(e) + '"'), (0, _reactDefault.default).createElement(e, v({}, t, {
            theme: a,
            ref: n
        }));
    });
    return (0, _hoistNonReactStaticsDefault.default)(t, e), t.displayName = "WithTheme(" + _(e) + ")", t;
}, Ze = function() {
    return (0, _react.useContext)(Ge);
}, Ke = {
    StyleSheet: Z,
    masterSheet: he
};
"undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
exports.default = He;

},{"react-is":"7EuwB","react":"21dqq","shallowequal":"fjwkp","@emotion/stylis":"fGS9o","@emotion/unitless":"pVndT","@emotion/is-prop-valid":"5ZOhJ","hoist-non-react-statics":"1GfsB","process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7EuwB":[function(require,module,exports) {
"use strict";
module.exports = require("./cjs/react-is.development.js");

},{"./cjs/react-is.development.js":"5DsXl"}],"5DsXl":[function(require,module,exports) {
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        REACT_SCOPE_TYPE = symbolFor("react.scope");
        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
    }
    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) return true;
        if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) return true;
        }
        return false;
    }
    function typeOf(object) {
        if (typeof object === "object" && object !== null) {
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
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
        }
        return false;
    }
    function isConcurrentMode(object) {
        if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint
            console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
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
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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

},{}],"fjwkp":[function(require,module,exports) {
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

},{}],"fGS9o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function stylis_min(W) {
    function M(d, c, e, h, a) {
        for(var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = "", p = "", F = "", G = "", C; l < B;){
            g = e.charCodeAt(l);
            l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
            if (0 === b + n + v + m) {
                if (l === J && (0 < r && (f = f.replace(N, "")), 0 < f.trim().length)) {
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
                        0 === q && (q = (f = f.replace(ca, "").trim()).charCodeAt(0));
                        switch(q){
                            case 64:
                                0 < r && (f = f.replace(N, ""));
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
                                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(""), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ""));
                                if (0 < t) switch(g){
                                    case 115:
                                        f = f.replace(da, ea);
                                    case 100:
                                    case 109:
                                    case 45:
                                        k = f + "{" + k + "}";
                                        break;
                                    case 107:
                                        f = f.replace(fa, "$1 $2");
                                        k = f + "{" + k + "}";
                                        k = 1 === w || 2 === w && L("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
                                        break;
                                    default:
                                        k = f + k, 112 === h && (k = (p += k, ""));
                                }
                                else k = "";
                                break;
                            default:
                                k = M(c, X(c, f, I), k, h, a + 1);
                        }
                        F += k;
                        k = I = r = u = q = 0;
                        f = "";
                        g = e.charCodeAt(++l);
                        break;
                    case 125:
                    case 59:
                        f = (0 < r ? f.replace(N, "") : f).trim();
                        if (1 < (t = f.length)) switch(0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(" ", ":")).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = "\0\0"), q = f.charCodeAt(0), g = f.charCodeAt(1), q){
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
                        f = "";
                        g = e.charCodeAt(++l);
                }
            }
            switch(g){
                case 13:
                case 10:
                    47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += "\0");
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
                                    y = "";
                                    break;
                                default:
                                    32 !== g && (y = " ");
                            }
                            break;
                        case 0:
                            y = "\\0";
                            break;
                        case 12:
                            y = "\\f";
                            break;
                        case 11:
                            y = "\\v";
                            break;
                        case 38:
                            0 === n + b + m && (r = I = 1, y = "\f" + y);
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
                            0 === b + v + n + m && (r = 1, y += "\r");
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
                                    47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = "", b = 0);
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
            p = r.join(",") + "{" + p + "}";
            if (0 !== w * E) {
                2 !== w || L(p, 2) || (E = 0);
                switch(E){
                    case 111:
                        p = p.replace(ha, ":-moz-$1") + p;
                        break;
                    case 112:
                        p = p.replace(Q, "::-webkit-input-$1") + p.replace(Q, "::-moz-$1") + p.replace(Q, ":-ms-input-$1") + p;
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
                for(d = 0 === m ? "" : d[0] + " "; b < a; ++b)c[b] = Z(d, c[b], e).trim();
                break;
            default:
                var v = b = 0;
                for(c = []; b < a; ++b)for(var n = 0; n < m; ++n)c[v++] = Z(d[n] + " ", h[b], e).trim();
        }
        return c;
    }
    function Z(d, c, e) {
        var h = c.charCodeAt(0);
        33 > h && (h = (c = c.trim()).charCodeAt(0));
        switch(h){
            case 38:
                return c.replace(F, "$1" + d.trim());
            case 58:
                return d.trim() + c.replace(F, "$1" + d.trim());
            default:
                if (0 < 1 * e && 0 < c.indexOf("\f")) return c.replace(F, (58 === d.charCodeAt(0) ? "" : "$1") + d.trim());
        }
        return d + c;
    }
    function P(d, c, e, h) {
        var a = d + ";", m = 2 * c + 3 * e + 4 * h;
        if (944 === m) {
            d = a.indexOf(":", 9) + 1;
            var b = a.substring(d, a.length - 1).trim();
            b = a.substring(0, d).trim() + b + ";";
            return 1 === w || 2 === w && L(b, 1) ? "-webkit-" + b + b : b;
        }
        if (0 === w || 2 === w && !L(a, 1)) return a;
        switch(m){
            case 1015:
                return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
            case 951:
                return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
            case 963:
                return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
            case 1009:
                if (100 !== a.charCodeAt(4)) break;
            case 969:
            case 942:
                return "-webkit-" + a + a;
            case 978:
                return "-webkit-" + a + "-moz-" + a + a;
            case 1019:
            case 983:
                return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
            case 883:
                if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                if (0 < a.indexOf("image-set(", 11)) return a.replace(ja, "$1-webkit-$2") + a;
                break;
            case 932:
                if (45 === a.charCodeAt(4)) switch(a.charCodeAt(5)){
                    case 103:
                        return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                    case 115:
                        return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                    case 98:
                        return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
                }
                return "-webkit-" + a + "-ms-" + a + a;
            case 964:
                return "-webkit-" + a + "-ms-flex-" + a + a;
            case 1023:
                if (99 !== a.charCodeAt(8)) break;
                b = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
                return "-webkit-box-pack" + b + "-webkit-" + a + "-ms-flex-pack" + b + a;
            case 1005:
                return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;
            case 1e3:
                b = a.substring(13).trim();
                c = b.indexOf("-") + 1;
                switch(b.charCodeAt(0) + b.charCodeAt(c)){
                    case 226:
                        b = a.replace(G, "tb");
                        break;
                    case 232:
                        b = a.replace(G, "tb-rl");
                        break;
                    case 220:
                        b = a.replace(G, "lr");
                        break;
                    default:
                        return a;
                }
                return "-webkit-" + a + "-ms-" + b + a;
            case 1017:
                if (-1 === a.indexOf("sticky", 9)) break;
            case 975:
                c = (a = d).length - 10;
                b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim();
                switch(m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)){
                    case 203:
                        if (111 > b.charCodeAt(8)) break;
                    case 115:
                        a = a.replace(b, "-webkit-" + b) + ";" + a;
                        break;
                    case 207:
                    case 102:
                        a = a.replace(b, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a.replace(b, "-webkit-" + b) + ";" + a.replace(b, "-ms-" + b + "box") + ";" + a;
                }
                return a + ";";
            case 938:
                if (45 === a.charCodeAt(5)) switch(a.charCodeAt(6)){
                    case 105:
                        return b = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a;
                    case 115:
                        return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;
                    default:
                        return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
                }
                break;
            case 973:
            case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
            case 931:
            case 953:
                if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0) ? P(d.replace("stretch", "fill-available"), c, e, h).replace(":fill-available", ":stretch") : a.replace(b, "-webkit-" + b) + a.replace(b, "-moz-" + b.replace("fill-", "")) + a;
                break;
            case 962:
                if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
        }
        return a;
    }
    function L(d, c) {
        var e = d.indexOf(1 === c ? ":" : "{"), h = d.substring(0, 3 !== c ? e : 10);
        e = d.substring(e + 1, d.length - 1);
        return R(2 !== c ? h : h.replace(na, "$1"), e, c);
    }
    function ea(d, c) {
        var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
        return e !== c + ";" ? e.replace(oa, " or ($1)").substring(4) : "(" + c + ")";
    }
    function H(d, c, e, h, a, m, b, v, n, q) {
        for(var g = 0, x = c, w; g < A; ++g)switch(w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)){
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
                if ("function" === typeof d) S[A++] = d;
                else if ("object" === typeof d) for(var c = 0, e = d.length; c < e; ++c)T(d[c]);
                else Y = !!d | 0;
        }
        return T;
    }
    function U(d) {
        d = d.prefix;
        void 0 !== d && (R = null, d ? "function" !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
        return U;
    }
    function B(d, c) {
        var e = d;
        33 > e.charCodeAt(0) && (e = e.trim());
        V = e;
        e = [
            V
        ];
        if (0 < A) {
            var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
            void 0 !== h && "string" === typeof h && (c = h);
        }
        var a = M(O, e, c, 0, 0);
        0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
        V = "";
        E = 0;
        z = D = 1;
        return a;
    }
    var ca = /^\0+/g, N = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q = /::(place)/g, ha = /:(read-only)/g, G = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z = 1, D = 1, E = 0, w = 1, O = [], S = [], A = 0, R = null, Y = 0, V = "";
    B.use = T;
    B.set = U;
    void 0 !== W && U(W);
    return B;
}
exports.default = stylis_min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pVndT":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ZOhJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _memoize = require("@emotion/memoize");
var _memoizeDefault = parcelHelpers.interopDefault(_memoize);
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var index = (0, _memoizeDefault.default)(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
exports.default = index;

},{"@emotion/memoize":"3aVvJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3aVvJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function memoize(fn) {
    var cache = {};
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
exports.default = memoize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GfsB":[function(require,module,exports) {
"use strict";
var reactIs = require("react-is");
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
    "$$typeof": true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    "$$typeof": true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) return MEMO_STATICS;
     // React v16.12 and above
    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== "string") {
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
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
module.exports = hoistNonReactStatics;

},{"react-is":"8V70c"}],"8V70c":[function(require,module,exports) {
"use strict";
module.exports = require("./cjs/react-is.development.js");

},{"./cjs/react-is.development.js":"drjfK"}],"drjfK":[function(require,module,exports) {
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 0xead7;
    function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object) {
        if (typeof object === "object" && object !== null) {
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
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
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
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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

},{}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"kN0Rb":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a52b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a52b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HomeContext", ()=>(0, _homeContext.HomeContext));
parcelHelpers.export(exports, "HomeProvider", ()=>(0, _homeProvider.HomeProvider));
parcelHelpers.export(exports, "useHome", ()=>useHome);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _homeContext = require("./HomeContext");
var _homeProvider = require("./HomeProvider");
var _s = $RefreshSig$();
const useHome = ()=>{
    _s();
    const context = (0, _reactDefault.default).useContext((0, _homeContext.HomeContext));
    return context;
};
_s(useHome, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

  $parcel$ReactRefreshHelpers$a52b.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","./HomeContext":"8jHlc","./HomeProvider":"dU3Rh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"8jHlc":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d2d5 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d2d5.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STORAGE_KEY", ()=>STORAGE_KEY);
parcelHelpers.export(exports, "initValue", ()=>initValue);
parcelHelpers.export(exports, "HomeContext", ()=>HomeContext);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const STORAGE_KEY = "coin-list";
const initValue = {
    isFirstLoad: true,
    isFetchingTokenList: true,
    isFetchingTokenPrice: false,
    coinList: [],
    filteredCoinList: [],
    userCoinList: {},
    pinnedToken: localStorage.getItem("pinned"),
    /* Actions */ fetchCoinList: ()=>{},
    fetchUserCoins: ()=>{},
    filterCoinList: ()=>{},
    handleDelete: ()=>()=>{},
    setPinnedToken: ()=>{}
};
const HomeContext = /*#__PURE__*/ (0, _reactDefault.default).createContext(initValue);

  $parcel$ReactRefreshHelpers$d2d5.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"dU3Rh":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$4b09 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4b09.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HomeProvider", ()=>HomeProvider);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _coins = require("~/src/api/Coins");
var _simple = require("~/src/api/Simple");
var _common = require("~/src/utils/Common");
var _homeContext = require("./HomeContext");
const BASIC_COIN_LIST = "bitcoin,ethereum,cardano,";
class HomeProvider extends (0, _reactDefault.default).PureComponent {
    constructor(props){
        super(props);
        this.state = {
            ...(0, _homeContext.initValue),
            ...this.actions
        };
    }
    componentDidMount() {
        /**
     * Set user list to basic list if first visit
     */ if (localStorage.getItem((0, _homeContext.STORAGE_KEY)) === null) localStorage.setItem((0, _homeContext.STORAGE_KEY), BASIC_COIN_LIST);
        this.fetchCoinList();
        this.fetchUserCoins();
    }
    fetchCoinList = async ()=>{
        try {
            this.setState({
                isFetchingTokenList: true
            });
            const coinList = await (0, _coins.getCoinList)();
            this.setState({
                coinList,
                filteredCoinList: coinList
            });
        } finally{
            this.setState({
                isFetchingTokenList: false
            });
        }
    };
    fetchUserCoins = async ()=>{
        try {
            this.setState({
                isFetchingTokenPrice: true
            });
            const userCoinList = await (0, _simple.getSimplePrice)({
                ids: localStorage.getItem((0, _homeContext.STORAGE_KEY)) || "",
                vs_currencies: "usd",
                include_market_cap: true,
                include_24hr_vol: true,
                include_24hr_change: true,
                include_last_updated_at: true
            });
            this.setState({
                userCoinList
            });
            this.setTitleAsPinnedToken();
        } finally{
            const { isFirstLoad  } = this.state;
            this.setState({
                isFetchingTokenPrice: false
            });
            if (isFirstLoad) this.setState({
                isFirstLoad: false
            });
        }
    };
    tempToggleLoading = ()=>this.setState(({ isFetchingTokenList: isFetching  })=>({
                isFetchingTokenList: !isFetching
            }));
    filterCoinList = (filterKey)=>{
        const filterKeyLower = filterKey.toLowerCase();
        this.setState(({ coinList  })=>({
                filteredCoinList: coinList.filter(({ symbol , name  })=>symbol.includes(filterKeyLower) || name.toLowerCase().includes(filterKeyLower)).sort((a, b)=>{
                    if (a.symbol === filterKeyLower || a.name.toLowerCase() === filterKeyLower) return -1;
                    if (b.symbol === filterKeyLower || b.name.toLowerCase() === filterKeyLower) return 1;
                    return 0;
                })
            }));
    };
    handleDelete = (id)=>()=>{
            this.setState(({ userCoinList: { [id]: omit , ...restCoins }  })=>({
                    userCoinList: restCoins
                }));
            const currentSavedList = localStorage.getItem((0, _homeContext.STORAGE_KEY));
            localStorage.setItem((0, _homeContext.STORAGE_KEY), currentSavedList?.replace(`${id},`, "") || "");
        };
    setPinnedToken = (token)=>{
        this.setState({
            pinnedToken: token
        });
        localStorage.setItem("pinned", token);
        this.setTitleAsPinnedToken(token);
    };
    setTitleAsPinnedToken = (token)=>{
        const { userCoinList , pinnedToken  } = this.state;
        const targetToken = token || pinnedToken;
        if (!targetToken) return;
        const coinTitle = targetToken.charAt(0).toUpperCase() + targetToken.slice(1);
        document.title = `${(0, _common.formatNumber)(userCoinList[targetToken || ""].usd)} - ${coinTitle}`;
    };
    actions = {
        fetchCoinList: this.fetchCoinList,
        fetchUserCoins: this.fetchUserCoins,
        filterCoinList: this.filterCoinList,
        handleDelete: this.handleDelete,
        setPinnedToken: this.setPinnedToken
    };
    render() {
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeContext.HomeContext).Provider, {
            value: this.state,
            ...this.props
        }, void 0, false, {
            fileName: "src/contexts/Home/HomeProvider.tsx",
            lineNumber: 127,
            columnNumber: 12
        }, this);
    }
}

  $parcel$ReactRefreshHelpers$4b09.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","~/src/api/Coins":"8Itke","~/src/api/Simple":"i974s","./HomeContext":"8jHlc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","~/src/utils/Common":"1W86E"}],"8Itke":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCoinList", ()=>getCoinList);
var _request = require("~/src/utils/request");
var _requestDefault = parcelHelpers.interopDefault(_request);
const getCoinList = ()=>(0, _requestDefault.default).get("/coins/list");

},{"~/src/utils/request":"kpN6g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kpN6g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _reactToastify = require("react-toastify");
class Request {
    instance = (0, _axiosDefault.default).create({
        baseURL: "https://api.coingecko.com/api/v3/",
        headers: {
            "Content-Type": "application/json"
        }
    });
    constructor(){
        this.instance.interceptors.response.use(({ data  })=>{
            return data;
        }, (error)=>(0, _reactToastify.toast).error(JSON.stringify(error)));
    }
    // Axios Methods
    get = (...args)=>this.instance.get(...args);
    delete = (...args)=>this.instance.delete(...args);
    head = (...args)=>this.instance.head(...args);
    post = (...args)=>this.instance.post(...args);
    put = (...args)=>this.instance.put(...args);
    patch = (...args)=>this.instance.patch(...args);
}
const request = new Request();
exports.default = request;

},{"axios":"jo6P5","react-toastify":"52zQU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jo6P5":[function(require,module,exports) {
module.exports = require("./lib/axios");

},{"./lib/axios":"63MyY"}],"63MyY":[function(require,module,exports) {
"use strict";
var utils = require("./utils");
var bind = require("./helpers/bind");
var Axios = require("./core/Axios");
var mergeConfig = require("./core/mergeConfig");
var defaults = require("./defaults");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
axios.Cancel = require("./cancel/Cancel");
axios.CancelToken = require("./cancel/CancelToken");
axios.isCancel = require("./cancel/isCancel");
axios.VERSION = require("./env/data").version;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = require("./helpers/spread");
// Expose isAxiosError
axios.isAxiosError = require("./helpers/isAxiosError");
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"5By4s","./helpers/bind":"haRQb","./core/Axios":"cpqD8","./core/mergeConfig":"b85oP","./defaults":"lTJJ4","./cancel/Cancel":"kjMy2","./cancel/CancelToken":"45wzn","./cancel/isCancel":"a0VmF","./env/data":"h29L9","./helpers/spread":"dyQ8N","./helpers/isAxiosError":"eyiLq"}],"5By4s":[function(require,module,exports) {
"use strict";
var bind = require("./helpers/bind");
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return toString.call(val) === "[object Array]";
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === "undefined";
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === "[object ArrayBuffer]";
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === "string";
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === "number";
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === "object";
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== "[object Object]") return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === "[object Date]";
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === "[object File]";
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === "[object Blob]";
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === "[object Function]";
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({}, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") a[key] = bind(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};

},{"./helpers/bind":"haRQb"}],"haRQb":[function(require,module,exports) {
"use strict";
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

},{}],"cpqD8":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
var buildURL = require("../helpers/buildURL");
var InterceptorManager = require("./InterceptorManager");
var dispatchRequest = require("./dispatchRequest");
var mergeConfig = require("./mergeConfig");
var validator = require("../helpers/validator");
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
    } else config = config || {};
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = "get";
    var transitional = config.transitional;
    if (transitional !== undefined) validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error1) {
        return Promise.reject(error1);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
// Provide aliases for supported request methods
utils.forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;

},{"./../utils":"5By4s","../helpers/buildURL":"3bwC2","./InterceptorManager":"1VRIM","./dispatchRequest":"6sjJ6","./mergeConfig":"b85oP","../helpers/validator":"9vgkY"}],"3bwC2":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") return;
            if (utils.isArray(val)) key = key + "[]";
            else val = [
                val
            ];
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) v = v.toISOString();
                else if (utils.isObject(v)) v = JSON.stringify(v);
                parts.push(encode(key) + "=" + encode(v));
            });
        });
        serializedParams = parts.join("&");
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
};

},{"./../utils":"5By4s"}],"1VRIM":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = InterceptorManager;

},{"./../utils":"5By4s"}],"6sjJ6":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
var transformData = require("./transformData");
var isCancel = require("../cancel/isCancel");
var defaults = require("../defaults");
var Cancel = require("../cancel/Cancel");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new Cancel("canceled");
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch",
        "common"
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

},{"./../utils":"5By4s","./transformData":"eRqJY","../cancel/isCancel":"a0VmF","../defaults":"lTJJ4","../cancel/Cancel":"kjMy2"}],"eRqJY":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
var defaults = require("./../defaults");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

},{"./../utils":"5By4s","./../defaults":"lTJJ4"}],"lTJJ4":[function(require,module,exports) {
"use strict";
var process = require("process");
var utils = require("./utils");
var normalizeHeaderName = require("./helpers/normalizeHeaderName");
var enhanceError = require("./core/enhanceError");
var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") // For browsers use XHR adapter
    adapter = require("./adapters/xhr");
    else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") // For node use HTTP adapter
    adapter = require("./adapters/http");
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
    },
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, "Accept");
            normalizeHeaderName(headers, "Content-Type");
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
            if (utils.isArrayBufferView(data)) return data.buffer;
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
                setContentTypeIfUnset(headers, "application/json");
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === "SyntaxError") throw enhanceError(e, this, "E_JSON_PARSE");
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
utils.forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"process":"d5jf4","./utils":"5By4s","./helpers/normalizeHeaderName":"adBZo","./core/enhanceError":"itUQr","./adapters/xhr":"ldm57","./adapters/http":"ldm57"}],"adBZo":[function(require,module,exports) {
"use strict";
var utils = require("../utils");
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

},{"../utils":"5By4s"}],"itUQr":[function(require,module,exports) {
"use strict";
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) error.code = code;
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    };
    return error;
};

},{}],"ldm57":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
var settle = require("./../core/settle");
var cookies = require("./../helpers/cookies");
var buildURL = require("./../helpers/buildURL");
var buildFullPath = require("../core/buildFullPath");
var parseHeaders = require("./../helpers/parseHeaders");
var isURLSameOrigin = require("./../helpers/isURLSameOrigin");
var createError = require("../core/createError");
var defaults = require("../defaults");
var Cancel = require("../cancel/Cancel");
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if (utils.isFormData(requestData)) delete requestHeaders["Content-Type"]; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError("Network Error", config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || defaults.transitional;
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ("setRequestHeader" in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", config.onUploadProgress);
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) return;
                reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        if (!requestData) requestData = null;
        // Send the request
        request.send(requestData);
    });
};

},{"./../utils":"5By4s","./../core/settle":"dD9aC","./../helpers/cookies":"4WJjt","./../helpers/buildURL":"3bwC2","../core/buildFullPath":"1I5TW","./../helpers/parseHeaders":"kqDd5","./../helpers/isURLSameOrigin":"lxXtv","../core/createError":"5nVS9","../defaults":"lTJJ4","../cancel/Cancel":"kjMy2"}],"dD9aC":[function(require,module,exports) {
"use strict";
var createError = require("./createError");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
};

},{"./createError":"5nVS9"}],"5nVS9":[function(require,module,exports) {
"use strict";
var enhanceError = require("./enhanceError");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"itUQr"}],"4WJjt":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if (utils.isString(path)) cookie.push("path=" + path);
            if (utils.isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils":"5By4s"}],"1I5TW":[function(require,module,exports) {
"use strict";
var isAbsoluteURL = require("../helpers/isAbsoluteURL");
var combineURLs = require("../helpers/combineURLs");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
    return requestedURL;
};

},{"../helpers/isAbsoluteURL":"jD6NM","../helpers/combineURLs":"brOWK"}],"jD6NM":[function(require,module,exports) {
"use strict";
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"brOWK":[function(require,module,exports) {
"use strict";
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};

},{}],"kqDd5":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === "set-cookie") parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
    });
    return parsed;
};

},{"./../utils":"5By4s"}],"lxXtv":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils":"5By4s"}],"kjMy2":[function(require,module,exports) {
"use strict";
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

},{}],"a0VmF":[function(require,module,exports) {
"use strict";
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

},{}],"b85oP":[function(require,module,exports) {
"use strict";
var utils = require("../utils");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        else if (utils.isPlainObject(source)) return utils.merge({}, source);
        else if (utils.isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

},{"../utils":"5By4s"}],"9vgkY":[function(require,module,exports) {
"use strict";
var VERSION = require("../env/data").version;
var validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
var deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new TypeError("options must be an object");
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new TypeError("option " + opt + " must be " + result);
            continue;
        }
        if (allowUnknown !== true) throw Error("Unknown option " + opt);
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};

},{"../env/data":"h29L9"}],"h29L9":[function(require,module,exports) {
module.exports = {
    "version": "0.24.0"
};

},{}],"45wzn":[function(require,module,exports) {
"use strict";
var Cancel = require("./Cancel");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== "function") throw new TypeError("executor must be a function.");
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++)token._listeners[i](cancel);
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) this._listeners.push(listener);
    else this._listeners = [
        listener
    ];
};
/**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) return;
    var index = this._listeners.indexOf(listener);
    if (index !== -1) this._listeners.splice(index, 1);
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

},{"./Cancel":"kjMy2"}],"dyQ8N":[function(require,module,exports) {
"use strict";
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

},{}],"eyiLq":[function(require,module,exports) {
"use strict";
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return typeof payload === "object" && payload.isAxiosError === true;
};

},{}],"i974s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSimplePrice", ()=>getSimplePrice);
var _request = require("~/src/utils/request");
var _requestDefault = parcelHelpers.interopDefault(_request);
const getSimplePrice = (params)=>(0, _requestDefault.default).get("/simple/price", {
        params
    });

},{"~/src/utils/request":"kpN6g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1W86E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatNumber", ()=>formatNumber);
const MILLION = 1000000;
const THOUSAND = 1000;
const getFractionSize = (value)=>{
    if (value === 0) return 0;
    if (value > 0.01) return 2;
    if (value > 0.0001) return 6;
    return 10;
};
const formatNumber = (value, showAlphaEst)=>{
    if (showAlphaEst) {
        if (value >= MILLION) return `${Math.round(value / MILLION).toLocaleString()}M`;
        if (value >= THOUSAND) return `${Math.round(value / THOUSAND)}K`;
    }
    return value?.toLocaleString(undefined, {
        minimumFractionDigits: getFractionSize(value)
    }) || 0;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kGJyk":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$f340 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$f340.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withProvider", ()=>withProvider);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function withProvider(Provider, Component) {
    const ProviderComp = (props)=>{
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Provider, {
            ...props,
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(Component, {}, void 0, false, {
                fileName: "src/utils/ProviderHOC.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/utils/ProviderHOC.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this);
    };
    return ProviderComp;
}

  $parcel$ReactRefreshHelpers$f340.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"jqIkn":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$bbfd = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$bbfd.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const Footer = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(FooterContainer, {
        className: "text-xs text-gray-500",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: [
                    `Built by `,
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(GithubLink, {
                        className: " text-indigo-600",
                        target: "_blank",
                        href: "https://github.com/roarnald",
                        children: "@roarnald"
                    }, void 0, false, {
                        fileName: "src/components/Public/Footer.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/Public/Footer.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: "Powered by CoinGecko API v3"
            }, void 0, false, {
                fileName: "src/components/Public/Footer.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "italic",
                children: [
                    "drop me some",
                    " ",
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                        href: "https://forms.gle/1huQcJFuUiJeft7N7",
                        className: " text-indigo-600",
                        target: "_blank",
                        children: "feedback"
                    }, void 0, false, {
                        fileName: "src/components/Public/Footer.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, undefined),
                    " ",
                    "or features you wanna see!"
                ]
            }, void 0, true, {
                fileName: "src/components/Public/Footer.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Public/Footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, undefined);
};
_c = Footer;
exports.default = Footer;
const FooterContainer = (0, _styledComponentsDefault.default).footer`
  width: 100%;
  text-align: center;

  position: absolute;
  bottom: 0;

  padding: 18px;
  min-width: max-content;
`;
_c1 = FooterContainer;
const GithubLink = (0, _styledComponentsDefault.default).a``;
_c2 = GithubLink;
var _c, _c1, _c2;
$RefreshReg$(_c, "Footer");
$RefreshReg$(_c1, "FooterContainer");
$RefreshReg$(_c2, "GithubLink");

  $parcel$ReactRefreshHelpers$bbfd.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","styled-components":"1U3k6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gONTT":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b155 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b155.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactVirtual = require("react-virtual");
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _home = require("~/src/contexts/Home");
var _homeContext = require("~/src/contexts/Home/HomeContext");
var _s = $RefreshSig$();
const HomeSearchBar = ()=>{
    _s();
    const { filteredCoinList , userCoinList , filterCoinList , fetchUserCoins  } = (0, _home.useHome)();
    const [searchFocused, setSearchFocused] = (0, _react.useState)(false);
    const parentRef = (0, _react.useRef)(null);
    const { totalSize , virtualItems  } = (0, _reactVirtual.useVirtual)({
        size: filteredCoinList.length,
        parentRef,
        overscan: 5
    });
    const handleSearchFocused = (focused)=>()=>setSearchFocused(focused);
    const handleDropdownItemClick = ({ id  })=>()=>{
            const currentSavedList = localStorage.getItem((0, _homeContext.STORAGE_KEY));
            if (!currentSavedList?.split(",").includes(id)) {
                localStorage.setItem((0, _homeContext.STORAGE_KEY), `${currentSavedList || ""}${id},`);
                fetchUserCoins();
            }
        };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(StyledHomeSearchBar, {
                    onChange: (e)=>filterCoinList(e.target.value),
                    onBlur: handleSearchFocused(false),
                    onFocus: handleSearchFocused(true),
                    className: "outline-neutral-600 border-2 mt-6 rounded-full px-5 py-2 z-30"
                }, void 0, false, {
                    fileName: "src/components/Home/HomeSearchBar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Home/HomeSearchBar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SearchResultDropdown, {
                ref: parentRef,
                className: `${searchFocused ? "fixed" : "hidden"} left-0 right-0 m-auto border-2 border-t-0 bg-white z-20 rounded-b-xl overflow-auto mt-2px`,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(DropdownContainer, {
                    $height: `${totalSize}px`,
                    children: virtualItems.map(({ index , size , start  })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(DropdownVirtualItem, {
                            className: "flex items-center p-2 hover:bg-indigo-100 hover:cursor-pointer",
                            onMouseDown: handleDropdownItemClick(filteredCoinList[index]),
                            $height: size,
                            $transform: start,
                            $selected: !!userCoinList[filteredCoinList[index].id],
                            children: filteredCoinList[index].name
                        }, index, false, {
                            fileName: "src/components/Home/HomeSearchBar.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, undefined))
                }, void 0, false, {
                    fileName: "src/components/Home/HomeSearchBar.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Home/HomeSearchBar.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_s(HomeSearchBar, "K0oam4A6Magi5/uuJv2iYE9EKs0=", false, function() {
    return [
        (0, _home.useHome),
        (0, _reactVirtual.useVirtual)
    ];
});
_c = HomeSearchBar;
exports.default = HomeSearchBar;
const StyledHomeSearchBar = (0, _styledComponentsDefault.default).input`
  width: 450px;
  @media screen and (max-width: 1024px) {
    width: calc(100%);
  }
`;
_c1 = StyledHomeSearchBar;
const SearchResultDropdown = (0, _styledComponentsDefault.default).div`
  width: 420px;
  max-height: 50vh;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 78px);
  }
`;
_c2 = SearchResultDropdown;
const DropdownContainer = (0, _styledComponentsDefault.default).div`
  height: ${({ $height  })=>$height};
  width: 100%;
  position: relative;
`;
_c3 = DropdownContainer;
/**
 * For react-virtual styles
 */ const DropdownVirtualItem = (0, _styledComponentsDefault.default).div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ $height  })=>`${$height}px`};
  transform: ${({ $transform  })=>`translateY(${$transform}px)`};
  ${({ $selected  })=>$selected ? (0, _styledComponents.css)`
          background: #eee;
          color: #aaa;
          cursor: not-allowed !important;
          :hover {
            background: #eee;
          }
        ` : ""};
`;
_c4 = DropdownVirtualItem;
var _c, _c1, _c2, _c3, _c4;
$RefreshReg$(_c, "HomeSearchBar");
$RefreshReg$(_c1, "StyledHomeSearchBar");
$RefreshReg$(_c2, "SearchResultDropdown");
$RefreshReg$(_c3, "DropdownContainer");
$RefreshReg$(_c4, "DropdownVirtualItem");

  $parcel$ReactRefreshHelpers$b155.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-virtual":"bJyum","styled-components":"1U3k6","~/src/contexts/Home/HomeContext":"8jHlc","~/src/contexts/Home":"kN0Rb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"bJyum":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultRangeExtractor", ()=>defaultRangeExtractor);
parcelHelpers.export(exports, "useDefaultScroll", ()=>useDefaultScroll);
parcelHelpers.export(exports, "useElementScroll", ()=>useElementScroll);
parcelHelpers.export(exports, "useVirtual", ()=>useVirtual);
parcelHelpers.export(exports, "useWindowScroll", ()=>useWindowScroll);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var props = [
    "bottom",
    "height",
    "left",
    "right",
    "top",
    "width"
];
var rectChanged = function rectChanged(a, b) {
    if (a === void 0) a = {};
    if (b === void 0) b = {};
    return props.some(function(prop) {
        return a[prop] !== b[prop];
    });
};
var observedNodes = /*#__PURE__*/ new Map();
var rafId;
var run = function run() {
    var changedStates = [];
    observedNodes.forEach(function(state, node) {
        var newRect = node.getBoundingClientRect();
        if (rectChanged(newRect, state.rect)) {
            state.rect = newRect;
            changedStates.push(state);
        }
    });
    changedStates.forEach(function(state) {
        state.callbacks.forEach(function(cb) {
            return cb(state.rect);
        });
    });
    rafId = window.requestAnimationFrame(run);
};
function observeRect(node, cb) {
    return {
        observe: function observe() {
            var wasEmpty = observedNodes.size === 0;
            if (observedNodes.has(node)) observedNodes.get(node).callbacks.push(cb);
            else observedNodes.set(node, {
                rect: undefined,
                hasRectChanged: false,
                callbacks: [
                    cb
                ]
            });
            if (wasEmpty) run();
        },
        unobserve: function unobserve() {
            var state = observedNodes.get(node);
            if (state) {
                // Remove the callback
                var index = state.callbacks.indexOf(cb);
                if (index >= 0) state.callbacks.splice(index, 1); // Remove the node reference
                if (!state.callbacks.length) observedNodes["delete"](node); // Stop the loop
                if (!observedNodes.size) cancelAnimationFrame(rafId);
            }
        }
    };
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? (0, _reactDefault.default).useLayoutEffect : (0, _reactDefault.default).useEffect;
function useRect(nodeRef, initialRect) {
    if (initialRect === void 0) initialRect = {
        width: 0,
        height: 0
    };
    var _React$useState = (0, _reactDefault.default).useState(nodeRef.current), element = _React$useState[0], setElement = _React$useState[1];
    var _React$useReducer = (0, _reactDefault.default).useReducer(rectReducer, initialRect), rect = _React$useReducer[0], dispatch = _React$useReducer[1];
    var initialRectSet = (0, _reactDefault.default).useRef(false);
    useIsomorphicLayoutEffect(function() {
        if (nodeRef.current !== element) setElement(nodeRef.current);
    });
    useIsomorphicLayoutEffect(function() {
        if (element && !initialRectSet.current) {
            initialRectSet.current = true;
            var _rect = element.getBoundingClientRect();
            dispatch({
                rect: _rect
            });
        }
    }, [
        element
    ]);
    (0, _reactDefault.default).useEffect(function() {
        if (!element) return;
        var observer = observeRect(element, function(rect) {
            dispatch({
                rect: rect
            });
        });
        observer.observe();
        return function() {
            observer.unobserve();
        };
    }, [
        element
    ]);
    return rect;
}
function rectReducer(state, action) {
    var rect = action.rect;
    if (state.height !== rect.height || state.width !== rect.width) return rect;
    return state;
}
var defaultEstimateSize = function defaultEstimateSize() {
    return 50;
};
var defaultKeyExtractor = function defaultKeyExtractor(index) {
    return index;
};
var defaultMeasureSize = function defaultMeasureSize(el, horizontal) {
    var key = horizontal ? "offsetWidth" : "offsetHeight";
    return el[key];
};
var defaultRangeExtractor = function defaultRangeExtractor(range) {
    var start = Math.max(range.start - range.overscan, 0);
    var end = Math.min(range.end + range.overscan, range.size - 1);
    var arr = [];
    for(var i = start; i <= end; i++)arr.push(i);
    return arr;
};
var useElementScroll = function useElementScroll(_ref) {
    var parentRef = _ref.parentRef, horizontal = _ref.horizontal, useObserver = _ref.useObserver, initialRect = _ref.initialRect;
    var scrollKey = horizontal ? "scrollLeft" : "scrollTop";
    var _React$useState = (0, _reactDefault.default).useState(0), scrollOffset = _React$useState[0], setScrollOffset = _React$useState[1];
    var _React$useState2 = (0, _reactDefault.default).useState(parentRef.current), element = _React$useState2[0], setElement = _React$useState2[1];
    useIsomorphicLayoutEffect(function() {
        setElement(parentRef.current);
    });
    useIsomorphicLayoutEffect(function() {
        if (!element) {
            setScrollOffset(0);
            return;
        }
        var onScroll = function onScroll() {
            setScrollOffset(element[scrollKey]);
        };
        onScroll();
        element.addEventListener("scroll", onScroll, {
            capture: false,
            passive: true
        });
        return function() {
            element.removeEventListener("scroll", onScroll);
        };
    }, [
        element,
        scrollKey
    ]);
    var scrollToFn = (0, _reactDefault.default).useCallback(function(offset) {
        if (parentRef.current) parentRef.current[scrollKey] = offset;
    }, [
        parentRef,
        scrollKey
    ]);
    var useMeasureParent = useObserver || useRect;
    var sizeKey = horizontal ? "width" : "height";
    var _useMeasureParent = useMeasureParent(parentRef, initialRect), outerSize = _useMeasureParent[sizeKey];
    return {
        outerSize: outerSize,
        scrollOffset: scrollOffset,
        scrollToFn: scrollToFn
    };
};
var useWindowRect = function useWindowRect(windowRef, initialRect) {
    if (initialRect === void 0) initialRect = {
        width: 0,
        height: 0
    };
    var _React$useState3 = (0, _reactDefault.default).useState(initialRect), rect = _React$useState3[0], setRect = _React$useState3[1];
    var _React$useState4 = (0, _reactDefault.default).useState(windowRef.current), element = _React$useState4[0], setElement = _React$useState4[1];
    useIsomorphicLayoutEffect(function() {
        setElement(windowRef.current);
    });
    useIsomorphicLayoutEffect(function() {
        if (!element) return;
        function resizeHandler() {
            var next = {
                width: element.innerWidth,
                height: element.innerHeight
            };
            setRect(function(prev) {
                return prev.height !== next.height || prev.width !== next.width ? next : prev;
            });
        }
        resizeHandler();
        element.addEventListener("resize", resizeHandler);
        return function() {
            element.removeEventListener("resize", resizeHandler);
        };
    }, [
        element
    ]);
    return rect;
};
var useWindowScroll = function useWindowScroll(_ref2) {
    var windowRef = _ref2.windowRef, parentRef = _ref2.parentRef, horizontal = _ref2.horizontal, useWindowObserver = _ref2.useWindowObserver, initialRect = _ref2.initialRect;
    var _React$useState5 = (0, _reactDefault.default).useState(0), scrollOffset = _React$useState5[0], setScrollOffset = _React$useState5[1];
    var _React$useState6 = (0, _reactDefault.default).useState(windowRef.current), element = _React$useState6[0], setElement = _React$useState6[1];
    var parentOffsetRef = (0, _reactDefault.default).useRef(0);
    var rectKey = horizontal ? "left" : "top";
    var scrollKey = horizontal ? "scrollX" : "scrollY";
    useIsomorphicLayoutEffect(function() {
        setElement(windowRef.current);
    });
    useIsomorphicLayoutEffect(function() {
        if (!element) {
            parentOffsetRef.current = 0;
            setScrollOffset(0);
            return;
        }
        if (parentRef.current) parentOffsetRef.current = element[scrollKey] + parentRef.current.getBoundingClientRect()[rectKey];
        var onScroll = function onScroll() {
            var offset = element[scrollKey] - parentOffsetRef.current;
            setScrollOffset(offset);
        };
        onScroll();
        element.addEventListener("scroll", onScroll, {
            capture: false,
            passive: true
        });
        return function() {
            element.removeEventListener("scroll", onScroll);
        };
    }, [
        element,
        scrollKey,
        rectKey,
        parentRef
    ]);
    var scrollToFn = (0, _reactDefault.default).useCallback(function(offset, reason) {
        if (windowRef.current) {
            var _windowRef$current$sc;
            var delta = [
                "ToIndex",
                "SizeChanged"
            ].includes(reason) ? parentOffsetRef.current : 0;
            windowRef.current.scrollTo((_windowRef$current$sc = {}, _windowRef$current$sc[rectKey] = offset + delta, _windowRef$current$sc));
        }
    }, [
        windowRef,
        rectKey
    ]);
    var useMeasureParent = useWindowObserver || useWindowRect;
    var sizeKey = horizontal ? "width" : "height";
    var _useMeasureParent2 = useMeasureParent(windowRef, initialRect), outerSize = _useMeasureParent2[sizeKey];
    return {
        outerSize: outerSize,
        scrollOffset: scrollOffset,
        scrollToFn: scrollToFn
    };
};
var useDefaultScroll = function useDefaultScroll(props) {
    var parentRef = props.parentRef, windowRef = props.windowRef;
    var useWindow = windowRef !== undefined;
    var emptyRef = (0, _reactDefault.default).useRef(null);
    var elementRes = useElementScroll(_extends(_extends({}, props), {}, {
        parentRef: useWindow ? emptyRef : parentRef
    }));
    var windowRes = useWindowScroll(_extends(_extends({}, props), {}, {
        windowRef: useWindow ? windowRef : emptyRef
    }));
    return useWindow ? windowRes : elementRes;
};
function useVirtual(_ref3) {
    var _measurements;
    var _ref3$size = _ref3.size, size = _ref3$size === void 0 ? 0 : _ref3$size, _ref3$estimateSize = _ref3.estimateSize, estimateSize = _ref3$estimateSize === void 0 ? defaultEstimateSize : _ref3$estimateSize, _ref3$overscan = _ref3.overscan, overscan = _ref3$overscan === void 0 ? 1 : _ref3$overscan, _ref3$paddingStart = _ref3.paddingStart, paddingStart = _ref3$paddingStart === void 0 ? 0 : _ref3$paddingStart, _ref3$paddingEnd = _ref3.paddingEnd, paddingEnd = _ref3$paddingEnd === void 0 ? 0 : _ref3$paddingEnd, parentRef = _ref3.parentRef, windowRef = _ref3.windowRef, horizontal = _ref3.horizontal, scrollToFn = _ref3.scrollToFn, useObserver = _ref3.useObserver, useWindowObserver = _ref3.useWindowObserver, initialRect = _ref3.initialRect, _ref3$keyExtractor = _ref3.keyExtractor, keyExtractor = _ref3$keyExtractor === void 0 ? defaultKeyExtractor : _ref3$keyExtractor, _ref3$measureSize = _ref3.measureSize, measureSize = _ref3$measureSize === void 0 ? defaultMeasureSize : _ref3$measureSize, _ref3$rangeExtractor = _ref3.rangeExtractor, rangeExtractor = _ref3$rangeExtractor === void 0 ? defaultRangeExtractor : _ref3$rangeExtractor, _ref3$useScroll = _ref3.useScroll, useScroll = _ref3$useScroll === void 0 ? useDefaultScroll : _ref3$useScroll;
    var latestRef = (0, _reactDefault.default).useRef({
        scrollOffset: 0,
        measurements: []
    });
    var _useScroll = useScroll({
        windowRef: windowRef,
        parentRef: parentRef,
        horizontal: horizontal,
        useObserver: useObserver,
        useWindowObserver: useWindowObserver,
        initialRect: initialRect
    }), outerSize = _useScroll.outerSize, scrollOffset = _useScroll.scrollOffset, defaultScrollToFn = _useScroll.scrollToFn;
    var scrollOffsetWithAdjustmentsRef = (0, _reactDefault.default).useRef(scrollOffset);
    if (latestRef.current.scrollOffset !== scrollOffset) scrollOffsetWithAdjustmentsRef.current = scrollOffset;
    latestRef.current.outerSize = outerSize;
    latestRef.current.scrollOffset = scrollOffset;
    var scrollTo = (0, _reactDefault.default).useCallback(function(offset, reason) {
        var resolvedScrollToFn = scrollToFn || function(offset) {
            return defaultScrollToFn(offset, reason);
        };
        resolvedScrollToFn(offset, defaultScrollToFn);
    }, [
        scrollToFn,
        defaultScrollToFn
    ]);
    var _React$useState7 = (0, _reactDefault.default).useState({}), measuredCache = _React$useState7[0], setMeasuredCache = _React$useState7[1];
    var measure = (0, _reactDefault.default).useCallback(function() {
        return setMeasuredCache({});
    }, []);
    var pendingMeasuredCacheIndexesRef = (0, _reactDefault.default).useRef([]);
    var measurements = (0, _reactDefault.default).useMemo(function() {
        var min = pendingMeasuredCacheIndexesRef.current.length > 0 ? Math.min.apply(Math, pendingMeasuredCacheIndexesRef.current) : 0;
        pendingMeasuredCacheIndexesRef.current = [];
        var measurements = latestRef.current.measurements.slice(0, min);
        for(var i = min; i < size; i++){
            var key = keyExtractor(i);
            var measuredSize = measuredCache[key];
            var _start = measurements[i - 1] ? measurements[i - 1].end : paddingStart;
            var _size = typeof measuredSize === "number" ? measuredSize : estimateSize(i);
            var _end = _start + _size;
            measurements[i] = {
                index: i,
                start: _start,
                size: _size,
                end: _end,
                key: key
            };
        }
        return measurements;
    }, [
        estimateSize,
        measuredCache,
        paddingStart,
        size,
        keyExtractor
    ]);
    var totalSize = (((_measurements = measurements[size - 1]) == null ? void 0 : _measurements.end) || 0) + paddingEnd;
    latestRef.current.measurements = measurements;
    latestRef.current.totalSize = totalSize;
    var _calculateRange = calculateRange(latestRef.current), start = _calculateRange.start, end = _calculateRange.end;
    var indexes = (0, _reactDefault.default).useMemo(function() {
        return rangeExtractor({
            start: start,
            end: end,
            overscan: overscan,
            size: measurements.length
        });
    }, [
        start,
        end,
        overscan,
        measurements.length,
        rangeExtractor
    ]);
    var measureSizeRef = (0, _reactDefault.default).useRef(measureSize);
    measureSizeRef.current = measureSize;
    var virtualItems = (0, _reactDefault.default).useMemo(function() {
        var virtualItems = [];
        var _loop = function _loop(k, len) {
            var i = indexes[k];
            var measurement = measurements[i];
            var item = _extends(_extends({}, measurement), {}, {
                measureRef: function measureRef(el) {
                    if (el) {
                        var measuredSize = measureSizeRef.current(el, horizontal);
                        if (measuredSize !== item.size) {
                            var _scrollOffset = latestRef.current.scrollOffset;
                            if (item.start < _scrollOffset) {
                                var delta = measuredSize - item.size;
                                scrollOffsetWithAdjustmentsRef.current += delta;
                                defaultScrollToFn(scrollOffsetWithAdjustmentsRef.current, "SizeChanged");
                            }
                            pendingMeasuredCacheIndexesRef.current.push(i);
                            setMeasuredCache(function(old) {
                                var _extends2;
                                return _extends(_extends({}, old), {}, (_extends2 = {}, _extends2[item.key] = measuredSize, _extends2));
                            });
                        }
                    }
                }
            });
            virtualItems.push(item);
        };
        for(var k = 0, len = indexes.length; k < len; k++)_loop(k);
        return virtualItems;
    }, [
        indexes,
        defaultScrollToFn,
        horizontal,
        measurements
    ]);
    var mountedRef = (0, _reactDefault.default).useRef(false);
    useIsomorphicLayoutEffect(function() {
        if (mountedRef.current) setMeasuredCache({});
        mountedRef.current = true;
    }, [
        estimateSize
    ]);
    var scrollToOffset = (0, _reactDefault.default).useCallback(function(toOffset, _temp, reason) {
        var _ref4 = _temp === void 0 ? {} : _temp, _ref4$align = _ref4.align, align = _ref4$align === void 0 ? "start" : _ref4$align;
        if (reason === void 0) reason = "ToOffset";
        var _latestRef$current = latestRef.current, scrollOffset = _latestRef$current.scrollOffset, outerSize = _latestRef$current.outerSize;
        if (align === "auto") {
            if (toOffset <= scrollOffset) align = "start";
            else if (toOffset >= scrollOffset + outerSize) align = "end";
            else align = "start";
        }
        if (align === "start") scrollTo(toOffset, reason);
        else if (align === "end") scrollTo(toOffset - outerSize, reason);
        else if (align === "center") scrollTo(toOffset - outerSize / 2, reason);
    }, [
        scrollTo
    ]);
    var tryScrollToIndex = (0, _reactDefault.default).useCallback(function(index, _temp2) {
        var _ref5 = _temp2 === void 0 ? {} : _temp2, _ref5$align = _ref5.align, align = _ref5$align === void 0 ? "auto" : _ref5$align, rest = _objectWithoutPropertiesLoose(_ref5, [
            "align"
        ]);
        var _latestRef$current2 = latestRef.current, measurements = _latestRef$current2.measurements, scrollOffset = _latestRef$current2.scrollOffset, outerSize = _latestRef$current2.outerSize;
        var measurement = measurements[Math.max(0, Math.min(index, size - 1))];
        if (!measurement) return;
        if (align === "auto") {
            if (measurement.end >= scrollOffset + outerSize) align = "end";
            else if (measurement.start <= scrollOffset) align = "start";
            else return;
        }
        var toOffset = align === "center" ? measurement.start + measurement.size / 2 : align === "end" ? measurement.end : measurement.start;
        scrollToOffset(toOffset, _extends({
            align: align
        }, rest), "ToIndex");
    }, [
        scrollToOffset,
        size
    ]);
    var scrollToIndex = (0, _reactDefault.default).useCallback(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        // We do a double request here because of
        // dynamic sizes which can cause offset shift
        // and end up in the wrong spot. Unfortunately,
        // we can't know about those dynamic sizes until
        // we try and render them. So double down!
        tryScrollToIndex.apply(void 0, args);
        requestAnimationFrame(function() {
            tryScrollToIndex.apply(void 0, args);
        });
    }, [
        tryScrollToIndex
    ]);
    return {
        virtualItems: virtualItems,
        totalSize: totalSize,
        scrollToOffset: scrollToOffset,
        scrollToIndex: scrollToIndex,
        measure: measure
    };
}
var findNearestBinarySearch = function findNearestBinarySearch(low, high, getCurrentValue, value) {
    while(low <= high){
        var middle = (low + high) / 2 | 0;
        var currentValue = getCurrentValue(middle);
        if (currentValue < value) low = middle + 1;
        else if (currentValue > value) high = middle - 1;
        else return middle;
    }
    if (low > 0) return low - 1;
    else return 0;
};
function calculateRange(_ref6) {
    var measurements = _ref6.measurements, outerSize = _ref6.outerSize, scrollOffset = _ref6.scrollOffset;
    var size = measurements.length - 1;
    var getOffset = function getOffset(index) {
        return measurements[index].start;
    };
    var start = findNearestBinarySearch(0, size, getOffset, scrollOffset);
    var end = start;
    while(end < size && measurements[end].end < scrollOffset + outerSize)end++;
    return {
        start: start,
        end: end
    };
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kY5x":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a9ea = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a9ea.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _home = require("~/src/contexts/Home");
var _common = require("~/src/utils/Common");
var _loading = require("../../Public/Loading");
var _loadingDefault = parcelHelpers.interopDefault(_loading);
var _pinTitleButton = require("./PinTitleButton");
var _pinTitleButtonDefault = parcelHelpers.interopDefault(_pinTitleButton);
var _s = $RefreshSig$();
const getChangeIndicator = (change)=>{
    if (change < 0) return "text-red-800	";
    if (change > 0) return "text-emerald-500	";
    return "";
};
const HomeTokenList = ()=>{
    _s();
    const { isFirstLoad , isFetchingTokenPrice , userCoinList , handleDelete , fetchUserCoins  } = (0, _home.useHome)();
    const tableRef = (0, _react.useRef)(null);
    const [showDelete, setShowDelete] = (0, _react.useState)(false);
    const toggleDeleteState = ()=>setShowDelete(!showDelete);
    const sortedUserCoinList = (0, _react.useMemo)(()=>Object.entries(userCoinList).sort(([, a], [, b])=>a.usd_market_cap > b.usd_market_cap ? -1 : 1), [
        userCoinList
    ]);
    (0, _react.useEffect)(()=>{
        if (showDelete) tableRef.current?.scrollBy({
            left: 50,
            behavior: "smooth"
        });
    }, [
        showDelete
    ]);
    (0, _react.useEffect)(()=>{
        const intervalId = setInterval(()=>{
            console.log("hello");
            fetchUserCoins();
        }, 5000);
        return ()=>clearInterval(intervalId);
    }, []);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(HomeTokenListContainer, {
        className: "overflow-auto",
        ref: tableRef,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("table", {
            className: "table-auto min-w-full border-separate",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("thead", {
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tr", {
                        className: "text-left text-xs sticky top-0 z-10 bg-white",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                className: "p-4 pb-2 sticky left-0 border-b-2 bg-white",
                                children: "Pin to title"
                            }, void 0, false, {
                                fileName: "src/components/Home/HomeTokenList/index.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                className: "p-4 pb-2 w-80 sticky left-0 border-b-2 bg-white",
                                children: "Name"
                            }, void 0, false, {
                                fileName: "src/components/Home/HomeTokenList/index.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                className: "p-4 pb-2 border-b-2",
                                children: "Price"
                            }, void 0, false, {
                                fileName: "src/components/Home/HomeTokenList/index.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                className: "p-4 pb-2 border-b-2",
                                children: "Market Cap"
                            }, void 0, false, {
                                fileName: "src/components/Home/HomeTokenList/index.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                className: "p-4 pb-2 border-b-2 whitespace-nowrap",
                                children: "24h Change"
                            }, void 0, false, {
                                fileName: "src/components/Home/HomeTokenList/index.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                className: "p-4 pb-2 border-b-2 pr-0",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "flex justify-between cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: "24h Volume"
                                        }, void 0, false, {
                                            fileName: "src/components/Home/HomeTokenList/index.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            onClick: toggleDeleteState,
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-4 w-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                                }, void 0, false, {
                                                    fileName: "src/components/Home/HomeTokenList/index.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/Home/HomeTokenList/index.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/Home/HomeTokenList/index.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Home/HomeTokenList/index.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/Home/HomeTokenList/index.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Home/HomeTokenList/index.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Home/HomeTokenList/index.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tbody", {
                    children: [
                        isFirstLoad && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tr", {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                colSpan: 10,
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _loadingDefault.default), {
                                    type: "card"
                                }, void 0, false, {
                                    fileName: "src/components/Home/HomeTokenList/index.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/Home/HomeTokenList/index.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/Home/HomeTokenList/index.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, undefined),
                        sortedUserCoinList.length > 0 ? sortedUserCoinList.map(([key, { usd , usd_market_cap , usd_24h_change , usd_24h_vol  }])=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(DataTableRow, {
                                $isLoading: isFetchingTokenPrice,
                                className: "border-b-2 border-gray-50 text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                        className: "p-3 p-4 pr-0",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _pinTitleButtonDefault.default), {
                                            token: key
                                        }, void 0, false, {
                                            fileName: "src/components/Home/HomeTokenList/index.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Home/HomeTokenList/index.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                        className: "p-4 capitalize sticky left-0 bg-white",
                                        children: key.replaceAll("-", " ")
                                    }, void 0, false, {
                                        fileName: "src/components/Home/HomeTokenList/index.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                        className: `p-4 ${getChangeIndicator(usd_24h_change)}`,
                                        children: (0, _common.formatNumber)(usd)
                                    }, void 0, false, {
                                        fileName: "src/components/Home/HomeTokenList/index.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                        className: "p-4",
                                        children: (0, _common.formatNumber)(usd_market_cap, true)
                                    }, void 0, false, {
                                        fileName: "src/components/Home/HomeTokenList/index.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                        className: `p-4 ${getChangeIndicator(usd_24h_change)}`,
                                        children: [
                                            (0, _common.formatNumber)(usd_24h_change),
                                            " %"
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Home/HomeTokenList/index.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                        className: "p-4 pr-0",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    children: (0, _common.formatNumber)(usd_24h_vol, true)
                                                }, void 0, false, {
                                                    fileName: "src/components/Home/HomeTokenList/index.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, undefined),
                                                showDelete && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "ml-3 cursor-pointer",
                                                    onClick: handleDelete(key),
                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-4 w-4",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "red",
                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        }, void 0, false, {
                                                            fileName: "src/components/Home/HomeTokenList/index.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 27
                                                        }, undefined)
                                                    }, void 0, false, {
                                                        fileName: "src/components/Home/HomeTokenList/index.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 25
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "src/components/Home/HomeTokenList/index.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 23
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/Home/HomeTokenList/index.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Home/HomeTokenList/index.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, key, true, {
                                fileName: "src/components/Home/HomeTokenList/index.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, undefined)) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tr", {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                colSpan: 10,
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: `flex justify-center items-center h-24 text-gray-400 ${isFirstLoad ? "hidden" : ""}`,
                                    children: "Whoops! You deleted everything. Search up a new coin to add to list!"
                                }, void 0, false, {
                                    fileName: "src/components/Home/HomeTokenList/index.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/Home/HomeTokenList/index.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/Home/HomeTokenList/index.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Home/HomeTokenList/index.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/Home/HomeTokenList/index.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/Home/HomeTokenList/index.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, undefined);
};
_s(HomeTokenList, "t2S5HqzqUwvg/vWFZ9Y9L1reOOw=", false, function() {
    return [
        (0, _home.useHome)
    ];
});
_c = HomeTokenList;
exports.default = HomeTokenList;
const HomeTokenListContainer = (0, _styledComponentsDefault.default).div`
  width: 90vw;
  max-width: 900px;
  max-height: calc(100vh - 380px);
  margin: auto;

  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
_c1 = HomeTokenListContainer;
const DataTableRow = (0, _styledComponentsDefault.default).tr`
  animation: fadeIn 0.7s;

  @keyframes fadeIn {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  ${({ $isLoading  })=>$isLoading ? (0, _styledComponents.css)`
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.6;
            }
            50% {
              opacity: 0.2;
            }
          }
        ` : ""}
`;
_c2 = DataTableRow;
var _c, _c1, _c2;
$RefreshReg$(_c, "HomeTokenList");
$RefreshReg$(_c1, "HomeTokenListContainer");
$RefreshReg$(_c2, "DataTableRow");

  $parcel$ReactRefreshHelpers$a9ea.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","styled-components":"1U3k6","~/src/contexts/Home":"kN0Rb","~/src/utils/Common":"1W86E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","../../Public/Loading":"1XRPz","./PinTitleButton":"k4SfF"}],"1XRPz":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$17ec = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$17ec.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const Loading = ({ type  })=>{
    switch(type){
        case "card":
            return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "rounded-md p-4 min-w-full mx-auto transition-all",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "animate-pulse flex space-x-4",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex-1 space-y-6 py-1",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "h-2 bg-gray-200 rounded"
                                }, void 0, false, {
                                    fileName: "src/components/Public/Loading.tsx",
                                    lineNumber: 16,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "grid grid-cols-5 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "h-2 bg-gray-200 rounded col-span-2"
                                        }, void 0, false, {
                                            fileName: "src/components/Public/Loading.tsx",
                                            lineNumber: 19,
                                            columnNumber: 19
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "h-2 bg-gray-200 rounded col-span-3"
                                        }, void 0, false, {
                                            fileName: "src/components/Public/Loading.tsx",
                                            lineNumber: 20,
                                            columnNumber: 19
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Public/Loading.tsx",
                                    lineNumber: 18,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "grid grid-cols-5 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "h-2 bg-gray-200 rounded col-span-1"
                                        }, void 0, false, {
                                            fileName: "src/components/Public/Loading.tsx",
                                            lineNumber: 24,
                                            columnNumber: 19
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "h-2 bg-gray-200 rounded col-span-4"
                                        }, void 0, false, {
                                            fileName: "src/components/Public/Loading.tsx",
                                            lineNumber: 25,
                                            columnNumber: 19
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Public/Loading.tsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "h-2 bg-gray-200 rounded"
                                }, void 0, false, {
                                    fileName: "src/components/Public/Loading.tsx",
                                    lineNumber: 28,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "h-2 bg-gray-200 rounded"
                                }, void 0, false, {
                                    fileName: "src/components/Public/Loading.tsx",
                                    lineNumber: 29,
                                    columnNumber: 17
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Public/Loading.tsx",
                            lineNumber: 15,
                            columnNumber: 15
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Public/Loading.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Public/Loading.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Public/Loading.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, undefined);
        default:
            return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SpinnerContainer, {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "lds-ring",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {}, void 0, false, {
                            fileName: "src/components/Public/Loading.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {}, void 0, false, {
                            fileName: "src/components/Public/Loading.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {}, void 0, false, {
                            fileName: "src/components/Public/Loading.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {}, void 0, false, {
                            fileName: "src/components/Public/Loading.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Public/Loading.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Public/Loading.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, undefined);
    }
};
_c = Loading;
exports.default = /*#__PURE__*/ _c1 = (0, _react.memo)(Loading);
const SpinnerContainer = (0, _styledComponentsDefault.default).div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 24px 0;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    margin: 8px;
    border: 4px solid lightgray;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: lightgray transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
_c2 = SpinnerContainer;
var _c, _c1, _c2;
$RefreshReg$(_c, "Loading");
$RefreshReg$(_c1, "%default%");
$RefreshReg$(_c2, "SpinnerContainer");

  $parcel$ReactRefreshHelpers$17ec.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","styled-components":"1U3k6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"k4SfF":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b480 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b480.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _home = require("~/src/contexts/Home");
var _s = $RefreshSig$();
const PinTitleButton = ({ token  })=>{
    _s();
    const { pinnedToken , setPinnedToken  } = (0, _home.useHome)();
    const handleButtonClick = (0, _react.useCallback)(()=>setPinnedToken(token), [
        token
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(PinTitleButtonContainer, {
        onClick: handleButtonClick,
        children: pinnedToken === token ? "★" : "☆"
    }, void 0, false, {
        fileName: "src/components/Home/HomeTokenList/PinTitleButton.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, undefined);
};
_s(PinTitleButton, "HkHKpUOQXZfb4JipGiAU+KQeKAA=", false, function() {
    return [
        (0, _home.useHome)
    ];
});
_c = PinTitleButton;
exports.default = /*#__PURE__*/ _c1 = (0, _react.memo)(PinTitleButton);
const PinTitleButtonContainer = (0, _styledComponentsDefault.default).div`
  cursor: pointer;
  color: orange;
  font-size: 20px;
`;
_c2 = PinTitleButtonContainer;
var _c, _c1, _c2;
$RefreshReg$(_c, "PinTitleButton");
$RefreshReg$(_c1, "%default%");
$RefreshReg$(_c2, "PinTitleButtonContainer");

  $parcel$ReactRefreshHelpers$b480.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","styled-components":"1U3k6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","~/src/contexts/Home":"kN0Rb"}]},["1xC6H","8Ewuh"], null, "parcelRequire4e1e")

//# sourceMappingURL=Home.0481f49a.js.map
