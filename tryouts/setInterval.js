function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

/*function funcaodoIntervalo() {
    console.log(mostraHora())
} 

setInterval(funcaodoIntervalo, 1000)*/
const timer = setInterval(function() {
    console.log(mostraHora())
}, 1000)

setTimeout(function() {
    clearInterval(timer)
}, 10000)


 