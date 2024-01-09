const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scrissors = document.querySelector('#scrissors')
const myCountDisplay = document.querySelector('#myCountDisplay')
const pcCountDisplay = document.querySelector('#pcCountDisplay')

let myCount = 0
let pcCount = 0

let optionsGame = ['rock', 'paper', 'scrissors']
function generate() {

    let finalName = optionsGame[Math.floor( Math.random() * optionsGame.length )]

    return finalName
}

const gameRock = () => {
    const value = generate()
    switch (value) {
        case 'rock':
            alert(`Maquina jogou PEDRA! Empate!`)
        break;
        case 'paper':
            alert(`Maquina jogou PAPEL! Você perdeu!`)
            
            pcCountDisplay.innerHTML = ++pcCount
        break;
        case 'scrissors':
            alert(`Maquina jogou TESOURA! Você ganhou`)
            
            myCountDisplay.innerHTML = ++myCount
        break;
        default:
            break;
    }
} 

const gamePaper = () => {
    const value = generate()
    switch (value) {
        case 'paper':
            alert(`Maquina jogou PAPEL! Empate!`)
        break;
        case 'scrissors':
            alert(`Maquina jogou TESOURA! Você perdeu!`)
            
            pcCountDisplay.innerHTML = ++pcCount
        break;
        case 'rock':
            alert(`Maquina jogou PEDRA! Você ganhou`)
            
            myCountDisplay.innerHTML = ++myCount
        break;
        default:
            break;
    }
} 
const gameScrissors = () => {
    const value = generate()
    switch (value) {
        case 'scrissors':
            alert(`Maquina jogou TESOURA! Empate!`)
        break;
        case 'rock':
            alert(`Maquina jogou PEDRA! Você perdeu!`)
            
            pcCountDisplay.innerHTML = ++pcCount
        break;
        case 'paper':
            alert(`Maquina jogou PAPEL! Você ganhou`)
            
            myCountDisplay.innerHTML = ++myCount
        break;
        default:
            break;
    }
} 

rock.addEventListener('click', gameRock)
paper.addEventListener('click', gamePaper)
scrissors.addEventListener('click', gameScrissors)
