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


        function motivo() {
            var motivo = motivos.filter((x) => document.getElementById('InputIDCategoriaMotivo').value == x.idCategoria);
            if (motivo.length == 0) {
                document.getElementById('InputIDMotivo').innerHTML += `
            <option value="0">Opções não encontradas</option>
            `
            }else{
                motivo.forEach((element, index) => {
                document.getElementById('InputIDMotivo').innerHTML += `
            <option value="${element.idMotivo}">${element.Descricao}</option>
            `
            });
            }
        }
