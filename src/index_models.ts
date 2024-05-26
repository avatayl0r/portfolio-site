import { drawLight, drawScene, animate, sceneInit, clearScene } from "./engine.js"

function randomRender(idx: number) {
    switch (idx) {
        case 0:
            selectedModel = "./models/winston.gltf";
            break;
        case 1:
            selectedModel = "./models/samurai.gltf";
            break;
        case 2:
            selectedModel = "./models/ger_grenade.gltf";
            break;
    }
}

function loadModel(idx: number) {
    sceneInit();
    randomRender(idx);
    drawLight();
    drawScene(selectedModel);
    animate();
}

function previousModel() {
    currentIdx -= 1;
    if (currentIdx < 0) {
        currentIdx = maxIdx;
    }
    clearScene();
    loadModel(currentIdx);
}

function nextModel() {
    currentIdx += 1;
    if (currentIdx > maxIdx) {
        currentIdx = 0;
    }
    clearScene();
    loadModel(currentIdx);
}

var selectedModel = "./models/winston.gltf";
var maxIdx = 2;
var currentIdx = Math.floor(Math.random() * (maxIdx + 1));

let btnPrevModel = document.getElementById("btn-mdl-prev");
if (btnPrevModel) {
    btnPrevModel.addEventListener("click", _event => {
        previousModel();
    });
}

let btnNextModel = document.getElementById("btn-mdl-next");
if (btnNextModel) {
    btnNextModel.addEventListener("click", _event => {
        nextModel();
    });
}

loadModel(currentIdx);
