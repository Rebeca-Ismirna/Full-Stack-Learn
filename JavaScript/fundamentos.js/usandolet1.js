var numero = 1 //escopo global
{
    let numero = 2 // escopo global, escopo de função e escopo de bloco
    console.log("dentro = ", numero) // a preferência de valor será dentro do escopo menor, caso não fosse declarado o valor 2 para a variável número, o valor reproduzido seria 1
}

console.log("fora = ", numero)

//ex1 ~ JavaScript and TypeScript course.

let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

let varA = 
let varB = varC
let varC = varA

console.log(varA, varB, varC)