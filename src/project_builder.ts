function createProjectElement(title: string, authorMetadata: string, content: string, img: string, ref: string) {
    let projectFeed = document.getElementById("projects");
    let project = document.createElement("div");
    project.classList.add("project");

    let projectTitle = document.createElement("h2");
    let projectTitleText = document.createTextNode(title);
    projectTitle.appendChild(projectTitleText);

    let projectData = document.createElement("h4");
    let projectDataText = document.createTextNode(authorMetadata);
    projectData.appendChild(projectDataText);

    project.appendChild(projectTitle);
    project.appendChild(projectData);

    if (img) {
        let projectImgContainer = document.createElement("div");
        projectImgContainer.classList.add("project-img-container");

        let projectImg = new Image();
        projectImg.src = img;
        projectImg.classList.add("project-img");
        projectImgContainer.appendChild(projectImg);

        project.appendChild(projectImgContainer);
    }

    let paragraphs = content.split("<br>")
    for (let idx = 0; idx < paragraphs.length; idx++) {
        let projectDesc = document.createElement("p");
        let projectDisplay = document.createTextNode(paragraphs[idx]);
        projectDesc.appendChild(projectDisplay);
        project.appendChild(projectDesc);
    }

    if (ref) {
        let btnAnchor = document.createElement("div");
        btnAnchor.classList.add("btn-lrg-anchor")
        let btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-lrg-container");
        let btn = document.createElement("button");
        let btnText = document.createTextNode(title);
        btn.appendChild(btnText);
        btn.classList.add("btn-lrg");

        btn.onclick = function() {
            window.open(ref, "_blank");
        }

        btnContainer.appendChild(btn);
        btnAnchor.appendChild(btnContainer);
        project.appendChild(btnAnchor);
    }
    let hLine = document.createElement("hr");
    project.appendChild(hLine);
    projectFeed.appendChild(project);
}

createProjectElement(
    "qpi - Quick Project Initialiser Tool",
    "(Active) August 2023 - Present",
    "QPI is a simple and efficient command-line utility designed to greatly speed-up the process of setting up projects.<br>This tool aims to save you time and effort by automating the initial project setup, so you can focus on what really matters - writing code.<br>Feel free to download and use it for your own projects!",
    "./images/qpi.png",
    "https://github.com/aryntaylor/qpi-tool");

createProjectElement(
    "digiwatch mk. i - Digital Watch",
    "(Active) August 2023 - Present",
    "I am creating my first ever combination of hardware (electronics) and software (program using C++). This I decided would be a cheap, easy-to-use, and performant digital watch.<br>As this is my first time combining both hardware and software, I predict this will be an ongoing project for a while, however I really am looking forward to updating people on it's progress, and eventually releasing it.",
    "./images/watch.jpg",
    "");

createProjectElement(
    "ggf - Web Browser",
    "(Active) August 2023 - Present",
    "I am creating a web browser from scratch. This I thought would be an interesting exercise in both understanding how a web browser works, and simultaneously building a web browser that suits my needs better as a programmer.<br>This is an ongoing project, and is being posted to my GitHub page if you are interested in seeing my progress.",
    "",
    "");

createProjectElement(
    "aryntaylor.dev",
    "(Active) August 2023 - Present",
    "This is my portfolio site, and my first ever feature complete site built from scratch using JavaScript, NodeJS, ThreeJS, HTML, and CSS.<br>I aim to use this site for showcasing my work, updating and logging my resume, having a somewhat reflective about me section, a blog for blogging my various development projects, and a gallery of my 3D models, texturing, materials, shaders, and more.<br>The site is still early in development, and will be consistently being updated.<br>If you are interested in learning more about this journey, please see the Blogs section to read more!",
    "./images/blog_cover001.png",
    "https://www.aryntaylor.dev/blog");

createProjectElement(
    "Primus - A Deckbuilding DCCG for PC & Mobile",
    "Feb 2023 - April 2023",
    "I worked on a solo project for my final semester graduation project. PRIMUS is a Competitive DCCG with 1v1 PVE & potentially PVP game modes. It is a card game for android devices & PC, built within the Unity engine.<br>I was responsible for programming, 3D modelling, texturing, VFX, SFX, UI, QA, etc. as part of this project.<br>I programmed the card systems, the deckbuilding, the AI system, and gameplay feature. I have also worked on the VFX and 3D art for my game, primarily focusing on procedural and modular design for scalability and productivity.",
    "./images/tree_draw.gif",
    "https://www.artstation.com/artwork/BX3vJD");

createProjectElement(
    "EAI - Easy Android Installer",
    "Feb 2023 - Feb 2023",
    "I researched UX issues that developers were having when installing .apk files from computer to Android devices. As a result, I found that users wished to see the simplification and user-friendliness of a standalone tool to handle the installation process.<br>Using VS Code, PowerShell, Python3, and various Python Libraries (including tkinter, customtkinter, & pillow), I was able to program a tool that simplifies this process with a user-friendly interface and both a PythonScript & .exe version of this application avaliable. I published this tool publicly on my Gumroad site where it is currently avaliable for download.",
    "./images/eai.png",
    "https://arynt.gumroad.com/l/easy-android-installer");

createProjectElement(
    "BST - Blender Spacing Tool",
    "Date - Date",
    "I researched issues that users were having with the 3D modelling software Blender. As a result, I found that users (including a 3D artist at a AAA studio) wished to see the creation of a spacing tool similar to 3DsMax's spacing tool within Blender as the current workaround took too much time to setup and was quite awkward to use.<br>Using VS Code, PowerShell, Python3, and Blender API, I was able to program a tool that enables similar functionality of the 3DsMax spacing tool but in Blender. I published this tool publicly on my Gumroad site where it is currently avaliable for download.",
    "./images/bst.png",
    "https://arynt.gumroad.com/l/blender-spacing-tool");

createProjectElement(
    "Modular SBSAR To UE5 Material",
    "Dec 2022 - Dec 2022",
    "I created an SBSAR Substance Designer material, and using the Substance Designer 3D plugin for UE5, I ported and setup the SBSAR file in-engine.<br>This allowed me to create a blendable material shader that allowed blending between multiple instances of the SBSAR - meaning I could tweak the wetness of the dirt allowing for puddles to culminate in certain areas.<br>This workflow allows for fast and iterative material usage in UE5, and allows the designer to tweak the SBSAR instances to get different and unique effects entirely within engine.",
    "./images/sbsar.jpg",
    "https://www.artstation.com/artwork/9NW62a");

createProjectElement(
    "Game Jams",
    "September 2022 - January 2023",
    "I have taken part in various game jams over the past few years. This includes the Global Game Jam 2022, Horror Jam #5, NI Student Game Jam 2022, and more.<br>Generally I have been responsible for programming & designing gameplay features & systems, debugging, merging, and fixing issues in code, assets, and materials/shaders, creating 3D assets, creating materials & shaders & textures, creating lighting & VFX & post-processing FX, and project management.",
    "./images/tbmw.png",
    "https://aryntaylor.itch.io/");
