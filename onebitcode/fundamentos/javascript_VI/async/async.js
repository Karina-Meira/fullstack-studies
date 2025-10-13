// Funções async
// Uma função async sempre retorna uma Promise 
// ela pode ser usada para simplificar o trabalho com Promises
// e tornar o código assíncrono mais legível

async function minhaFuncao() {
    return 'Olá, Mundo!';
}

minhaFuncao().then(valor => console.log(valor)) // Olá, Mundo!

// Uso do await
// O await só pode ser usado dentro de funções async
// ele serve para esperar a resolução de uma Promise
// e pausar a execução da função até que a Promise seja resolvida

async function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function executar() {
    console.log('Esperando 2 segundos...')
    await esperar(2000)
    console.log('2 segundos se passaram!')
}

executar()

// Tratamento de erros
async function funcaoComErro() {
    throw new Error('Algo deu errado!')
}

funcaoComErro()
    .then(() => console.log('Sucesso'))
    .catch(erro => console.error('Erro capturado:', erro.message)) // Erro capturado: Algo deu errado!  

