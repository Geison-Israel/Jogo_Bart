const bart = document.querySelector('.bart');
const placa = document.querySelector('.placa');

const jump = () => {
  bart.classList.add('jump');

  setTimeout(() => {
    bart.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {
  const placaPosition = placa.offsetLeft;
  const bartPosition = +window.getComputedStyle(bart).bottom.replace('px', '');

  if (placaPosition <= 80 && placaPosition > 0 && bartPosition < 27) {

    placa.style.animation = 'none';
    placa.style.left = `${placaPosition}px`;

    bart.style.animation = 'none';
    bart.style.bottom = `${bartPosition}px`;

    bart.src = './imagens/game_over.gif'; 
    bart.style.width = '75px';
    bart.style.marginLeft = '30px';

    clearInterval(loop);
  }

}, 10);

document.addEventListener('keydown', jump);
