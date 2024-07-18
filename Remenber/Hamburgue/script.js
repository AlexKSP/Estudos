const buttonForEach = document.getElementById('buttonForEach')
const buttonMap = document.getElementById('buttonMap')
const buttonReduce = document.getElementById('buttonReduce')
const buttonFilter = document.getElementById('buttonFilter')

const productsVisibilitSwitch = document.getElementById('products')

const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './assets/bacon-egg.png'},
    { name: 'X-Bacon', price: 34, vegan: false, src: './assets/bacon-egg.png'},
    { name: 'X-Vegan', price: 45, vegan: true, src: './assets/bacon-egg.png'},
]

//forEach vai ser para pegar os produtos e após apertar o botão, mostrar todos na tela
function menuForEach(){
    
    menuOptions.forEach(element => {
        
        

        productsVisibilitSwitch.style.visibility = 'visible'
        return document.querySelectorAll('label').innerHTML = element.name
        console.log('forEach ok')
    });

} 

//map fará com que os produtos sejam mostrado, com 10% off
menuOptions.map(item => {

})

// reduce será mostrado em uma tela simples o valor da soma de todos os produtos
menuOptions.reduce(item => {

})

// filter será para puxar os hambuguer vegetárianos
menuOptions.filter(item => {

})

//Ouvintes addEventlistener para cada botão

buttonForEach.addEventListener('click', menuForEach)

//Ao clicar no botão, vai aparecer as opções já formatadas
// CSS vibilit, alterar quando usar o forEach para mostrar os produtos quando clicado

// IDEIA DO CHAT GPT, ACHEI INTERESSANTE A FORMA ED USAR O HIDDEN E VISIBLE
/* Define a variável para armazenar a visibilidade
        let productsVisibilitySwitch = false; // false representa "hidden", true representa "visible"
        
        // Função para alternar a visibilidade
        function toggleVisibility() {
            if (productsVisibilitySwitch) {
                productsSection.style.visibility = 'hidden';
            } else {
                productsSection.style.visibility = 'visible';
            }
            productsVisibilitySwitch = !productsVisibilitySwitch; // Alterna o valor da variável
        }
*/