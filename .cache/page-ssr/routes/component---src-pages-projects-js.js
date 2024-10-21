"use strict";
exports.id = "component---src-pages-projects-js";
exports.ids = ["component---src-pages-projects-js"];
exports.modules = {

/***/ "./src/pages/projects.js?export=default":
/*!**********************************************!*\
  !*** ./src/pages/projects.js?export=default ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const projects = [{
  title: 'Stock Analysis and Crypto Tracking App',
  description: 'A web app built with React, Flask, and Chart.js to track stock and crypto prices with real-time data and sentiment analysis.',
  githubLink: 'https://github.com/joses2017smjh/stock-analysis-app',
  liveDemo: 'https://your-live-demo-link.com',
  // Add live link if available
  image: '/images/project1.png'
}, {
  title: 'Monte Carlo Simulation',
  description: 'A simulation using CUDA to estimate the probability of a golf ball landing in a hole after rolling off a ski jump.',
  githubLink: 'https://github.com/joses2017smjh/monte-carlo-simulation',
  liveDemo: '',
  // Leave blank if no demo is available
  image: '/images/project2.png'
}
// Add more projects as needed
];
const ProjectsPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "My Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px'
    }
  }, projects.map((project, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    style: {
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: project.image,
    alt: project.title,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, project.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, project.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: project.githubLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "GitHub"), project.liveDemo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: project.liveDemo,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginLeft: '10px'
    }
  }, "Live Demo")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-projects-js.js.map