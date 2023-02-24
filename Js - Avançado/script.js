//setInterval
//Executa a função de tantos em tantos segundos
/*function acao(){
    document.write("Executando...<br/>")
}
setInterval(acao, 1000)
setTimeout
Executa a função somente uma vez 
setTimeout(acao, 3000)*/




//Diferença entre var, let e const
/*
var pode ser criada, acessada e alterada em qualquer lugar.
let pode ser criada, acessada e alterada somente no escopo onde foi criada como um laço de repetição ou condicional
const pode ser criada e acessada mas não alterar o valor dela, segue mesmo critério do let
*/



//Objetos
/*let pessoa = {
    nome: "Charllys",
    idade: 26,
    altura: 1.85, 
    cargo: "Técniico"
};

let carro = {
    nome: "Golf",
    cor: "Branco"
}

let usuarios = [
    {nome: "Charllys", cargo: "Técnico"}, {nome: "Carlos", cargo: "Suporte"}
]

console.log(usuarios);*/

//Template Strings
/*
let nome = "Charllys";
let sobrenome = "Brauwol";

let mensagem = `Meu nome é ${nome} ${sobrenome}`;

console.log(mensagem);*/

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefas(){
    listElement.innerHTML = '';

    tarefas.map((todo)=> {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posisao = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefa(${posisao})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

renderTarefas();

function adicionarTarefas(){
    if(inputElement.value === ''){
        alert("Digite alguma tarefa");
        return false;
    } else {
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';

        renderTarefas();
        salvarDados();
    }
}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posisao){
    tarefas.splice(posisao, 1);
    renderTarefas();
    salvarDados();
}


function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}