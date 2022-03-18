//factory functions

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`
        },

        altura: a,
        peso: p,

        //getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80)
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())

console.log('=================================')
function criarproduto() {
    return {
        nome: "detergente",
        preco: 1.50,
        marca: "minuano",
        liquido: 250 + ' ml'
    }
}

console.log(criarproduto())

console.log('======================')

function criaProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criaProduto('Notebook', 2199.49))
console.log(criaProduto('iPad', 1199.49))
console.log(criaProduto('TV', 2999.99))
console.log('=====================')

class Pessoa { 
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pa1 = new Pessoa('Joao')
pa1.falar()

function Pessoa1(nome) {
    this.nome = nome

    this.falar = function() {
    console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa1('Joao')
p3.falar()

console.log('=========================')

function createPerson(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      getFullName() {
        return firstName + ' ' + lastName;
      }
    };
  }
  
  let person1 = createPerson('John', 'Doe');
  let person2 = createPerson('Jane', 'Doe');