/* 3. Fazer um algoritmo que leia três valores valorA, valorB, e valorC. O
programa deve verificar se estes valores formam um triângulo ou não
forma. Formando um triângulo para dizer se ele é equilátero, isósceles
ou escaleno.
Obs.: Usuário ideal - ele não irá digitar valores incorretos. */

function calcularTriangulo(A, B, C){
    
    if (A >= B + C || B >= A + C || C >= A + B ) return "Não é um triângulo.";
    else if(A == B && B == C) return "Triângulo Equilátero: Todos os lados são iguais.";
        else if (A == B || A == C || B == C ) return "Triângulo Isósceles: Dois lados são iguais.";
            else if (A != B && A != C && B != C) return "Triângulo Escaleno: Todos os lados são diferentes.";
    
}

const prompt = require("prompt-sync")();

const valorA = Number(prompt("Digite um valor para A: "));
const valorB = Number(prompt("Digite o valor para B: "));
const valorC = Number(prompt("Digite o valor para C: "));

console.log(`Os valores: ${valorA}, ${valorB}, ${valorC} -> ${calcularTriangulo(valorA, valorB, valorC)}`);