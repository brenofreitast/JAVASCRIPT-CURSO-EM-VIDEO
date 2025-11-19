let imag = document.getElementById('imag')
let res = document.getElementById('res')
let ul = document.createElement('ul')
let quant = 0

function rolar(){
    
    quant++
    let lado = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis']
    let caiu = lado[Math.floor(Math.random() * lado.length)]

    if(caiu == 'um'){
        imag.src = `src/${caiu}.png`
    }else if (caiu == 'dois'){
        imag.src = `src/${caiu}.png`
    }else if (caiu == 'tres'){
        imag.src = `src/${caiu}.png`
    }else if (caiu == 'quatro'){
        imag.src = `src/${caiu}.png`
    }else if (caiu == 'cinco'){
        imag.src = `src/${caiu}.png`
    }else if (caiu == 'seis'){
        imag.src = `src/${caiu}.png`
    }



    
    let li = document.createElement('li')
    let img = document.createElement('img')
    img.src = `src/${caiu}.png`
    ul.appendChild(li)
    li.innerHTML = `Rolada ${quant}:`
    li.appendChild(img)
    li.style.backgroundColor = 'rgba(235, 235, 235, 1)'

    res.appendChild(ul)


}

