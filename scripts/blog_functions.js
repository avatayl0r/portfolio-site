function blogBack() {
    window.history.back()
}

function blogShare() {
    url = window.location.href
    navigator.clipboard.writeText(url)
    window.alert("Copied '" + url + "' to clipboard.")
}

let btnBack = document.getElementById("btn-back");
btnBack.addEventListener("click", event => {
    blogBack();
});

let btnShare = document.getElementById("btn-share");
btnShare.addEventListener("click", event => {
    blogShare();
});
