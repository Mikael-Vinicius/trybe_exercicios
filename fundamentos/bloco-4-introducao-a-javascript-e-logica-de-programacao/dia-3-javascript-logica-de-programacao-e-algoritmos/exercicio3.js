//exercicio1
let fatorial = 10 
for(let index = fatorial - 1; index > 1; index -= 1 ) {
   fatorial = fatorial * index
}
console.log(fatorial)
//exercicio2
let word = 'tryber';
let palavra = ''
for(let index = 0; index < word.length; index += 1 ) {
  palavra += word[word.length - 1 - index];
}
console.log(palavra)