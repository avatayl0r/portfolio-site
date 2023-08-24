function createGalleryElement(title, content, model) {
    var gallery = document.getElementById("model-feed");
    var model = document.createElement("div");
    model.classList.add("model");

    var modelTitle = document.createElement("h2");
    var modelTitleText = document.createTextNode(title);
    modelTitle.appendChild(modelTitleText);

    var modelImgContainer = document.createElement("div");
    modelImgContainer.classList.add("model-img-container");

    var modelImg = new Image();
    modelImg.src = model;
    modelImg.classList.add("model-img");
    modelImgContainer.appendChild(modelImg);

    var modelDesc = document.createElement("p");
    var modelDisplay = document.createTextNode(content);
    modelDesc.appendChild(modelDisplay);

    model.appendChild(modelTitle);
    model.appendChild(modelImgContainer);
    model.appendChild(modelDesc);
    gallery.appendChild(model);
}

createGalleryElement(
    "Winston",
    "Winston is the default base mesh model I use for project scaling, and as a 'spawn location' marker in the editor. Winston was the first model I rendered on this site, and as such deserves a spot on the gallery.",
    "./models/winston.gltf");
