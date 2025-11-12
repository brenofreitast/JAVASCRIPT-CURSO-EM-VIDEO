const { createElement } = require("react")

function gerar() {
    var numero = document.getElementById('numero')
    var num = Number(numero.value)
    var tabuada = document.getElementById('tabuada')
    tabuada.innerHTML = ''
    


    if (num == '') {
        alert('Por favor, digite um número!')
    } else {
        for (i = 0; i <= 10; i++) {
            var tab = num * i
            var options = document.createElement('option')
            options.textContent = `${num} x ${i}= ${tab}`
            tabuada.appendChild(options)
        }
        
    }






}