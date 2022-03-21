// reduce() ->

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// some todos os números
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador
}, 0)
console.log(total)

// retorne um array com os pares (filter)
const pares = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [/*valor do acumulador, se não especificado, o valor padrão é o index 0*/])
console.log(pares)
// retorne um array com o dobro dos valores(map)
const dobro = numeros.reduce(function(acumulador,valor) {
    acumulador.push(valor * 2)
    return acumulador
}, [])
console.log(dobro)

// soma dos valores pares
const somaPares = numeros.reduce(function(acumulador,valor) {
    if(valor % 2 === 0) {
        acumulador += valor
    }
    return acumulador
}, 0)
console.log(somaPares)


const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 10},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 63}
]  
// retorne a pessoa mais velha

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)

// unindo map, filter e reduce
console.log('===============================')
const numeros1 = [5,50,80,1,2,3,5,8,7,11,15,22,27]

// * Retorne a soma do dobro de todos os pares *
//1. -> filtrar pares
//2. -> dobrar os valores
//3. -> reduzir (somar tudo)

//1.
const resposta = numeros1.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((ac, valor) => ac + valor)

console.log(resposta)