// par nome/valor
const saudacao = "olá" // contexto lexico 1

function exec() {
    const saudacao = "falaaaa" //contexto lexico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 9,
    endereço: {
        logradouro: "Rua muito legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)