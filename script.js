document.addEventListener('DOMContentLoaded' , function() {
  const form = document.getElementById('formContato');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validando o formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    form.reset();
  });
});