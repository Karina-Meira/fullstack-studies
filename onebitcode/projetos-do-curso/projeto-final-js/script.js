// Função para formatar valores com símbolo da moeda
function formatCurrent(amount, currency = 'BRL') {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency
  }).format(amount)
}

async function updateBalance() {
  try {
    // Busca todas as transações do backend
    const response = await fetch('http://localhost:3000/transactions')
    const transactions = await response.json()

    // Calcula o saldo somando os amounts
    const total = transactions.reduce((acc, t) => acc + Number(t.amount), 0)

    // Formata o saldo com símbolo da moeda
    const formatedBalance = formatCurrent(total, 'BRL')

    // Atualiza o elemento na tela
    const elementBalance = document.querySelector('#balance')
    elementBalance.textContent = formatedBalance

    // Altera a cor dependendo se o saldo é positivo ou negativo
    elementBalance.style.color = total >= 0 ? 'green' : 'red'
  } catch (error) {
    console.error('Erro ao atualizar saldo:', error)
  }
}



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
    updateBalance()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const transactionData = {
        name: document.querySelector('#name').value,
        amount: Number(document.querySelector('#amount').value)
    }

    const response = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transactionData)
    })

    const savedTransaction = await response.json()
    form.reset()
    renderTransactions(savedTransaction)
    updateBalance()
})

