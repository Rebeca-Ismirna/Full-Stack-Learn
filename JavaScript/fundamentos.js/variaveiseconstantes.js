var a = 3 // variável "a" recebe o valor "3"
let b = 4 // não é possível mudar o valor dela em diferentes escopos

var a = 30 // é possível redeclarar o var inúmeras vezes em diferentes escopos
b = 40

console.log (a,b)

a = 300
b = 400

console.log (a,b)

const c = 5
console.log (c)

//ex1 ~ JavaScript and TypeScript course.

const id = "Rebeca Ismirna"
const middleName = "Navegantes de Melo"
const age = 21
const weight = 59
const height = 1.64
const imc = weight / (height*height)

console.log(`${id} ${middleName} has ${age} years old, weight ${weight} kg, has ${height} m and your IMC is ${imc.toFixed(2)}`)