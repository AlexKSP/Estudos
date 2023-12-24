const convertButton = document.querySelector("#convert-button")


function convertValues () {
    const inputCurrencyValue = document.querySelector("#input-value").value
    
    const currencyValueToCovnert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.86

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToCovnert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)//quem eu quero formatar

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

}

convertButton.addEventListener("click", convertValues)