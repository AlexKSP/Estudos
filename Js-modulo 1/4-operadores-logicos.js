//Math
//Math.floor(Math.random() * (max - min + 1)) + min

    //arredondar
const x = 1.2
const y = Math.floor(x)
const z = Math.ceil(x)
console.log(y, z)

    //Operadores logicos
/*
        E
    true && true = true
    true && false = false
    false && false = false

        Ou
    true || true = true
    true || false = true
    false || false = false

        Negação
    !true = false
    !false = true
*/

const digitarASenha = true
const digitarOToken = true
const numeroDaConta = true

//pense no seguinte, vocÊ precesa fazer um sistema de login, e apessoa tem de digitar umas dessas informações de forma correta. Então se uma dessas informalções for verdadeira, será possivel logar. Porém se quiser aumentar a seguraça, deixe mais de um campo obrigatório com &&.

if (digitarASenha || digitarOToken || numeroDaConta) {
    console.log('Logando com sucesso')
} else {
    console.log('Autenticação FALHOU')
}

/*  Operadores type of e delete

typeof -> Tipo de dado
delete

*/

const myObject = {
    name: "Alex",
    age: 25,
    address: "Casa"
}
//ele qual é o tipo
//console.log( typeof myObject)

//ele deleta
delete myObject.address

console.log(myObject)

//  Operador ternario
/* 
Operador ternario só funciona se for digitado em uma linha só, e é para retornos simples.

    ? if (se)
    : else (se não)
    && (if sem else)

    pesquise sempre a estrutura no google

*/
const salary = 5000
//            &&
salary < 3000 ? console.log('colaborador ué jUNIOR') : console.log('Ele é senior')

// swith case

/* cara padrão dele
switch (key) {
    case value:

        break;

    default:
        break;
}
*/

const temperature = 30

switch (temperature) {
    case 10:
        console.log('ta meio frio')
        break

    case 20:
        console.log('Tameio quente')
        break

    case 30:
        console.log('quente')
        break

    default: //caso nenhum dos valores sejam um dentro dos cases, ele cai no default
        console.log('Não sei te dizer')
        break
}

/*
    setTimeout -> executa uma vez
    setInterval -> executa infinitas linhas
        clarInterval -> vai pausar o setInterval
    vai que tenho varios set interval, e preciso pausar. Mas qual deles vou pausar ? por isso colocamos em uma variavel
*/

//  '() =>' uma forma moderna de escrever 'function ()'
/*setTimeout(() => {
    alert('3 segundos')
}, 3000); //ele conta em milesegundos*/

//      mesma forma de escrever
/*setTimeout(function() {
    alert('oi')
}, timeout);*/

/*function myFunction() {
    alert('oi')
} setTimeout(myFunction, timeout);
*/

//let number = 0

//      ele não para nunca de contar.
/*setInterval(() => {
    console.log(number++)
}, 1000);
*/

let number = 0
let counter
let h1 = document.querySelector('h1')

function Start(){

    counter = setInterval(function(){
        number++
        h1.innerHTML = number
    }, 1000)
}

function Stop() {
    clearInterval(counter)
}


