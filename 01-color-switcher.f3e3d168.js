!function(){var t=document.querySelector("[data-start]");console.log(t);var e=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.setAttribute("disabled",!1),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){e.setAttribute("disabled",!1),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.f3e3d168.js.map
