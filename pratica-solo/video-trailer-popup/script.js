let video = document.getElementById('assistir')
let meuVideo = document.getElementById('meuVideo')
let closeButton = document.getElementById('closePopup')
let popup = document.getElementById('videoPopup')

video.addEventListener('click', ()=>{
    popup.style.display = 'flex'
})

closeButton.addEventListener('click', ()=>{
    popup.style.display = 'none'
    meuVideo.pause()
    meuVideo.currentTime = 0
})
