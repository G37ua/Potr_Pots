parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("form"),t=document.querySelectorAll(".form__fild");e.addEventListener("submit",function(e){e.preventDefault(),t.forEach(function(e){e.value=""})}),window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});var n=document.querySelectorAll(".page__section");n.forEach(function(e){new IntersectionObserver(function(t){t[0].isIntersecting&&e.classList.add("active__down",t[0].isIntersecting)}).observe(e)});var a=document.querySelector(".about-us__container"),o=new IntersectionObserver(function(e){e[0].isIntersecting&&a.classList.add("active__names",e[0].isIntersecting)});o.observe(a);var c=new Swiper(".swiper",{slidesPerView:1,spaceBetween:10,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),i=document.querySelectorAll(".button__modal"),s=document.querySelectorAll(".materials__modal-window"),r=document.querySelector(".materials__modal");i.forEach(function(e){e.addEventListener("click",function(t){var n=t.currentTarget.getAttribute("data-path"),a=e.classList.contains("button__modal--active");i.forEach(function(e){e.classList.remove("button__modal--active")}),s.forEach(function(e){e.classList.remove("materials__modal-window--active")}),a||(document.querySelector('[data-target="'.concat(n,'"]')).classList.add("materials__modal-window--active"),e.classList.add("button__modal--active"))})}),r.addEventListener("click",function(e){e.target===r&&(s.forEach(function(e){e.classList.remove("materials__modal-window--active")}),i.forEach(function(e){e.classList.remove("button__modal--active")}))});var d=window.matchMedia("(min-width: 767px)");function l(e){var t=document.querySelector("#benefits__button");e.matches?t.classList.add("button__secondary"):t.classList.remove("button__secondary")}d.addListener(l),l(d);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.25bc9ab5.js.map