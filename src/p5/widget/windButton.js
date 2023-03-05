import Clickable from './clickable.js';
import Bound from './bound.js';
import Arrow from './arrow.js';

export default class windButton extends Clickable{
  constructor(p, x, y, width, height) {
    let bound = new Bound(x, y, x+width, y+height);
    super(p, bound);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    let baseX = this.bound.upperLeftX+5;
    let baseY = this.bound.upperLeftY+5;
    let gap = 15;
    let number = Math.floor((this.height-10)/gap);
    let vecX = this.width-10;
    let vecY = 0;
    let color = 'black';
    if (this.isHovered) {
      color = 'red';
    }
    for (let i=0; i<number; i++){
      let a = new Arrow(this.p, this.p.createVector(baseX, baseY+gap*i), this.p.createVector(vecX, vecY), color, 1, 8);
      a.draw();
    }
  }
}