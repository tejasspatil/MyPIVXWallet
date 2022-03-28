'use strict';

// DOM Cache
const domAlertPos = document.getElementsByClassName("alertPositioning")[0];

// Alert - Do NOT display arbitrary / external errors, the use of `.innerHTML` allows for input styling at this cost.
// Supported types: success, info, warning
function createAlert(type, message) {
    const domAlert = document.createElement("div");
    domAlert.className = "alertpop " + type;
    // Message
    domAlert.innerHTML = message;
    // On Click: Delete alert from DOM after close animation
    domAlert.addEventListener("click", () => {
        domAlert.style.opacity = "0";
        setTimeout(() => {
            domAlert.remove();
        }, 600);
    });
    domAlertPos.appendChild(domAlert);
}