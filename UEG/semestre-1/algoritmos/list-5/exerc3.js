function calcularVolume(raio, altura){
    const area = 2 * Math.PI * raio * (altura + raio);
    const volume = Math.PI * raio ** 2 * altura;
    return [area, volume];
}

const prompt = require("prompt-sync")();

const raio = Number(prompt("Digite o valor do raio: "));
const altura = Number(prompt("Digite o valor da altura: "));

[area, volume] = calcularVolume(raio, altura);

console.log(`O valor da área é de: ${area.toFixed(2)} e o do volume é de: ${volume.toFixed(2)} `);