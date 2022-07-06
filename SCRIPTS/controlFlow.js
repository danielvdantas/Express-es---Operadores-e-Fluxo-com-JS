// ********************Control flow************************

// if...else

/* let temperature = 37;
let hightTemperature = temperature >= 38;
let mediumTemperature = temperature < 38 && temperature >=37

if(hightTemperature){
    console.log('Febre Alta!')
} else if (mediumTemperature) {
    console.log('Febre Moderada!')
} else {
    console.log('Saudável')
} */

// *************************switch*************************

/* let expression = 'c'

switch (expression) {
    case 'a':
        //código
        console.log('a')
        break
    case 'b':
        //código para expressão b
        console.log('b')
        break
    default:
        console.log('default')
        break
} */

// ************Exemplo de calculadora usando switch***********

/* function calculate(number1, operator, number2) {
    let result = 0;
    switch(operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
             break
        default:
             console.log('Não Implementado')
             break
    }
    return result;
}
console.log(calculate(4, '%', 8)) */

// ********************throw************************

/* function sayMyName(name = '') {
    if(name == '') {
        // throw new Error("")
        throw "Nome é obrigatório"
    }
    console.log(name)
}

// try...catch
try {
    sayMyName('Daniel')
} catch (e) {
    console.log(e)
}
console.log('Apos o try/catch') */

// ***************Estrutura de repeticao*****************
// for
// break - para a execucao do loop
// continue - pula a execucao do momento

/* for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue
    }
        console.log(i);
} */

// *************************while***********************

/* let i = 49586394505;
while(i > 10) {
    console.log(i);
    i /= 35;
} */

// ***********************for...of**********************

/* let name = 'Daniel';
let names = ['Joao', 'Paulo', 'Pedro'];

for(let char of names) {
    console.log(char)
} */

// ***********************for...in************************

/* let person = {
    name: 'Daniel',
    age: 46,
    weight: 80
}

for( let propety in person) {
    console.log(propety)
    console.log(person[propety])
} */