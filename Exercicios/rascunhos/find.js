//metodo find retorna o primeiro valor encontrado que satisfaça o teste requerido, caso contrario é considerado undefined.

let a = [2, 5, 7, 3, 9, 6, 3]

let b = a.find(element => element >= 3) //usa-se arrow function 

console.log(b)

/*
arrow function (=>): cria-se uma função de maneira mais direta.

element => element >= 3

substitui

function(value){
    return value >= 3
}
*/