function retornaFuncao() {
    const nome = 'Luiz'
    return function() {
        return nome
    }
}

const funcao = retornaFuncao()
console.log(funcao())
console.dir(funcao())

const funcao1 = retornaFuncao('Luiz')
const funcao2 = retornaFuncao('Joao')
console.dir(funcao1())
console.dir(funcao2())