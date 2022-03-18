function tratarerro(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    throw {
        nome: erro.name, 
        msg: erro.message,
        date: new Date
    }
}

function imprimir (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarerro(e)
    } finally {
        console.log('final!')
    }
}

const obj = { nome: 'Roberto' }
imprimir(obj)

