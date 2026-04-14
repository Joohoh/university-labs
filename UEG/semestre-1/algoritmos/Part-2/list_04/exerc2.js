/* 2. Desenvolver um programa com as opções de calcular e imprimir o
volume e a área da superfície de um cone reto, de um cilindro ou de
uma esfera. O programa deverá ler a opção da figura desejada:
(1- cone reto; 2 - cilindro ou 3 - esfera) e de acordo com a opção
escolhida calcular e escrever o volume e a área da superfície da figura
pedida.

Fórmulas:

Cone Reto : volume =  π * r² * h / 3
Área = π * r * √(r² + h²)

Cilindro: volume = π * r² * h
Área = 2 * π * r * h + 2 * π * r²

Esfera: volume = 4/3 * π * r³
Área da superfície = 4 * π * r² */

function calcularVolumeAreaFigura(opcao, raio, altura) {
    const pi = 3.14;

    switch (Number(opcao)) {
        case 1:
            const volumeCone = (pi * Math.pow(raio, 2) * altura) / 3;
            const areaCone = pi * raio * Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
            return "Volume do cone: " + volumeCone.toFixed(2) + " | Área do cone: " + areaCone.toFixed(2);
        case 2:
            const volumeCilindro = pi * Math.pow(raio, 2) * altura;
            const areaCilindro = 2 * pi * raio * altura + 2 * pi * Math.pow(raio, 2);
            return "Volume do cilindro: " + volumeCilindro.toFixed(2) + " | Área do cilindro: " + areaCilindro.toFixed(2);
        case 3:
            const volumeEsfera = (4 / 3) * pi * Math.pow(raio, 3);
            const areaEsfera = 4 * pi * Math.pow(raio, 2);
            return "Volume da esfera: " + volumeEsfera.toFixed(2) + " | Área da esfera: " + areaEsfera.toFixed(2);

        default:
            return "Opção inválida!";
    }

}

const prompt = require("prompt-sync")();

let opcao = "S";

do {
    console.log("Qual figura deseja calcular? \n" +
        "1 - Cone Reto;\n" +
        "2 - Cilindro;\n" +
        "3 - Esfera;"
    );
    const figura = Number(prompt("Opção: "));
    const raio = Number(prompt("Digite o valor do raio: "));
    const altura = Number(prompt("Digite o valor da altura: "));

    console.log(calcularVolumeAreaFigura(figura, raio, altura));

    opcao = prompt("Deseja continuar? [S/N]: ").toUpperCase();
} while (opcao === "S")
    if (opcao === "N") return console.log("Programa encerrado!");