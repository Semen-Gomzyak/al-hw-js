const t=document.querySelector("#validation-input");t.addEventListener("blur",(function(e){if(e.currentTarget.value.trim().length===Number(t.getAttribute("data-length")))return t.classList.remove("invalid"),t.classList.add("valid");t.classList.remove("valid"),t.classList.add("invalid")}));
//# sourceMappingURL=task-06.088817d9.js.map
