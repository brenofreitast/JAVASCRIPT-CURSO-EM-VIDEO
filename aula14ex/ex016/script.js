var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.querySelector('div#res')


function contar() {
    var ini = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    res.innerHTML = ''

    if (ini == 0 || f == 0) {
        res.innerHTML = 'Impossível contar.'
    } else if (p <= 0) {
        alert('Passo inválido, considerando PASSO 1.')
        p = 1
        for (i = ini; i <= f; i += p) {
            res.innerHTML += `${i} &#128073;`
        }
        res.innerHTML += '&#127937;'

    } else if (ini > f) {
        for (i = ini; i >= f; i -= p) {
            res.innerHTML += `${i} &#128073;`
        }
        res.innerHTML += '&#127937;'
    } else {
        for (i = ini; i <= f; i += p) {
            res.innerHTML += `${i} &#128073;`
        }
        res.innerHTML += '&#127937;'
    }

}