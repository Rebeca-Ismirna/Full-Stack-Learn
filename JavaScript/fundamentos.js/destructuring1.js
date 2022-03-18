// novo recurso ES6
//destructuring object

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereço: {
        logradouro: "Rua ABC",
        numero: 1230
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, humor = true } = pessoa
console.log(sobrenome, humor)

const { endereço: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

const { endereço } = pessoa
console.log(endereço)