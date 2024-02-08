//codigo para puxar todas as categorias e chamar a função motivo

function categoria() {
  categorias.forEach((element) => {
    document.getElementById("InputIDCategoriaMotivo").innerHTML += `
            <option value="${element.idCategoria}">${element.Descricao}</option>
            `;
  });
  motivo();
}

//chama a função de motivo quando a categoria muda
document
  .getElementById("InputIDCategoriaMotivo")
  .addEventListener("change", function(e) {
    document.getElementById("InputIDMotivo").innerHTML = ``;
    motivo();
  });

  document
  .getElementById("InputIDProdutoQuantidade")
  .addEventListener("keyup",function(e){
    const teclasAceitas = [48,49,50,51,52,53,54,55,56,57,99,98,97,96,99,100,101,102,103,104,105,8]
    if (!teclasAceitas.includes(e.keyCode)) {
      document.querySelector('#InputIDProdutoQuantidade').value = ''
      checkCategoria()
  }else{
    checkCategoria()
  }
  } 
  );


//chama a categoria quando a pagina carregar
categoria();

//event listner para ativar a função de busca de produto
document
  .getElementById("InputCodProduto")
  .addEventListener("keyup", function(e) {
    const teclasAceitas = [48,49,50,51,52,53,54,55,56,57,99,98,97,96,99,100,101,102,103,104,105,8]
    if (!teclasAceitas.includes(e.keyCode)) {
      console.log(e.keyCode)
      document.querySelector('#InputCodProduto').value = ''
  }else{
    produto();
  }
  });

document
  .getElementById("InputIDDepartamento")
  .addEventListener("keyup", function(e) {
    const teclasAceitas = [48,49,50,51,52,53,54,55,56,57,99,98,97,96,99,100,101,102,103,104,105,8]  
    if (!teclasAceitas.includes(e.keyCode)) {
      document.querySelector('#InputIDDepartamento').value = ''
  }else{
    Departamentos()
    document.getElementById("InputIDDepDescricao").style.backgroundColor = "";
    document.getElementById("InputIDDepData").style.backgroundColor = "";
  }
  });

document.getElementById("InputIDFunID").addEventListener("keyup", function(e)  {
  const teclasAceitas = [48,49,50,51,52,53,54,55,56,57,99,98,97,96,99,100,101,102,103,104,105,8]
  if (!teclasAceitas.includes(e.keyCode)) {
    document.querySelector('#InputIDFunID').value = ''
}else{
  funcionarios();
  document.getElementById("InputIDFunCargo").style.backgroundColor = "";

}
});

//checka se todos os itens obrigatorios estão preenchidos
function check() {
  var InputsControl = document.querySelectorAll(".required");
  InputsControl.forEach((element) => {

    console.log(typeof(element.value) == 'undefined')

    if (element.value == "") {
      element.style.backgroundColor = "red";  
      $(document).ready(function () {
        // // Seletor para o modal
        // var meuModal = $("#meuModal");
    
        // // Abre o modal
        // meuModal.modal("show");
      });    
    }else if(typeof(element.value) == 'undefined'){
     document.querySelectorAll('#flexRadioDefault1').forEach(element => {
      if (element.checked == true) {
        element.style.backgroundColor = "";  
        return
      }else{
        document.getElementById('radioBackgroud').style.backgroundColor = "red";  
      }
     });
    } 
  });

  document.querySelectorAll(".form-check-input").forEach((element) => {
    if (element.checked == true) {
      checkRadios();
    }
  });
}

//codigo para busca de departamentos
function Departamentos() {
  //filtra o departamento por id
  var Departamento = departamentos.filter(
    (x) => document.getElementById("InputIDDepartamento").value == x.idDep
  );

  //se o id não for encontrado vai dar play no modal e vai apagar todos os campos se não vai inserir os valores no campos
  if (Departamento.length == 0) {
    $(document).ready(function () {
      // // Seletor para o modal
      // var meuModal = $("#meuModal2");

      // // Abre o modal
      // meuModal.modal("show");
    });

    document.getElementById("InputIDDepDescricao").value = "";
    return;
  } else {
    document.getElementById("InputIDDepDescricao").value =
      Departamento[0].Descricao;
   
  }
}

