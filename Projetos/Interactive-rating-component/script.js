// const rating1 = document.getElementById('1').value
// const rating2 = document.getElementById('2').value
// const rating3 = document.getElementById('3').value
// const rating4 = document.getElementById('4').value
// const rating5 = document.getElementById('5').value

const submit = document.getElementById('submit')
const container = document.querySelector('.container')

function click() {
    const radio = document.querySelector('input[name="radio"]:checked').value

    switch (radio) {
        case 1:
            container.style.backgroundColor = '#FB7413'
            console.log('1')
            break;
        case 2:
            container.style.backgroundColor = '#FB7413'
            console.log('2')
            break;
        case 3:
            container.style.backgroundColor = '#FB7413'
            console.log('3')
            break;
        case 4:
            container.style.backgroundColor = '#FB7413'
            console.log('4')
            break;        
        
        default:
            container.style.backgroundColor = '#FB7413'
            console.log('5')
            break;
    }

    
    

    //console.log(radio)
}

submit.addEventListener('click', click)

function noteStyle() {

}