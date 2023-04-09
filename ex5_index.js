function fazerLogin() {
    // Pega o nome de usuário e senha inseridos nos campos de entrada
    var nomeDeUsuario = document.getElementById("nomeDeUsuario").value;
    var senha = document.getElementById("senha").value;
  
    // Verifica se o nome de usuário e senha correspondem aos dados de um usuário cadastrado
    if (nomeDeUsuario === "admin" && senha === "1234") {
      // Login realizado com sucesso
      alert("Login realizado com sucesso!");
    } else {
      // Falha de autenticação
      alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
  }
  