window.onload = function () {
  const ballsSection = document.querySelector('.color-balls-section');
  const rgbColor = document.getElementById('rgb-color');
  const answer = document.getElementById('answer');
  const button = document.getElementById('reset-game');
  answer.innerText = 'Escolha uma cor';

  function createBalls () {
    for (let index = 0; index < 6; index += 1) {
      const ball = document.createElement('div');
      ball.className = 'ball';
      ballsSection.appendChild(ball);
    }
    colorizeBalls();
    const randomIndex = parseInt((Math.random() * 6));
    rgbColor.innerText = ballsSection.children[randomIndex].style.backgroundColor;
  }

  function colorizeBalls () {
    const ballsArray = document.getElementsByClassName('ball');
    for (let index2 = 0; index2 < ballsArray.length; index2 += 1) {
      const color1 = parseInt((Math.random() * 255) + 1);
      const color2 = parseInt((Math.random() * 255) + 1);
      const color3 = parseInt((Math.random() * 255) + 1);
      const color = `rgb(${color1}, ${color2}, ${color3})`;
      ballsArray[index2].style.backgroundColor = color;
    }
}

  createBalls();
  
  ballsSection.addEventListener('click', checkColor)

  function checkColor (element) {
    if (element.target.style.backgroundColor === rgbColor.innerText ) {
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }

  button.addEventListener('click', resetGame) 
  function resetGame () {
    colorizeBalls();
    const randomIndex = parseInt((Math.random() * 6));
    rgbColor.innerText = ballsSection.children[randomIndex].style.backgroundColor;
    answer.innerText = 'Escolha uma cor';
  }
}
