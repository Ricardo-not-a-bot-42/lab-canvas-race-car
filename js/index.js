window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  const playAreaWidth = canvas.width;
  const playAreaHeigth = canvas.height;
  const racetrack = new Racetrack(context);
  const car = new Car(canvas, context);
  const obstacles = [];
  let gameOver = false;
  let difficulty = 2;

  const toggleMenu = () => {
    const introElement = document.querySelector('.game-intro');
    introElement.hidden = !introElement.hidden;
  };

  function startGame() {
    toggleMenu();

    racetrack.initialDraw();
    car.initialDraw();
    car.setControls();
    gameLoop();
  }

  const clearScreen = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const spawnObstacle = () => {
    if (obstacles.length <= 0) {
      difficulty += 0.3;
      for (let i = 0; i < 15; i++) {
        let randomX = Math.random() * 250 + 50;
        const obstacle = new Obstacle(
          randomX,
          0 - obstacles.length * 200,
          difficulty,
          context
        );
        obstacles.push(obstacle);
      }
    }
  };

  const gameLogic = () => {
    racetrack.reDraw();
    car.reDraw();
    spawnObstacle();
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].scrollObstacle();
      obstacles[i].draw();
      if (obstacles[i].checkCollision(car) === true) {
        gameOver = true;
      }
      if (obstacles[i].y >= 750) {
        car.addScore(Math.floor(100 + obstacles[i].width / 2));
        obstacles.shift();
      }
    }
  };

  const gameLoop = () => {
    clearScreen();
    gameLogic();
    if (!gameOver) {
      setTimeout(gameLoop, 1000 / 60);
    }
  };
};
