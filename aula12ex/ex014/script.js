function carregar(){
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    

    if (hora >= 0 && hora < 12){
        img.src = 'foto-manha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Agora são ${hora}:${min}.`
        msg2.innerHTML = `Bom dia`
    }else if (hora >= 12 && hora < 18){
        img.src = 'foto-tarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Agora são ${hora}:${min}.`
        msg2.innerHTML = `Boa tarde`
    }else{
        img.src = 'foto-noite.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora são ${hora}:${min}.`
        msg2.innerHTML = `Boa noite`
    }
}



