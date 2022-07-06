/* Expressões e Operadores

- Expressions
Operators
    Binary
    Unary
    Ternary
*/
/*
let number = 1;

// Operador Binary
console.log(number + 1);

// Operador Unary
console.log(++number);
console.log(typeof number);

// Operador Ternary
console.log(false ? 'alo' : 'nada');
*/

/*
    new

    left-hand-side expression
    * criar um novo objeto
*/
/*
    let name = new String('Daniel');
    name.surname = "Dantas"
    let age = new Number(46);
    console.log(name, age);

    let date = new Date('2020-12-01');
    console.log(date);
*/

/*
    Operadores Unários
    typeof
    delete
*/
/*
const person = {
    name: 'Daniel',
    age: 25,
}
delete person.age;
console.log(person);
*/

/*
    Operadores Aritimétricos
*/

// multiplicação *
//console.log(3.2 * 5.2);
// divisão /
//console.log(12 / 2);
// soma +
//console.log(34 + 67);
// subtração -
//console.log(34 - 23);

// resto da divisão %
/*let reminder
reminder = 11 % 10
console.log(reminder);*/
// incremento ++
/*let increment = 1;
increment++;
console.log(increment);*/
// decremento --
/*let decrement = 0;
console.log(--decrement);*/
//exponencial **
//console.log(3 ** 3);

// Grouping Operator ( )
/*
let total = (2 + 3) * 5;
console.log(total); // soma, depois multiplica
*/

// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação.

let one = 1;
let two = 2;

// ==       igual a
//  console.log(two == 1)
//  console.log(one == "1")

// !=       diferente de
// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1")

// ===      estritamente igual a
// console.log(one === "1")
// console.log(one === 1)

// !==      estritamente diferente de
// console.log(two !== "2")
// console.log(two !== 2)

// >        maior que
// console.log(one > two)

// >=       maior igual a
// console.log(one >= 1)
// console.log(two >= 1)

// <     menor que
// console.log(one < two)

// <=       menor igual a
// console.log(one <= two)
// console.log(one <= 1)
// console.log(one <= 0)

// Operadores de Atribuição (Assignment)
// let x;

// assignment
// x = 1

// addiction assignment
// x = x + 2
// x += 2

//subtraction assignment
// x = x - 1
// x -= 1

// multiplication assignment
// x = x * 2
// x *= 2

// division assignment
// x = x / 2
// x /= 2

// reminder, exponetiation
// x %= 2
// x **= 2

// console.log(x);

// Operadores Lógicos (Logical Operators)
/*
    2 valores booleanos que quando verificados resultará verdadeiro ou falso
*/

// let pao = true;
// let queijo = true;

// AND &&
// console.log(pao && queijo)

// OR ||
// console.log(pao || queijo)

// NOT !
// console.log(!pao && !queijo)

// Operador condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição, então 1 senão valor 2
// condition ? vnalue1 : value2

// Exemplos:

// Café da manhã TOP
// let pao = true
// let queijo = true

// let niceBreakfast = pao && queijo ? "Café TOP" : "Café TOP"

// console.log(niceBreakfast)

// Maior de 18 anos

// let age = 16

// let canDrive = age >= 18 ? "Can Drive" : `Can't Drive`

// console.log(canDrive)

// OPERADOE DE STRING (STRING OPERATOR)

// comparsion (comparação)
// console.log("a" == "a")

// concatenation (concatenação)
// Retorna a união de 2 strings

// let alpha = "alpha"
// alpha += "beth"

// console.log(alpha)

/*
    FALSY
    Quando um valor é considerado false em um contexto onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

// console.log(true ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    Quando um valor é considerado true em um contexto onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    1.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

// console.log(true ? 'verdadeiro' : 'falso')

/* OPERATOR PRECEDENT
    Precedência de operadores
    
    * grouping                      ( )
    * negação e incremento          ! ++ --
    * multiplicação de divisão      * /
    * adição e subtração            + -
    * relacional                    < <= > >= !==
    * igualdade                     == != === !==
    * AND                           &&
    * OR                            ||
    * condicional                   ?:
    * assigment (atribuição)        = += -= *=
*/