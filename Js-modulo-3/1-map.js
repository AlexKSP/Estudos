/*
        MAP => Mapear o nosso array.
            - Criar um novo array, a partir do percorrido (array original)
            - Criar um novo array, com a mesma quantidade de itens do array original
            - Aceita 3 parâmetros
                - Item do array
                - Index
                - array completo
*/

const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map( item /*, index, array)*/ => {
    const newItem = item * 2

    return newItem
})

//resumindo

const triple = number.map( item => item -1 ) //por estar tudo em uma só linha ele não precisa do return

console.log(triple)
console.log(double)