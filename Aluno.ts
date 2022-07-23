import { Pessoa } from "./superPessoa.js";

export class Aluno extends Pessoa {

    disciplinaAtual: string;
    camadaPreferida: string;

    constructor(nome: string, idade: number, sexo: string, disciplinaAtual: string,  camadaPreferida: string) {
        super(nome, idade, sexo);
        this.disciplinaAtual = disciplinaAtual;
        this.camadaPreferida = camadaPreferida;
    }
}