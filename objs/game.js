import Tank from './tank.js';
import moves from './constrollers/moves.js'

export default class Game {

    constructor({ view }) {
        this.view = view;
        this.tank = new Tank();
        this.loop = this.loop.bind(this);
        this.moves = moves;
    }

    async init() {
        this.view.init();
        this.moves();
    }

    start(){
        requestAnimationFrame(this.loop);
    }

    loop() {
        this.view.update(this.tank);
        requestAnimationFrame(this.loop);
    }
}