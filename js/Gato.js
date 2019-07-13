class Gato {
  constructor(x, y, width, height, color, gravity) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.gravity = gravity;
    this.jump = 22;
  }

  draw() {
    game.ctx.fillStyle = this.color;
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update(maxY, maxX, minY, minX) {
    this.y += this.gravity;
    if (
      this.x + this.width >= maxX ||
      this.y + this.height >= maxY ||
      this.x <= minX ||
      this.y <= minY
    ) {
      return -1;
    }
    return 0;
  }

  jumpp() {
    this.y = this.y - this.jump;
  }
}
