function cadastrarUsuario(event) {

  const nomeUsuario = document.getElementById("nome-cadastro").value;
  const senhaUsuario = document.getElementById("senha").value;
  const emailUsuario = document.getElementById("email").value;

  const usuario = {
    nome: nomeUsuario,
    senha: senhaUsuario,
    email: emailUsuario,
  };

  let usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios"));
  if (usuariosCadastrados === null) usuariosCadastrados = [];

  usuariosCadastrados.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

  alert("Usuário cadastrado com sucesso")
}

document
  .getElementById("register-form")
  .addEventListener("submit", cadastrarUsuario);