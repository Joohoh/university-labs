/* Um fabricante de latas deseja desenvolver um programa para
calcular o custo de uma lata cilíndrica de alumínio. O custo do
alumínio é R$ 155,00 por m2

. Dados de Entrada: raio e altura
da lata (em metros). Área da lata = área da base(π * raio
2 * 2)
+ área do lado(2 * π * raio * altura). Considere o preço do
alumínio por m2 como sendo uma constante.*/

function calcularValorLatas(raio, altura){
    const resultado = ((Math.PI * raio ** 2 * 2) + (2 * Math.PI * raio * altura)) * 155.00;
    return resultado; 
}

const prompt = require("prompt-sync")();
const raio = Number(prompt("Digite o valor do raio da lata: "));
const altura = Number(prompt("Digite o valor da altura da lata: "));
const valorLata = calcularValorLatas(raio, altura);

console.log(`O valor da lata é de: R$ ${valorLata.toFixed(2)}`);
