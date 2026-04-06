/* Numa certa loja de eletrodomésticos, o comerciário
encarregado da seção de televisores recebe, mensalmente,
um salário fixo mais comissão. Essa comissão é calculada em
relação ao número de televisores vendidos por mês de cada
um dos tipos de TV, obedecendo-se à tabela abaixo:
TV LCD R$ 50,00 de comissão por unidade vendida
TV LED R$ 60,00 de comissão por unidade vendida
TV Plasma R$ 55,00 de comissão por unidade vendida

Sabe-se que o salário total é o fixo mais as comissões.
Escrever um programa que calcule e escreva o salário total do
empregado. */

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
