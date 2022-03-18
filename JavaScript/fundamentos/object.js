const prod1 = {}  // object = coleção de chave e valor
prod1.nome = "Celular ultra mega"
prod1.preco = 4998.9
prod1["desconto legal"] = 0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: "camisa polo",
    preco: 79.90,
    obj: {
        blablabla: 1, 
        obj: {
            blablabla: 2
        }
    }
}

console.log(prod2)
console.log(prod1.nome)
console.log(prod1["nome"])
console.log(typeof this)