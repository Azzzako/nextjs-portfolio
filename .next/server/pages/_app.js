(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 644:
/***/ ((module) => {

// Exports
module.exports = {
	"el_footer": "footer_el_footer__ihaPp"
};


/***/ }),

/***/ 2274:
/***/ ((module) => {

// Exports
module.exports = {
	"nav_cont": "navbar_nav_cont__YjaN3",
	"nav": "navbar_nav__cJfdS",
	"badge": "navbar_badge__2BW69"
};


/***/ }),

/***/ 3542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
var app_default = /*#__PURE__*/__webpack_require__.n(app);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/navbar.module.css
var navbar_module = __webpack_require__(2274);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./components/Navbar.jsx




const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: (navbar_module_default()).nav_cont,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (navbar_module_default()).nav,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    href: "/",
                    className: `${(navbar_module_default()).badge} nes-badge is-icon`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "is-error",
                            children: "Hi!"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "is-warning",
                            style: {
                                fontSize: "10px",
                                width: "110%"
                            },
                            children: "Azzako"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    href: "/coderev",
                    className: `${(navbar_module_default()).badge} nes-badge is-icon`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "is-error",
                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "nes-icon coin is-small"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "is-warning",
                            style: {
                                fontSize: "10px",
                                width: "110%"
                            },
                            children: `</>`
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    href: "/contacto",
                    className: `${(navbar_module_default()).badge} nes-badge is-icon`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "is-error",
                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "nes-icon heart is-small"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "is-warning",
                            style: {
                                fontSize: "10px",
                                width: "110%"
                            },
                            children: "Contacto"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./components/footer.module.css
var footer_module = __webpack_require__(644);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/Footer.jsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("footer", {
            className: `${(footer_module_default()).el_footer}`,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                children: [
                    "Hecho con ",
                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                        className: "nes-icon icon heart"
                    }),
                    " por Asael"
                ]
            })
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/nes.css/css/nes.css
var nes = __webpack_require__(8773);
;// CONCATENATED MODULE: ./pages/_app.js








class MyApp extends (app_default()) {
    render() {
        const { Component , pageProps  } = this.props;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                jsx_runtime.jsx((style_default()), {
                    id: "7f55f2a8f2f61c13",
                    children: "body{margin:0;padding:0}"
                }),
                /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                        className: "jsx-7f55f2a8f2f61c13",
                        children: "Portfolio Azako"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(components_Navbar, {}),
                /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps,
                    className: "jsx-7f55f2a8f2f61c13" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                }),
                /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
            ]
        });
    }
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [712,664,116], () => (__webpack_exec__(3542)));
module.exports = __webpack_exports__;

})();