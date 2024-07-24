//forEach vai ser para pegar os produtos e após apertar o botão, mostrar todos na tela
function menuForEach(){
    let myDiv = ''
    const newMenu = menuOptions.forEach(element => {
        
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
    let value = 0
    let myDiv = ''
    const discount = menuOptions.map(item => {
            value = item.price - (item.price / 10)
            myDiv += `
            <div class="product">
                <div class="box-img">
                    <img src=${item.src} alt="X-bacon">
                </div>
                <label><h3 id="name">${item.name}</h3>
                    <p id="price">R$ ${value}</p>
                </label>
                <button>Comprar</button>
            </div>`
            return myDiv   
    })
    productsVisibilitSwitch.innerHTML = myDiv
}

// reduce será mostrado em uma tela simples o valor da soma de todos os produtos
function menuReduce() {
    const allSumProducts = menuOptions.reduce((acc, item) => {
        
        return acc + item.price
    },0)
    let myDiv = `
    <div class="product">
        <div class="box-img">
            
        </div>
        <label><h3 id="name">Soma de todos os produtos</h3>
            <p id="price">R$ ${allSumProducts}</p>
        </label>
        <button>Comprar</button>
    </div>`
    productsVisibilitSwitch.innerHTML = myDiv
    
}


// filter será para puxar os hambuguer vegetárianos
function menuFitler(){
    let myDiv = ''
    const filterAll = menuOptions.filter(item => {
        if(item.vegan == true) {
            myDiv += `
            <div class="product">
                <div class="box-img">
                    <img src=${item.src} alt="X-bacon">
                </div>
                <label><h3 id="name">${item.name}</h3>
                    <p id="price">R$ ${item.price}</p>
                </label>
                <button>Comprar</button>
            </div>`
        }
        
    })  
    productsVisibilitSwitch.innerHTML = myDiv
    console.log(filterAll)
}

//Ouvintes addEventlistener para cada botão

buttonFilter.addEventListener('click', menuFitler)
buttonReduce.addEventListener('click', menuReduce)
buttonMap.addEventListener('click', menuMap)
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