class Gato {
  constructor(x, y, width, height, color, gravity) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.gravity = gravity;
    this.jump = 22;
    this.gatoImage = new Image();
    this.gatoImage.src = "images/gato3.png";
  }

  draw() {
    game.ctx.drawImage(this.gatoImage, this.x, this.y, this.width, this.height);
    // game.ctx.fillStyle = this.color;
    // game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.y += this.gravity;
    if (this.y > 0 && this.y < 260) return 0;
    else return -1;
  }

  jumpp() {
    this.y = this.y - this.jump;
  }
}
