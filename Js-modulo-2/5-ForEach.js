// ForEach(item, index, array)

const users = [
    {
        name: 'Alex',
        phone: '(11) 94245-1596'
    },
    {
        name: 'José',
        phone: '(11) 94515-4698'
    },
    {
        name: 'Thiago',
        phone: '(21) 98561-1234'
    }
]

//forEach precisa de um array para ele rodar
// array.forEach(element => {
    
// });

//Ele acaba sozinh, quando acaba meu array. aqui estou usando somente 1 valor, caso queira usar mais de um é preciso colocar ()
// users.forEach(item => {
//     console.log(item)
// });

// users.forEach((item, index) => {
//     console.log(item) // o que é o index ?
//     console.log(index) // é a posição do meu array
// });

//teceiro, ele nos fornece o array completo

users.forEach((item, index, array) => {
    console.log(index)
    console.log(item)  
    console.log(array) // ele mostra o array completo
});