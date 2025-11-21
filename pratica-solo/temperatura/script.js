let txtcelsius = document.getElementById('celsius')
let txtfahrenheit = document.getElementById('fahrenheit')
let txtkelvin = document.getElementById('kelvin')

celsius.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        event.preventDefault()
        let celsius = Number(txtcelsius.value)
    }
})