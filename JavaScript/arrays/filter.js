// filter() => sempre retorna um array com a mesma quantidade de elementos ou menos. Retorna um valor booleano
// retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numeros2 = numeros.filter(valor => valor > 10)
console.log(numeros2)

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
] 

// retorne as pessoas que tem o nome com 7 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7)
console.log(pessoasComNomeGrande)
                  
// retorne as pessoas com mais de 50 anos
const cinquentaAnosMais = pessoas.filter(obj => obj.idade >= 50)
console.log(cinquentaAnosMais)

// retorne as pessoas cujo nome termina com a
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(nomeTerminaComA)