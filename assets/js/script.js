function adicionarMedicamento(event) {
    event.preventDefault()

    const foto = document.getElementById('url-medicamento').value
    const nome = document.getElementById('nome-medicamento').value
    const laboratorio = document.getElementById('laboratorio').value
    const preco = document.getElementById('preco').value
    const indicacao = document.getElementById('msg').value

    if (foto && nome && laboratorio && preco && indicacao) {
        const cadastro = {
            foto: foto,
            id: Date.now(),
            nome: nome,
            laboratorio: laboratorio,
            preco: preco,
            indicacao: indicacao,
        }

        const listaNoLocalStorage = JSON.parse(localStorage.getItem("medicamento")) || [];
        listaNoLocalStorage.push(cadastro);
        localStorage.setItem("medicamento", JSON.stringify(listaNoLocalStorage))
        document.getElementById('form-farmacia').reset()
    }
}

document
    .getElementById('form-farmacia')
    .addEventListener('submit', adicionarMedicamento)