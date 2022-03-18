const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: functional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function Pessoa() {
    this.idade = 0 
    
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

console.log('===============================')

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen"
  }
  
  let fullName = person.fullName.bind(member)
  console.log(fullName( ))

