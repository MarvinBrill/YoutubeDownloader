/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/web/Router.js":
/*!***************************!*\
  !*** ./src/web/Router.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _YoutubeDownloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YoutubeDownloader */ "./src/web/YoutubeDownloader.js");



const router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();

router.get(
    '/download',
    _YoutubeDownloader__WEBPACK_IMPORTED_MODULE_1__["default"]
)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/web/YoutubeDownloader.js":
/*!**************************************!*\
  !*** ./src/web/YoutubeDownloader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ytdl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ytdl-core */ "ytdl-core");
/* harmony import */ var ytdl_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ytdl_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fluent-ffmpeg */ "fluent-ffmpeg");
/* harmony import */ var fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);




const YoutubeDownloader = async (req, res) => {
    const url = req.query.url;

    if(!url || !url.includes("https://www.youtube")) {
        res.status(400).end();
        return;
    }
    
    const info = await ytdl_core__WEBPACK_IMPORTED_MODULE_0___default().getInfo(url, {quality: "highestaudio"});

    if(!info) {
        res.status(400).end();
        return;
    }
    
    const stream = ytdl_core__WEBPACK_IMPORTED_MODULE_0___default().downloadFromInfo(info, {quality: "highestaudio"});
    const tmpFileName = `/tmp/yt-${Math.floor(Math.random() * 10000)}.mp3`;

    fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_1___default()(stream)
    .audioBitrate(info.formats[0].audioBitrate)
    .withAudioCodec("libmp3lame")
    .toFormat("mp3")
    .saveToFile(tmpFileName)
    .on("error", e => {
        console.log(e)
        res.status(400);
    })
    .on("end", () => {
        res.set("filename", `${info.player_response.videoDetails.title}.mp3`);
        res.download(tmpFileName);
        res.status(200);
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YoutubeDownloader);

/***/ }),

/***/ "./src/web/middleware/corsMiddleware.js":
/*!**********************************************!*\
  !*** ./src/web/middleware/corsMiddleware.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ corsMiddleware)
/* harmony export */ });
function corsMiddleware(
  req,
  res,
  next,
) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Expose-Headers', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type, Accept, Token',
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST',
  );
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Cache-Control', 'no-store');
  next();
}


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fluent-ffmpeg":
/*!********************************!*\
  !*** external "fluent-ffmpeg" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("fluent-ffmpeg");

/***/ }),

/***/ "ytdl-core":
/*!****************************!*\
  !*** external "ytdl-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("ytdl-core");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web_middleware_corsMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/middleware/corsMiddleware */ "./src/web/middleware/corsMiddleware.js");
/* harmony import */ var _web_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/Router */ "./src/web/Router.js");






const main = async () => {
    const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
    const server = http__WEBPACK_IMPORTED_MODULE_1___default().createServer(app);

    app.use(
        cors__WEBPACK_IMPORTED_MODULE_2___default()(),
        _web_middleware_corsMiddleware__WEBPACK_IMPORTED_MODULE_3__["default"],
        (0,express__WEBPACK_IMPORTED_MODULE_0__.json)(),
        _web_Router__WEBPACK_IMPORTED_MODULE_4__["default"]
    )

    server.listen(8000, () => {
        console.log(`Server started`);
    });
}

main();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map