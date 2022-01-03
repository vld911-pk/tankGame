export default class View {
    constructor(canvas, sprite){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.sprite = sprite;
    }

    async init() {
       await this.sprite.load();
    }

    update() {
        this.ctx.drawImage(
             this.sprite.image,
             0, 0, 32, 32,
             0, 0, 32, 32,
        );
    }

};