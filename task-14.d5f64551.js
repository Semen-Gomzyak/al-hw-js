function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var o,a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var r,i,o,a,f,u,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function v(e){return l=e,f=setTimeout(S,t),c?m(e):a}function y(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function S(){var e=b();if(y(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?g(n,o-(e-l)):n}(e))}function w(e){return f=void 0,d&&r?m(e):(r=i=void 0,a)}function h(){var e=b(),n=y(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return v(u);if(s)return f=setTimeout(S,t),m(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=O(t)||0,x(n)&&(c=!!n.leading,o=(s="maxWait"in n)?p(O(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},h.flush=function(){return void 0===f?a:w(b())},h}function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):f.test(e)?NaN:+e}o=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return x(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var S=i("eWCmQ");const w=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea");w.addEventListener("submit",(function(e){e.preventDefault(),(""===w.elements.email.value.trim()||""===w.elements.message.value.trim())&&S.Notify.failure("Please fill in all fields");console.log(N),localStorage.removeItem("feedback-form-state"),w.reset()})),w.addEventListener("input",e(o)((function(e){e.preventDefault(),N={email:w.elements.email.value,message:w.elements.message.value},localStorage.setItem("feedback-form-state",JSON.stringify(N))}),500));let N={};!function(){if(localStorage.getItem("feedback-form-state")){const e=localStorage.getItem("feedback-form-state");h.value=JSON.parse(e).email,j.value=JSON.parse(e).message}}();
//# sourceMappingURL=task-14.d5f64551.js.map
