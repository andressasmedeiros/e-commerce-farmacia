function login(event) {
  event.preventDefault();

  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  const nomeUsuario = document.getElementById("username").value;
  const senhaUsuario = document.getElementById("password").value;

  const validarLogin = usuarios.find((usuario) => nomeUsuario == usuario.nome && senhaUsuario == usuario.senha);

  if (validarLogin == undefined) {
    alert("Usuário ou senha estão incorretos")
  } else {
    window.location.href = "cadastro-medicamentos.html"
  }

}

document.getElementById("login-form").addEventListener("submit", login);