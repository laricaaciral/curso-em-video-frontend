let num = [2, 4, 9, 7, 3, 1]

console.log(num)
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}
*/
for( let pos in num) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}