/* ================================
   Load previously saved settings
   ================================ */

   function applySavedSettings() {
    const settings = JSON.parse(localStorage.getItem("gloucesterSettings") || "{}");
  
    // Text size
    if (settings.textSize === "large") {
      document.body.classList.add("large-text");
    }
  
    // High contrast
    if (settings.highContrast) {
      document.body.classList.add("high-contrast");
    }
  
    // Easy read
    if (settings.easyRead) {
      document.body.classList.add("easy-read");
    }
  }
  
  /* Run on every page */
  applySavedSettings();
  
  /* ================================
     Settings page only: event logic
     ================================ */
  
  if (document.body.classList.contains("settings-page")) {
  
    function saveSettings() {
      const settings = {
        textSize: document.getElementById("text-large").checked ? "large" : "normal",
        highContrast: document.getElementById("highContrastToggle").checked,
        easyRead: document.getElementById("easyReadToggle").checked
      };
  
      localStorage.setItem("gloucesterSettings", JSON.stringify(settings));
    }
  
    // Attach event listeners only if controls exist
    const normal = document.getElementById("text-normal");
    const large = document.getElementById("text-large");
    const high = document.getElementById("highContrastToggle");
    const easy = document.getElementById("easyReadToggle");
  
    if (normal && large) {
      normal.addEventListener("change", () => {
        document.body.classList.remove("large-text");
        saveSettings();
      });
  
      large.addEventListener("change", () => {
        document.body.classList.add("large-text");
        saveSettings();
      });
    }
  
    if (high) {
      high.addEventListener("change", (e) => {
        document.body.classList.toggle("high-contrast", e.target.checked);
        saveSettings();
      });
    }
  
    if (easy) {
      easy.addEventListener("change", (e) => {
        document.body.classList.toggle("easy-read", e.target.checked);
        saveSettings();
      });
    }
  }
