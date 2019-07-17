class Obstaculos {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // this.color = color;
    this.obstaculoNorteImage = new Image();
    this.obstaculoNorteImage.src = "images/tuberiaNorte.png";
    this.obstaculoSurImage = new Image();
    this.obstaculoSurImage.src = "images/tuberiaSur.png";
  }
  draw() {
    game.ctx.drawImage(
      this.obstaculoNorteImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
    game.ctx.drawImage(
      this.obstaculoSurImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    this.x-- ;
  }
}
