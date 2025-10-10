// Conhecendo Promises

const promessa = new Promise((resolve, reject) => {
    let condicao = false;
    if (condicao) {
        resolve('Promessa resolvida com sucesso!');
    } else {
        reject('Promessa rejeitada!');
    }
});

promessa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.log(erro);
    })
    .finally(() => {
        console.log('Operação concluída, independentemente do resultado.');
    });
// Nesse exemplo, criamos uma promessa que pode ser resolvida ou rejeitada com base em uma condição. Usamos os métodos .then() para lidar com a resolução, .catch() para lidar com a rejeição e .finally() para executar um código que deve rodar independentemente do resultado da promessa.

// Exemplo prático de uso de Promises com setTimeout
function esperarPor(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Esperou por ${segundos} segundos`);
        }, segundos * 1000);
    });
}
esperarPor(2)
    .then((mensagem) => {
        console.log(mensagem);
        return esperarPor(3);
    })
    .then((mensagem) => {
        console.log(mensagem);
    });
// Nesse exemplo, a função esperarPor retorna uma promessa que é resolvida após um determinado número de segundos. Usamos .then() para encadear chamadas e esperar por diferentes períodos de tempo.

// Promises são uma maneira poderosa de lidar com operações assíncronas em JavaScript, tornando o código mais legível e fácil de manter.

// Elas são amplamente utilizadas em operações como requisições de rede, leitura de arquivos e outras tarefas que podem levar tempo para serem concluídas.

// Compreender Promises é essencial para trabalhar com JavaScript moderno e assíncrono.

// Elas ajudam a evitar o "callback hell" e facilitam o tratamento de erros em operações assíncronas.

