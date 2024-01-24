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
  .addEventListener("change", (event) => {
    document.getElementById("InputIDMotivo").innerHTML = ``;
    motivo();
  });

  document
  .getElementById("InputIDProdutoQuantidade")
  .addEventListener("change", (event) => {
    checkCategoria()
  });


//chama a categoria quando a pagina carregar
categoria();

//event listner para ativar a função de busca de produto
document
  .getElementById("InputCodProduto")
  .addEventListener("change", (event) => {
    produto();
  });

document
  .getElementById("InputIDDepartamento")
  .addEventListener("change", (event) => {
    Departamentos();
  });

document.getElementById("InputIDFunID").addEventListener("change", (event) => {
  funcionarios();
});

//checka se todos os itens obrigatorios estão preenchidos
function check() {
  $(document).ready(function () {
    // Seletor para o modal
    var meuModal = $("#meuModal");

    // Abre o modal
    meuModal.modal("show");
  });

  var InputsControl = document.querySelectorAll(".required");
  InputsControl.forEach((element) => {
    element.style.backgroundColor = "red";
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
      // Seletor para o modal
      var meuModal = $("#meuModal2");

      // Abre o modal
      meuModal.modal("show");
    });
    document.getElementById("InputIDFunCargo").value = "";
    document.getElementById("InputIDFunID").value = "";
    document.getElementById("InputIDDepDescricao").value = "";
    document.getElementById("InputIDFunNome").value = "";
    return;
  } else {
    document.getElementById("InputIDFunCargo").value = Departamento[0].idCargo;
    document.getElementById("InputIDFunID").value = Departamento[0].idFunc;
    document.getElementById("InputIDDepDescricao").value =
      Departamento[0].Descricao;
    document.getElementById("InputIDFunNome").value =
      Departamento[0].Responsavel;
  }
}

function funcionarios() {
  //filtra o funcionario por id
  var funcionario = departamentos.filter(
    (x) => document.getElementById("InputIDFunID").value == x.idFunc
  );

  //se o id não for encontrado vai dar play no modal e vai apagar todos os campos se não vai inserir os valores no campos
  if (funcionario.length == 0) {
    $(document).ready(function () {
      // Seletor para o modal
      var meuModal = $("#meuModal2");

      // Abre o modal
      meuModal.modal("show");
    });
    document.getElementById("InputIDFunID").value = "";
    document.getElementById("InputIDFunNome").value = "";
    return;
  } else {
    document.getElementById("InputIDFunNome").value =
      funcionario[0].Responsavel;
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
    if (document.getElementById("InputIDProdutoQuantidade") != 0 || document.getElementById("InputIDProdutoQuantidade") == 0) {
        document.getElementById('buttonGravar').removeAttribute('disabled')
    }else{
        document.getElementById('buttonGravar').setAttribute('disabled', 'disabled')
    }
  
}

// codigo para busca de produtos
function produto() {
  // filtra os produtos por id
  var produto = produtos.filter(
    (x) => document.getElementById("InputCodProduto").value == x.idProduto
  );
  if (produto.length == 0) {
    document.getElementById('InputCodProduto').value = ""
    document.getElementById('InputIDDescricaoProduto').value = ""
    document.getElementById('InputIDEstoqueProduto').value = ""
    $(document).ready(function () {
        // Seletor para o modal
        var meuModal = $("#meuModal2");
  
        // Abre o modal
        meuModal.modal("show");
      });
  }
  //setar os valores nos inputs
  document
    .getElementById("InputIDEstoqueProduto")
    .setAttribute("value", produto[0].Estoque);
  document
    .getElementById("InputIDDescricaoProduto")
    .setAttribute("value", produto[0].Descricao);

  //checkar se o valor do estoque e maior que zero para ativar o butao
  if (produto[0].Estoque > 0) {
    document
      .getElementById("InputIDProdutoQuantidade")
      .removeAttribute("disabled");
  }

  //checkar o estoque minimo para mudar a cor do retangulo
  if (produto[0].EstoqueMinimo >= 10) {
    document.getElementById("customTooltip").style.backgroundColor = "Green";
  } else if (produto[0].EstoqueMinimo < 10) {
    document.getElementById("customTooltip").style.backgroundColor = "Yellow";
  } else {
    document.getElementById("customTooltip").style.backgroundColor = "red";
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
const inputs = document.querySelectorAll(".form-control");

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

function ProdutosTables() {
    produtos.forEach(element => {
        document.getElementById('Tbody').innerHTML +=`
        
        <tr>
        <th id="TableId" scope="row">${element.idProduto}</th>
        <td id="TableDesc">${element.Descricao}</td>
        <td id="TableQuantidade">${element.Estoque}</td>
        <td id="TablePreco">${element.Preco}</td>
        <td id="TableTotal">${parseFloat(element.Estoque) * parseFloat(element.Preco)}</td>
        <td id="TableActions"><button class='btn btn-danger'>Remover</button></td>
    </tr>
        
        `
    });
}

ProdutosTables()