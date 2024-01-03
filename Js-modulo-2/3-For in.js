const users = {name: 'Alex', age: 25, street: 'av.capitão'}

// com FOR Of não da para inteirar objetos, com FOR IN sim.

// for (const key in users) {
//     console.log(key)
// }

// existe mais de uma maneira para acessar informações do objeto
// console.log(users.name)
// console.log(users['name']) //fazendo desta forma temos uma ferramenta a mais

for (const key in users) {
    console.log(key + ' : ' + users[key])
    //ou
    console.log(`${key} : ${users[key]}`) //mas profissional
}