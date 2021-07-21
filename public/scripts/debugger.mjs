export const $$ = (selector) => document.querySelector(selector);

export class Debugger {
    source = null;
    lastHash = null;
    frameCount = 0;
    lastSecond = Math.floor(new Date().getTime() / 1000);
    currentFps = 0;
    fields = {
        mouse: {
            x: $$(".js-debugger-mouse-coordinates-x"),
            y: $$(".js-debugger-mouse-coordinates-y"),
            clickTime: $$(".js-debugger-mouse-click-time"),
            clickX: $$(".js-debugger-mouse-click-x"),
            clickY: $$(".js-debugger-mouse-click-y"),
        },
        system: {
            fps: $$(".js-debugger-sys-fps"),
        },
    };

    /**
     *
     * We will store only the reference to data, the rendered does the rest.
     * @param {*} data
     */
    constructor(controlData) {
        this.source = controlData;
        this.hasChanged(controlData);
        this.render(controlData);
    }

    render(data) {
        //console.log("animation frame requested");
        this.countFrames();
        window.requestAnimationFrame(() => {
            this.render(data);
        });

        if (!this.hasChanged(data)) {
            return;
        }
        this.fields.mouse.x.innerHTML = data.controls.mouse.x;
        this.fields.mouse.y.innerHTML = data.controls.mouse.y;
        this.fields.mouse.clickTime.innerHTML =
            data.controls.mouse.lastClick.toISOString();
        this.fields.mouse.clickX.innerHTML = data.controls.mouse.lastClickX;
        this.fields.mouse.clickY.innerHTML = data.controls.mouse.lastClickY;
        this.fields.system.fps.innerHTML = this.currentFps;
    }

    countFrames() {
        const currentSecond = Math.floor(new Date().getTime() / 1000);
        if (this.lastSecond == currentSecond) {
            this.frameCount++;
            return;
        }
        this.currentFps = this.frameCount;
        this.lastSecond = currentSecond;
        this.frameCount = 0;
    }

    hasChanged(data) {
        const hash = JSON.stringify(data);
        if (hash !== this.lastHash) {
            this.lastHash = hash;
            return true;
        }
        return false;
    }
}
