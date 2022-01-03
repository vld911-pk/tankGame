import directions from '../config/directions.js';

export default class View {
    constructor(canvas, sprite){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.sprite = sprite;
        this.directions = directions;
    }

    async init() {
       await this.sprite.load();
    }

    update(tank) {
        console.log({ tank });
        this.ctx.clearRect(0, 0, 800, 520);
        this.ctx.drawImage(
             this.sprite.image,
             this.directions[tank.direction][0], this.directions[tank.direction][1], 32, 32,
             tank.positionX, tank.positionY, 32, 32,
        );
    }

};