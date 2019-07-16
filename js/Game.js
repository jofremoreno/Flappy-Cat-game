class Game {
  constructor() {
    this.ctx = undefined;
    this.player = new Gato(20, 100, 50, 50, "rgba(255,0,0,1)", 1);
    this.obstacle = new Obstaculos(); //("rgba(150,150,0,1)");
    this.obstacle2 = new Obstaculos(); //("rgba(150,150,0,1)");
    this.loopGame = undefined;
    this.background = new Image();
    this.background.src = "images/background.png";
    this.stop = undefined;
    this.score = 0;
    this.fontFamily = "flappy";
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
      let x = 500;
      let y = 0;
      let widthObstacle = 40;
      let spaceBetween = 110;
      let obstacleHeight = Math.floor(Math.random() * 150) + 10;

      arrayObstacle.push(
        new Obstaculos(x, y, widthObstacle, obstacleHeight, "rgba(150,150,0,1)")
      );
      arrayObstacle.push(
        new Obstaculos(
          x,
          y + obstacleHeight + spaceBetween,
          widthObstacle,
          300,
          "rgba(150,150,0,1)"
        )
      );
      // if (arrayObstacle.length > 8) {
      //   arrayObstacle.shift();
      //   arrayObstacle.shift();
      // }
    }, 2800);
    this.loopGame = window.requestAnimationFrame(this._update.bind(this));
  }
  _update() {
    this.ctx.fillStyle = "rgba(0,0,0,1)";
    this.ctx.fillRect(0, 0, 500, 300); //borrado
    this.ctx.drawImage(this.background, 0, 0, 500, 300);
    this.player.draw();

    arrayObstacle.forEach((obstacle, i) => {
      obstacle.update();
      obstacle.draw();
      if (
        this.checkCollisionUp(obstacle) ||
        this.checkCollisionDown(obstacle) === true
      ) {
        this.stop = -1;
      }
      if (obstacle.x + obstacle.width < 0) {
        arrayObstacle.splice(i, 1);
        console.log(arrayObstacle);
      }
    });

    this.points();
    if (this.stop === -1) {
      window.cancelAnimationFrame(this.loopGame);
    } else {
      this.loopGame = window.requestAnimationFrame(this._update.bind(this));
    }
    this.stop = this.player.update();
  }
  //COLISION SUPERIOR
  checkCollisionUp(obstacle) {
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
  points() {
    this.ctx.font = `40px ${this.fontFamily}`;
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.score}`, 250, 50);
    if (arrayObstacle.length > 0) {
      if (arrayObstacle[0].x === 0) {
        this.score += 10;
      }
    }
  }
}
