var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},l={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){l[e]=r},e.parcelRequired7c6=t);var n=t("eWCmQ");document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:r,password:l}}=e.currentTarget,t={Email:r.value,Password:l.value};""!==r.value.trim()&&""!==l.value.trim()||n.Notify.failure("All fields must be filled");console.log(t),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.f18c314b.js.map
