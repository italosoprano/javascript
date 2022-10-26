//fill é o metodo preencher os valores de um array a partir do indice do mesmo

let a = ['abacate', 'morango', 'mamão', 'maçã'] //valores do array

console.log(a)

a.fill('manga') //uso do fill, mudando todos os valores

console.log(a)

a.fill('morango', 0, 2) //uso do fill, mudando um comprimento de valores especificos

console.log(a)