class Game {
  constructor(width, height) {
    this.ctx = undefined;
    this.player = new Gato(20, 100, 50, 50, "rgba(255,0,0,1)", 1);
    this.obstacle = new Obstaculos(); //("rgba(150,150,0,1)");
    this.obstacle2 = new Obstaculos(); //("rgba(150,150,0,1)");
    // this.loopGame = undefined;
    this.background = new Image();
    this.background.src = "images/flappy-bird-background-png-5-transparent.png";
    this.stop = undefined;
    this.score = 0;
    this.fontFamily = "flappy";

    this.gameInterval = undefined;
    this.pause = false;

    this.width = width;
    this.height = height;

    this.counterRandomObstacle = 0;

    this.gameInterval = undefined;
    this.pause = false;

    this.gameOver = false;

    this.canvas = undefined;
  }

  //PINTAMOS LIENZO
  initCanvas() {
    this.canvas = document.getElementById("canvasLienzo");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "rgba(0,0,0,1)";
    this.ctx.fillRect(0, 0, 300, 300);
  }

  //GENERADOR DE OBSTACULOS
  _generateObstacle() {
    let widthObstacle = 45;
    let spaceBetween = 115;
    let obstacleHeight = Math.floor(Math.random() * 150) + 10;

    arrayObstacle.push(
      new Obstaculos(this.width, 0, widthObstacle, obstacleHeight)
    );
    arrayObstacle.push(
      new Obstaculos(
        this.width,
        0 + obstacleHeight + spaceBetween,
        widthObstacle,
        this.height
      )
    );
  }

  //CONTROLES DE JUEGO - TECLAS
  gameControl() {
    window.addEventListener(
      "keyup",
      function(e) {
        if (e.keyCode == 32) {
          this.player.jumpp();
          this.player.jumpSound.play();
        }
        if (e.keyCode === 80) {
          if (this.pause === false) {
            console.log("ha pausado");
            this._pauseGame();
          } else {
            this._restartGame();
          }
        }
      }.bind(this)
    );
  }

  start() {
    this.gameControl();
    this._update();
    // this.loopGame = window.requestAnimationFrame(this._update.bind(this));
  }

  //PAUSE - RESTART - GAMEOVER
  _pauseGame() {
    this.pause = true;
    window.cancelAnimationFrame(this.gameInterval);
  }
  _restartGame() {
    this.pause = false;
    this.gameInterval = window.requestAnimationFrame(this._update.bind(this));
  }
  _gameOver() {
    var gameOver = document.getElementsByClassName("gameOverScreen")[0];
    var clearGameOver = undefined;
    gameOver.style.display = "block";
    this.canvas.style.display = "none";

    this.player.crashSound.play();
    this.gameOver = true;
    window.cancelAnimationFrame(this.gameInterval);
    clearGameOver = setTimeout(() => {
      gameOver.style.display = "none";
      location.reload();
      clearTimeout(clearGameOver);
    }, 3000);
  }

  //FUNCIÓN UPDATE
  _update() {
    // lo 1o q debe hacer es arrancar el loop
    // poniendo la variable en la que guardo el loop con el animationFrame consigo misma como parametro
    this.counterRandomObstacle++;
    if (this.counterRandomObstacle === 200) {
      this._generateObstacle();
      this.counterRandomObstacle = 0;
    }
    this.gameInterval = window.requestAnimationFrame(this._update.bind(this));

    this.ctx.fillRect(0, 0, this.width, this.height); //borrado
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    this.player.draw();

    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.closePath();

    arrayObstacle.forEach((obstacle, i) => {
      obstacle.update();
      obstacle.draw();
      if (
        this.checkCollisionUp(obstacle) ||
        this.checkCollisionDown(obstacle)
      ) {
        this._gameOver();
        this.player.crashSound.play();
        // en lugar de llamar a pauseGame(), llamar a otra funcion que cancele el intervalo
        // y que saque un div por encima del canvas
        this.stop = -1;
      }
      if (obstacle.x + obstacle.width < 0) {
        arrayObstacle.splice(i, 1);
      }
    });

    if (this.player.getOut()) {
      this._gameOver();
      this.player.crashSound.play();
      this.stop = -1;
    }

    this.points();
    // if (this.stop === -1) {
    //   window.cancelAnimationFrame(this.loopGame);
    // } else {
    //   this.loopGame = window.requestAnimationFrame(this._update.bind(this));
    // }
    this.stop = this.player.update();
  }
  //COLISIONES
  //COLISION CANVAS
  // checkCollisionCanvasUp(canvas){
  //   var myLeft = this.player.x;
  //   var myRight = this.player.x + this.player.width;
  //   var myTop = this.player.y;
  //   var myBottom = this.player.y + this.player.height;

  //   var canvasWidth = canvas.width;
  //   var canvasHeight = this.canvas.height;

  //   var crash = true;

  //   if (
  //     myBottom < canvasWidth ||
  //     myTop > canvasWidth ||
  //     myRight < canvasHeight ||
  //     myLeft > canvasHeight
  //   ) {
  //     crash = false;
  //   }
  //   return crash;
  // }

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

  //CONTADOR DE PUNTOS
  points() {
    this.ctx.font = `50px ${this.fontFamily}`;
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.score}`, 250, 50);
    if (arrayObstacle.length > 0) {
      if (arrayObstacle[0].x === 0) {
        this.score += 1;
        game.player.pointSound.play();
      }
    }
  }
  pauseText() {
    this.ctx.font = `50px ${this.fontFamily}`;
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.score}`, 250, 50);
  }
  pause() {}
}
