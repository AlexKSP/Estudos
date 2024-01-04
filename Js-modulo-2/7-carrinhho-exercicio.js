const cart = [10, 244, 100, 2, 30, 25, 250]
let finalValueWithDiscount = 0
let totalValueCart = 0
let discountRecebi = 0

function calculateDiscount(price, discount){
    const result = (price * discount) / 100
    return result
}

function sumTotalCart() {
    const result = totalValueCart - finalValueWithDiscount
    return result 
}

cart.forEach((value) => {
    totalValueCart += value
});


cart.forEach((value) => {

    if (value > 30){
        const discount = calculateDiscount(value, 10)
        finalValueWithDiscount += (value - discount)
    } else {
        finalValueWithDiscount += value
    }

});


//arrume o console log de forma formal informando ao cliente, o valor final, o valor com desconto, e quanto ele economizou. toFixed(2)
console.log(`O valor da compra ficou em R$ ${totalValueCart.toFixed(2)} ; Com o desconsto nos produtos acima de R$ 30,00 ficou : R$ ${finalValueWithDiscount.toFixed(2)} ; Você economizou R$ ${sumTotalCart().toFixed(2)}`)