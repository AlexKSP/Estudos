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

const bracelet = list.map(item => {

    if(item.vip){
        item.vip = 'black'
    } else {
        item.vip = 'green'
    }
    
    return item
})

console.log(bracelet)
console.log(' ')
console.log(list)