function funcionarios() {
  //filtra o funcionario por id
  var funcionarios = funcionario.filter(
    (x) => document.getElementById("InputIDFunID").value == x.idFunc
  );

  //se o id não for encontrado vai dar play no modal e vai apagar todos os campos se não vai inserir os valores no campos
  if (funcionarios.length == 0) {
    $(document).ready(function () {
      // // Seletor para o modal
      // var meuModal = $("#meuModal2");

      // // Abre o modal
      // meuModal.modal("show");
    });

    document.getElementById("InputIDFunNome").value = "";
    document.getElementById('InputIDFunCargo').value = "";
    return;
  } else {
    document.getElementById("InputIDFunNome").value =
    funcionarios[0].Responsavel;
      document.getElementById('InputIDFunCargo').value = funcionarios[0].idCargo;
  }
}

function checkRadios() {
  document.getElementById("radioBackgroud").style.backgroundColor = "white";
}

//codigo para o filtro de motivos
function motivo() {
  //busca um motivo pelo id da categoria
  var motivo = motivos.filter(
    (x) =>
      document.getElementById("InputIDCategoriaMotivo").value == x.idCategoria
  );

  //checka se a categoria tem um motivo se não desabilita o input se não ele adiciona as opções nos selects
  if (motivo.length == 0) {
    document
      .getElementById("InputIDMotivo")
      .setAttribute("disabled", "disabled");
  } else {
    motivo.forEach((element, index) => {
      document.getElementById("InputIDMotivo").removeAttribute("disabled");
      document.getElementById("InputIDMotivo").innerHTML += `
            <option value="${element.idMotivo}">${element.Descricao}</option>
            `;
    });
  }
}

function checkCategoria() {
  console.log(document.getElementById("InputIDProdutoQuantidade").value)
    if (document.getElementById("InputIDProdutoQuantidade").value != 0) {
        document.getElementById('adicionarBtn').removeAttribute('disabled')
    }else{
        document.getElementById('adicionarBtn').setAttribute('disabled', 'disabled')
    }
  
}

// codigo para busca de produtos
function produto() {
  // filtra os produtos por id
  var produto = produtos.filter(
    (x) => document.getElementById("InputCodProduto").value == x.idProduto
  );
  if (produto[0] == undefined) {
    document.getElementById('InputIDDescricaoProduto').value = ""
    document.getElementById('InputIDEstoqueProduto').value = ""
    document.getElementById('InputIDProdutoQuantidade').value = ""
    document.getElementById('adicionarBtn').setAttribute('disabled', 'disabled')
    return
  }else{
    document
    .getElementById("InputIDEstoqueProduto")
    .value = produto[0].Estoque;
  document
    .getElementById("InputIDDescricaoProduto")
    .value = produto[0].Descricao;

    document
    .getElementById("InputCodProduto")
    .setAttribute("data-preco", produto[0].Preco);
  }

  //checkar o estoque minimo para mudar a cor do retangulo
  if (produto[0].Estoque >= Math.round(produto[0].EstoqueMinimo/10) +  produto[0].EstoqueMinimo) {
    document.getElementById("customTooltip").style.backgroundColor = "Green";
  } else if (produto[0].Estoque <= produto[0].EstoqueMinimo - Math.round(produto[0].EstoqueMinimo/10)) {
    document.getElementById("customTooltip").style.backgroundColor = "Red";
  } else {
    document.getElementById("customTooltip").style.backgroundColor = "Yellow";
  }
  //checkar se o valor do estoque e maior que zero para ativar o butao
  console.log(produto[0].Estoque)
  if (produto[0].Estoque > 0) {
    document
      .getElementById("InputIDProdutoQuantidade")
      .removeAttribute("disabled");
  }
  else{
    document
    .getElementById("InputIDProdutoQuantidade")
     setAttribute('disabled', true)
  }

 
}


