//push vai adicionar mais um item ao nosso array

const myArray = [1, 2, 3]

myArray.push(4)

//console.log(myArray)
//console.log(myArray.length)

//sort organiza meu array

const myDesornerArray = ['limão', 'abóbora', 'caqui']

myDesornerArray.sort()

//console.log(myDesornerArray)

//delete vai deletar algum item do meu array

delete myDesornerArray[1]

// ele apaga o item mas deixa a posição como vazio

//console.log(myDesornerArray)

//every, veriica se nosso array passa por uma determinada veriicação

const users = [
    {name: 'Maria', credit:600 },
    {name: 'Nico', credit:900 },
    {name: 'Joana', credit:300 },
    {name: 'Vanessa', credit:200 },
]
//vou perguntar ao every e ele vai me responder apenas com true ou false
// todos o usuaris tem mais de 100 de credito ?

const isTrue = users.every( user => user.credit > 100 && user.credit < 600)

//console.log(isTrue)

//some, diferente do every ue veriica um por um e retorna true ou false. Some se um só passar ele retorna true

const isSome = users.some( user => user.credit > 100 && user.credit < 600 )

//console.log(isSome)

// fill prenche posições do array como desejamos

const numbers = [1, 2, 3, 4]
// dessa forma ele vai somente preencher todas as informações com esse parametrô
numbers.fill('abacate')

//console.log(numbers)

/*
    1) O que vai ser colocado no array
    2) A posição inicial
    3) Posição final
*/

numbers.fill(3, 0, 2)
//console.log(numbers)

// find, ele vai procurar algo no array e vai te retornar ele (o primiro ue ele encontrar ele devolve)

const findUsers = users.find(user => user.name === 'Maria')
//console.log(findUsers)

// findIndex, parecido com find, porém ele vai me retornar o index do array, enquanto o find retorna o array todo.

const findAUsers = users.findIndex(user => user.name === 'Maria')

//users[findAUsers].name = 'Maria Joauina' // por exemplo, eu quero trocar o nomme em de alguem, pra isso preciso da posição, descorindo o index, podemos trocar o nome como mostrado aqui

//console.log(findAUsers)

//concat, concatena o array

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const number1 = [1, 3, 5]
const number2 = [2, 4, 6]

const array3 = array1.concat(array2)
//console.log(array3)

//join, ele junta todos os elementos de um array, porém ele tira os elementos do array

const elements = ['Fire', 'Water', 'Air']

const myElements = elements.join(' ') // caso ueira separar os elementos por espaços só adicionar (' ')

//console.log(myElements)

// pop, remove o último elemento de uma array
// shift, remove o primeiro elemento de um array

elements.pop()
elements.shift()
//console.log(elements)

// slice, el retorna um novo array, apenas com as informações escolhidas. Não altera o array original
/*
    1- Posição do array da qual vamos começar a pegar as informações para criar o novo array
    2- Posição final do array que vamos pegar os dados
*/

const names = ['ari', 'sora', 'kya', 'soul']

const newNames = names.slice(1, 3)

//console.log(newNames)

// splice, remove ou adiciona elementos em um array em uma posição especifica. Altera o array original

/*
    1- Posiçãi di array da qual vamos começar a tirar as informações
    2- Quantos elementos eu quero retirar a partir da posição inicial
    3- Item que você quer adicionar
*/

const months = ['jan', 'fev', 'mar', 'abr', 'mai']

months.splice(2, 1, 'feb')

console.log(months)