const imprimirresultado = function(nota) {
     switch (Math.floor(nota)) {
         case 10:
         case 9: // suporta o bloco de código (case 9: {console.log("...")})
             console.log("Quadro de honra!")
             break  // necessário para quebrar a linha de acontecimentos. Caso não seja usado, a partir do valor selecionado, todos os case abaixo dele são reproduzidos..
        case 8: case 7: // intervalos (case 8-6) e vírgulas (case 8, 7, 6) não são suportadas
            console.log("Aprovado!")
            break
        case 6: case 5: case 4:
            console.log("Recuperação!")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado!")
            break
        default:
            console.log("Nota Inválida!")
     }
}

imprimirresultado(10)
imprimirresultado(8.9)
imprimirresultado(6.55)
imprimirresultado(2.3)
imprimirresultado(-1)
imprimirresultado(11)