//checka o valo maximo do estoque para não ultrapassar no input
function validarInput(input) {
    var inputMax = parseFloat(document.getElementById("InputIDEstoqueProduto").value);
    var inputValue = parseFloat(input.value);

    if (inputValue == 0) {
        inputValue = 1
    }

    if (inputValue > inputMax) {
      input.value = inputMax;
    }
  }
  

//Codigo para Abrir o ToolTip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Obtém todos os elementos com a classe .form-control
const inputs = document.querySelectorAll('[fica-verde="true"]')

// Adiciona um ouvinte de evento para cada elemento
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    // Quando o input é focado, muda o background para verde
    input.style.backgroundColor = "lightgreen";
  });

  input.addEventListener("blur", () => {
    // Quando o input perde o foco, restaura o background ao normal
    input.style.backgroundColor = "";
  });
});

var somaTotal = 0;

function AdicionarTable(){
 
  document.getElementById('buttonGravar').removeAttribute('disabled')
  document.getElementById('Tbody').innerHTML +=`
        
         <tr>
           <th id="TableId" class="text-center"  scope="row">${document.getElementById('InputCodProduto').value}</th>
        <td id="TableDesc">${document.getElementById('InputIDDescricaoProduto').value}</td>
          <td id="TableQuantidade" class="text-center" >${document.getElementById('InputIDProdutoQuantidade').value}</td>
          <td id="TableUn" class="text-center" >Un</td>
       <td id="TablePreco" class="text-center" >R$${(parseFloat(document.getElementById('InputCodProduto').dataset.preco)).toFixed(2)}</td>
       <td id="TableTotal" class='TotalPreco text-center'>R$${(parseFloat(document.getElementById('InputCodProduto').dataset.preco) * parseFloat(document.getElementById('InputIDProdutoQuantidade').value)).toFixed(2)}</td>
           <td id="TableActions"  class="text-center"><button class='btn btn-danger' onclick='removeRow(this)'>Remover</button></td>
     </tr>
          
        `

  
// Inicialize a variável de soma fora do loop
somaTotal = 0
document.querySelectorAll('.TotalPreco').forEach(element => {
    // Obtenha o valor do elemento e converta para float
    
    var valorElemento = parseFloat(element.textContent.replace(/[^0-9]/g,''))/100
    // Some o valor ao acumulador
    somaTotal += valorElemento;

    // Atualize o conteúdo do elemento com id 'ValorTotal'
    document.getElementById('ValorTotal').innerHTML = `Total: R$${somaTotal.toFixed(2)}`;
});

}

function removeRow(button) {
  // Obtém a linha da tabela que contém o botão clicado
  var row = button.parentNode.parentNode;
  var valorTotal = row.querySelector('#TableTotal').innerText.replace(/[^0-9]/g,'')/100;
  somaTotal = somaTotal - valorTotal
  document.getElementById('ValorTotal').innerHTML = `Total: R$${somaTotal.toFixed(2)}`;
  row.remove();
}


// function ProdutosTables() {
//     produtos.forEach(element => {
//         document.getElementById('Tbody').innerHTML +=`
        
//         <tr>
//         <th id="TableId" scope="row">${element.idProduto}</th>
//         <td id="TableDesc">${element.Descricao}</td>
//         <td id="TableQuantidade">${element.Estoque}</td>
//         <td id="TablePreco">${element.Preco}</td>
//         <td id="TableTotal">${parseFloat(element.Estoque) * parseFloat(element.Preco)}</td>
//         <td id="TableActions"><button class='btn btn-danger'>Remover</button></td>
//     </tr>
        
//         `
//     });
// }

// ProdutosTables()

