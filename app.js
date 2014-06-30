requirejs.config({
    "baseUrl": "/assets/js"
});
define(['hljs'], function(hljs) {
    hljs.initHighlightingOnLoad();
    loadCss('/assets/css/highlight-tomorrow-night-bright.css')
});
function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}