var game = new Game(500, 300);
var arrayObstacle = [];
document.onload = (function() {
  var mybutton = document.getElementById("myButton");
  mybutton.addEventListener("click", () => {
    game.initCanvas();
    game.start();
    mybutton.style.display = "none";
  });
})();
