/*
        ENUM
    Imagine para da palavra 'rock', um dia eu decida mudar, e teria de mudar uma por uma... chato né
    ENUM server para resovler esse problema, ele nada mais é que uma variavel que vai guarda essas informações e será somente chamar essas variaveis

*/



const myCountDisplay = document.querySelector('#myCountDisplay')
const pcCountDisplay = document.querySelector('#pcCountDisplay')
const result = document.querySelector('.result')

let myCount = 0
let pcCount = 0

/**
    o que é esse formato de variavel que usamos, pela forma que escrevemos:
    myCount         -> Camel Case = 'corcunda do camelo' pois a cada palavra digitada, é adicionado uma letra maiscula, fazendo referencia ao camelo

    GAME_OPTIONS    -> Snake Case = 'cobra' pois são separados pelo ' _ '

*/


//Exemplo
//ENUM são escrito desta forma em caixa alta e separados pelo ' _ '
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER:  'paper',
    SCRISSSORS: 'scrissors'
}


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCRISSSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {


    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if (human === machine){
        result.innerHTML = 'Deu empate!'
    } else if (
        human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK || 
        human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCRISSSORS || 
        human === GAME_OPTIONS.SCRISSSORS && machine === GAME_OPTIONS.PAPER
    ) {
        myCountDisplay.innerHTML = ++myCount
        result.innerHTML = 'Você ganhou!'
    } else {
        pcCountDisplay.innerHTML = ++pcCount
        result.innerHTML = 'Você perdeu!'
    }
}

playHuman('rock')