var game = new Game();
game.initCanvas();
game.start();
var arrayObstacle = [];
window.addEventListener("keyup", function(e) {
  if (e.keyCode == 32) {
    console.log("espacio");
    game.player.jumpp();
    console.log(game.player.y);
  }
});
