class Obstaculos {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.jump = true;
    this.vx = 0;
    this.vy = 0;
  }
  draw() {
    game.ctx.fillStyle = this.color;
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
