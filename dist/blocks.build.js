/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: advanced-payment-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$components = wp.components,\n    SelectControl = _wp$components.SelectControl,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    RichText = _wp$editor.RichText,\n    PlainText = _wp$editor.PlainText;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nvar shortcode_obj = { email: \"yourpaypalemail@example.com\", size: \"large\", amount: \"15.00\", currency: \"USD\", purpose: \"Charity for Child Health Care\", mode: \"live\" };\nregisterBlockType('cgb/block-advanced-payment-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Advanced Payment Block'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('advanced payment block'), __('payment'), __('payment block')],\n\tattributes: {\n\t\tid: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 1\n\t\t},\n\t\tshortcode_content: {\n\t\t\ttype: \"string\",\n\t\t\tsource: \"text\",\n\t\t\tdefault: \"[advanced_payment_block email='\" + shortcode_obj.email + \"' amount='\" + shortcode_obj.amount + \"' currency='\" + shortcode_obj.currency + \"' size='\" + shortcode_obj.size + \"' purpose='\" + shortcode_obj.purpose + \"' mode='\" + shortcode_obj.mode + \"']\"\n\t\t},\n\t\tselectnamecontrol: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t},\n\t\tadvanced_Payment_email: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t},\n\t\tadvanced_Payment_amount: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t},\n\t\tadvanced_Payment_currency: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t},\n\t\tadvanced_Payment_size: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t},\n\t\tadvanced_Payment_purpsoe: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t},\n\t\tadvanced_Payment_type: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t},\n\t\tpayment_method_type: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\t// Creates a <p class='wp-block-cgb-block-advanced-payment-block'></p>.\n\t\tvar payment_method = [{ label: 'Paypal', value: 'paypal' }];\n\n\t\tvar attributes = props.attributes,\n\t\t    className = attributes.className,\n\t\t    shortcode_content = attributes.shortcode_content,\n\t\t    Onchangename = attributes.Onchangename,\n\t\t    selectnamecontrol = attributes.selectnamecontrol,\n\t\t    advanced_Payment_email = attributes.advanced_Payment_email,\n\t\t    advanced_Payment_amount = attributes.advanced_Payment_amount,\n\t\t    advanced_Payment_currency = attributes.advanced_Payment_currency,\n\t\t    advanced_Payment_size = attributes.advanced_Payment_size,\n\t\t    advanced_Payment_purpsoe = attributes.advanced_Payment_purpsoe,\n\t\t    advanced_Payment_type = attributes.advanced_Payment_type,\n\t\t    payment_method_type = attributes.payment_method_type,\n\t\t    setAttributes = props.setAttributes;\n\n\t\treturn [wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'donate-panel-op' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\tlabel: 'Payment Method',\n\t\t\t\t\t\toptions: payment_method\n\t\t\t\t\t\t//onChange = {OnchangePaypalType }\n\t\t\t\t\t\t, value: payment_method_type\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'\\u2014 Hello from the backend.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'CGB BLOCK: ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\t'advanced-payment-block'\n\t\t\t\t),\n\t\t\t\t' is a new Gutenberg block'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'It was created via',\n\t\t\t\t' ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ href: 'https://github.com/ahmadawais/create-guten-block' },\n\t\t\t\t\t\t'create-guten-block'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t'.'\n\t\t\t)\n\t\t)];\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'\\u2014 Hello from the frontend.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'CGB BLOCK: ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\t'advanced-payment-block'\n\t\t\t\t),\n\t\t\t\t' is a new Gutenberg block.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'It was created via',\n\t\t\t\t' ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ href: 'https://github.com/ahmadawais/create-guten-block' },\n\t\t\t\t\t\t'create-guten-block'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t'.'\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGFkdmFuY2VkLXBheW1lbnQtYmxvY2tcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBQbGFpblRleHQgPSBfd3AkZWRpdG9yLlBsYWluVGV4dDtcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxudmFyIHNob3J0Y29kZV9vYmogPSB7IGVtYWlsOiBcInlvdXJwYXlwYWxlbWFpbEBleGFtcGxlLmNvbVwiLCBzaXplOiBcImxhcmdlXCIsIGFtb3VudDogXCIxNS4wMFwiLCBjdXJyZW5jeTogXCJVU0RcIiwgcHVycG9zZTogXCJDaGFyaXR5IGZvciBDaGlsZCBIZWFsdGggQ2FyZVwiLCBtb2RlOiBcImxpdmVcIiB9O1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1hZHZhbmNlZC1wYXltZW50LWJsb2NrJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdBZHZhbmNlZCBQYXltZW50IEJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc2hpZWxkJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCdhZHZhbmNlZCBwYXltZW50IGJsb2NrJyksIF9fKCdwYXltZW50JyksIF9fKCdwYXltZW50IGJsb2NrJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMVxuXHRcdH0sXG5cdFx0c2hvcnRjb2RlX2NvbnRlbnQ6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCIsXG5cdFx0XHRzb3VyY2U6IFwidGV4dFwiLFxuXHRcdFx0ZGVmYXVsdDogXCJbYWR2YW5jZWRfcGF5bWVudF9ibG9jayBlbWFpbD0nXCIgKyBzaG9ydGNvZGVfb2JqLmVtYWlsICsgXCInIGFtb3VudD0nXCIgKyBzaG9ydGNvZGVfb2JqLmFtb3VudCArIFwiJyBjdXJyZW5jeT0nXCIgKyBzaG9ydGNvZGVfb2JqLmN1cnJlbmN5ICsgXCInIHNpemU9J1wiICsgc2hvcnRjb2RlX29iai5zaXplICsgXCInIHB1cnBvc2U9J1wiICsgc2hvcnRjb2RlX29iai5wdXJwb3NlICsgXCInIG1vZGU9J1wiICsgc2hvcnRjb2RlX29iai5tb2RlICsgXCInXVwiXG5cdFx0fSxcblx0XHRzZWxlY3RuYW1lY29udHJvbDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0YWR2YW5jZWRfUGF5bWVudF9lbWFpbDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0YWR2YW5jZWRfUGF5bWVudF9hbW91bnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHRcdGFkdmFuY2VkX1BheW1lbnRfY3VycmVuY3k6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHRcdGFkdmFuY2VkX1BheW1lbnRfc2l6ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0YWR2YW5jZWRfUGF5bWVudF9wdXJwc29lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0fSxcblx0XHRhZHZhbmNlZF9QYXltZW50X3R5cGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHRcdHBheW1lbnRfbWV0aG9kX3R5cGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMuXG4gICogQHJldHVybnMge01peGVkfSBKU1ggQ29tcG9uZW50LlxuICAqL1xuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0Ly8gQ3JlYXRlcyBhIDxwIGNsYXNzPSd3cC1ibG9jay1jZ2ItYmxvY2stYWR2YW5jZWQtcGF5bWVudC1ibG9jayc+PC9wPi5cblx0XHR2YXIgcGF5bWVudF9tZXRob2QgPSBbeyBsYWJlbDogJ1BheXBhbCcsIHZhbHVlOiAncGF5cGFsJyB9XTtcblxuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gYXR0cmlidXRlcy5jbGFzc05hbWUsXG5cdFx0ICAgIHNob3J0Y29kZV9jb250ZW50ID0gYXR0cmlidXRlcy5zaG9ydGNvZGVfY29udGVudCxcblx0XHQgICAgT25jaGFuZ2VuYW1lID0gYXR0cmlidXRlcy5PbmNoYW5nZW5hbWUsXG5cdFx0ICAgIHNlbGVjdG5hbWVjb250cm9sID0gYXR0cmlidXRlcy5zZWxlY3RuYW1lY29udHJvbCxcblx0XHQgICAgYWR2YW5jZWRfUGF5bWVudF9lbWFpbCA9IGF0dHJpYnV0ZXMuYWR2YW5jZWRfUGF5bWVudF9lbWFpbCxcblx0XHQgICAgYWR2YW5jZWRfUGF5bWVudF9hbW91bnQgPSBhdHRyaWJ1dGVzLmFkdmFuY2VkX1BheW1lbnRfYW1vdW50LFxuXHRcdCAgICBhZHZhbmNlZF9QYXltZW50X2N1cnJlbmN5ID0gYXR0cmlidXRlcy5hZHZhbmNlZF9QYXltZW50X2N1cnJlbmN5LFxuXHRcdCAgICBhZHZhbmNlZF9QYXltZW50X3NpemUgPSBhdHRyaWJ1dGVzLmFkdmFuY2VkX1BheW1lbnRfc2l6ZSxcblx0XHQgICAgYWR2YW5jZWRfUGF5bWVudF9wdXJwc29lID0gYXR0cmlidXRlcy5hZHZhbmNlZF9QYXltZW50X3B1cnBzb2UsXG5cdFx0ICAgIGFkdmFuY2VkX1BheW1lbnRfdHlwZSA9IGF0dHJpYnV0ZXMuYWR2YW5jZWRfUGF5bWVudF90eXBlLFxuXHRcdCAgICBwYXltZW50X21ldGhvZF90eXBlID0gYXR0cmlidXRlcy5wYXltZW50X21ldGhvZF90eXBlLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblxuXHRcdHJldHVybiBbd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdkb25hdGUtcGFuZWwtb3AnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRQYW5lbEJvZHksXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuXHRcdFx0XHRcdFx0bGFiZWw6ICdQYXltZW50IE1ldGhvZCcsXG5cdFx0XHRcdFx0XHRvcHRpb25zOiBwYXltZW50X21ldGhvZFxuXHRcdFx0XHRcdFx0Ly9vbkNoYW5nZSA9IHtPbmNoYW5nZVBheXBhbFR5cGUgfVxuXHRcdFx0XHRcdFx0LCB2YWx1ZTogcGF5bWVudF9tZXRob2RfdHlwZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnXFx1MjAxNCBIZWxsbyBmcm9tIHRoZSBiYWNrZW5kLidcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J0NHQiBCTE9DSzogJyxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdjb2RlJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdCdhZHZhbmNlZC1wYXltZW50LWJsb2NrJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHQnIGlzIGEgbmV3IEd1dGVuYmVyZyBibG9jaydcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J0l0IHdhcyBjcmVhdGVkIHZpYScsXG5cdFx0XHRcdCcgJyxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdjb2RlJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdhJyxcblx0XHRcdFx0XHRcdHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9haG1hZGF3YWlzL2NyZWF0ZS1ndXRlbi1ibG9jaycgfSxcblx0XHRcdFx0XHRcdCdjcmVhdGUtZ3V0ZW4tYmxvY2snXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHQnLidcblx0XHRcdClcblx0XHQpXTtcblx0fSxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J1xcdTIwMTQgSGVsbG8gZnJvbSB0aGUgZnJvbnRlbmQuJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnQ0dCIEJMT0NLOiAnLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2NvZGUnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J2FkdmFuY2VkLXBheW1lbnQtYmxvY2snXG5cdFx0XHRcdCksXG5cdFx0XHRcdCcgaXMgYSBuZXcgR3V0ZW5iZXJnIGJsb2NrLidcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J0l0IHdhcyBjcmVhdGVkIHZpYScsXG5cdFx0XHRcdCcgJyxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdjb2RlJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdhJyxcblx0XHRcdFx0XHRcdHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9haG1hZGF3YWlzL2NyZWF0ZS1ndXRlbi1ibG9jaycgfSxcblx0XHRcdFx0XHRcdCdjcmVhdGUtZ3V0ZW4tYmxvY2snXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHQnLidcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);