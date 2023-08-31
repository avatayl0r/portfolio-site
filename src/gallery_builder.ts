class GalleryElement {
    title: string;
    content: string;
    modelRef: string;
    public createGalleryElement: () => void;

    constructor(title: string, content: string, modelRef: string) {
        this.title = title;
        this.content = content;
        this.modelRef = modelRef;

        this.createGalleryElement = function() {
            var gallery = document.getElementById("model-feed");
            var model = document.createElement("div");
            model.classList.add("model");

            var modelTitle = document.createElement("h2");
            var modelTitleText = document.createTextNode(this.title);
            modelTitle.appendChild(modelTitleText);

            var modelImgContainer = document.createElement("div");
            modelImgContainer.classList.add("model-img-container");

            var modelImg = new Image();
            modelImg.src = this.modelRef;
            modelImg.classList.add("model-img");
            modelImgContainer.appendChild(modelImg);

            var modelDesc = document.createElement("p");
            var modelDisplay = document.createTextNode(this.content);
            modelDesc.appendChild(modelDisplay);

            model.appendChild(modelTitle);
            model.appendChild(modelImgContainer);
            model.appendChild(modelDesc);
            gallery.appendChild(model);
        }
    }
}

let winston = new GalleryElement(
    "Winston",
    "Winston is the default base mesh model I use for project scaling, and as a 'spawn location' marker in the editor. Winston was the first model I rendered on this site, and as such deserves a spot on the gallery.",
    "./models/winston.gltf");

winston.createGalleryElement();
