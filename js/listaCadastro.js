
renderAnimaisLista()
renderPessoasLista()
document.querySelector("#cadastrarAnimal").addEventListener("click", e => {
    const raca = document.querySelector("#raca").value
    const sexo = document.querySelector("#sexo").value
    const idade = document.querySelector("#idade").value
    const peso = document.querySelector("#peso").value
    const chip = document.querySelector("#chip").value
    const status = document.querySelector("#status").value

    if (!raca && !sexo && !idade && !peso && !chip) {
        alert("Preencha os campos para realizar o cadastro!")
        return
    }

    var animal = { raca, sexo, idade, peso, chip, status }


    var listaAnimais = localStorage.listaAnimais ? JSON.parse(localStorage.listaAnimais) : []
    listaAnimais.push(animal)
    localStorage.listaAnimais = JSON.stringify(listaAnimais)

    alert("Animal cadastrado com sucesso!")

    adicionarAnimalLista(listaAnimais)

    document.querySelector("#raca").value = ""
    document.querySelector("#sexo").value = ""
    document.querySelector("#idade").value = ""
    document.querySelector("#peso").value = ""
    document.querySelector("#chip").value = ""
    document.querySelector("#status").value = ""

    renderAnimaisLista()
})

function renderAnimaisLista() {
    const animal = localStorage.listaAnimais ? JSON.parse(localStorage.listaAnimais) : []
    console.log(animal)
    adicionarAnimalLista(animal)
}

function adicionarAnimalLista(animais) {
    let body = '';
    animais.forEach((animal) => {
        body += `
        <tr>
            <td>${animal.raca}</td>
            <td>${animal.sexo}</td>
            <td>${animal.idade}</td>
            <td>${animal.peso}</td>
            <td>${animal.chip}</td>
            <td>${animal.status}</td>
            <td>
                <button class="delete">x</button>
            </td>
        </tr>
    `
    })
    document.querySelector("#listaAnimais").innerHTML = body
}

//////// TABELA2 ////////

function renderPessoasLista() {
    const pessoa = localStorage.listaPessoas ? JSON.parse(localStorage.listaPessoas) : []
    console.log(pessoa)
    adicionarPessoaLista(pessoa)
    // pessoa.forEach(e => adicionarPessoaLista(e))
}

function adicionarPessoaLista(pessoas) {
    let body = '';
    pessoas.forEach((pessoa) => {
        body += `
        <tr>
            <td>${pessoa.nome}</td>
            <td>${pessoa.email}</td>
            <td>${pessoa.telefone}</td>
            <td>${pessoa.cpf}</td>
            <td>${pessoa.endereco}</td>
            <td>${pessoa.senha}</td>
            <td>
                <button class="delete">x</button>
            </td>
        </tr>
    `
    })
    document.querySelector("#listaPessoas").innerHTML = body
}

adicionarAnimalLista()
adicionarPessoaLista()




