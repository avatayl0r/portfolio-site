window.onscroll = function() {stickyHandler()};

var header = document.getElementById("nav-bar");

if(header) {
    var sticky = header.offsetTop;
}

function stickyHandler() {
    if(window.scrollY > sticky) {
        header.classList.add("sticky");
    } else{
        if(header) {
            header.classList.remove("sticky");
        }
    }
}
