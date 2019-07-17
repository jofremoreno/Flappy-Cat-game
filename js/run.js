var game = new Game();
var arrayObstacle = [];
document.onload = (function() {
  var mybutton = document.getElementById("myButton");
  mybutton.addEventListener("click", () => {
    game.initCanvas();
    game.start();
    mybutton.style.display = "none";

    window.addEventListener("keyup", function(e) {
      if (e.keyCode == 32) {
        game.player.jumpp();
      }
    });
  });
})();
