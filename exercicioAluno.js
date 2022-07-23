import { Aluno } from "./Aluno.js";
let alunos = new Array();
let chaveLocalStorage = "alunos";
if (localStorage.getItem(chaveLocalStorage) != null) {
    alunos = JSON.parse(localStorage.getItem(chaveLocalStorage));
    desenharTabela();
}
$("#add").on("click", function () {
    let nome = String(prompt("Digite o nome do aluno: "));
    let idade = Number(prompt("Digite a idade do aluno: "));
    let sexo = String(prompt("Digite o sexo do aluno: "));
    let disciplinaAtual = String(prompt("Digite a disciplina atual do aluno: "));
    let camadaPreferida = String(prompt("Digite a camada preferida do aluno: "));
    let novo = new Aluno(nome, idade, sexo, disciplinaAtual, camadaPreferida);
    console.log("Novo aluno: ", novo);
    alunos.push(novo);
    localStorage.setItem(chaveLocalStorage, JSON.stringify(alunos));
    console.log("Lista de alunos: ", alunos);
    desenharTabela();
});
function desenharTabela() {
    $("tbody").empty();
    alunos.forEach(function (aluno) {
        escreverLinha(aluno);
    });
}
function escreverLinha(aluno) {
    // deepcode ignore DOMXSS: <please specify a reason of ignoring this>
    $("tbody").append(
    // file deepcode ignore DOMXSS: <please specify a reason of ignoring this>
    $("<tr>").append($("<td>", { text: aluno.nome }), $("<td>", { text: aluno.idade }), $("<td>", { text: aluno.sexo }), $("<td>", { text: aluno.disciplinaAtual }), $("<td>", { text: aluno.camadaPreferida })));
}
$("#limpar").on("click", function () {
    localStorage.clear();
    alunos = new Array();
    desenharTabela();
});
$("#apagar").on("click", function () {
    localStorage.setItem(chaveLocalStorage, JSON.stringify(alunos));
    desenharTabela();
});
