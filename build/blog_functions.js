"use strict";
function blogBack() {
    window.history.back();
}
function blogShare() {
    var url = window.location.href;
    navigator.clipboard.writeText(url);
    window.alert("Copied '" + url + "' to clipboard.");
}
var btnBack = document.getElementById("btn-back");
if (btnBack != null) {
    btnBack.addEventListener("click", function (event) {
        blogBack();
    });
}
var btnShare = document.getElementById("btn-share");
if (btnShare != null) {
    btnShare.addEventListener("click", function (event) {
        blogShare();
    });
}
