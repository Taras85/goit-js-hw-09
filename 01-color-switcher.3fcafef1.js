function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),d=document.querySelector("body");r.setAttribute("disabled",!0);let o=null;e.addEventListener("click",(()=>{d.style.backgroundColor=t(),e.setAttribute("disabled",!0),r.removeAttribute("disabled"),o=setInterval((()=>{d.style.backgroundColor=t()}),1e3)})),r.addEventListener("click",(()=>{r.setAttribute("disabled",!0),e.removeAttribute("disabled"),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.3fcafef1.js.map
