parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"en75":[function(require,module,exports) {

},{}],"TCaP":[function(require,module,exports) {
"use strict";require("../css/common.css");const t=document.body,e={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let r=null;function n(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const{btnStart:o,btnStop:d}=e;o.addEventListener("click",()=>{r=setInterval(()=>{const e=n();t.style.backgroundColor=e,o.setAttribute("disabled","disabled"),d.removeAttribute("disabled")},1e3)}),d.addEventListener("click",()=>{clearInterval(r),d.setAttribute("disabled","disabled"),o.removeAttribute("disabled")});
},{"../css/common.css":"en75"}]},{},["TCaP"], null)
//# sourceMappingURL=/goit-js-hw-09/01-color-switcher.ad81744d.js.map