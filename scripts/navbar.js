function createNavBarElement(name, ref) {
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

createNavBarElement("Home", "./index.html");
createNavBarElement("About Me", "./aboutme.html");
createNavBarElement("Projects", "./projects.html");
createNavBarElement("Resume", "./resume.html");
createNavBarElement("Blog", "./blog.html");
