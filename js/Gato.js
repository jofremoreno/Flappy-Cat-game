class Gato {
  constructor(x, y, width, height, color, gravity) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.gravity = 1.2;
    this.jump = gravity + 40;
    this.gatoImage = new Image();
    this.gatoImage.src = "images/dakota1.png";
    this.jumpSound = new Audio();
    this.jumpSound.src = "sounds/sfx_wing.wav";
    this.pointSound = new Audio();
    this.pointSound.src = "sounds/sfx_point.wav";
    this.crashSound = new Audio();
    this.crashSound.src = "sounds/sfx_hit.wav";
  }

  draw() {
    game.ctx.drawImage(this.gatoImage, this.x, this.y, this.width, this.height);
  }
  update() {
    // this.gravitySpeed += this.gravity;
    // this.y += this.speedY + this.gravitySpeed;
    this.y += this.gravity;
    if (this.y > 0 && this.y < 260) {
      return 0;
    } else {
      return -1;
    }
  }

  jumpp() {
    this.y = this.y - this.jump;
  }
}
