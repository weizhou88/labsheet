export default class arrow {
  constructor(p, base, vec, color, weight, size) {
    this.p = p;
    this.base = base;
    this.vec = vec;
    this.color = color;
    this.weight = weight;
    this.size = size;
  }

  draw() {
    this.p.push();
    this.p.stroke(this.color);
    this.p.strokeWeight(this.weight);
    this.p.fill(this.color);
    this.p.translate(this.base.x, this.base.y);
    this.p.line(0, 0, this.vec.x, this.vec.y);
    this.p.rotate(this.vec.heading());
    this.p.translate(this.vec.mag()-this.size, 0);
    this.p.triangle(0, this.size/2, 0, -this.size/2, this.size, 0);
    this.p.pop();
  }
}