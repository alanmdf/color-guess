window.onload = function () {
  const ballsSection = document.querySelector('.color-balls-section');
  const rgbColor = document.getElementById('rgb-color');
  const answer = document.getElementById('answer');
  answer.innerText = 'Escolha uma cor';

  createBalls();

  function createBalls () {
    for (let index = 0; index < 6; index += 1) {
      const ball = document.createElement('div');
      ball.className = 'ball'
      const color1 = parseInt((Math.random() * 255) + 1);
      const color2 = parseInt((Math.random() * 255) + 1);
      const color3 = parseInt((Math.random() * 255) + 1);
      const color = `rgb(${color1}, ${color2}, ${color3})`;
      ball.style.backgroundColor = color;
      ballsSection.appendChild(ball);
    }
    rgbColor.innerText = ballsSection.children[0].style.backgroundColor
  }

  ballsSection.addEventListener('click', checkColor)

  function checkColor (element) {
    if (element.target.style.backgroundColor === rgbColor.innerText ) {
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
}