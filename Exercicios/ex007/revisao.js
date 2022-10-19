/*let a = [5, 4, 6]

a[3] = 3 //inserir numa posição especifica

a.push(9) //inserir no ultimo

a.length //comprimento de um array (em posições)

a.sort() //coloca em ordem numerica

a[x] //elemento especifico do Array

a.indexOf(x) // procura o valor indicado

console.log(`O valor é ${a}`)
console.log(`o primeiro valor é ${a[0]}`)

for(let pos == 0; pos < a.length; pos++){
    console.log(a.[pos])
}

*/

let valores = [9, 3, 7, 5, 3, 8, 2, 3, 4]

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`a posição ${pos}, tem os valores ${valores[pos]}`)
}*/

for (let pos in valores) {
    console.log(`a posição ${pos} são os valores ${valores[pos]}`)
}

let pos1 = valores.indexOf(3)

console.log(`O valor está na posição ${pos1}`)