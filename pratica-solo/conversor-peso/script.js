let txtkg = document.getElementById('kg')
let txtlb = document.getElementById('lb')
let res = document.getElementById('res')



txtkg.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        txtlb.value = ''
        let kg = Number(txtkg.value)
        let converte = kg * 2.20462
        res.innerHTML = ''
        res.innerHTML = `Seu peso em Libra é: ${converte.toFixed(2)}`
    }

})

txtlb.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        txtkg.value = ''
        let lb = Number(txtlb.value)
        let converte = lb * 0.453592
        res.innerHTML = ''
        res.innerHTML = `Seu peso em Quilograma é: ${converte.toFixed(2)}`
    }
})
