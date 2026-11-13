// Applies a saved serif choice before the page is drawn, so there is no flash of the wrong font.
try {
  if (localStorage.getItem("fl-font") === "serif") document.documentElement.dataset.font = "serif";
} catch (e) { /* storage unavailable: keep the default sans style */ }
