window.onload = function() {
  const ballsSection = document.querySelector('.color-balls-section');
  console.log(ballsSection);

  createBalls();

  function createBalls() {
    for (let index = 0; index < 6; index += 1) {
      let ball = document.createElement('div');
      ball.className = 'ball'
      ballsSection.appendChild(ball);
    }
  }
}