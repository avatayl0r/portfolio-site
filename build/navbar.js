"use strict";
function createNavBarElement(name, ref) {
    var nbar = document.getElementById("nbar");
    if (nbar === null) {
        console.error("NavBar section not found.");
        return;
    }
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
function createNavBarIcon(icon, ref) {
    var nbar = document.getElementById("nbar");
    if (nbar === null) {
        console.error("NavBar section not found.");
        return;
    }
    var element = document.createElement("li");
    element.classList.add("nbar-el");
    var elementAttr = document.createElement("a");
    var elementDisplay = document.createElement("img");
    elementDisplay.src = icon;
    elementDisplay.classList.add("nbar-el-a-img");
    elementAttr.href = ref;
    elementAttr.appendChild(elementDisplay);
    element.appendChild(elementAttr);
    nbar.appendChild(element);
}
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
console.log(dir);
if (dir == "") {
    createNavBarIcon("./images/home.png", "./index.html");
    createNavBarElement("Home", "./index.html");
    createNavBarElement("About Me", "./aboutme.html");
    createNavBarElement("Projects", "./projects.html");
    createNavBarElement("Resume", "./resume.html");
    createNavBarElement("Blog", "./blog.html");
}
else {
    createNavBarIcon("../images/home.png", "../index.html");
    createNavBarElement("Home", "../index.html");
    createNavBarElement("About Me", "../aboutme.html");
    createNavBarElement("Projects", "../projects.html");
    createNavBarElement("Resume", "../resume.html");
    createNavBarElement("Blog", "../blog.html");
}
