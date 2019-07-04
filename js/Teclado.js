//FUNCIONES TECLADO//
function keyDown(/** @type {KeyboardEvent} */ ev) {
  switch (ev.keyCode) {
    case 37:
      controller.left = true; //LEFT
      break;
    case 38:
      controller.up = true; //UP
      break;
    case 39:
      controller.right = true; //RIGHT
      break;
  }
}
function keyUp(/** @type {KeyboardEvent} */ ev) {
  switch (ev.keyCode) {
    case 37:
      controller.left = false; //LEFT
      break;
    case 38:
      controller.up = false; //UP
      break;
    case 39:
      controller.right = false; //RIGHT
      break;
  }
}
