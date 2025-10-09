const names = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.querySelector('button')
const result = document.getElementById('result')

function validateEmail(email) {
    const regex = email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g)
    if (!regex) {
        throw new Error('Invalid email format')
    }

    return regex
}

function validatePassword(password) {
    const regex = password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    if (!regex) {
        throw new Error('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character')
    }

    return regex
}

button.addEventListener('click', (e) => {
    e.preventDefault() // Evita o envio do formulário
    result.innerHTML = '' // Limpa o resultado anterior
    try {
        validateEmail(email.value) 
        validatePassword(password.value) // Se alguma validação falhar, um erro será lançado e o bloco catch será executado
        result.innerHTML = `<p class="success">Registration successful! Welcome, ${names.value}.</p>` // Se todas as validações passarem, exibe a mensagem de sucesso
    } catch (error) {
        result.innerHTML = `<p class="error">Error: ${error.message}</p>` // Exibe a mensagem de erro
    } finally {
        names.value = '' // Limpa os campos do formulário
        email.value = ''
        password.value = ''
    }
})

