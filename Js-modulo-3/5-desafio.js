const companies = [
    { name:'Samsung', marketValue: 50, CEO:'Kim Hyun Suk', foundedOn: 1938},
    { name:'Microsoft', marketValue: 415, CEO:'Satya Nadella', foundedOn: 1975},
    { name:'Intel', marketValue: 117, CEO:'Brian Krzanich', foundedOn: 1968},
    { name:'Facebook', marketValue: 383, CEO:'Mark Zuckerberg', foundedOn: 2004},
    { name:'Spotify', marketValue: 30, CEO:'Daniel Ek', foundedOn: 2006},
    { name:'Apple', marketValue: 845, CEO:'Tim Cook', foundedOn: 1976}
]

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundadas abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes -> Reduce

const companiesNewMarketValue = companies.map( newMarketValue => {
    newMarketValue.marketValue += (newMarketValue.marketValue * 0.1) 

    return newMarketValue 
})

const foundedOnCompanies = companiesNewMarketValue.filter((companies) => {
    if(companies.foundedOn > 1990) return true
    else return false
})

const subTotalCompanies = foundedOnCompanies.reduce( (acc, presentValue)  => {
    return presentValue.marketValue + acc
},0)

//console.log(companiesNewMarketValue)

console.log(foundedOnCompanies)


console.log(subTotalCompanies)