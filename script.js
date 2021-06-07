window.onload = function() {
  const ballsSection = document.querySelector('.color-balls-section');
  console.log(ballsSection);

  createBalls();

  function createBalls() {
    for (let index = 0; index < 6; index += 1) {
      let ball = document.createElement('div');
      ball.className = 'ball'
      let color1 = parseInt((Math.random() * 255) + 1);
      let color2 = parseInt((Math.random() * 255) + 1);
      let color3 = parseInt((Math.random() * 255) + 1);
      let color = `rgb(${color1}, ${color2}, ${color3})`;
      console.log(color);
      ball.style.backgroundColor = color;
      ballsSection.appendChild(ball);
    }
  }
}