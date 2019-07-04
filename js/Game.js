class Game {
  constructor() {
    this.ctx = undefined;
    this.obstacle = new Obstaculos(200, 0, 40, 150, "rgba(150,150,0,1)");
    this.player = new Gato(20, 100, 30, 30, "rgba(255,0,0,1)");
    this.obstacle2 = new Obstaculos(
      200,
      300 - 100,
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
    this.ctx.fillRect(0, 0, 500, 300);
  }
  start() {
    this.loopGame = window.requestAnimationFrame(this._update.bind(this));
  }
  _update() {
    this.player.draw();
    this.obstacle.draw();
    this.obstacle2.draw();
    this.loopGame = window.requestAnimationFrame(this._update.bind(this));
  }
}
