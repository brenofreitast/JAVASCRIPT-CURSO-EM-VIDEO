const { createElement } = require("react")

function gerar() {
    var numero = document.getElementById('numero')
    var num = Number(numero.value)
    var tabuada = document.getElementById('tabuada')
    tabuada.innerHTML = ''
    var ul = document.createElement('ul')


    if (num == '') {
        alert('Por favor, digite um número!')
    } else {
        for (i = 0; i <= 10; i++) {
            var tab = num * i
            var li = document.createElement('li')
            li.textContent = `${num} x ${i}= ${tab}`
            ul.appendChild(li)
        }
        tabuada.appendChild(ul)
    }






}