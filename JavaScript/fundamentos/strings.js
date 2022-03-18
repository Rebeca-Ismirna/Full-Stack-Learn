const escola = "Cod3r"

console.log(escola.charAt(0)) // retorna o caractere presente no index escolhido
console.log(escola.charCodeAt(4)) // retorna o valor do caractere em unicode no index escolhido
console.log(escola.indexOf("r", 0)) // retorna o valor do index no qual está presente o caractere que se deseja procurar
console.log(escola.substring(2)) // retorna a substring presente nos limites que são estabelecidos no método
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat("!")) // concatena
console.log(escola.replace("C", 'e'))// substitui certo caractere escolhido por outro que também deve ser especificado
console.log('Ana, Maria, Pedro'.split(",")) // coloca strings dentro de um array, dependendo da especificação do limite ou de como serão divididas

// JavaScript and TypeScript course's exercise
