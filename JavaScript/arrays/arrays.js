// valor por referência
/
shift()
unshift()
slice()
split()
join()
*/
const nomes = ['Eduardo', 'Maria', 'Joana']

const removido2 = nomes.shift() // remove o primeiro elemento de um array e o captura, podendo ser armazenado em uma variável 
const adicionadoinicio = nomes.unshift('Rodrigo') // adiciona um elemento ao array na posição 0 
const fatiado = nomes.slice(1, 3) // recorta e retorna somente os valores presentes nos indexes entre 1 e 3 (inclui o número 1 mas não inclui o número 3). Também aceira números negativos, ou seja nomes.slice(1, -1) o -1 se refere ao último index
const nome = 'Rebeca Ismirna Navegantes de Melo'
const nomearray = nome.split(' ')
const nomestring = nomearray.join(' ')
console.log(nomearray)
console.log(nomestring)
console.log(nomes, removido, removido2, adicionado)
