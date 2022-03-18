const treshoras = 60 * 60 * 3 * 1000
const umdia = 60 * 60 * 24 * 1000 // (minutes * seconds * hours * thousandth)
const dataunix = new Date(0 + treshoras + umdia) // Timestamp unix 
console.log(dataunix)
console.log(dataunix.toString())

const atualdata = new Date(2019, 2, 20, 15, 14, 27, 500) // a, m, d, h, M, s, ms
console.log(atualdata.toString()) // quando o valor é omitido, ele zera (00)

const tdata = new Date('2019-03-20 15:14:27.100')
console.log('Day: ', tdata.getDate())
console.log('Month: ', tdata.getMonth()) // mês começa do 0
console.log('Year: ', tdata.getFullYear())
console.log('Hour: ', tdata.getHours())
console.log('Minutes: ', tdata.getMinutes())
console.log('Seconds: ', tdata.getSeconds())
console.log('Tousandth: ', tdata.getMilliseconds())
console.log('Day of the week: ', tdata.getDay()) // 0 - Domingo ; 6 - Sábado
console.log(tdata.toString())

console.log(Date.now()) // retorna o valor em milissegundos 

  

function formataData(dataa) {
    const dia = zeroAEsquerda(dataa.getDate())
    const mes = zeroAEsquerda(dataa.getMonth() + 1)
    const ano = zeroAEsquerda(dataa.getFullYear())
    const hora = zeroAEsquerda(dataa.getHours())
    const minutos = zeroAEsquerda(dataa.getMinutes())
    const segundos = zeroAEsquerda(dataa.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

const dataa = new Date()
const databrasil = formataData(dataa)
console.log(databrasil)

const dataatt = new Date('1840-05- 00:00:00')
const diasemana = dataatt.getDay()
let dayoftheweek

switch (diasemana) {
    case 0:
        dayoftheweek = 'Today is Sunday!'
        break
    case 1:
        dayoftheweek = 'Today is Monday!'
        break
    case 2:
        dayoftheweek = 'Today is Tuesday!'
        break
    case 3:
        dayoftheweek = 'Today is Wednesday!'
        break
    case 4:
        dayoftheweek = 'Today is Thursday!'
        break
    case 5:
        dayoftheweek = 'Today is Friday!'
        break
    case 6:
        dayoftheweek = 'Today is Saturday!'
    default:
        break;
}

/*if (diasemana === 0) {
    diaSemanaTexto = 'Today is Sunday!'
} else if (diasemana === 1) {
    diaSemanaTexto = 'Today is Monday!'
} else if (diasemana === 2) {
    diaSemanaTexto = 'Today is Tuesday!'
} else if (diasemana === 3) {
    diaSemanaTexto = 'Today is Wednesday!'
} else if (diasemana === 4) {
    diaSemanaTexto = 'Today is Thursday!'
} else if (diasemana === 5) {
    diaSemanaTexto = 'Today is Friday!'
} else if (diasemana === 6) {
    diaSemanaTexto = 'Today is Saturday!'
}*/

console.log(diasemana + ' -->', dayoftheweek)


