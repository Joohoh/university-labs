/* Escrever um programa que lê o público total de um jogo de
futebol e forneça a renda total do jogo, sabendo-se que havia
4 tipos de ingressos assim distribuídos: popular - 10% a
R$5,00, geral - 50% a R$10,00, arquibancada - 30% a
R$20,00 e cadeiras - 10% a R$40,00.*/

const prompt = require("prompt-sync")();

const publicoTotal = Number(prompt("Digite o total de pessoas: "));

// Calculo da porcentagem e separação de pessoas
const qtPopular = publicoTotal * 0.10;
const qtGeral = publicoTotal * 0.50;
const qtArquibancada = publicoTotal * 0.30;
const qtCadeiras = publicoTotal * 0.10;

// Calculo da quantidade de publicos já separada e multiplicação com os valores de cada ingresso
const ingressoPopular = qtPopular * 5.00;
const ingressoGeral = qtGeral * 10.00;
const ingressoArquibancada = qtArquibancada * 20.00;
const ingressoCadeiras = qtCadeiras * 40.00;

const rendaTotal = ingressoPopular + ingressoGeral + ingressoArquibancada + ingressoCadeiras;

console.log(`O rendimento total foi de: R$ ${rendaTotal.toFixed(2)}`)