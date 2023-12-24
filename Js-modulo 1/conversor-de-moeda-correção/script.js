const convertButton = document.querySelector("#convert-button")


function convertValues () {
    const inputCurrencyValue = document.querySelector("#input-value").value

    const dolarToday = 4.86

    const convertedValue = inputCurrencyValue / dolarToday


    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)