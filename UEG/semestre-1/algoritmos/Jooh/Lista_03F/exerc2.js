function calcularSalario(salario, quantidadeTVLCD, quantidadeTVLED, quantidadeTVPlasma){
    const resultado = salario + tvLCD * 50 + tvLED * 60 + tvPlasma * 55;
    return resultado; 
}

const prompt = require("prompt-sync")();

const salario = Number(prompt("Digite o valor do salário: R$ "));
const tvLCD = Number(prompt("Digite quantas TV LCD foram vendidas nesse mês: "));
const tvLED = Number(prompt("Digite quantas TV LED foram vendidas nesse mês: "));
const tvPlasma = Number(prompt("Digite quantas TV Plasma foram vendidas nesse mês: "));

const salariofinal = calcularSalario(salario, tvLCD, tvLED, tvPlasma);

console.log(`O valor do salario fixo é de: R$ ${salariofinal.toFixed(2)}`);