let txtcelsius = document.getElementById('celsius')
let txtfahrenheit = document.getElementById('fahrenheit')
let txtkelvin = document.getElementById('kelvin')
let n

txtcelsius.addEventListener('keydown', function(event) {
    if(event.key == 'Enter'){
        event.preventDefault()
        n = Number(txtcelsius.value)
        txtfahrenheit.value = celsiusToFahrenheit(n).toFixed(2)
        txtkelvin.value = celsiusToKelvin(n).toFixed(2)
    }
})

txtfahrenheit.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        event.preventDefault()
        n = Number(txtfahrenheit.value)
        txtcelsius.value = fahrenheitToCelsius(n).toFixed(2)
        txtkelvin.value = fahrenheitToKelvin(n).toFixed(2)
    }
    
})

txtkelvin.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        event.preventDefault()
        n = Number(txtkelvin.value)
        txtcelsius.value = kelvinToCelsius(n).toFixed(2)
        txtfahrenheit.value = kelvinToFahrenheit(n).toFixed(2)
    }
})


function celsiusToFahrenheit(n){
    return (n*9/5)+32
}

function celsiusToKelvin(n){
    return n+273.15
}

function fahrenheitToCelsius(n){
    return (n-32)*5/9
}

function fahrenheitToKelvin(n){
    return (n-32)*5/9+273.15
}

function kelvinToCelsius(n){
    return n-273.15
}

function kelvinToFahrenheit(n){
    return (n-273.15)*9/5+32
}
