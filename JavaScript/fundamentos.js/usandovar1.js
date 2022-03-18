{
    {
        {
            {
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() { // quando uma variável é declarada dentro de uma função, não é possível acessar seu conteúdo fora do escopo da função
    var local = 123 // dois escopos: global e num escopo de função
    console.log(local)
}

teste()
console.log(local)