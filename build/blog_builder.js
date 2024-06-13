"use strict";
function createBlogElement(title, authorMetadata, content, img, ref) {
    var blogFeed = document.getElementById("blog-feed");
    if (blogFeed === null) {
        console.error("Blog feed section not found.");
        return;
    }
    var blog = document.createElement("div");
    blog.classList.add("blog");
    var blogTitle = document.createElement("h2");
    var blogTitleText = document.createTextNode(title);
    blogTitle.appendChild(blogTitleText);
    var blogData = document.createElement("h4");
    var blogDataText = document.createTextNode(authorMetadata);
    blogData.appendChild(blogDataText);
    blog.appendChild(blogTitle);
    blog.appendChild(blogData);
    if (img) {
        var blogImgContainer = document.createElement("div");
        blogImgContainer.classList.add("blog-img-container");
        var blogImg = new Image();
        blogImg.src = img;
        blogImg.classList.add("blog-img");
        blogImgContainer.appendChild(blogImg);
        blog.appendChild(blogImgContainer);
    }
    var paragraphs = content.split("<br>");
    for (var idx = 0; idx < paragraphs.length; idx++) {
        var blogDesc = document.createElement("p");
        var blogDisplay = document.createTextNode(paragraphs[idx]);
        blogDesc.appendChild(blogDisplay);
        blog.appendChild(blogDesc);
    }
    if (ref) {
        var btnAnchor = document.createElement("div");
        btnAnchor.classList.add("btn-lrg-anchor");
        var btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-lrg-container");
        var btn = document.createElement("button");
        var btnText = document.createTextNode(title);
        btn.appendChild(btnText);
        btn.classList.add("btn-lrg");
        btn.onclick = function () {
            window.location.href = ref;
        };
        btnContainer.appendChild(btn);
        btnAnchor.appendChild(btnContainer);
        blog.appendChild(btnAnchor);
    }
    blogFeed.appendChild(blog);
}
createBlogElement("Reworking the Website", "By Aryn Taylor @ 20:35PM | 12.06.2024", "A fresh, dark, and retro look for the website. <br>The new design is inspired by my childhood memories of the early 2000s. <br>I hope to continue to update and improve the site.", "./images/rework_tn.png", "./blog/rework.html");
