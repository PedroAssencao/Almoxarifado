const categorias = [
    {
        "idCategoria": 1,
        "Descricao": "Gestão",
    },
    {
        "idCategoria": 2,
        "Descricao": "Cliente",
    },
    {
        "idCategoria": 3,
        "Descricao": "RP",
    },
]
const motivos=[
    {
        "idMotivo": 1,
        "Descricao": "Planejamento",
        "idCategoria": 1
    },
    {
        "idMotivo": 2,
        "Descricao": "Financeiro",
        "idCategoria": 1
    },
    {
        "idMotivo": 3,
        "Descricao": "Quebra de Máquina",
        "idCategoria": 2
    }
]


const produtos=[
    {
        "idProduto": 10,
        "Descricao": "Papel A4",
        "Estoque": 10,
        "EstoqueMinimo": 5,
        Unidade: "Un",
        Preco: 10.00,
    },
    {
        "idProduto": 20,
        "Descricao": "Mel doce",
        "Estoque": 5,
        "EstoqueMinimo": 5,
        Unidade: "Un",
        Preco: 10.00,
    },
]

const departamentos = [
  {
      idDep: 10,
      Descricao: "Sec. Educacao",
  },
  {
      idDep: 30,
      Descricao: "Sec. Trabalho",
  },
  {
      idDep: 40,
      Descricao: "NAT",
  },
  
]

const funcionario = [
    {
        idFunc: 1,
        Responsavel: "José",
        idCargo: "Comissionado"
    },
    {
        idFunc: 2,
        Responsavel: "Luiz",
        idCargo: "Gestor"
    },
    {
        idFunc: 3,
        Responsavel: "Maria",
        idCargo: "Gerente"
    }
]
