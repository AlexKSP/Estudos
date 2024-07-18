const myCountDisplay = document.querySelector('#myCountDisplay')
const pcCountDisplay = document.querySelector('#pcCountDisplay')
const result = document.querySelector('.result')

let myCount = 0
let pcCount = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scrissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {


    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine){
        result.innerHTML = 'Deu empate!'
    } else if (
        human === 'paper' && machine === 'rock' || 
        human === 'rock' && machine === 'scrissors' || 
        human === 'scrissors' && machine === 'paper'
    ) {
        myCountDisplay.innerHTML = ++myCount
        result.innerHTML = 'Você ganhou!'
    } else {
        pcCountDisplay.innerHTML = ++pcCount
        result.innerHTML = 'Você perdeu!'
    }
}