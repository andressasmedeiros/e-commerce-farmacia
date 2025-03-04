function deletardados(idRecebido) {
  const medicamentoAtualMemoria = JSON.parse(
    localStorage.getItem("medicamento")
  );
  const medFiltrados = medicamentoAtualMemoria.filter(
    (item) => item.id !== idRecebido
  );
  localStorage.setItem("medicamento", JSON.stringify(medFiltrados));

  document.getElementById("lista-medicamentos").innerText = "";
  carregarDados();
}

function carregarDados() {
  const medicamentoMemoria = JSON.parse(localStorage.getItem("medicamento"));
  const lista = document.getElementById("lista-medicamentos");

  medicamentoMemoria.forEach((medicamento) => {
    const div = document.createElement("div");
    div.classList.add("item-medicamento");

    const img = document.createElement("img");
    img.setAttribute("width", "150px");
    img.style.objectFit = "cover";
    img.setAttribute("src", medicamento.foto);
    div.appendChild(img);

    const h2 = document.createElement("h2");
    h2.innerText = medicamento.nome;
    div.appendChild(h2);

    const button = document.createElement("button");
    button.innerText = "Deletar";
    button.onclick = () => deletardados(medicamento.id);
    div.appendChild(button);

    lista.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", carregarDados);
