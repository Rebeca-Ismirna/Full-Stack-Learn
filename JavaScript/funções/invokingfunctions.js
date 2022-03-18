// declaração de função (function hoisting)
// functions are firts-class objects (citizens)
falaOI()

function falaOI() {
    console.log('OI')
}

falaOI() 

//funções: first-class objects

const souUmDado = function() {
    console.log('Sou um dado') // function expression
}

souUmDado()

 // arrow function

 const funcaoArrow = () => {
     console.log('Sou uma arrow function')
 }

 funcaoArrow()

 // dentro de um objeto
 const obj = {
     falar() {
         console.log('estou falando')
     }
     /*falar: function() {
         console.log('estou falando')
     }*/
 }

 obj.falar()
 console.log('===========================')

 function soma(a,b) {
     return function (c) {
         console.log(a + b + c)
     }
 }

 soma(2,3)(4)
 const cincoMais = soma(2,3)
 cincoMais(4)

function soma2 (x, y) {
    return x + y //hoisting
}

//functions expressions e named function expressions não podem ser invocadas antes de serem declaradas