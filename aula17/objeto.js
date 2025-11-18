/*
    ARRAY:  let pessoa = []
    OBJECT: let pessoa = {nome: '', idade: '' ...}


    let pessoa = {nome: '', sexo: ''}

    pessoa.nome = 'Brenno'
    pessoa.sexo = 'M'

    console.log(pessoa)
*/

let pessoa = {nome: 'Brenno', sexo: 'M', peso: 86.2, 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }}

    pessoa.engordar(2)
    console.log(`${pessoa.nome} pesa ${pessoa.peso} kg.`)