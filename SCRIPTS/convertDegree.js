/* ### Celcius em Fahrenheit

    Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma para outra:

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/

function convertDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
    let degreeSign = 'ºC'

    // fluxo alteranativo: C -> F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9 / 5 + 32;
        degreeSign = 'ºF'
    }
    return formula(updatedDegree).toFixed(1) + degreeSign
}

try {
    console.log(convertDegree('120f'))
    //convertDegree('50z')
} catch (error) {
    console.log(error.message)
}