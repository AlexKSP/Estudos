const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')

const playerPoint = document.getElementById('playerPoint')
const pcPoint = document.getElementById('pcPoint')
const result = document.getElementById('result')

let pcPoints = 0
let playerPoints = 0

// capturar o valor inserido, comparar ele, e definir quem ganha, perde e empata

rock.addEventListener('click', rockChoice)
paper.addEventListener('click', paperChoice)
scissor.addEventListener('click', scissorChoice)

//se apertar pedra
function rockChoice(){
    //comparar, sortear
    const pcResult = getRandom()
    console.log(`PC result : ${pcResult}`)
    const compResult = comp('rock', pcResult)
    count(compResult, pcResult)
}
//se apertar papel
function paperChoice(){
    
    const pcResult = getRandom()
    console.log(`PC result : ${pcResult}`)
    const compResult = comp('paper', pcResult)
    count(compResult, pcResult)
}
//se apertar tesoura
function scissorChoice(){

    const pcResult = getRandom()
    console.log(`PC result : ${pcResult}`)
    const compResult = comp('scissor', pcResult)
    count(compResult, pcResult)
}

//Radom 
function getRandom() {
    const minCeiled = Math.ceil(1)
    const maxFloored = Math.floor(4)
    const result = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)

    //alterar valor por nome, porém tem forma mais simples de ter feito isso com um arry = let finalName = optionsGame[Math.floor( Math.random() * optionsGame.length )]
    if (result == 1) {
        return 'rock'
    } else if (result == 2) {
        return 'paper'
    } else if (result == 3) {
        return 'scissor'
    } else {
        return alert('Erro [function getRandom()]')
    }
  }

  //comparar resultado
function comp(player, pc){
    if(player == pc) {
        return 'empate'
    } else if (player == 'rock' && pc != 'rock' && pc == 'paper') {
        return 'perdeu'
    } else if (player == 'paper' && pc != 'paper' && pc == 'scissor') {
        return 'perdeu'
    } else if (player == 'scissor' && pc != 'scissor' && pc == 'rock') {
        return 'perdeu'
    } else {
        return 'ganhou'
    }
}

//Contador
function count(item, resul) {
    //trocar o nome para na hora que mostrar
    if(resul == 'rock') {
        resul = 'pedra'
    } else if (resul == 'paper') {
        resul = 'papel'
    } else {
        resul = 'tesoura'
    }
    
    if('ganhou' == item) {
        
        playerPoint.innerHTML = ++playerPoints
        return result.innerHTML = `Pc jogou ${resul}, você ganhou!`

    } else if ('perdeu' == item) {
        
        pcPoint.innerHTML = ++pcPoints
        return result.innerHTML = `Pc jogou ${resul}, você perdeu!`

    } else {
        return result.innerHTML = `Pc jogou ${resul}, empate.`
    }
} 

/* Ideia com switch
switch (item2) {
    case 'rock':
        if(item){
            console.log('true')
        } else {
            console.log('false')
        }
        break;
    case 'paper':

        break;
    case 'scissor':

        break;
    default: 
    return 'Erro'
}
*/