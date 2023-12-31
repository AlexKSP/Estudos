// const rating1 = document.getElementById('1').value
// const rating2 = document.getElementById('2').value
// const rating3 = document.getElementById('3').value
// const rating4 = document.getElementById('4').value
// const rating5 = document.getElementById('5').value

const submit = document.getElementById('submit')

function click() {
    const radio = document.querySelector('input[name="radio"]:checked').value

    

    console.log(radio)
}

submit.addEventListener('click', click)

function noteStyle() {

}