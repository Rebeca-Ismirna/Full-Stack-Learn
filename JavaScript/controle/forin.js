const notas = [6.7, 7.4, 8.1, 7.7, 10, 0.5]

for(let indice in notas) {
    console.log("Índice", indice, "=", notas[indice])
}

const pessoa = {
    nome: "Rebeca",
    sobrenome: "Ismirna",
    idade: 21,
    peso: 59
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}