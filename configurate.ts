import { Config } from "./Config.js";

let nome:string = "william villani stiehler";

console.log(nome);

console.log("%c----------------------------------------","color: red; font-size: 20px;");

console.group("Configuração Errada");
let configurationError:Config = new Config();
console.log("Verificando configuração errada: ", configurationError);
configurationError.verifyExistingNodejs();
configurationError.verifyExistingVsCode();
configurationError.verifyConfigurationInit();
console.groupEnd();

console.log("%c----------------------------------------","color: red; font-size: 20px;");

console.group("Configuração Metade");
let configurationMetade:Config = new Config();
configurationMetade.existingNodejs = true;
configurationMetade.existingVsCode = false;

console.log("Verificando configuração metade: ", configurationMetade);
configurationMetade.verifyExistingNodejs();
configurationMetade.verifyExistingVsCode();
console.groupEnd();

console.log("%c----------------------------------------","color: red; font-size: 20px;");

console.group("Configuração Completa");
let configurationComplete:Config = new Config();
configurationComplete.existingNodejs = true;
configurationComplete.existingVsCode = true;
configurationComplete.comandTypescript = "npm i -g typescript";
configurationComplete.comandInitTypescript = "tsc -init";
configurationComplete.comandMonitoringTs = "tsc -w";
configurationComplete.tsConfig = {
    "compilerOptions": {
        "target": "es2015",
        "module": "es2015",
        "moduleResolution": "node",

    }
}

console.log("Verificando configuração metade: ", configurationComplete);
console.groupEnd();
console.log("%c----------------------------------------","color: red; font-size: 20px;");

$("body").append(
    $("<p>", {text:"Criando esse paragrafo com jquery"})
)