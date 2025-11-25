let txtvalor = document.getElementById('fatura')
let txtgorjeta = document.getElementById('percen')
let total

let res = document.getElementById('res')

function calcular(){
    let valor = Number(txtvalor.value)
    let gorjeta = Number(txtgorjeta.value)
    total = (gorjeta/100*valor)+valor
    let formatado = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    res.style.fontWeight = 'bold'
    res.innerHTML += formatado
}