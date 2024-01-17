//pegar o array original e vai reduzir tudo isso a um item só que pode ser gurdado em uma variavel.

/*
    REDUCE
    - Retorna um valor ( pode ser um novo array, um objeto, string, number, etc.)
    - Aceita 4 parâmetros
        - acumulador //obrigatrio
        - valor atual //obrigatorio
        - index
        - array completo

*/

const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce( (acumulador, valorAtual) => {
    return acumulador + valorAtual

}, 0) // ATENÇÃO, é necessário declarar o valor inicial do acumulador, e é onde está esse 0 após as chaves que ele fica

console.log(sum)
//tente entender o que aconteceu

const cart = [
    {productName: 'Tomate', pricePerKg: 8, kg:1},
    {productName: 'Uva', pricePerKg: 5, kg:2},
    {productName: 'Picanha', pricePerKg: 38.9, kg:},
    {productName: 'Ovo', pricePerKg: 1.2, kg:},
    {productName: 'Salcinha', pricePerKg: 0.8, kg:},
]
