// VARIAVEIS COMPOSTAS - ARRAYS - VETORES

/*
    let num =  ['ola', 1, 'dois', 3]
    console.log(`${num} `)

    num[4] = 'quatro'
    console.log(`${num} `)

    num.push(5)
    console.log(`${num} `)

    num.sort()
    console.log(num)
    console.log(`O vetor tem ${num.length} posiçoes.`)
*/


let numero = [11, 25, 33, 46, 57]

/*
    for (let i = 0; i < numero.length; i++){
        console.log(`Posição ${i} tem o valor = ${numero[i]}.`)
    }
*/

// FOR SIMPLIFICADO - FUNCIONA APENAS COM ARRAYS E OBJETOS

for (let i in numero){  // PARA CADA INDICE (POSICAO) NA VARIAVEL numero FAÇA {...}
    console.log(`Posição ${i} tem o valor = ${numero[i]}.`)
}


console.log(numero.indexOf(46)) // .indexOf() -> Busca por um valor dentro de uma array e retorna índice do valor.
//  CASO O VALOR NAO EXISTA NA ARRAY, -1 SERÁ RETORNADO.

let pos = numero.indexOf(200)
if (pos == -1){
    console.log('Valor não encontrado.')
}else{
    console.log(`O valor está na posição ${pos}`)
}