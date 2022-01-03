function moves() {
    document.addEventListener("keydown", ({ code }) => {
        if(this.tank.speed < 0) this.tank.speed = 0;
        switch(code) {
            case 'KeyW': {
                this.tank.direction = 0;
                this.tank.positionY -= this.tank.speed;
                break;
            }
            case 'KeyD': {
                this.tank.direction = 1;
                this.tank.positionX += this.tank.speed;
                break;
            }
            case 'KeyS': {
                this.tank.direction = 2;
                this.tank.positionY += this.tank.speed;
                break;
            }
            case 'KeyA': {
                this.tank.direction = 3;
                this.tank.positionX -= this.tank.speed;
                break;
            }
            case 'KeyL': this.tank.speed += 1;break;
            case 'KeyJ': this.tank.speed -= 1;break;

            default: console.log('only WDSA keys to move damnass!!!');break;
        }
     })
}

export default moves;