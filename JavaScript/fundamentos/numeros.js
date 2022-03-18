const peso1 = 1.0
const peso2 = Number("2.0")

console.log (peso1, peso2)
console.log (Number.isInteger(peso1))
console.log (Number.isInteger(peso2))

//Number.isInteger() serve para saber se um número é inteiro ou não, retornando valores booleanos

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log (media.toFixed(1))

//toFixed() é usado para limitar o número de casas que um número pode ter, por exemplo 9.8888888887. toFixed(3) seria igual a 9.888

console.log(media.toString(2))