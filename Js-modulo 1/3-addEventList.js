const input= document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

//select.addEventListener("change")
//seleciono minha variavel/elemento - o meu ouvinte de envento - acção do evento

select.addEventListener("change", function(){
    console.log("Envento chamado")
})

// A estrutura do event list é assim, eu crio uma função sem nome, pois ela já será chamanda quando houver o evento de troca neste caso


// dentro dos parametros/parenteses " () ". nosso evento gera varios dados, e podemos pegar esses dados dentro dos parenteses simplesmente colocando a palavra que você quiser
function troqueiValor (abacate) {
    console.log(abacate)
}
//normalmente as pessoas usan o nome event no lugar do abacate

//aqui vai correr o evento de change, assim que ocorrer, ele chamara a função de troqueiValor, o ele pegara toda lista do evento que ocrre usando o abacate como nome.
select.addEventListener("change", troqueiValor)

input.addEventListener("keypress", troqueiValor)

button.addEventListener("click", troqueiValor)