function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var r=i("2shzp"),o=i("eWCmQ"),s=i("fZKcF"),l={};!function(e,t){var n=function(e,t,n){var a,i;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},n)t in i||(i[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var r=t.documentElement,o=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s].bind(e),u=e.setTimeout,d=e.requestAnimationFrame||u,f=e.requestIdleCallback,y=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],p={},g=Array.prototype.forEach,v=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e[l]("class")||"")&&p[t]},h=function(e,t){v(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},z=function(e,t,n){var a=n?s:"removeEventListener";n&&z(e,t),m.forEach((function(n){e[a](n,t)}))},C=function(e,n,i,r,o){var s=t.createEvent("Event");return i||(i={}),i.instance=a,s.initEvent(n,!r,!o),s.detail=i,e.dispatchEvent(s),s},w=function(t,n){var a;!o&&(a=e.picturefill||i.pf)?(n&&n.src&&!t[l]("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},x=(he=[],be=[],ze=he,Ce=function(){var e=ze;for(ze=he.length?be:he,ge=!0,ve=!1;e.length;)e.shift()();ge=!1},we=function(e,n){ge&&!n?e.apply(this,arguments):(ze.push(e),ve||(ve=!0,(t.hidden?u:d)(Ce)))},we._lsFlush=Ce,we),A=function(e,t){return t?function(){x(e)}:function(){var t=this,n=arguments;x((function(){e.apply(t,n)}))}},N=function(e){var t,a=0,r=i.throttleDelay,o=i.ricTimeout,s=function(){t=!1,a=n.now(),e()},l=f&&o>49?function(){f(s,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:A((function(){u(s)}),!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,(i=r-(n.now()-a))<0&&(i=0),e||i<9?l():u(l,i))}},M=function(e){var t,a,i=99,r=function(){t=null,e()},o=function(){var e=n.now()-a;e<i?u(o,i-e):(f||r)(r)};return function(){a=n.now(),t||(t=u(o,i))}},L=(V=/^img$/i,Z=/^iframe$/i,G="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),J=0,X=0,Y=0,ee=-1,te=function(e){Y--,(!e||Y<0||!e.target)&&(Y=0)},ne=function(e){return null==K&&(K="hidden"==E(t.body,"visibility")),K||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},ae=function(e,n){var a,i=e,o=ne(e);for(P-=n,Q+=n,U-=n,I+=n;o&&(i=i.offsetParent)&&i!=t.body&&i!=r;)(o=(E(i,"opacity")||1)>0)&&"visible"!=E(i,"overflow")&&(a=i.getBoundingClientRect(),o=I>a.left&&U<a.right&&Q>a.top-1&&P<a.bottom+1);return o},ie=function(){var e,n,o,s,c,u,d,f,y,m,p,g,v=a.elements;if((B=i.loadMode)&&Y<8&&(e=v.length)){for(n=0,ee++;n<e;n++)if(v[n]&&!v[n]._lazyRace)if(!G||a.prematureUnveil&&a.prematureUnveil(v[n]))fe(v[n]);else if((f=v[n][l]("data-expand"))&&(u=1*f)||(u=X),m||(m=!i.expand||i.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:i.expand,a._defEx=m,p=m*i.expFactor,g=i.hFac,K=null,X<p&&Y<1&&ee>2&&B>2&&!t.hidden?(X=p,ee=0):X=B>1&&ee>1&&Y<6?m:J),y!==u&&(H=innerWidth+u*g,k=innerHeight+u,d=-1*u,y=u),o=v[n].getBoundingClientRect(),(Q=o.bottom)>=d&&(P=o.top)<=k&&(I=o.right)>=d*g&&(U=o.left)<=H&&(Q||I||U||P)&&(i.loadHidden||ne(v[n]))&&(j&&Y<3&&!f&&(B<3||ee<4)||ae(v[n],u))){if(fe(v[n]),c=!0,Y>9)break}else!c&&j&&!s&&Y<4&&ee<4&&B>2&&(D[0]||i.preloadAfterLoad)&&(D[0]||!f&&(Q||I||U||P||"auto"!=v[n][l](i.sizesAttr)))&&(s=D[0]||v[n]);s&&!c&&fe(s)}},re=N(ie),oe=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(te(e),h(t,i.loadedClass),b(t,i.loadingClass),z(t,le),C(t,"lazyloaded"))},se=A(oe),le=function(e){se({target:e.target})},ce=function(e,t){var n=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},ue=function(e){var t,n=e[l](i.srcsetAttr);(t=i.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},de=A((function(e,t,n,a,r){var o,s,c,d,f,m;(f=C(e,"lazybeforeunveil",t)).defaultPrevented||(a&&(n?h(e,i.autosizesClass):e.setAttribute("sizes",a)),s=e[l](i.srcsetAttr),o=e[l](i.srcAttr),r&&(d=(c=e.parentNode)&&y.test(c.nodeName||"")),m=t.firesLoad||"src"in e&&(s||o||d),f={target:e},h(e,i.loadingClass),m&&(clearTimeout(q),q=u(te,2500),z(e,le,!0)),d&&g.call(c.getElementsByTagName("source"),ue),s?e.setAttribute("srcset",s):o&&!d&&(Z.test(e.nodeName)?ce(e,o):e.src=o),r&&(s||d)&&w(e,{src:o})),e._lazyRace&&delete e._lazyRace,b(e,i.lazyClass),x((function(){var t=e.complete&&e.naturalWidth>1;m&&!t||(t&&h(e,i.fastLoadedClass),oe(f),e._lazyCache=!0,u((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Y--}),!0)})),fe=function(e){if(!e._lazyRace){var t,n=V.test(e.nodeName),a=n&&(e[l](i.sizesAttr)||e[l]("sizes")),r="auto"==a;(!r&&j||!n||!e[l]("src")&&!e.srcset||e.complete||v(e,i.errorClass)||!v(e,i.lazyClass))&&(t=C(e,"lazyunveilread").detail,r&&T.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Y++,de(e,t,r,a,n))}},ye=M((function(){i.loadMode=3,re()})),me=function(){3==i.loadMode&&(i.loadMode=2),ye()},pe=function(){j||(n.now()-F<999?u(pe,999):(j=!0,i.loadMode=3,re(),c("scroll",me,!0)))},{_:function(){F=n.now(),a.elements=t.getElementsByClassName(i.lazyClass),D=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),c("scroll",re,!0),c("resize",re,!0),c("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+i.loadingClass);n.length&&n.forEach&&d((function(){n.forEach((function(e){e.complete&&fe(e)}))}))}})),e.MutationObserver?new MutationObserver(re).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[s]("DOMNodeInserted",re,!0),r[s]("DOMAttrModified",re,!0),setInterval(re,999)),c("hashchange",re,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,re,!0)})),/d$|^c/.test(t.readyState)?pe():(c("load",pe),t[s]("DOMContentLoaded",re),u(pe,2e4)),a.elements.length?(ie(),x._lsFlush()):re()},checkElems:re,unveil:fe,_aLSL:me}),T=(O=A((function(e,t,n,a){var i,r,o;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),y.test(t.nodeName||""))for(r=0,o=(i=t.getElementsByTagName("source")).length;r<o;r++)i[r].setAttribute("sizes",a);n.detail.dataAttr||w(e,n.detail)})),S=function(e,t,n){var a,i=e.parentNode;i&&(n=_(e,i,n),(a=C(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=a.detail.width)&&n!==e._lazysizesWidth&&O(e,i,a,n))},R=M((function(){var e,t=W.length;if(t)for(e=0;e<t;e++)S(W[e])})),{_:function(){W=t.getElementsByClassName(i.autosizesClass),c("resize",R)},checkElems:R,updateElem:S}),$=function(){!$.i&&t.getElementsByClassName&&($.i=!0,T._(),L._())};var W,O,S,R;var D,j,q,B,F,H,k,P,U,I,Q,K,V,Z,G,J,X,Y,ee,te,ne,ae,ie,re,oe,se,le,ce,ue,de,fe,ye,me,pe;var ge,ve,he,be,ze,Ce,we;return u((function(){i.init&&$()})),a={cfg:i,autoSizer:T,loader:L,init:$,uP:w,aC:h,rC:b,hC:v,fire:C,gW:_,rAF:x}}(e,e.document,Date);e.lazySizes=n,l&&(l=n)}("undefined"!=typeof window?window:{});var c,u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,y=/^0o[0-7]+$/i,m=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,v=p||g||Function("return this")(),h=Object.prototype.toString,b=Math.max,z=Math.min,C=function(){return v.Date.now()};function w(e,t,n){var a,i,r,o,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,r=i;return a=i=void 0,c=t,o=e.apply(r,n)}function m(e){return c=e,s=setTimeout(g,t),u?y(e):o}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=r}function g(){var e=C();if(p(e))return v(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?z(n,r-(e-c)):n}(e))}function v(e){return s=void 0,f&&a?y(e):(a=i=void 0,o)}function h(){var e=C(),n=p(e);if(a=arguments,i=this,l=e,n){if(void 0===s)return m(l);if(d)return s=setTimeout(g,t),y(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=_(t)||0,E(n)&&(u=!!n.leading,r=(d="maxWait"in n)?b(_(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=i=s=void 0},h.flush=function(){return void 0===s?o:v(C())},h}function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==h.call(e)}(e))return NaN;if(E(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=E(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||y.test(e)?m(e.slice(2),n?2:8):d.test(e)?NaN:+e}c=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return E(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),w(e,t,{leading:a,maxWait:t,trailing:i})};let x=0,A=0;const N=document.querySelector(".search-form"),M=(document.querySelector("#search-box"),document.querySelector(".gallery__pixabay"));N.addEventListener("submit",(async function(t){t.preventDefault(),A=0,M.innerHTML="";const n=N.searchQuery.value.trim();if(""===n)return;n&&(T(n),window.addEventListener("scroll",e(c)((()=>{if(document.documentElement.getBoundingClientRect().bottom<document.documentElement.clientHeight+700)return A===x?o.Notify.warning("We're sorry, but you've reached the end of search results."):T(n)}),300)))}));let L=new(e(s))(".gallery__pixabay a",{simpleLightBox:{captions:!0,captionsData:"alt",captionDelay:250},intersectionObserver:{root:null,threshold:1}});async function T(t){A+=1;const n=await async function(t){return await e(r)(`https://pixabay.com/api/?key=29686062-6a845a2f1faff990e4be6d419&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${A}`).then((e=>e.data))}(t);try{x=n.totalHits/20,0===n.total&&async function(){o.Notify.failure("Sorry, there are no images matching your search query. Please try again.")}(),1===A&&o.Notify.info(`Hooray! We found ${n.totalHits} images.`),async function(e){const t=e.map((({webformatURL:e,largeImageURL:t,tags:n,likes:a,views:i,comments:r,downloads:o})=>`<div class="photo-card">\n  <a class="gallery-item" href="${t}">\n    <img src="${e}" alt="${n}" loading="lazy" class="gallery__images lazyload"/>\n    </a>\n    <div class="info">\n      <p class="info-item">\n        <b>Likes: <span class='gallery-text'>${a}</span></b>\n      </p>\n      <p class="info-item">\n        <b>Views: <span class='gallery-text'>${i}</span></b>\n      </p>\n      <p class="info-item">\n        <b>Comments: <span class='gallery-text'>${r}</span></b>\n      </p>\n      <p class="info-item">\n        <b>Downloads: <span class='gallery-text'>${o}</span></b>\n      </p>\n    </div>\n  </div>`)).join();M.insertAdjacentHTML("beforeend",t),L.refresh()}(n.hits)}catch(e){o.Notify.info("Reqest error")}}
//# sourceMappingURL=task-19.8ba33ad1.js.map
