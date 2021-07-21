export class Controller {
    controls = {
        mouse: {
            x: 0,
            y: 0,
            lastClick: new Date(),
            lastClickX: 0,
            lastClickY: 0,
        },
    };

    constructor(canvasElement) {
        canvasElement.addEventListener("mousemove", (evt) => {
            evt.preventDefault();
            this.controls.mouse.x = evt.layerX;
            this.controls.mouse.y = evt.layerY;
        });

        canvasElement.addEventListener("click", (evt) => {
            evt.preventDefault();
            this.controls.mouse.lastClick = new Date();
            this.controls.mouse.lastClickX = evt.layerX;
            this.controls.mouse.lastClickY = evt.layerY;
        });
    }
}
