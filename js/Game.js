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
    setInterval(() => {
      let height = 0; //para el mathrandom
      arrayObstacle.push(
        new Obstaculos(500, 0, 40, 130, "rgba(150,150,0,1)", 1)
      );
      arrayObstacle.push(
        new Obstaculos(500, 300 - 40, 40, 100, "rgba(150,150,0,1)", 1)
      );
      if (arrayObstacle.length > 8) {
        arrayObstacle.shift();
        arrayObstacle.shift();
      }
    }, 2500);
    this.loopGame = window.requestAnimationFrame(this._update.bind(this));
  }
  _update() {
    this.ctx.fillStyle = "rgba(0,0,0,1)";
    this.ctx.fillRect(0, 0, 500, 300); //borrado
    this.player.draw();

    arrayObstacle.forEach(obstacle => {
      obstacle.update();
      obstacle.draw();
      if (
        this.checkCollisionUp(obstacle) ||
        this.checkCollisionDown(obstacle) === true
      ) {
        console.log("he colisionado");
        resultado = -1;
      }
    });
    if (resultado === -1) {
      window.cancelAnimationFrame(this.loopGame);
    } else {
      this.loopGame = window.requestAnimationFrame(this._update.bind(this));
    }
    console.log("array");
    var resultado = this.player.update(300, 500, 0, 0);
  }
  //COLISION SUPERIOR
  checkCollisionUp(obstacle) {
    console.log("dentro CheckCollision");
    var myLeft = this.player.x;
    var myRight = this.player.x + this.player.width;
    var myTop = this.player.y;
    var myBottom = this.player.y + this.player.height;

    var obsLeft = obstacle.x;
    var obsRight = obstacle.x + obstacle.width;
    var obsTop = obstacle.y;
    var obsBottom = obstacle.y + obstacle.height;

    var crash = true;

    if (
      myBottom < obsTop ||
      myTop > obsBottom ||
      myRight < obsLeft ||
      myLeft > obsRight
    ) {
      crash = false;
    }
    return crash;
  }

  //COLISION INFERIOR
  checkCollisionDown(obstacle) {
    console.log("dentro CheckCollision");
    var myLeft = this.player.x;
    var myRight = this.player.x + this.player.width;
    var myTop = this.player.y;
    var myBottom = this.player.y + this.player.height;

    var obsLeft = obstacle.x;
    var obsRight = obstacle.x + obstacle.width;
    var obsTop = obstacle.y;
    var obsBottom = obstacle.y + obstacle.height;

    var crash = true;

    if (
      myBottom < obsTop ||
      myTop > obsBottom ||
      myRight < obsLeft ||
      myLeft > obsRight
    ) {
      crash = false;
    }
    return crash;
  }
}
