/*
ESCREVENDO NA PÁGINA

var nome = prompt("Qual seu nome?");
var sobrenome = prompt("Qual seu sobrenome?");
console.log("Olá " + nome + " " + sobrenome);

document.write("<h1>Bem vindo "+ nome +" ao projeto!</h1>")
document.write("<img src='https://sujeitoprogramador.com/steve.png' alt='Foto do Steve'/>")
*/


var area = document.getElementById('area')

function entrar() {
    var nome = prompt("Digite seu nome:");
    if (nome == '' || nome == null) {
        alert("Ops algo deu errado!")
        area.innerHTML = "Clique no botão para acessar...";
    } else {
        area.innerHTML = "Bem vindo " + nome + " ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }
}

function sair(){
    alert("Até mais!");
    area.innerHTML = "Você saiu!";

}

function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2)/2;

    if (media >= 7){
        console.log("Aluno Aprovado com a media " + media);
    } else {
        console.log("Aluno reprovado com a media " + media);
    }
}


function aluno(nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso " + curso;
    console.log(mensagem);
}