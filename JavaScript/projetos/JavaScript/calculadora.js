function criaCalculadora() {
    return {
        //captura o input
        display: document.querySelector('.display'),

        // função que chama outras funções
        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },
        //captura o clique do enter
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },
        //realiza, de forma perigosa, todos os possíveis cálculos com os valores capturados no input pelo 'display' e testa-os, para saber se podem ser calculados. Se não, gera um erro.
        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta Inválida')
                    return
                }
                this.display.value = String(conta)
            } catch(e) {
                alert('Conta Inválida!')
                return
            }
        },
        // Zera o espaço do input, no qual se colocam os valores a serem calculados
        clearDisplay() {
            this.display.value = ''
        },

        //Especificamente para a tecla '&laquo' da calculadora. Quando é clicado no botão, o primeiro número é apagado.
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        //captura o click dos botões restantes da calculadora
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target

                // se o botão de números for clicado, o valor do número capturado no input será mandado como parâmetro para outra função abaixo
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                //se o botão C for clicado, então é chamada a função limpadora de input
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                // se o botão &laquo for clicado, então é chamada a função que retira o primeiro valor a cada click
                if(el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                // se o botão de igual for clicado, então é chamada a função para realizar a conta com os valores enviados
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            }/*.bind(this)*/)
        },

        // concatena os valores capturados pelo input, de modo a formar o cálculo que se deseja fazer
        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()