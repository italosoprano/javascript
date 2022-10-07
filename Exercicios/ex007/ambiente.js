let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`o primeiro valor é ${num[0]}`)
let pos = num.indexOf(3)
if(pos == -1){
    console.log('O valor não pode ser encontrado')
} else {
    console.log(`O valores estão na posição ${pos}`)
}