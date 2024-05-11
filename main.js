const botao = document.getElementById('botao');
const texto = document.getElementById('texto');

botao.addEventListener('click', () => {
    texto.textContent = 'O texto foi alterado!';
});
