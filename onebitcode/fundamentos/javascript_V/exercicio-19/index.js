const Author = require('./author')

const maria = new Author('Maria')
const post1 = maria.createPost('Meu primeiro post', 'Esse é o conteúdo do post')

post1.addComment('Muito bom, parabém!', 'João')
post1.addComment('Gostei bastante', 'Ana')

console.log('Autor: ', maria)
console.log('Posts da Maria: ', maria.posts)
console.log('Comentários do post: ', post1.comments)