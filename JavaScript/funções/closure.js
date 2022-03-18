// closure é o escopo criado quando uma função é declarada
// esse escopo permite à função acessar e manipular variáveis externas à função

const x = 'global'

function fora() {
    const x = 'local'
    function dentro () {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())