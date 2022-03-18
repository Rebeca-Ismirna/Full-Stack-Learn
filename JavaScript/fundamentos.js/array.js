
const valores = [7.7, 8.9, 9.2, 6.3]
console.log(valores[0], valores[3])
console.log(valores[4]) 

valores[4] = 10
console.log(valores)
console.log(valores.length) // número de itens presentes no array

valores.push({id: 3}, false, null, "teste") // adiciona itens ao array no final
console.log(valores)

console.log(valores.pop()) // retira o último
delete valores[0] // retira itens
console.log(valores)

console.log(typeof valores) // array é do tipo object

// erros, curto circuito