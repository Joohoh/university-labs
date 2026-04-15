/* 2. Fazer um algoritmo que dado os lados de um triângulo A, B e C. Dizer
se os lados dados formam um triângulo: retângulo (A²=B²+C²), 
obtusângulo (A²>B²+C²) ou acutângulo (A²<B²+C²). */

function calcularTriangulo (A, B, C){

    if (B > A) {
        let aux = A;
        A = B;
        B = aux;
    }
    if (C > A) {
        let aux = A;
        A = C;
        C = aux;
    }

    if (A >= B + C || B >= A + C || C >= A + B ) return `Não é um triângulo.`;
    else if(A ** 2 === B ** 2 + C ** 2) return `Triângulo retângulo!`;
        else if(A ** 2 > B ** 2 + C ** 2) return `Triângulo obtusângulo!`;
            else if(A ** 2 < B ** 2 + C **2) return `Triângulo acutângulo!`;

}

const prompt = require("prompt-sync")();

let opcao = "S";

do{
    const ladoA = Number(prompt(`Qual o valor do lado A do triângulo? `));
    const ladoB = Number(prompt(`Qual o valor do lado B do triângulo? `));
    const ladoC = Number(prompt(`Qual o valor do lado C do triângulo? `));

    console.log(`\nSendo os seguintes valores: A = ${ladoA}, B = ${ladoB} e C = ${ladoC}.
O triângulo em questão é: ${calcularTriangulo(ladoA, ladoB, ladoC)}`);


    opcao = prompt(`\nDeseja continuar? [S/N]: `).toUpperCase();
} while (opcao === "S");

if (opcao === "N") {
    console.log("Programa encerrado!");
}