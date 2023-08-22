function createBlogElement(title, content, img, ref) {
    var blogFeed = document.getElementById("blog-feed");
    var blog = document.createElement("div");
    blog.classList.add("blog");
    blog.onclick = function() {
        window.location = ref;
    }

    var blogTitle = document.createElement("h2");
    var blogTitleText = document.createTextNode(title);
    blogTitle.appendChild(blogTitleText);

    var blogImgContainer = document.createElement("div");
    blogImgContainer.classList.add("blog-img-container");

    var blogImg = new Image();
    blogImg.src = img;
    blogImg.classList.add("blog-img");
    blogImgContainer.appendChild(blogImg);

    var blogDesc = document.createElement("p");
    var blogDisplay = document.createTextNode(content);
    blogDesc.appendChild(blogDisplay);

    blog.appendChild(blogTitle);
    blog.appendChild(blogImgContainer);
    blog.appendChild(blogDesc);
    blogFeed.appendChild(blog);
}

createBlogElement(
    "Hello, World!",
    "I have created my first website from scratch using HTML, CSS, and JavaScript. This site also makes use of the three.js framework for 3D rendering of models.",
    "./images/blog_cover001.jpg",
    "./blogs/blog-hello-world.html");