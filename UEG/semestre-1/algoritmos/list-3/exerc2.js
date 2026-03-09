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

const prompt = require("prompt-sync")();

const salario = Number(prompt("Qual o salário fixo? "));
const vendaTVLCD = Number(prompt("Quantas unidades de TV LCD foram vendidas? "));
const vendaTVLED = Number(prompt("Quantas TV LED foram vendidas? "));
const vendaTVPlasma = Number(prompt("Quantas TV Plasma foram vendidas? "));

const salariofinal = ((vendaTVLCD * 50) + (vendaTVLED * 60) + (vendaTVPlasma * 55)) + salario;

console.log(`TV LCD ${vendaTVLCD}`);

console.log(`Seu salário final é R$ ${salariofinal}`);
