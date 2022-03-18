const nome = "rebeca"
const conc = "Olá, " + nome + "!"
const template = `Olá, ${nome}!` //interpolação
const method = "Olá, ".concat(nome).concat("!")
console.log(template)
console.log(conc)
console.log(method)

console.log(`1 + 1 = ${1 +1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up(`cuidado`)}!`)