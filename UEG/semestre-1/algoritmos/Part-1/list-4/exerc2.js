/* Escrever um programa que lê o público total de um jogo de
futebol e forneça a renda total do jogo, sabendo-se que havia
4 tipos de ingressos assim distribuídos: popular - 10% a
R$5,00, geral - 50% a R$10,00, arquibancada - 30% a
R$20,00 e cadeiras - 10% a R$40,00.*/


function calcularPublicoTotal(totalPublico){
    const resultado = ((totalPublico * 0.10) * 5.0) + ((totalPublico * 0.50) * 10) + ((totalPublico * 0.30) * 20) + ((totalPublico * 0.10) * 40);
    return resultado
}

const prompt = require("prompt-sync")();
const totalPublico = Number(prompt("Digite o valor do público total: "));
const rendaTotal = calcularPublicoTotal(totalPublico);

console.log(`O valor total de rendimentos é de: R$ ${rendaTotal}`);
