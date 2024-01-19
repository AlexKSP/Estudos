//filtra o array

const list = [20, 100, 223, 20, 56, 125, 12]


//Quero numeros acima de 100 sejam adicionados ao meu novo array
const newList = list.filter( number => {
    //econimizar linhas com o if
    //Se o numero for maior que 100 ele vai retornar verdade, um numero real, se for falso, ele não adicionara.
    if(number > 100) return true
    else return false
})

//Outra forma de economizar ainda mais linhas com o mesmo exemplo
//const newList = list.filter( number => number > 100 ) //ele vai retornar true se for maior que 100

console.log(newList)

/*
 const novaArray = arrayOriginal.filter((valorAtual, indice, arrayOriginal) => {
			seu código aqui
});

	1) O filter vai passar por todos os itens do array, e o primeiro parâmetro é 
cada item, um por vez do array que estamos filtrando. Item OBRIGATÓRIO.
	2) O indíce é a posição atual que estamos filtrando. Item OPCIONAL.
	3) Uma cópia do array original. Item OPCIONAL.

	A cada item, fazemos uma 'pergunta' ao código. Se a resposta for verdadeira 
naquele item, ele guardará o valorAtual no novo array. Caso seja falso, o valor 
será descartado */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(valorAtual => valorAtual % 2 === 0 );

// pares ficou assim... [2, 4, 6, 8, 10];
// numbers continua...   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];