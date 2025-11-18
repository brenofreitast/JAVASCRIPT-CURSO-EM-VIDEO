let num = document.getElementById('txtnumber')
let tabela = document.getElementById('tabela')
let vetNum = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNum(num.value) && !inList(num.value, vetNum)) {
        vetNum.push(Number(num.value))
        let option = document.createElement('option')
        option.textContent = `Valor ${num.value} adicionado.`
        tabela.appendChild(option)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''
    num.focus()
}

function fim() {

    if (vetNum == '') {
        alert('Adicione valores antes de finalizar.')
    } else {

        let quant = vetNum.length
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
            media = soma / quant
        }



        res.innerHTML = `<br>Ao todo, temos ${quant} números cadastrados.<br>`
        res.innerHTML += `<br>O maior valor informado foi ${maior}.<br>`
        res.innerHTML += `<br>O menor valor informado foi ${menor}.<br>`
        res.innerHTML += `<br>Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `<br>A média dos valores digitados é ${media.toFixed(2)}.<br>`
    }


}