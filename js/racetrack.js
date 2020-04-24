class Racetrack {
  constructor(context) {
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 700;

    this.context = context;
    this.image = new Image();
    this.image.src = '/images/road.png';
  }

  initialDraw() {
    this.image.addEventListener('load', () => {
      this.reDraw();
    });
  }

  reDraw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
