//forEach vai ser para pegar os produtos e após apertar o botão, mostrar todos na tela
function menuForEach(produtsArray){
    let myDiv = ''

    menuOptions.forEach((element) => {
        myDiv += `
        <div class="product">
                <div class="box-img">
                    <img src=${element.src} alt="X-bacon">
                </div>
                <label><h3 id="name">${element.name}</h3>
                    <p id="price">R$ ${element.price}</p>
                </label>
                <button>Comprar</button>
            </div>` 
        
    });
    productsVisibilitSwitch.innerHTML = myDiv
} 


//map fará com que os produtos sejam mostrado, com 10% off
function menuMap (){

    const newPrices = menuOptions.map((product) => ({
            ...product, //Spred operator, basicamente meu array é jogado e só o que eu declarar a seguir será alterado, sem precisar declarar name, src e etc toda vez.
            price: product.price * 0.9, //10% off
    }))
    
    menuForEach(newPrices)
}

// reduce será mostrado em uma tela simples o valor da soma de todos os produtos

function menuReduce() {
    const allSumProducts = menuOptions.reduce((acc, item) => {
        
        return acc + item.price
    },0)
    let myDiv = `
    <div class="product">
        <label><h3 id="name">Soma de todos os produtos</h3>
            <p id="price">R$ ${allSumProducts}</p>
        </label>
        <button>Comprar</button>
    </div>`
    productsVisibilitSwitch.innerHTML = myDiv
    
}


// filter será para puxar os hambuguer vegetárianos

function menuFitler(){
    
    const filterAll = menuOptions.filter((item) => item.vegan) // mesma coisa de if(item.vegan == true) pois
    menuForEach(filterAll)
}

//Ouvintes addEventlistener para cada botão

buttonFilter.addEventListener('click', menuFitler)
buttonReduce.addEventListener('click', menuReduce)
buttonMap.addEventListener('click', menuMap)
buttonForEach.addEventListener('click', () => menuForEach(menuOptions))
//caso eu não use a função anonima, ou arrow function desta forma, e coloque o menuForEach(menuOptions) toda vez que iniciar a pagina ele vai chamar sozinho a função, por isso que só vai ser chamado quando clicar devido a função anonima;

