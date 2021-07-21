export class Renderer {
    canvas;
    ctx;
    game;

    constructor(canvas, game) {
        this.init(canvas, game);
    }

    init(canvas, game) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.game = game;
        this.resetCanvas();
        this.render();
    }

    resetCanvas() {
        const canvasRect = this.canvas.getBoundingClientRect();
        this.ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);
        this.ctx.fillStyle = "rgb(125,234,245)";
        this.ctx.fillRect(0, 0, canvasRect.width, canvasRect.height);
    }

    render() {
        window.requestAnimationFrame(() => this.render());
        this.resetCanvas();
    }
}
