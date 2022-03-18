// capturar evento do formulário
const form = document.querySelector("#formulario")

//função: impedir que o formulário seja enviado
form.addEventListener('submit', function(e) {
    e.preventDefault()

//capturar os valores obtidos no input
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

//transformar os valores no tipo número
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

//apontar como erro se os valores enviados no input pelo usuário não forem números a partir do envio dos parâmetros à função
    if(!peso) {
        setResultado('Peso Inválido!', false)
        return
    }

    if(!altura) {
      setResultado('Altura Inválida!', false)
      return
}

//chamada das funções: calcular o IMC e apontar o tipo do nível do IMC
    const imc = getIMC(peso, altura)
    const nivelIMC = getNivelImc(imc)

// Resultado
    const msg = `Seu IMC é ${imc} (${nivelIMC}).`

//chamada da função: manda a mensagem + o valor 'verdadeiro' como parâmetro
    setResultado(msg, true)
})

// função apontar o nível do IMC
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0] 
}

// função: calcular o IMC
function getIMC(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}


// função para criar um paragrafo no HTML
function criarP() {
    const p = document.createElement('p')
    return p
}

// função: ¹zera o resultado 
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

//²chamada da função criadora de parágrafo
    const p = criarP()

//³adiciona certa classe (que já está estilizada) ao parágrafo dependendo do parâmetro recebido pela função(true, false)
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    
// O parágrafo recebe a mensagem parâmetro
    p.innerHTML = msg

// a div resultado recebe como filho o parágrafo 
    resultado.appendChild(p)
}
