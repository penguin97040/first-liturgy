// Applies a saved serif choice before the page is drawn, so the page never starts in the
// wrong style, and asks for the serif font early so it is ready sooner.
try {
  if (localStorage.getItem("fl-font") === "serif") {
    document.documentElement.dataset.font = "serif";
    var pre = document.createElement("link");
    pre.rel = "preload"; pre.as = "font"; pre.type = "font/woff2"; pre.crossOrigin = "anonymous";
    pre.href = new URL("../fonts/GeistSerif-Variable.woff2", document.currentScript.src).href;
    document.head.appendChild(pre);
  }
} catch (e) { /* storage unavailable: keep the default sans style */ }
