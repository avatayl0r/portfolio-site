function createBlogElement(title, authorMetadata, content, img, ref) {
    var blogFeed = document.getElementById("blog-feed");
    var blog = document.createElement("div");
    blog.classList.add("blog");
    blog.onclick = function() {
        window.location = ref;
    }

    var blogTitle = document.createElement("h2");
    var blogTitleText = document.createTextNode(title);
    blogTitle.appendChild(blogTitleText);

    var blogData = document.createElement("h4");
    var blogDataText = document.createTextNode(authorMetadata);
    blogData.appendChild(blogDataText);

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
    blog.appendChild(blogData);
    blog.appendChild(blogImgContainer);
    blog.appendChild(blogDesc);
    blogFeed.appendChild(blog);
}

createBlogElement(
    "Hello, World!",
    "By Aryn Taylor @ 11:04PM | 24.08.2023",
    "Hello, World! This is my portfolio site, and my first ever feature complete site built from scratch using JavaScript, NodeJS, ThreeJS, HTML, and CSS.",
    "./images/blog_cover001.png",
    "./blog/hello-world.html");
