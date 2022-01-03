import Game from './objs/game.js';
import View from './objs/view.js';
import Sprite from './objs/sprite.js';


const canvas = document.querySelector('#canvas');
const mainPhoto = new Sprite('./src/sprite/mainsprite.png');

const game = new Game({ view: new View(canvas, mainPhoto) });

game.init().then(() => game.start());
