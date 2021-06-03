class Drop {
  constructor(index) {
    this.pos = createVector(random(width), random(-500, 50));
    this.len = random(20, 25);
    this.vel = random(3, 6);
    this.colors = ['#6CD9CC', '#FB6578', '#FE5A8F', '#FC9574', '#9A8DF2'];
    this.index = index
  }

  fall() {
    this.pos.y += this.vel;
    if (this.pos.y > height) {
      this.pos.y = random(-200, -100);
      this.vel = random(3, 6);
    }
  }

  show() {
    strokeWeight(2);
    stroke(this.colors[this.index]);
    line(this.pos.x, this.pos.y, this.pos.x - this.len / 3, this.pos.y + this.len);
    stroke(0);
    strokeWeight(1);
  }
}