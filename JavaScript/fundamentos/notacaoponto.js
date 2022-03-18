console.log(Math.ceil(6, 7))

const obj1 = {}
obj1.nome = "Bola"
// obj1["nome"] = "Bola2"
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
}

const obj2 = new obj("cadeira")
const obj3 = new obj("mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()


//ex1 ~ JavaScript and TypeScript course.
console.log(`My name is 'Name'. I am learning JavaScript at 10 am.`)

let x = (Math.random() * 10 +1)
console.log(x)

let y = Math.floor(Math.random())
console.log(y)

max = 10
min = 5
let z = Math.floor(Math.random() * (max-min) + min)
console.log(z)