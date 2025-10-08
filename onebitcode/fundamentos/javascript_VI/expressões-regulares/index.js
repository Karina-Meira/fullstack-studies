// Expressões regulares no Javascript

/* Flags
g - global
i - case insensitive
m - multiline
s - dotall
u - unicode
y - sticky
*/

/* caracteres especiais
. - qualquer caractere
\w - qualquer caractere alfanumérico (a-z, A-Z, 0-9, _)
\W - qualquer caractere que não seja alfanumérico
\d - qualquer dígito (0-9)
\D - qualquer caractere que não seja um dígito (0-9)
\s - qualquer espaço em branco (espaço, tab, quebra de linha)
\S - qualquer caractere que não seja um espaço em branco
\b - palavra (word boundary)
\B - não palavra (non-word boundary)
^ - início da string
$ - fim da string
[] - conjunto de caracteres
[^] - negação de conjunto de caracteres
| - ou (alternância)
() - grupo de captura
*/
// Quantificadores
// * - 0 ou mais
// + - 1 ou mais
// ? - 0 ou 1
// {n} - exatamente n
// {n,} - n ou mais
// {n,m} - entre n e m
// ? - torna o quantificador "preguiçoso" (lazy), ou seja, ele tenta casar o menor número possível de caracteres

// Exemplos
const { log } = console;
const frase = 'O rato roeu a roupa do rei de Roma. A rainha raivosa rasgou a roupa do rei.';
const regex1 = /r[a-z]o/g; // casa com "rao", "rbo", "rco", etc.
const regex2 = /r[a-z]o/gi; // casa com "rao", "rbo", "rco", etc. (case insensitive)
const regex3 = /r[a-z]o/; // casa com "rao", "rbo", "rco", etc. (primeira ocorrência)
const regex4 = /r[a-z]o/ig; // casa com "rao", "rbo", "rco", etc. (case insensitive, global)

log(frase.match(regex1));
log(frase.match(regex2));
log(frase.match(regex3));
log(frase.match(regex4));
log(frase.search(regex4)); // retorna o índice da primeira ocorrência
log(frase.replace(regex4, 'X')); // substitui todas as ocorrências por 'X'
log(frase.replace(/r[a-z]o/ig, match => match.toUpperCase())); // substitui todas as ocorrências por maiúsculas
log(frase.split(' ')); // divide a string em um array de palavras
log(frase.split(/r[a-z]o/ig)); // divide a string em um array, removendo as ocorrências casadas
log(frase.match(/\w+/g)); // casa com todas as palavras
log(frase.match(/\d+/g)); // casa com todos os dígitos
log(frase.match(/\s+/g)); // casa com todos os espaços em branco
log(frase.match(/\b[rR]\w+/g)); // casa com todas as palavras que começam com 'r' ou 'R'
log(frase.match(/.{1,4}/g)); // casa com grupos de 1 a 4 caracteres
log(frase.match(/r[a-z]?o/ig)); // casa com "ro", "rao", "rbo", "rco", etc. (0 ou 1 caractere entre 'r' e 'o')
log(frase.match(/r[a-z]*o/ig)); // casa com "ro", "rao", "rbo", "rco", "rxyz...o", etc. (0 ou mais caracteres entre 'r' e 'o')
log(frase.match(/r[a-z]+o/ig)); // casa com "rao", "rbo", "rco", "rxyz...o", etc. (1 ou mais caracteres entre 'r' e 'o')

// Exemplos avançados
const html = `
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
`;  
log(html.match(/<li>(.*?)<\/li>/g)); // casa com todas as tags <li>
log(html.match(/<li>(.*?)<\/li>/g).map(item => item.replace(/<\/?li>/g, ''))); // extrai o conteúdo das tags <li>
log(html.match(/<li>(.*?)<\/li>/g).map(item => item.replace(/<\/?li>/g, '')).join(', ')); // extrai o conteúdo das tags <li> e junta em uma string
log(html.match(/<li>(.*?)<\/li>/g).map(item => item.replace(/<\/?li>/g, '')).join(' e ')); // extrai o conteúdo das tags <li> e junta em uma string com 'e' entre os itens
log(html.match(/<li>(.*?)<\/li>/g).map(item => item.replace(/<\/?li>/g, '')).join(' e ').replace(/, ([^,]*)$/, ' e $1')); // extrai o conteúdo das tags <li> e junta em uma string com 'e' entre os itens, corrigindo a vírgula antes do último item    
log(html.match(/<li>(.*?)<\/li>/g).map(item => item.replace(/<\/?li>/g, '')).join(' e ').replace(/, ([^,]*)$/, ' e $1').replace(/(.*) e (.*)/, '$1, e $2')); // extrai o conteúdo das tags <li> e junta em uma string com 'e' entre os itens, corrigindo a vírgula antes do último item e adicionando vírgula antes do penúltimo item

const cpfs = `
Os CPFs são:
123.456.789-10
987.654.321-00
111.222.333-44
`;
log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g)); // casa com todos os CPFs no formato xxx.xxx.xxx-xx
log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g).map(cpf => cpf.replace(/\D/g, ''))); // extrai os CPFs e remove os caracteres não numéricos
log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g).map(cpf => cpf.replace(/\D/g, '')).join(', ')); // extrai os CPFs, remove os caracteres não numéricos e junta em uma string

const telefones = `
Lista de telefones:
(11) 91234-5678
(21) 99876-5432
(31) 98765-4321
`;
log(telefones.match(/\(\d{2}\) \d{4,5}-\d{4}/g)); // casa com todos os telefones no formato (xx) xxxxx-xxxx ou (xx) xxxx-xxxx
log(telefones.match(/\(\d{2}\) \d{4,5}-\d{4}/g).map(tel => tel.replace(/\D/g, ''))); // extrai os telefones e remove os caracteres não numéricos
log(telefones.match(/\(\d{2}\) \d{4,5}-\d{4}/g).map(tel => tel.replace(/\D/g, '')).join(', ')); // extrai os telefones, remove os caracteres não numéricos e junta em uma string

const emails = `
Lista de emails: 
karinameira@email.com
maria@email.com
`;
log(emails.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g)); // casa com todos os emails
log(emails.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g).join(', ')); // extrai os emails e junta em uma string  
log(emails.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g).map(email => email.toLowerCase()).join(', ')); // extrai os emails, converte para minúsculas e junta em uma string
log(emails.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g).map(email => email.toLowerCase()).sort().join(', ')); // extrai os emails, converte para minúsculas, ordena e junta em uma string   
log(emails.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g).map(email => email.toLowerCase()).sort().reverse().join(', ')); // extrai os emails, converte para minúsculas, ordena em ordem reversa e junta em uma string

// Validação de formulários
const validarCPF = cpf => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
const validarTelefone = telefone => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone);
const validarEmail = email => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

log(validarCPF('123.456.789-10')); // true
log(validarCPF('12345678910')); // false
log(validarTelefone('(11) 91234-5678')); // true
log(validarTelefone('11912345678')); // false
log(validarEmail('karinameira@email.com')); // true
log(validarEmail('karinameiraemail.com')); // false

