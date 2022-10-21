let frutas = []

frutas.push('batata','banana', 'abacate', 'maçã', 'jaca', 'pera', 'beterraba') //inserir

frutas.pop() //remover a ultima

frutas.shift() //remover a primeira

frutas.unshift('melancia') //adicionar a primeira

frutas.splice(4, 1) //remover item especifico

let copia = frutas.slice() //copiar o array

console.log(copia)
console.log(frutas.length)

console.log(frutas)