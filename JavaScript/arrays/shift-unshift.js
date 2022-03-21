// shift() -> removes the first element of an array

const nomes = ['Rebeca', 'Ismirna', 'Navegantes', 'de', 'Melo']
const nomeremovido = nomes.shift()

console.log(nomes, nomeremovido)

// unshift() -> adds an element in an array's 0 index and returns the number of atual indexs

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
const addNumber = numeros.unshift(0)

console.log(numeros, addNumber)