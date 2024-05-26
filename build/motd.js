"use strict";
function randomMotd(idx) {
    switch (idx) {
        case 0:
            motd = "Stay hungry, stay foolish.";
            author = " - Steve Jobs";
            break;
        case 1:
            motd = "In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.";
            author = " - Mark Zuckerberg";
            break;
        case 2:
            motd = "One of the only ways to get out of a tight box is to invent your way out.";
            author = " - Jeff Bezos";
            break;
        case 3:
            motd = "The only way to go fast, is to go well.";
            author = " - Robert C. Martin";
            break;
        case 4:
            motd = "Experience is the name everyone gives to their mistakes.";
            author = " - Oscar Wilde";
            break;
        case 5:
            motd = "Talk is cheap. Show me the code.";
            author = " - Linus Torvalds";
            break;
    }
}
function loadMotd(idx) {
    randomMotd(idx);
    var container = document.getElementById("motd-holder");
    if (container === null) {
        console.error("MOTD section not found.");
        return;
    }
    var motdHolder = document.createElement("p");
    var motdHolderText = document.createTextNode(motd);
    var motdAuthorHolder = document.createElement("p");
    var motdAuthorHolderText = document.createTextNode(author);
    motdHolder.appendChild(motdHolderText);
    container.appendChild(motdHolder);
    motdAuthorHolder.appendChild(motdAuthorHolderText);
    container.appendChild(motdAuthorHolder);
}
var motd = "Never trust a computer you can't throw out a window.";
var author = " - Steve Wozniak";
var maxIdx = 5;
var currentIdx = Math.floor(Math.random() * (maxIdx + 1));
loadMotd(currentIdx);
