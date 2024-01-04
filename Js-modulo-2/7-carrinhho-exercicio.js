const products = [
    {
        name: 'Marcarrão',
        price: 10
    },
    {
        name: 'Molho de tomate',
        price: 5
    },
    {
        name: 'Carne moida (Kg)',
        price: 33
    },
    {
        name: 'Queijo (Kg)',
        price: 90
    },
    {
        name: 'Coca-cola 3L',
        price: 12
    }
]
    
function discount() {
    const product = products
    console.log(product)
    let i = 0
    let myArray = []
    while (i < product.length) {
            
        //Desconto sendo aplicado em cada item do array acima de 30$
        myArray[i] = product[i].price
        if (product[i].price > 30) {
            product[i].price = product[i].price - product[i].price / 10
            myArray[i] = product[i].price
        }
        i++
    }
    return myArray
}

function subTotal() {
    let total = 0
    for (let i=0; i < products.length ;i++) {
        total+=products[i].price // total = total + preço do produto na posição i
        console.log(total + ' - ' + i )
    }
    return total
}

console.log(products[2].price)
const cart = discount()
const total = subTotal()
console.log(products[2].price)
//console.log(total + ' : ' + cart)


