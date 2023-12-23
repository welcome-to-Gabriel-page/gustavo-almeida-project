// função para verificar se os campos de usuário e senha estão preenchidos corretamente.

function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var messageElement = document.getElementById('message');

    if (username === '' || password === '') {
      messageElement.textContent = 'Por favor, preencha todos os campos.';
      messageElement.style.color = 'red';
    } else {
      messageElement.textContent = `Parabéns, ${username}! Login bem-sucedido.`;
      messageElement.style.color = 'green';
    }
}