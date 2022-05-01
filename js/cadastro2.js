
document.querySelector("#cadastrarPessoa").addEventListener("click", e => {
    const nome = document.querySelector("#nome").value 
    const email = document.querySelector("#email").value 
    const telefone = document.querySelector("#telefone").value 
    const cpf = document.querySelector("#cpf").value 
    const endereco = document.querySelector("#endereco").value 
    const senha = document.querySelector("#senha").value 

    if(!nome && !email && !telefone && !cpf && !endereco && !senha){
        alert("Preencha os campos para realizar o cadastro!")
        return
    }
    
    var pessoa = {nome, email, telefone, cpf, endereco, senha}
    var listaPessoas = localStorage.listaPessoas ? JSON.parse(localStorage.listaPessoas) : []
    listaPessoas.push(pessoa)

    localStorage.listaPessoas = JSON.stringify(listaPessoas)
    alert("Pessoa cadastrada com sucesso!")

    document.querySelector("#nome").value = ""
    document.querySelector("#email").value = "" 
    document.querySelector("#telefone").value = ""
    document.querySelector("#cpf").value = ""
    document.querySelector("#endereco").value = "" 
    document.querySelector("#senha").value = ""
})