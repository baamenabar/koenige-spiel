import { Game } from "./game.mjs";
import { Controller } from "./controller.mjs";
import { Renderer } from "./renderer.mjs";
import { Debugger } from "./debugger.mjs";

const canvas = document.getElementById("game-map");
let controllerData;
let game;
let debuggerUi;
let mapUi;

function init() {
    controllerData = new Controller(canvas);
    game = new Game();
    debuggerUi = new Debugger(controllerData);
    mapUi = new Renderer(canvas, game);
}

init();
