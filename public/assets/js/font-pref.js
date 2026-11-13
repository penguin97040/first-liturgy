// Applies a saved serif choice before the page is drawn, so the page never starts in the
// wrong style, and asks for the serif font early so it is ready sooner.
// Must stay a plain, non-deferred external script: the font path is worked out from
// document.currentScript, which is not available to deferred, async or inline scripts.
(function () {
  try {
    if (localStorage.getItem("fl-font") !== "serif") return;
    document.documentElement.dataset.font = "serif";
    var pre = document.createElement("link");
    pre.rel = "preload"; pre.as = "font"; pre.type = "font/woff2"; pre.crossOrigin = "anonymous";
    pre.href = new URL("../fonts/GeistSerif-Variable.woff2", document.currentScript.src).href;
    document.head.appendChild(pre);
  } catch (e) { /* storage unavailable (or no currentScript): keep the default sans style */ }
})();
