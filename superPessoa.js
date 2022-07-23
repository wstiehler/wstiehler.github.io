export class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    apresentar() {
        return console.log(`%c Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`, "color: blue; font-size: 15px;");
    }
    apresentarCompleto() {
        return "Meu nome é " + this.nome + " tenho " + this.idade + " anos " + " e sou do sexo " + this.sexo;
    }
}
