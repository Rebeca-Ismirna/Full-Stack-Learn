function aprovoureprov(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota)
    } 
}

aprovoureprov(8.1)
aprovoureprov(5.0)


function seforverdadeeufalo(valor) {
    if(valor) {
        console.log("É verdade..." + valor)
    }
}

seforverdadeeufalo()
seforverdadeeufalo(null)
seforverdadeeufalo(undefined)
seforverdadeeufalo(NaN)
seforverdadeeufalo("")
seforverdadeeufalo(0)
seforverdadeeufalo(-1)
seforverdadeeufalo(" ")
seforverdadeeufalo("?")
seforverdadeeufalo([])
seforverdadeeufalo([1, 2])
seforverdadeeufalo(this)