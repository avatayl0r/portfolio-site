window.onscroll = function() {stickyHandler()};

var header = document.getElementById("nav-bar");

var sticky = header.offsetTop;

function stickyHandler(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    } else{
        header.classList.remove("sticky");
    }
}
