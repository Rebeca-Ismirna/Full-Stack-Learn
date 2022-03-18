// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2,3,4,5,6)

// função com retorno

function Soma(a, b = 1) {
    return a + b
}

console.log(Soma(3, 2))
console.log(Soma(3))