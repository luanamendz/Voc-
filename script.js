const audio = document.getElementById('audioPagode');
const botao = document.getElementById('botaoPlay');

botao.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    botao.textContent = '⏸'; // símbolo de pause
  } else {
    audio.pause();
    botao.textContent = '▶'; // símbolo de play
  }
});
