// slice() -> returns selected elements in an array as a new array. Includes the first element, but not the second. It also accepts negative numbers. It doesn't change the original array
const nomes = ['Rebeca', 'Lizandra', 'Lara', 'Maria', 'Ismael']
const removidos = nomes.slice(1, 3)
console.log(nomes, removidos)

// split() -> splits a string into an array of substrings.
const completeName = 'Rebeca Ismirna Navegantes de Melo'
const newarray = completeName.split(' ')
console.log(newarray)

// join() -> joins all array elements into a string. You can specify the separator.
const string = newarray.join(' ')
console.log(string)