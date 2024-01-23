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


//forma 1 
// const marketValueOldCompanies = companies.map((company) => {
//     company.marketValue += company.marketValue / 10

//     return company
// }).filter(company => company.foundedOn < 1990).reduce((acc, company) => {
//     return acc + company.marketValue
// }, 0)

//forma 2, que podemos reutilizar em quaquer array
const add10Percent = (company) => {
    company.marketValue += company.marketValue / 10
    return company
}

const filterCompanies = (company) => company.foundedOn < 1990

const reduceCompanies = (acc, company) => acc + company.marketValue

const marketValueOldCompanies = companies
    .map(add10Percent)
    .filter(filterCompanies)
    .reduce(reduceCompanies, 0)

console.log(marketValueOldCompanies)


