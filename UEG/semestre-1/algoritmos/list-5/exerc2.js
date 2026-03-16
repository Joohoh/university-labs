function calcularTempoDuracaoEvento(tempoEventoSegundos){
    const minutos = tempoEventoSegundos / 60;
    const horas = minutos / 60;
    return [minutos, horas];
}

const prompt = require("prompt-sync")();

const tempSegundos = parseInt(prompt("Digite a duração do evento em segundos: "));

[minutos, horas] = calcularTempoDuracaoEvento(tempSegundos);

console.log(`O tempo do evento em horas é de: ${horas.toFixed(2)}`);
console.log(`O tempo do evento em minutos é de: ${minutos.toFixed(2)}`);
console.log(`O tempo do evento em segundos é de: ${tempSegundos}`);