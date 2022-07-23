import { Pessoa } from "./superPessoa.js";
export class Aluno extends Pessoa {
    constructor(nome, idade, sexo, disciplinaAtual, camadaPreferida) {
        super(nome, idade, sexo);
        this.disciplinaAtual = disciplinaAtual;
        this.camadaPreferida = camadaPreferida;
    }
}
