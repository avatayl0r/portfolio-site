import { drawLight, drawScene, animate, model } from "./engine.js"

function randomRender(idx) {
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

var selectedModel = "./models/winston.gltf";
var idx = Math.floor(Math.random() * 3);
randomRender(idx);
drawLight();
drawScene(selectedModel);
animate(model);
