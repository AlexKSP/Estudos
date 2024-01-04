const cart = [10, 244, 100, 2, 30, 25, 250]
let finalValueWithDiscount = 0

function calculateDiscount(price, discount){
    const result = (price * discount) / 100
    return result
}

cart.forEach((value) => {

    if (value > 30){
        const discount = calculateDiscount(value, 10)
        finalValueWithDiscount += (value - discount)
    } else {
        finalValueWithDiscount += value
    }

});
//arrume o console log de forma formal informando ao cliente, o valor final, o valor com desconto, e quanto ele economizou. toFixed(2)
console.log(finalValueWithDiscount)