// Função para formatar valores com símbolo da moeda
function formatCurrent(amount, currency = 'BRL') {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency
  }).format(amount)
}

// Atualiza o saldo
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

// Renderiza cada transação na tela
function renderTransactions(transactionsData) {
    const transaction = document.createElement('div') 
    transaction.classList.add('trans')
    transaction.id = `transaction-${transactionsData.id}`

    const name = document.createElement('p')
    name.classList.add('trans-name')
    name.textContent = transactionsData.name 

    const amount = document.createElement('p')
    amount.classList.add('trans-amount')
    amount.textContent = formatCurrent(transactionsData.amount)

    const editBtn = document.createElement('button')
    editBtn.classList.add('trans-edit')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => editTransaction(transactionsData))

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('trans-delete')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.addEventListener('click', () => deleteTransaction(transactionsData.id))

    transaction.append(name, amount, editBtn, deleteBtn)
    document.querySelector('#transactions').appendChild(transaction)
}

// Preenche o formulário com os dados da transação para editar
function editTransaction(transactionData) {
  document.querySelector('#name').value = transactionData.name
  document.querySelector('#amount').value = transactionData.amount

  const form = document.querySelector('form')
  form.dataset.editingId = transactionData.id
  document.querySelector('button[type="submit"]').textContent = 'Salvar alterações'
}

// Função para excluir transação (DELETE)
async function deleteTransaction(id) {
  if (!confirm('Tem certeza que deseja exluir esta tarefa?')) return

  try {
    await fetch(`http://localhost:3000/transactions/${id}`, {method: 'DELETE'})

    // Remove o DOM
    const transactionDiv = document.querySelector(`#transaction-${id}`)
    if (transactionDiv){
      transactionDiv.remove()
    } 
  
    // Atualiza o saldo após exclusão
    updateBalance()
  } catch (error) {
    console.error('Erro ao excluir a transação:', error)
  }
}

// Busca todas as transações do backend
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

    const idBeingEdited = form.dataset.editingId
    const transactionData = {
        name: document.querySelector('#name').value,
        amount: Number(document.querySelector('#amount').value)
    }
    
    if (idBeingEdited) {
      // editar (PUT)
      const response = await fetch(`http://localhost:3000/transactions/${idBeingEdited}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactionData)
    })
    const updatedTransaction = await response.json()
    const existingDiv = document.querySelector(`#transaction-${idBeingEdited}`)
    existingDiv.querySelector('.trans-name').textContent = updatedTransaction.name
    existingDiv.querySelector('.trans-amount').textContent = formatCurrent(updatedTransaction.amount)
  
    form.reset()
    delete form.dataset.editingId
    document.querySelector('button[type="submit"]').textContent = 'Adicionar'
    updateBalance()
  } else {
    const response = await fetch('http://localhost:3000/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionData)
  })
  const savedTransaction = await response.json()
  renderTransactions(savedTransaction)
  }
  
  updateBalance()
})

