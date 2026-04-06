/* Faça um algoritmo que leia o tempo de duração de um evento
em uma fábrica expressa em segundos e mostre-o expresso
em horas, minutos e segundos. */

function calcularTempo(duracaoEvento){
    const horas = Math.trunc(duracaoEvento/3600);
    let segundos = duracaoEvento % 3600;
    const minutos = Math.trunc(segundos / 60);
    segundos = segundos % 60;
    console.log(`Tempo: ${horas}:${minutos}:${segundos}`);

}
const prompt = require("prompt-sync")();
const duracaoEvento = parseInt(prompt("Digite a duração do evento em segundos: "));

calcularTempo(duracaoEvento); 