// Assincronicidade em JavaScript
// em JavaScript, a execução do código é síncrona por padrão, ou seja, o código é executado linha por linha, bloqueando o fluxo até que cada operação seja concluída.

// assíncrono é um conceito que permite que o código seja executado sem bloquear o fluxo principal, permitindo que outras operações sejam realizadas enquanto se espera por uma tarefa ser concluída.
// para lidar com operações assíncronas, como requisições de rede, leitura de arquivos, timers, etc., utilizamos callbacks, promises e async/await.
// callbacks são funções passadas como argumento para outras funções, que serão executadas após a conclusão de uma operação assíncrona.

// demosntração de codigo assíncrono com setTimeout (função de callback)
console.log('Início');
setTimeout(() => {
  console.log('Operação assíncrona concluída após 2 segundos');
}, 2000);
console.log('Fim');
// nesse exemplo, o console.log('Fim') é executado antes do console.log dentro do setTimeout, demonstrando a natureza assíncrona do código.

// exemplo 2 de codigo assincrono
console.log('Início');
setTimeout(() => {
  console.log('Operação assíncrona concluída após 1 segundo');
}, 1000);
setTimeout(() => {
  console.log('Operação assíncrona concluída após 2 segundos');
}, 2000);
setTimeout(() => {
  console.log('Operação assíncrona concluída após 3 segundos');
}, 3000);
console.log('Fim');
// nesse exemplo, os console.log dentro dos setTimeout são executados após os respectivos tempos, enquanto o console.log('Fim') é executado imediatamente após o console.log('Início').
