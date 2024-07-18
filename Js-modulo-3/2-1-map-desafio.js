const students = [
    {name: 'Alex', testGrade: 7},
    {name: 'José', testGrade: 6},
    {name: 'Rafael', testGrade: 8},
    {name: 'Thiago', testGrade: 3},
    {name: 'Mara', testGrade: 4},
    {name: 'Beatriz', testGrade: 5},
]

//assessment = avaliação
const assessment = students.map( item => {
    return {
        name: item.name,
        result: item.testGrade >= 6 ? 'Passed' : 'Not passed'
    }
} )

console.log(assessment)