/* ### Sistemna de gastos familiar

Crie um objeto que possuirá 2 propriedades do tipo Array:
    *receitas
    *despesas

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/

let familySpent = {
    incomes: [2500, 3200, 5000, 1500],
    expenses: [15550, 60, 480, 358]
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value
    }
    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(familySpent.incomes)
    const calculateExpenses = sum(familySpent.expenses)
    const total = calculateIncomes - calculateExpenses
    
    const positive = total >= 0;

    let balanceText = "negativo"

    if (positive) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance();