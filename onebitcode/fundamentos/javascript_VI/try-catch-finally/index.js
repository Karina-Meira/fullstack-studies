// Tratamento de erros com try, catch e finally

// Podemos usar o try para envolver um bloco de código que pode gerar um erro
// catch para capturar o erro e tratá-lo
// finally para executar um bloco de código independentemente do resultado

function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('Arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try {
    console.log(sum(1, 2)) // 3
    console.log(sum('1', '2')) // 3
    console.log(sum(1, '2')) // 3
    console.log(sum('1', 2)) // 3
    console.log(sum('a', 2)) // Error: Arguments must be two numbers
} catch (error) {
    console.log('An error occurred: ' + error.message)
} finally {
    console.log('Execution finished')
}
// Output:
// 3
// 3  
// 3
// 3
// An error occurred: Arguments must be two numbers 
// Execution finished

// O bloco finally sempre será executado, independentemente de ter ocorrido um erro ou não
// Isso é útil para liberar recursos ou executar ações de limpeza
// Exemplo de uso do finally

let fileHandler

try {
    // Simulando a abertura de um arquivo
    fileHandler = { name: 'file.txt', isOpen: true }
    console.log('File opened:', fileHandler.name)
    // Simulando uma operação que pode falhar
    throw new Error('File read error')
} catch (error) {
    console.log('An error occurred while handling the file:', error.message)
} finally {
    if (fileHandler && fileHandler.isOpen) {
        // Simulando o fechamento do arquivo
        fileHandler.isOpen = false
        console.log('File closed:', fileHandler.name)
    }
}
// Output:
// File opened: file.txt
// An error occurred while handling the file: File read error
// File closed: file.txt    

// Note que o bloco finally foi executado mesmo após o erro no bloco try
// Isso garante que o arquivo foi fechado corretamente


// Podemos também criar nossos próprios erros personalizados usando a classe Error
// Isso nos permite fornecer mensagens de erro mais específicas e relevantes para o contexto da aplicação

class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
    }
}
function validateAge(age) {
    if (age < 0 || age > 120) {
        throw new ValidationError('Age must be between 0 and 120')
    }   
    return true
}

try {
    console.log(validateAge(25)) // true
    console.log(validateAge(-5)) // ValidationError: Age must be between 0 and 120
} catch (error) {
    if (error instanceof ValidationError) {
        console.log('Validation error:', error.message)
    }   
    else {
        console.log('An unexpected error occurred:', error.message)
    }
} finally {
    console.log('Age validation finished')
}   
// Output:
// true
// Validation error: Age must be between 0 and 120
// Age validation finished  

// Note que usamos instanceof para verificar o tipo do erro capturado
// Isso nos permite tratar diferentes tipos de erros de maneira adequada
// Também usamos o bloco finally para indicar que a validação de idade foi concluída
// Isso é útil para garantir que certas ações sejam sempre executadas, independentemente do sucesso ou falha da operação



// Em resumo, o uso de try, catch e finally em JavaScript é essencial para lidar com erros de forma eficaz
// Permite capturar e tratar erros, garantindo que o código continue funcionando de maneira previsível
// Além disso, a criação de erros personalizados melhora a clareza e a manutenção do código
// Sempre que possível, utilize esses mecanismos para tornar suas aplicações mais robustas e confiáveis


