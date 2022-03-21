// map -> it has the same filter() syntax

//dobrar os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobro = numeros.map(valor => valor * 2)
console.log(dobro)

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
] 

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

// Remova apenas a chave 'nome' do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade}))
console.log(idades)

// Adicione uma chave id em cada objeto
const comIds = pessoas.map(function(obj, index) {
    const newobj = {...obj}
    newobj.id = (index + 1) 
    return newobj
})

console.log(comIds)
