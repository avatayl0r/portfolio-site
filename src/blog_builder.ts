function createBlogElement(title: string, authorMetadata: string, content: string, img: string, ref: string) {
    var blogFeed = document.getElementById("blog-feed");
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
        let blogImgContainer = document.createElement("div");
        blogImgContainer.classList.add("blog-img-container");

        let blogImg = new Image();
        blogImg.src = img;
        blogImg.classList.add("blog-img");
        blogImgContainer.appendChild(blogImg);

        blog.appendChild(blogImgContainer);
    }

    let paragraphs = content.split("<br>");
    for (let idx = 0; idx < paragraphs.length; idx++) {
        let blogDesc = document.createElement("p");
        let blogDisplay = document.createTextNode(paragraphs[idx]);
        blogDesc.appendChild(blogDisplay);
        blog.appendChild(blogDesc);
    }

    if (ref) {
        let btnAnchor = document.createElement("div");
        btnAnchor.classList.add("btn-lrg-anchor");
        let btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-lrg-container");
        let btn = document.createElement("button");
        let btnText = document.createTextNode(title);
        btn.appendChild(btnText);
        btn.classList.add("btn-lrg");

        btn.onclick = function() {
            window.location.href = ref;
        }

        btnContainer.appendChild(btn);
        btnAnchor.appendChild(btnContainer);
        blog.appendChild(btnAnchor);
    }

    blogFeed.appendChild(blog);
}

createBlogElement(
    "New Coat Of Paint",
    "By Aryn Taylor @ 20:05PM | 26.09.2023",
    "After recieving some feedback, and also noting some of my personal areas for improving the website, I went forth and made some new changes!<br>This includes new and improved button styling, a more browser-safe (and pretty cool) font, and some backend changes to improve the site's scalability and modularity for future changes.",
    "./images/blog_cover002.png",
    "./blog/new-coat-of-paint.html");

createBlogElement(
    "A Fresh Perspective",
    "By Aryn Taylor @ 16:55PM | 28.08.2023",
    "After recieving some feedback, and also noting some of my personal areas for improving the website, I went forth and made some new changes!<br>This includes new and improved button styling, a more browser-safe (and pretty cool) font, and some backend changes to improve the site's scalability and modularity for future changes.",
    "./images/blog_cover002.png",
    "./blog/a-fresh-perspective.html");

createBlogElement(
    "Hello, World!",
    "By Aryn Taylor @ 11:04PM | 24.08.2023",
    "This is my portfolio site, and my first ever feature complete site built from scratch using JavaScript, NodeJS, ThreeJS, HTML, and CSS.",
    "./images/blog_cover001.png",
    "./blog/hello-world.html");
