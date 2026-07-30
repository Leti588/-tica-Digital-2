document.addEventListener('DOMContentLoaded', () => {
  // Referências dos elementos de Acessibilidade
  const btnAccessibility = document.getElementById('btn-accessibility');
  const menuAccessibility = document.getElementById('accessibility-menu');
  const btnFontIncrease = document.getElementById('btn-font-increase');
  const btnFontDecrease = document.getElementById('btn-font-decrease');
  const btnFontReset = document.getElementById('btn-font-reset');
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const btnReadText = document.getElementById('btn-read-text');
  const btnStopText = document.getElementById('btn-stop-text');

  // 1. Abrir/Fechar Painel de Acessibilidade
  btnAccessibility.addEventListener('click', () => {
    const isHidden = menuAccessibility.classList.toggle('hidden');
    btnAccessibility.setAttribute('aria-expanded', !isHidden);
  });

  // 2. Controle do Tamanho da Fonte
  let currentFontSize = 100;

  btnFontIncrease.addEventListener('click', () => {
    if (currentFontSize < 140) {
      currentFontSize += 10;
      document.documentElement.style.fontSize = `${currentFontSize}%`;
    }
  });

  btnFontDecrease.addEventListener('click', () => {
    if (currentFontSize > 80) {
      currentFontSize -= 10;
      document
