//escopo léxico. A função procura a variável mais próxima

const nome = 'Luiz'

function falaNome() {
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'Otavio'
    falaNome()
}

usaFalaNome()

