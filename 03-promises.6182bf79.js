!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON");e(i).Notify.init({width:"30%",position:"center-center",fontSize:"15px",timeout:5e3,backOverlay:!0});var u=document.querySelector(".form  "),a=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),c=document.querySelector('[name="amount"]');function s(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}a.setAttribute("step",500),a.setAttribute("min",0),l.setAttribute("step",500),l.setAttribute("min",0),c.setAttribute("value",1),c.setAttribute("min",1),u.style.display="grid",u.style.gap="20px",u.style.gridTemplateColumns="repeat(auto-fill, 170px)",u.style.alignItems="end",u.addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(t.currentTarget[0].value),o=Number(t.currentTarget[1].value),r=Number(t.currentTarget[2].value),u=1;u<=r;u+=1)s(u,n).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms  ")),console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms  "))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms ")),console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms "))})),n+=o}))}();
//# sourceMappingURL=03-promises.6182bf79.js.map