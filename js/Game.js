class Game {
  constructor() {
    this.ctx = undefined;
    this.player = new Gato(20, 100, 40, 40, "rgba(255,0,0,1)", 1);
    this.obstacle = new Obstaculos(500, 0, 40, 130, "rgba(150,150,0,1)");
    this.obstacle2 = new Obstaculos(
      500,
      300 - 40,
      40,
      100,
      "rgba(150,150,0,1)"
    );
    this.loopGame = undefined;
  }
  initCanvas() {
    var canvas = document.getElementById("canvasLienzo");
    canvas.width = "500";
    canvas.height = "300";
    this.ctx = canvas.getContext("2d");
    this.ctx.fillStyle = "rgba(0,0,0,1)";
    this.ctx.fillRect(0, 0, 300, 300);
  }
  start() {
    this.loopGame = window.requestAnimationFrame(this._update.bind(this));
  }
  _update() {
    this.ctx.fillStyle = "rgba(0,0,0,1)";
    this.ctx.fillRect(0, 0, 500, 300); //borrado
    this.player.draw();
    this.obstacle.update();
    this.obstacle2.update();

    var resultado = this.player.update(300, 500, 0, 0);
    this.obstacle.draw();
    this.obstacle2.draw();
    if (this.checkCollisionUp(this.obstacle)) {
      console.log("he colisionado");
      resultado = -1;
    }
    if (resultado == -1) {
    } else {
      this.loopGame = window.requestAnimationFrame(this._update.bind(this));
    }
  }
  checkCollisionUp(obstacle) {
    console.log("dentro CheckCollision");

    if (
      (this.player.x + this.player.width > obstacle.x &&
        this.player.y < obstacle.y + obstacle.height) ||
      (this.player.x + this.player.width > this.obstacle2.x &&
        this.player.y + this.player.height > this.obstacle2.y)
    ) {
      return true;
    } else {
      false;
    }
  }
  // if (this.player.x + this.player.width > this.obstacle.x
  // && this.player.y < this.obstacle.y + this.obstacle.height) {
  // return true
  // }else{
  // return false
  // }
}
