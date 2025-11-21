let txtcelsius = document.getElementById('celsius')
let txtfahrenheit = document.getElementById('fahrenheit')
let txtkelvin = document.getElementById('kelvin')
let converteC
let converteF
let converteK

txtcelsius.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        event.preventDefault()
        let celsius = Number(txtcelsius.value)
        txtfahrenheit.innerText = convertCelsius(celsius)
    }
    
})

txtfahrenheit.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        event.preventDefault()
        let fahrenheit = Number(txtfahrenheit.value)
    }
})

txtkelvin.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        event.preventDefault()
        let kelvin = Number(txtkelvin.value)
    }
})

function convertCelsius(n){
    return converteF = (n*9/5)+32
}

function convertFahrenheit(n){
    converteC = (n-32)*5/9
    converteK = (n-32)*5/9+273.15
}

function convertKelvin(n){
    converteC = n-273.15
    converteF = (n-273.15)*9/5+32
}