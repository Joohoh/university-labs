/* Um fabricante de latas deseja desenvolver um programa para
calcular o custo de uma lata cilíndrica de alumínio. O custo do
alumínio é R$ 155,00 por m2

. Dados de Entrada: raio e altura
da lata (em metros). Área da lata = área da base(π * raio
2 * 2)
+ área do lado(2 * π * raio * altura). Considere o preço do
alumínio por m2 como sendo uma constante.*/

const prompt = require("prompt-sync")();

const raio = Number(prompt("Digite o valor do raio da lata: "));
const altura = Number(prompt("Digite o valor da altura da lata: "));

const areaDaBase = Math.PI * raio ** 2 * 2;
const areaDoLado = 2 * Math.PI * raio * altura;

const areaTotal = areaDaBase + areaDoLado;

const custo = areaTotal * 155.00;

console.log(`O custo de uma lata cilíndrica de alumínio com essas especificações é de: R$ ${custo.toFixed(2)}`);
