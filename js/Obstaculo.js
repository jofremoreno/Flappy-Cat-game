class Obstaculos {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    //intentando mantener espaciado entre obstaculos siempre iguales
  }
  draw() {
    game.ctx.fillStyle = this.color;
    game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update(){
    this.x--;
  }
}
