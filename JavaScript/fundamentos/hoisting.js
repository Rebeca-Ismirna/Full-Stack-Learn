console.log("a =", a)
var a = 2 // a variavel a é içada para cima, por isso o resultado de leitura dela é undefined, e não "não foi declarada"
console.log("a =", a)

function teste() {
    console.log("a =", a)
    var a = 2
    console.log("a =", a)
}

teste()
console.log("a =", a)