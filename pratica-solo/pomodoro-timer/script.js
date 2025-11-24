let cronometro = document.getElementById('cronometro')

let btnStart = document.getElementById('start')
let btnStop = document.getElementById('stop')
let btnReset = document.getElementById('reset')


let tempo = 25 * 60
let intervalo

function formatarTempo (segundos){
    let m = Math.floor(segundos / 60)
    let s = segundos % 60
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0')
}

function atualizarDisplay (){
    cronometro.innerText = formatarTempo(tempo)
}

function start(){
    if (!intervalo){
        intervalo = setInterval(() =>{
            if (tempo > 0){
                tempo--
                atualizarDisplay()
            }else{
                clearInterval(intervalo)
                intervalo = null
                alert(`Tempo esgotado!`)
            }
        }, 1000)
    }
}

function stop (){
    clearInterval(intervalo)
    intervalo = null
}

function reset(){
    clearInterval(intervalo)
    intervalo = null
    tempo = 25 * 60
    atualizarDisplay()
}


btnStart.addEventListener('click', start)
btnStop.addEventListener('click', stop)
btnReset.addEventListener('click', reset)



atualizarDisplay()