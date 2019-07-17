class Gato {
  constructor(x, y, width, height, color, gravity) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.gravity = 1.5;
    this.jump = gravity + 33;
    this.gatoImage = new Image();
    this.gatoImage.src = "images/dakota1.png";
    this.jumpSound = new Audio();
    this.jumpSound.src = "sounds/sfx_wing.mp3";
    this.pointSound = new Audio();
    this.pointSound.src = "sounds/Mario-coin-sound.mp3";
  }

  draw() {
    game.ctx.drawImage(this.gatoImage, this.x, this.y, this.width, this.height);
  }
  update() {
    this.y += this.gravity;
    if (this.y > 0 && this.y < 260) return 0;
    else return -1;
  }

  jumpp() {
    this.y = this.y - this.jump;
    this.dx = (Math.cos(rads) * speed) / 6;
    this.dy = (Math.sin(rads) * speed) / 6;
  }
}
