function blogBack() {
    window.history.back()
}

function blogShare() {
    let url = window.location.href;
    navigator.clipboard.writeText(url);
    window.alert("Copied '" + url + "' to clipboard.");
}

let btnBack = document.getElementById("btn-back");
if (btnBack != null) {
    btnBack.addEventListener("click", event => {
        blogBack();
    });
}

let btnShare = document.getElementById("btn-share");
if (btnShare != null) {
    btnShare.addEventListener("click", event => {
        blogShare();
    });
}
