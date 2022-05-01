renderAnimaisLista()
adicionarAnimalLista()

document.querySelector("#busca").onkeyup = function(){
    var input, tratamento, tabela, tr, td, i, txtValue;
  input = document.getElementById("busca");
  tratamento = input.value.toUpperCase();
  tabela = document.getElementById("tabela");
  tr = tabela.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(tratamento) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

///// TABELA /////
function renderAnimaisLista(){
    const animal = localStorage.listaAnimais ? JSON.parse(localStorage.listaAnimais) : [] 
    adicionarAnimalLista(animal)
}

function adicionarAnimalLista (animais){
    var listaAnimais  = localStorage.getItem("listaAnimais") ? JSON.parse(localStorage.listaAnimais) : []
    var animais = localStorage.getItem("listaAnimais")


    
    let body = '';
    listaAnimais.forEach((animal)=>{
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
    document.querySelector("#listaAnimais").innerHTML=body
}

adicionarAnimalLista()

