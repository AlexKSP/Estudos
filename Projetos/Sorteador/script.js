const buttonDraw = document.querySelector('.buttonDraw')
const result = document.querySelector('#result')
const resultDiv = document.querySelector('.divResult')

function draw() {
    const minValue = document.querySelector('.minInput').value
    const maxValue = document.querySelector('.maxInput').value

    const min = Math.ceil(minValue)
    const max = Math.floor(maxValue)
    const resultDraw = Math.floor(Math.random() * (max - min + 1)) + min

    resultDiv.style.visibility = "visible"
    result.innerHTML = resultDraw
}

buttonDraw.addEventListener('click', draw)