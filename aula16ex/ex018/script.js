let num = document.getElementById('txtnum')
let tabela = document.getElementById('tabela')
let res = document.getElementById('res')
let vetNum = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, vetNum)) {     // !inLista = NÃO está em lista.
        vetNum.push(Number(num.value))
        let option = document.createElement('option')
        option.textContent = num.value
        tabela.appendChild(option)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

function fim() {
    let maior = vetNum[0]
    let menor = vetNum[0]
    let soma = 0
    let media = 0
    
    for (let i = 0; i < vetNum.length; i++) {
        if (vetNum[i] > maior) {
            maior = vetNum[i]
        }
        if (vetNum[i] < menor) {
            menor = vetNum[i]
        }
    }

    for (let i = 0; i < vetNum.length; i++) {
        soma += vetNum[i]
        media = soma / vetNum.length
    }

    res.innerHTML += `<br>Ao todo, temos ${vetNum.length} números cadastrados.<br>`
    res.innerHTML += `<br>O maior valor informado foi ${maior}.<br>`
    res.innerHTML += `<br>O menor valor informado foi ${menor}.<br>`
    res.innerHTML += `<br>Somando todos os valores, temos ${soma}<br>`
    res.innerHTML += `<br>A média dos valores digitados é ${media}<br>`  


}





