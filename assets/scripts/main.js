function categoria() {
    categorias.forEach((element) => {
        document.getElementById('InputIDCategoriaMotivo').innerHTML += `
            <option value="${element.idCategoria}">${element.Descricao}</option>
            `
    });
    motivo()
}

document.getElementById('InputIDCategoriaMotivo').addEventListener("change", (event) => {
    document.getElementById('InputIDMotivo').innerHTML = ``
    motivo()

});

categoria()

document.getElementById('InputCodProduto').addEventListener("change", (event) => {
    // document.getElementById('InputIDMotivo').innerHTML = ``
    produto()

});

function motivo() {
    var motivo = motivos.filter((x) => document.getElementById('InputIDCategoriaMotivo').value == x.idCategoria);
    if (motivo.length == 0) {
        document.getElementById('InputIDMotivo').setAttribute('disabled', 'disabled')
    } else {
        motivo.forEach((element, index) => {
            document.getElementById('InputIDMotivo').removeAttribute('disabled')
            document.getElementById('InputIDMotivo').innerHTML += `
            <option value="${element.idMotivo}">${element.Descricao}</option>
            `
        });
    }
}

function produto(){
    var produto = produtos.filter((x) => document.getElementById('InputCodProduto').value == x.idProduto);
    document.getElementById('InputIDEstoqueProduto').setAttribute('value', produto[0].Estoque)
    document.getElementById('InputIDDescricaoProduto').setAttribute('value', produto[0].Descricao)
    if (produto[0].Estoque > 0) {
        document.getElementById('InputIDProdutoQuantidade').removeAttribute('disabled')
    }

    if (produto[0].EstoqueMinimo > customTooltip) {
        
    }
}


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



// Obtém todos os elementos com a classe .form-control
const inputs = document.querySelectorAll('.form-control');

// Adiciona um ouvinte de evento para cada elemento
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        // Quando o input é focado, muda o background para verde
        input.style.backgroundColor = 'lightgreen';
    });

    input.addEventListener('blur', () => {
        // Quando o input perde o foco, restaura o background ao normal
        input.style.backgroundColor = '';
    });
});

