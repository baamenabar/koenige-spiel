export class Renderer {
    ctx;
    game;

    constructor(canvas, game) {
        init(canvas, game);
    }

    init(canvas, game) {
        this.ctx = canvas.getContext("2d");
        this.game = game;
        this.resetCanvas();
        this.render();
    }

    resetCanvas() {
        const canvasRect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);
        ctx.fillStyle = "rgb(125,234,245)";
        ctx.fillRect(0, 0, canvasRect.width, canvasRect.height);
    }

    render() {
        window.requestAnimationFrame(render);
        console.log("rendering one frame");
        this.resetCanvas();
    }
}
