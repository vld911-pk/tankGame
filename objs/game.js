

export default class Game {

    constructor({ view }) {
        this.view = view;

        this.loop = this.loop.bind(this);
    }

    async init() {
        this.view.init();
    }

    start(){
        requestAnimationFrame(this.loop);
    }

    loop() {
        console.log('render');
        this.view.update();
        requestAnimationFrame(this.loop);
    }
}