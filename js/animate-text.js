const text = document.querySelector('#segunda-parte-texto');
const loadText = () => {
  setTimeout(() => {
    text.textContent = "Desenvolvedor";
  }, 0);
  setTimeout(() => {
    text.textContent = "Pai";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Rugbier";
  }, 8000);
}

loadText();
setInterval(loadText, 12000);