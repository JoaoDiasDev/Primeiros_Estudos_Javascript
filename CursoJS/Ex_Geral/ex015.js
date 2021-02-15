let valores = [5, 8, 9, 2, 7]

/*for (let pos = 0; pos < valores.length; pos++) {
    valores.sort()
    console.log(valores[pos])
}
*/
for (let pos in valores) {
    valores.sort()
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)
}

let index = valores.indexOf(7)
console.log(index)