/* O número primo é aquele que somente é divisível por ele mesmo e pela
unidade. Fazer um algoritmo que imprima todos os números primos entre 1
e 100. */

function ImprimirNumerosPrimos() {
    console.log(`Números primos entre 1 e 100:`);
    for (let numero = 2; numero <= 100; numero++) {
        let primo = true;
        for (let divisor = 2; divisor <= numero / 2; divisor++) {
            if (numero % divisor === 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            console.log(numero);
        }
    }
}

ImprimirNumerosPrimos();