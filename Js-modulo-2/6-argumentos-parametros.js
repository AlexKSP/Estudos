

function sayMyName(name) {
    console.log(`o nome é: ${name}`) //console.log(name)
}

//sayMyName() //aqui nos parenteses que normalmente é vazio, podemos coloar uma informação para enviar a função. afinal neste ponto aqui, estamos chamando a função para ser executada. Uma função só é executada quando chamada.
//então eu posso colocar um nome dentro dos parenteses e enviar para minah função e faço o que quiser com esse nome lá dentro.
//Quando uma função espera um parametro, é necessário enviar.

sayMyName('Alex')
sayMyName('Thiago')
sayMyName('José')

//vou fazer uma somatória, pois algo que não da para fazer é enviar dois parametros, enquanto, a função espera somente um:
//function sayMyName(name) {
//     console.log(`o nome é: ${name}`) //console.log(name)
// }
// sayMyName('Alex', 'Thiago')

function sum(value, value2){
    console.log(value + value2)
}

sum(20, 30)
sum(30,10)


// Outra coisa, se eu uso o primeiro exemplo, onde envio uma função vazia, ele vai me retornar undefined. Porém para evitar que apareceça undefined, posso colocar um valor padrão. Sendo que quando não receber nada, esse valor será mostrado

function sayMyName2(name = 'alex'){
    console.log(name)
}

sayMyName2()
sayMyName2('Thiago') //quando envio a informação, ele é prioridade

//Posso até criar uma variavel "myName = 'José' "e como default name = myName