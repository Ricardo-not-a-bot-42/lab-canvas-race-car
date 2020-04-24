class Obstacle {
  constructor(x, y, speed, context) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = Math.random() * 100 + 100;
    this.height = 30;
    this.context = context;
  }

  draw() {
    this.context.fillStyle = 'darkred';
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }

  scrollObstacle() {
    this.y += this.speed;
  }

  checkCollision(player) {
    return (
      player.y < this.y + this.height &&
      player.y + player.height - 15 > this.y &&
      player.x + player.width - 15 > this.x &&
      player.x < this.x + this.width
    );
  }
}
