!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.FitAddon=t():e.FitAddon=t()}(window,function(){return r=[function(e,t,r){"use strict";function n(){}Object.defineProperty(t,"__esModule",{value:!0}),n.prototype.activate=function(e){this._terminal=e},n.prototype.dispose=function(){},n.prototype.fit=function(){var e,t=this.proposeDimensions();t&&this._terminal&&(e=this._terminal._core,this._terminal.rows===t.rows&&this._terminal.cols===t.cols||(e._renderService.clear(),this._terminal.resize(t.cols,t.rows)))},n.prototype.proposeDimensions=function(){var e,t,r,n;if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement)return e=this._terminal._core,n=window.getComputedStyle(this._terminal.element.parentElement),r=parseInt(n.getPropertyValue("height")),n=Math.max(0,parseInt(n.getPropertyValue("width"))),t=window.getComputedStyle(this._terminal.element),r=r-(parseInt(t.getPropertyValue("padding-top"))+parseInt(t.getPropertyValue("padding-bottom"))),n=n-(parseInt(t.getPropertyValue("padding-right"))+parseInt(t.getPropertyValue("padding-left")))-e.viewport.scrollBarWidth,{cols:Math.max(2,Math.floor(n/e._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(r/e._renderService.dimensions.actualCellHeight))}},t.FitAddon=n}],n={},o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0);function o(e){var t;return(n[e]||(t=n[e]={i:e,l:!1,exports:{}},r[e].call(t.exports,t,t.exports,o),t.l=!0,t)).exports}var r,n})