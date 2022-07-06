//**********************Exercicios*************************

/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numerico para sistema de notas em caracteres tipo A B C

* de 90 para cima  - A
* entre 80 - 89    - B
* entre 70 - 79    - C
* entre 60 - 69    - D
* menor que 60     - F

*/
let numericGrade = 50;

function convertGrade(numericGrade) {

    let gradeA = numericGrade >= 90 && numericGrade <= 100;
    let gradeB = numericGrade >= 80 && numericGrade <= 89;
    let gradeC = numericGrade >= 70 && numericGrade <= 79;
    let gradeD = numericGrade >= 60 && numericGrade <= 69;
    let gradeF = numericGrade < 60 && numericGrade >= 0;

    let conceitualGrade;

    if (gradeA) {
        conceitualGrade = 'A';
    } else if (gradeB) {
        conceitualGrade = 'B';
    } else if (gradeC) {
        conceitualGrade = 'C';
    } else if (gradeD) {
        conceitualGrade = 'D';
    } else if (gradeF) {
        conceitualGrade = 'F';
    } else {
        conceitualGrade = 'Informe uma nota de 0 a 100';
    }
    return conceitualGrade
}

console.log('Nota ' + numericGrade + ' equivale ao conceito ' + convertGrade(numericGrade));