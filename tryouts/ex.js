// 1.
/*function BiggestNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return `O maior número é ${numberOne}` 
    } else {
        return `O maior número é ${numberTwo}`
}*/

//2. 
/*function BiggestNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) return `O maior número é ${numberOne}`; return `O maior número é ${numberTwo}`
}*/

//3.
/*function BiggestNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return `O maior número é ${numberOne}` 
    }
    return `O maior número é ${numberTwo}`
}*/

//4.
function BiggestNumber(numberOne, numberTwo) {
    return numberOne > numberTwo ? numberOne : numberTwo
}

//5. 
/*const max2 = (numberOne, numberTwo) => {
    return numberOne > numberTwo ? numberOne : numberTwo
}*/

//6. 
const max2 = (n1, n2) => n1 > n2 ? n1 : n2
console.log(max2(10, 200))

console.log(BiggestNumber(-10, 4.3))

const epaisagem = (largura,altura) => largura > altura
console.log(epaisagem(1920, 1920))
