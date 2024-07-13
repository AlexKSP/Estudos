const result = document.getElementById('result')


function switchCoin(){
    const inputValue = document.getElementById('inputValue').value
    const thisTo = document.getElementById('this-to').value
    const toThis = document.getElementById('to-this').value


    if (inputValue == '') {

        console.log('vazio')

    } else if (thisTo === toThis) {

        console.log('elementos iguais')

    } else if (thisTo == 'REAL' && toThis == 'DOLAR') {

        result.innerHTML = `$ ${inputValue*5.46.toFixed(2)}`
        console.log('real para dolar')

    } else if (thisTo == 'REAL' && toThis == 'EURO') {

        result.innerHTML = `€ ${inputValue*5.92}`
        console.log('real para euro')

    } else if (thisTo == 'DOLAR' && toThis == 'REAL') {

        result.innerHTML = `R$ ${inputValue*5.46}`
        console.log('dolar para real')

    } else if (thisTo == 'DOLAR' && toThis == 'EURO') {
        
        let x = inputValue*0.92
        result.innerHTML = `€ ${x.toFixed(2)}`
        console.log('dolar para euro')

    } else if (thisTo == 'EURO' && toThis == 'REAL') {

        result.innerHTML = `R$ ${inputValue*5.92}`
        console.log('euro para real')

    } else if (thisTo == 'EURO' && toThis == 'DOLAR') {

        result.innerHTML = `$ ${inputValue*1.08}`
        console.log('euro para dolar')

    } else {
        console.log('[ERRO]')
    }

    

}

function toConvert() {
    switchCoin()
}

/*thisTo.addEventListener("change", toConvert)
toThis.addEventListener("change", toConvert)*/
