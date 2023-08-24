import * as THREE from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";

export var model;
var scene;
var camera;
var renderer;
var container;
var isAnimating;

export function sceneInit() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    container = document.getElementById("viewport");
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    camera.position.y = 0;
    camera.position.x = 0;
    camera.position.z = 10;
}

export function drawLight() {
    const light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set(2,2,5);
    scene.add( light );
}

export function drawScene(sceneFile) {
    const loader = new GLTFLoader();
    loader.load(sceneFile, function(gltfScene) {
        console.log(gltfScene);
        const root = gltfScene.scene;
        scene.add(root);
        model = root
    }, function(xhr) {
        console.log((xhr.loaded/xhr.total * 100) + "% loaded");
    }, function(error) {
        console.error(error);
    });
}

export function clearScene() {
    renderer.domElement.remove();
    isAnimating = false;
}

export function animate() {
    if (isAnimating == false) {
        isAnimating = true;
        return;
    }
    requestAnimationFrame(animate);
    isAnimating = true;
    model.rotation.x += 0.01;
    model.rotation.y += 0.01;
    renderer.render(scene,camera);
}
