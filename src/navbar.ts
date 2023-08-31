function createNavBarElement(name:string, ref: string) {
    var nbar = document.getElementById("nbar");
    var element = document.createElement("li");
    element.classList.add("nbar-el");

    var elementAttr = document.createElement("a");
    var elementDisplay = document.createTextNode(name);
    elementAttr.classList.add("nbar-el-a");
    elementAttr.href = ref;
    elementAttr.appendChild(elementDisplay);
    element.appendChild(elementAttr);

    nbar.appendChild(element);
}

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
console.log(dir);
if (dir == "") {
    createNavBarElement("Home", "./index.html");
    createNavBarElement("About Me", "./aboutme.html");
    createNavBarElement("Projects", "./projects.html");
    createNavBarElement("Resume", "./resume.html");
    createNavBarElement("Blog", "./blog.html");
} else {
    createNavBarElement("Home", "../index.html");
    createNavBarElement("About Me", "../aboutme.html");
    createNavBarElement("Projects", "../projects.html");
    createNavBarElement("Resume", "../resume.html");
    createNavBarElement("Blog", "../blog.html");
}
