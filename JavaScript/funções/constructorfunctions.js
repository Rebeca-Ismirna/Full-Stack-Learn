// constructors functions --> retorna objetos (new)
// factory functions --> retorna objetos

function Pessoa(nome, sobrenome) {
    // Privados
    const ID = 123456
    const metodoInterno = function() {

    }

    // atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ': sou um método.')
    }
} // não precisa de return a própria função retorna o objeto

const p1 = new Pessoa('Luis', 'Otavio')
const p2 = new Pessoa('Maria', 'Oliveira')
console.log(p1)
console.log(p2)
p2.metodo()

function Carro(velocMax = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //método privado
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocMax
        }
    }

    //método público
    this.getVelocAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
console.log(typeof uno)