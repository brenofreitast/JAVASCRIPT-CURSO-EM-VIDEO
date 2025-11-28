let assista = document.getElementById('assista')
let popUp = document.getElementById('popUp')
let close_pp = document.getElementById('close-pp')
let video = document.getElementById('video')

assista.addEventListener('click', ()=>{
    popUp.style.display = 'flex'
})

close_pp.addEventListener('click', ()=>{
    popUp.style.display = 'none'
    video.pause()
    video.currentTime = 0
})