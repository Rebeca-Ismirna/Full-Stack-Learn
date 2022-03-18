function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback()
    }, rand()) 
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback()
    }, rand()) 
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback()
    }, rand()) 
}

f1(f1Callback)

function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('Olá, Mundo!')
}

f1(function() {
    f2(function() {
        f3(function() {
            console.log('Olá, Mundo!!')
        })
    })
})
console.log('========================')

const fabricantes = ['Mercedes', 'Audi', 'BMW', 'Ferrari', 'Fusca']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callbacks
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//com arrow functions
notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)