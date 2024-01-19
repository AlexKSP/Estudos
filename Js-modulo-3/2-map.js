const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map( item => item * 2)

const list = [
    {name: 'Alex', vip: true},
    {name: 'José', vip: true},
    {name: 'Rafael', vip: false},
    {name: 'Thiago', vip: false},
    {name: 'Manolo', vip: true},
    {name: 'Sono', vip: false},
]

//fazer o que o valor do map mude, se for true, a pulseira vai ser 'black' e se for false 'green'. Usando o map para criar uma nova lista



        /*minha forma de fazer:*/
// const bracelet = list.map(item => {

//     const newItem = item
//     if(newItem.vip){
//         newItem.vip = 'black'
//     } else {
//         newItem.vip = 'green'
//     }
    
//     return newItem
// })

// console.log(bracelet)
// console.log(' ')
// console.log(list)





        /*curso, usando ternario.*/

// const newList = list.map( user => {
//     const newUser = {
//         name: user.name,
//         braceletColor: user.vip ? 'black' : 'green'
//     }

//     return newUser
// })

//console.log(newList) 




      
            /*segunda forma do curso, com if [errado ?]*/

// const newSecondList = list.map( user => {
//     let braceletColor

//     if(braceletColor === true){
//         braceletColor = 'black'
//     } else {
//         braceletColor = 'green'
//     }
    
//     const newUser = {
//         name: user.name,
//         braceletColor: braceletColor
//     }

//     return newUser
// })

//console.log(newSecondList)





        /*teceira forma com terniario e return*/
const newThirdList = list.map( user => {
    return {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }
})

console.log(newThirdList)


/*
 O Map aceita até 3 parâmetros:

const novoArray = arrayOriginal.map((valorAtual, indice, arrayOriginal) => xxx )


	1) O Map vai passar por todos os itens do array, e o primeiro parâmetro é cada item, um por vez do array que estamos mapeando. Item OBRIGATÓRIO.
	2) O indíce é a posição atual que estamos mapeando. Item OPCIONAL.
	3) Uma cópia do array original. Item OPCIONAL.

*/