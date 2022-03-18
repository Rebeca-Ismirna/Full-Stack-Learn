//                0       -1       -2         -3         -4
//                0        1        2          3          4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']
const nomes2 = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']
const nomes3 = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']
const nomes4 = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']

// nomes.splice(indice, número de deletes, elem1, elem2, elem3,...)
// pop

const removidos = nomes.splice(4, 1) // retorna um array, pois mais de um item pode ser removido 
console.log(nomes, removidos)

const removidos2 = nomes2.splice(-2, Number.MAX_VALUE)
console.log(nomes2, removidos2)

const adicionado = nomes3.splice(2, 0, 'Antonieta')
console.log(nomes3, adicionado)

const removidos3 = nomes4.splice(2, 1, 'Cesar')
console.log(nomes4, removidos3)