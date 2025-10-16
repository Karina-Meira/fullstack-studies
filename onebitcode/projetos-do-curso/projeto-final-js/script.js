function renderTransactions(transactionsData) {
    const transaction = document.createElement('div') // contêiner próprio para cada transação
    transaction.classList.add('trans')
    transaction.id = `transaction-${transactionsData.id}`

    const name = document.createElement('p')
    name.classList.add('trans-name')
    name.textContent = transactionsData.name // dados vindo da API

    const amount = document.createElement('p')
    amount.classList.add('trans-amount')
    amount.textContent = transactionsData.amount

    transaction.append(name, amount)
    document.querySelector('#transactions').appendChild(transaction)
}

async function fetchTransactions() {
    const transactions = await fetch('http://localhost:3000/transactions').then(res => res.json())
    transactions.forEach(renderTransactions)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchTransactions()
})

