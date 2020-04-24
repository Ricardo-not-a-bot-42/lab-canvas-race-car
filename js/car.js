class Car {
  constructor(canvas, context) {
    this.x = canvas.width / 2 - 25;
    this.y = (canvas.height / 3) * 2;

    this.context = context;
    this.image = new Image();
    this.image.src = '/images/car.png';
    this.width = 158 / 3;
    this.height = 319 / 3;

    this.score = 0;
  }

  initialDraw() {
    this.image.addEventListener('load', () => {
      this.reDraw();
    });
  }

  reDraw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.context.fillStyle = 'white';
    this.context.font = '24px sans-serif';
    this.context.fillText('Score: ' + this.score, 75, 50);
  }

  setControls() {
    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 39:
          if (this.x < canvas.width - 100) {
            this.x += 25;
          }
          break;
        case 37:
          if (this.x > 70) {
            this.x -= 25;
          }
          break;
      }
    });
  }

  addScore(score) {
    this.score += score;
  }
}
