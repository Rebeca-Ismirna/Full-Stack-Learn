/* let contador = 1
while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

let cont = 0
do {
    console.log(`Contador = ${cont}`)
    cont++
} while (cont <= 10) */

for(let contador = 0; contador <= 10; contador++) {
    console.log(`Contador = ${contador}`)
}

const notas = [6.7, 7.4, 8.1, 7.7, 10, 0.5]
for(indice = 0; indice < notas.length; indice++) {
    console.log(`Nota ${indice} = ${notas[indice]}`)
}