function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var o=i("7Y9D8");e(o).Notify.init({width:"30%",position:"center-center",fontSize:"15px",timeout:5e3,backOverlay:!0});const l=document.querySelector(".form  "),u=document.querySelector('[name="delay"]'),s=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function d(e,t){const n=Math.random()>.3;return new Promise(((r,i)=>{setTimeout((()=>{n?r({position:e,delay:t}):i({position:e,delay:t})}),t)}))}u.setAttribute("step",500),u.setAttribute("min",0),s.setAttribute("step",500),s.setAttribute("min",0),a.setAttribute("value",1),a.setAttribute("min",1),l.style.display="grid",l.style.gap="20px",l.style.gridTemplateColumns="repeat(auto-fill, 170px)",l.style.alignItems="end",l.addEventListener("submit",(function(t){t.preventDefault();let n=Number(t.currentTarget[0].value),r=Number(t.currentTarget[1].value),i=Number(t.currentTarget[2].value);for(let t=1;t<=i;t+=1)d(t,n).then((({position:t,delay:n})=>{e(o).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms  `),console.log(`✅ Fulfilled promise ${t} in ${n}ms  `)})).catch((({position:t,delay:n})=>{e(o).Notify.failure(`❌ Rejected promise ${t} in ${n}ms `),console.log(`❌ Rejected promise ${t} in ${n}ms `)})),n+=r}));
//# sourceMappingURL=03-promises.4fd5faa6.js.map
