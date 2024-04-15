let num = [8,4,3,7]
num[4] = 2
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor eh ${num[0]}`)

let pos = num.indexOf(1)
if (pos == -1) {
    console.log(`O valor nao foi encontrado`)
}else {
console.log(`O valor esta na posicao ${pos}`)
}
