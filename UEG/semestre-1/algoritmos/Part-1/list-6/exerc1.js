/* O coração humano bate em média uma vez por segundo.
Desenvolva um algoritmo para calcular e escrever quantas
vezes o coração de uma pessoa baterá se viver X anos. Dado
de entrada: idade da pessoa (inteiro em anos).
Considerações: 1 ano = 365,25 dias, 1 dia = 24 horas, 1
hora = 60 minutos e 1 minuto = 60 segundos. */

function calcularBatimentos(idade) {
    const diasPorAno = 365.25;
    const horasPorDia = 24;
    const minutosPorHora = 60;
    const segundosPorMinuto = 60;
    const resultado = idade * diasPorAno * horasPorDia * minutosPorHora * segundosPorMinuto;
    return resultado;
}
 
const prompt = require("prompt-sync")();

const idade = parseInt(prompt("Digite a idade da pessoa em anos:"));

const batimentos = calcularBatimentos(idade);

console.log(`O coração de uma pessoa de ${idade} anos baterá aproximadamente ${batimentos} segundos ao longo de sua vida.`);