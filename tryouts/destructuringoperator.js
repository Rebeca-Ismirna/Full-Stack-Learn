//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
//const [um, dois, tres, ...resto] = numeros // rest operator
//console.log(um, dois, tres)
//console.log(resto)

//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
//const [um, , tres, , cinco, , sete] = numeros
//console.log(um, tres, cinco, sete)

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [,[,,seis]] = numeros
console.log(numeros[1][2])
console.log(seis) // via desestruturação (o número dentro da variável)
const [lista1, lista2, lista3] = numeros
console.log(lista2[2]) // via desestruturação (o conjunto ao qual o número pertence dentro de uma variável, sendo possível acessá-lo através do índice)

///////objetos

