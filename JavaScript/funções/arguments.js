function funcao() {
    //console.log(arguments)
    console.log(arguments[5])
}

//Parâmetros e retornos não são obrigatórios

// argumentos mandados sem serem chamados não dá erro, são guardados em 'arguments' obs.: em arrow functions não há 'arguments' 
funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function somaArgumentos() {
    let total = 0
    for(let argumento of arguments) {
        total += argumento
    }

    console.log(total)
}

somaArgumentos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function funcaoexemplo(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}

funcaoexemplo(1, 2, 3)

function soma(a, b = 2, c = 4) {
    console.log(a + b + c) 
}

soma(2) //se não especificar os valores aqui, serão usados os valores especificados na própria função (argumentos)
soma(2, '', 4) // não é possível pular um argumento desta forma. Por receber uma string como argumento a ser somada, os números são concatenados
soma(2, undefined, 4) //é a única forma de fazer um valor de argumento assumir o valor especificado no argumento da função
soma(2, null, 3) // ignora o índice 1

function objectpessoa({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
let obj = { nome: 'Rebeca', sobrenome: 'Ismirna', idade: 21}
objectpessoa(obj)
objectpessoa({ nome: 'Luiz', sobrenome: 'Otavio', idade: 20}) //valores literais

function arraypessoa([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade)
}

arraypessoa(["Rebeca", 'Ismirna', 21])

function contador(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
}

contador('+', 1, 20, 30, 40, 50)
console.log('==================================')
// estratégia 1 para gerar valores padrão
function soma3(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
console.log('==========================')
// estratégia 2
function soma3 (a, b, c) {
    a = a !== undefined ? a : 1
    b = b !== undefined ? b : 1
    c = c !== undefined ? c : 1
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
console.log('==========================')
// estratégia 3
function soma3 (a, b, c) {
    a = 0 in arguments ? a : 1
    b = 1 in arguments ? b : 1
    c = 2 in arguments ? c : 1 
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
console.log('==========================')

// estratégia 4
function soma4 (a, b, c) {
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma4(), soma4(3), soma4(1, 2, 3), soma4(0, 0, 0))
console.log('==========================')

// estratégia 5
function soma5(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma4(), soma4(3), soma4(1, 2, 3), soma4(0, 0, 0))
console.log('==========================')
