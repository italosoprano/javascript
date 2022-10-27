//a função filter chama um novo array filtrando os itens que foram considerados 'true', num teste lógico.

const teste1 = (value) => value >= 50

let a = [10, 65, 45, 78, 97, 43, 68, 76]

let b = a.filter(teste1) //usa-se o teste lógico entre os parenteses, para saber que resposta será obtida.

console.log(b)