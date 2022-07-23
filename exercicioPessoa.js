import { Pessoa } from "./superPessoa.js";
let pessoa1 = new Pessoa("william", 21, "masculino");
pessoa1.apresentar();
let pessoa2 = new Pessoa("Fillipi", 15, "masculino");
pessoa2.apresentar();
let pessoa3 = new Pessoa("Lais", 22, "feminino");
pessoa3.apresentar();
$("div").append($("<p>", { text: pessoa1.apresentarCompleto() }), $("<p>", { text: pessoa2.apresentarCompleto() }), $("<p>", { text: pessoa3.apresentarCompleto() }));
