import * as THREE from "three";
//@ts-ignore
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import * as loader from "../node_modules/ts-loader/dist/index";

export var model: THREE.Object3D;
var scene: THREE.Scene;
var camera: THREE.PerspectiveCamera;
var renderer: THREE.WebGLRenderer;
var container: HTMLElement;
var isAnimating: boolean;

export function sceneInit() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0 );
    container = document.getElementById("viewport") as HTMLElement;
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

export function drawScene(sceneFile: string) {
    const loader = new GLTFLoader();
    loader.load(sceneFile, function(gltfScene: GLTFLoader) {
        console.log(gltfScene);
        const root = gltfScene.scene;
        scene.add(root);
        model = root
    }, function(xhr: ProgressEvent) {
        console.log((xhr.loaded/xhr.total * 100) + "% loaded");
    }, function(error: ErrorEvent) {
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
    if (model == undefined) {return;}
    model.rotation.y += 0.01;
    renderer.render(scene,camera);
}
