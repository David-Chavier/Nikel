const nome = "David Lutosa";
let nome2 = "";
let pessoaDefault = {
    nome: "David Lutosa",
    idade: "21",
    trabalho: "Programador"
}

let nomes = ["David Lutosa", "Maria Silva", "Pedro Silva"];

let possoasListaVazia = [];

let pessoas = [
        {
            nome: "David Lutosa",
            idade: "21",
            trabalho: "Programado"
        },
        {
            nome: "Maria Silva",
            idade: "25",
            trabalho: "UX/UI Designer"
        }    
];


function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(nomeNovo) {
    nome2 = nomeNovo;
    console.log("Valor alterado recenbendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

function adcionarPessoa(pesssoa) {
    pessoas.push(pessoas);
}

function imprimirPessoas() {
    console.log("-----IMPRIMIR PESSOAS-----");
    pessoas.forEach((item) => {
       console.log("Nome:");
       console.log(item.nome);

        console.log("Idade:");
       console.log(item.idade);

       console.log("Trabalho:");
       console.log(item.trabalho);
    })}

imprimirPessoas();

adcionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();

