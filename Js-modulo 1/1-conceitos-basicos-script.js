/*
    string
    numbers
    boolean
    object
    null e undefined
    array começa da posição 0
    if & else - controlador de fluxo
    function

*/

const alex = {
    name: "Alex",
    age: 25,
    adress: {
        street: "Av. do céu",
        number: "321",
        city: "São Paulo",
        state: "SP",
        country: "Brasil"
    }
}

const myArray/*users*/ = [
    {
        name: "Alex",
        age: 25,
        id: null,
    },
    {
        name: "José",
        age: "26",
        id: null,
    }
]

myArray[1].id = 20 //mudei o id dentro do array. const permite eu mudar itens se tiver dentro de um objeto

//console.log(alex.adress.city)

//console.log(myArray[1])

const notaDoAluno = 3
const notaDeCorte = 5

if (notaDoAluno > notaDeCorte) {
    console.log("Parabéns, você passou de ano!")
} else {
    console.log("Infelizmente você não passou na prova.")
}

function nomeNaTela() {
    console.log("Olá mundo!")
}

nomeNaTela() //chamando a funcão