// arrow function é uma forma de escrever function mais resumidamente

//Não escrevemos mais o "function", usamos o sinal => pra cria-lá

function sayMyName(name){
    return `Seu nome é ${name}`
}

// arrow function vai ser guardada dentro de uma variavel
//Alem de que, se voccê usar uma linha cmo no exemplo abaixo, não precisa digitar "return" pois ele já vai fazer isso.
const sayMyName2 = (name) => `Seu nome é ${name}`

console.log(sayMyName('Alex'))
console,log(sayMyName2('Rodolfo'))