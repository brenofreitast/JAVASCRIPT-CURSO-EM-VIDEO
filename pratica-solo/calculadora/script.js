let btt = document.querySelectorAll('.grid button')
let tela = document.getElementById('tela')

btt.forEach(botao =>{
    botao.addEventListener('click', ()=>{
        let action = botao.dataset.action

        if (action == 'clear'){
            tela.value = ''
        }else if (action == 'equal'){
            try{
                tela.value = eval(tela.value)   // calcula a expressão
            }catch{
                tela.value = 'Erro'
            }
        }else{
            tela.value += botao.textContent     // adiciona número ou operador
        }
    })
    
})
