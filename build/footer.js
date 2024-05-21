"use strict";
// Purpose: Create the footer section of the website.
function createFooter(email, liLink, githubLink, artstationLink, gumroadLink) {
    var footer = document.getElementById("footer-section");
    if (footer === null) {
        console.error("Footer section not found.");
        return;
    }
    var footerArrow = document.createElement("a");
    footerArrow.href = "#top";
    var footerArrowImg = new Image();
    footerArrowImg.src = "./images/arrows.png";
    footerArrowImg.classList.add("footer-arrow");
    footerArrowImg.title = "Arrows";
    footerArrow.appendChild(footerArrowImg);
    footer.appendChild(footerArrow);
    var footerGoToTop = document.createElement("p");
    var footerGoToTopText = document.createTextNode("Go To Top");
    footerGoToTop.appendChild(footerGoToTopText);
    var footerHr = document.createElement("hr");
    footer.appendChild(footerGoToTop);
    footer.appendChild(footerHr);
    var footerTitle = document.createElement("h1");
    footerTitle.classList.add("footer-title");
    var footerTitleText = document.createTextNode("Contact Me");
    footerTitle.appendChild(footerTitleText);
    footer.appendChild(footerTitle);
    var footerList = document.createElement("ul");
    footerList.classList.add("footer");
    footer.appendChild(footerList);
    var footerEmail = createWebLink(email, "Email");
    var footerLinkedIn = createWebLink(liLink, "LinkedIn");
    var footerGitHub = createWebLink(githubLink, "GitHub");
    var footerArtStation = createWebLink(artstationLink, "ArtStation");
    var footerGumroad = createWebLink(gumroadLink, "Gumroad");
    footerList.appendChild(footerEmail);
    footerList.appendChild(footerLinkedIn);
    footerList.appendChild(footerGitHub);
    footerList.appendChild(footerArtStation);
    footerList.appendChild(footerGumroad);
    var footerSpace = document.createElement("br");
    footer.appendChild(footerSpace);
    var footerCopy = document.createElement("p");
    var footerCopyText = document.createTextNode("© 2024 By Ava Taylor");
    footerCopy.appendChild(footerCopyText);
    footer.appendChild(footerCopy);
}
function createWebLink(link, text) {
    var listElem = document.createElement("li");
    listElem.classList.add("footer-el");
    var listElemA = document.createElement("a");
    listElemA.classList.add("footer-el-a");
    listElemA.href = link;
    listElemA.target = "_blank";
    var listElemText = document.createTextNode(text);
    listElemA.appendChild(listElemText);
    listElem.appendChild(listElemA);
    return listElem;
}
createFooter("mailto: avataylor2033@gmail.com", "https://www.linkedin.com/in/avatayl0r/", "https://www.github.com/avatayl0r", "https://www.artstation.com/avataylor", "https://avatay.gumroad.com/");
