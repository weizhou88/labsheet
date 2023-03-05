// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

export default class Mover {
  constructor(p, width, height, margin) {
    this.p5 = p;
    this.width = width;
    this.height = height;
    this.margin = margin;
    this.mass = 1;
    this.position = p.createVector(width / 2, 30);
    this.velocity = p.createVector(0, 0);
    this.acceleration = p.createVector(0, 0);
    this.r = 48;
  }

  applyForce(force) {
    var f = force.div(this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    this.p5.stroke(0);
    this.p5.strokeWeight(2);
    this.p5.fill(200, 27);
    this.p5.ellipse(this.position.x, this.position.y, this.r, this.r);
  }

  checkEdges() {
    if (this.position.x > this.width - this.r/2.0 - this.margin) {
      this.position.x = this.width - this.r/2.0 - this.margin;
      this.velocity.x *= -1;
    } else if (this.position.x < this.r/2.0 + this.margin) {
      this.velocity.x *= -1;
      this.position.x = this.r/2.0 + this.margin;
    }
    if (this.position.y > this.height - this.r/2.0 -this.margin) {
      this.velocity.y *= -1;
      this.position.y = this.height - this.r/2.0 - this.margin;
    }
  }

}