var game = new Game(500, 300);
var arrayObstacle = [];
document.onload = (function() {
  var mybutton = document.getElementById("myButton");
  mybutton.addEventListener("click", () => {
    game.initCanvas();
    game.start();
    mybutton.style.display = "none";

    // window.addEventListener("keyup", function(e) {
    //   if (e.keyCode == 32) {
    //     game.player.jumpp();
    //     gato.jumpSound.play();
    //   }
    //   if (event.keyCode === 80) {
    //     if (this.pause === false) {
    //       console.log("ha pausado");
    //       this._pauseGame();
    //     } else {
    //       this._restartGame();
    //     }
    //   }
    // });
  });
})();
