function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    
    var txtano = document.getElementById('txtano')
    var ano = Number(txtano.value)
    var res = document.getElementById("res")

    if(ano.length == 0 || ano > anoAtual){
        res.innerHTML = '<br>[ERRO] Verifique os dados e tente novamente!'
    }else{
        var sexo = document.getElementsByName('radsex')
        var idade = anoAtual - ano
        var genero = ''
        var img = document.createElement('img') // Cria um <img> no HTML pelo script.
        img.setAttribute('id', 'foto') // Adiciona um id = 'foto' ao <img>.

        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // CRIANCA
                img.setAttribute('src', 'foto-menino.png')
            }else if (idade < 20){
                // JOVEM
                img.setAttribute('src', 'foto-homem-jovem.png')
            }else if (idade < 50){
                // ADULTO
                img.setAttribute('src', 'foto-adulto.png')
            }else{
                // IDOSO
                img.setAttribute('src', 'foto-idoso.png')
            }
        }else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // CRIANCA
                img.setAttribute('src', 'foto-menina.png')
            }else if (idade < 20){
                // JOVEM
                img.setAttribute('src', 'foto-mulher-jovem.png')
            }else if (idade < 50){
                // ADULTO
                img.setAttribute('src', 'foto-adulta.png')
            }else{
                // IDOSO
                img.setAttribute('src', 'foto-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Temos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}