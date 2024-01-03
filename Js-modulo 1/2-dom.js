//Criei uma variavel com const usando o ID
//Um elemento pdoe ter um ID apenas
const input = document.getElementById("main-input")
//Mostrando o input no console do navegador
console.log(input)

//Usando class
//uma mesma classe pode ser usado em quantos elementos eu quiser
const paragraph = document.getElementsByClassName("paragraph-js")
console.log(paragraph)

//tagName, vai me mostrar neste exemplo todos os paragrafos. Poderia usar o h1 ou button, input, etc...
const tag = document.getElementsByTagName("p")
console.log(tag)

//name, trás todos os elementos com esse name
//por exemplo, usamos quando fazemos um formulário, onde temos nome, endereço e etc...
const element = document.getElementsByName("nome")
console.log(element)

//querySelector
//ele só tras um elemento e o primeiro que ele encontra
//se procurar por tag, como no caso "p" ele vai só puxar o primeiro
//tambem podemos procurar por ID "#main-input", NAME "", CLASS ".paragraph-js" ou "tag.nomeDaClasse"
const callQuery = document.querySelector("button.abacate")
console.log(callQuery)

//querySelectorAll
//seleciona toda a familia

const all = document.querySelectorAll("p")
console.log(all)




        /* FINALIZADO PARTE DE SELETORES*/
        /* Agroa veremos algumas aplicações*/

const trade = document.querySelector("#main-input")

/*trade.placeholder = "Trocado texto JS"
console.log(trade.value) //pegar um valor dentro de algo*/

//trade.value = 2000 //pegar valor
console.log(trade.value) 

const image = document.querySelector("img")
//retorna o src no console
//image.src = "./foto2.png" //caso eu queira trocar valor
console.log(image.src)

        /*Alterando e acessando textos */

//textContent -> pega todo o conteudo
//innerText -> pega apenas o texto
//innerHTML -> permite adicionar HTML e texto

const texto = document.querySelector(".paragraph-js")

//texto.innerText = "O novo texto" //troca o texto

texto.innerHTML = "O novo <b>texto</b>" //adicionnar HTML

console.log(texto.textContent) // só HTML desconsiderando o css 
console.log(texto.innerText) // leva em conta o CSS //Mude a variavel 'texto' para "paragraph" pois o segundo paragrafo está escondido com style no HTML
console.log(texto.innerHTML) // trás tudo e permite adicioanr HTML


const botao = document.querySelector("button.abacate")

//botao.style.color = "black"
//botao.style.backgroundColor = "#984560" //Detalhe que vocÊ não pode deixar igual, pois o " - " aqui no JS é usado para separar e não funciona. Por isso é utilizado letras coladas separando por maisculas
botao.style.fontSize = "10px"


        /*Eventos*/
//evento são como hover ou active de passar o mouse por cima ou clicar. Todos eventos começa com on

const mostrandoInput = document.querySelector("#main-input")
const paragrafoTrocado = document.querySelector(".paragraph")

function clickNoBotao(){
    
    const textoDoInput = document.querySelector("#main-input").value
    console.log(textoDoInput)
    paragrafoTrocado.innerText = ` aqui:${textoDoInput}`
    paragrafoTrocado.style.visibility = "visible"
     
}
/*
function digiteiNoInput(){
    console.log(mostrandoInput.value)
}*/

