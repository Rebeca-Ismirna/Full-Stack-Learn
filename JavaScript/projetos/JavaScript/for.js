const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]
    let tagCriada = document.createElement(tag)
// tagCriada.innerHTML/Text = texto
    let textoCriado =  document.createTextNode(texto)
    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)
}

container.appendChild(div)


const h1 = document.createElement("H1");
const textNode = document.createTextNode("Hello World");
h1.appendChild(textNode);
document.body.appendChild(h1);