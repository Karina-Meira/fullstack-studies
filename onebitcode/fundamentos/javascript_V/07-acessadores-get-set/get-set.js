// Os acessadores são um recurso do JavaScript que permitem definir métodos especiais para acessar e modificar propriedades de um objeto. Eles são definidos usando as palavras-chave `get` e `set`.

// Aqui está um exemplo simples de como usar acessadores `get` e `set` em um objeto JavaScript:
const pessoa = {
  nome: 'João',
  sobrenome: 'Silva',           
    get nomeCompleto() {           // Acessador get para obter o nome completo
        return `${this.nome} ${this.sobrenome}`;
    }, 
    set nomeCompleto(valor) {       // Acessador set para definir o nome completo
        const partes = valor.split(' ');
        this.nome = partes[0];
        this.sobrenome = partes[1];
    }  
};

console.log(pessoa.nomeCompleto); // Saída: João Silva
pessoa.nomeCompleto = 'Maria Souza'; // Usando o acessador set para alterar o nome completo
console.log(pessoa.nome); // Saída: Maria
console.log(pessoa.sobrenome); // Saída: Souza


// Neste exemplo, o objeto `pessoa` tem duas propriedades: `nome` e `sobrenome`. O acessador `get nomeCompleto` retorna o nome completo concatenando as duas propriedades. O acessador `set nomeCompleto` permite definir o nome completo, dividindo a string em partes e atribuindo os valores às propriedades `nome` e `sobrenome`.

// Os acessadores são úteis para encapsular a lógica de acesso e modificação de propriedades, permitindo que você controle como os dados são manipulados dentro do objeto. Eles também podem ser usados para validar dados antes de atribuí-los a uma propriedade ou para calcular valores dinamicamente com base em outras propriedades do objeto.

// Vale lembrar que os acessadores são definidos como métodos, mas são acessados como propriedades, sem parênteses. Isso torna o código mais legível e intuitivo.

// Além disso, os acessadores podem ser usados em classes, proporcionando uma maneira elegante de gerenciar propriedades de instâncias de objetos. Aqui está um exemplo de uso de acessadores em uma classe:
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    get area() { // Acessador get para calcular a área do retângulo
        return this.largura * this.altura;
    }
    set area(valor) { // Acessador set para definir a área do retângulo (ajustando a largura)
        this.largura = valor / this.altura;
    }
}

const retangulo = new Retangulo(10, 5);
console.log(retangulo.area); // Saída: 50
retangulo.area = 100; // Usando o acessador set para alterar a área
console.log(retangulo.largura); // Saída: 20
console.log(retangulo.area); // Saída: 100

// Neste exemplo, a classe `Retangulo` possui um acessador `get area` que calcula a área do retângulo com base na largura e altura. O acessador `set area` permite definir a área do retângulo, ajustando a largura de acordo com o valor fornecido.

// Os acessadores são uma ferramenta poderosa para gerenciar propriedades de objetos e classes em JavaScript, proporcionando uma maneira elegante e controlada de acessar e modificar dados.

// Em resumo, os acessadores `get` e `set` em JavaScript são usados para definir métodos especiais que permitem acessar e modificar propriedades de um objeto de maneira controlada e elegante. Eles ajudam a encapsular a lógica de manipulação de dados, tornando o código mais legível e intuitivo.

class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100
    }
    
    get amount() {
        return this.#amount / 100
    }

    set username(newUsername) {
        if (typeof newUsername !== 'string') {
            this.#username = newUsername
        } else {
            console.log('O username deve ser uma string')
        }
    }

    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()
console.log(myWallet.amount)
myWallet.username = "Karina"
console.log(myWallet.username)
myWallet.username += ' Meira'
myWallet.username = 1234
console.log(myWallet.username)

// Exemplo de uso de acessadores get e set em uma classe Wallet. A classe possui uma propriedade privada #amount que representa o saldo da carteira em centavos, e uma propriedade privada #username que armazena o nome de usuário associado à carteira. O acessador get amount retorna o saldo formatado em reais, enquanto o acessador set username permite definir o nome de usuário, garantindo que seja uma string. O exemplo demonstra a criação de uma instância da classe Wallet, a obtenção do saldo e a definição do nome de usuário com validação.


