//exercicio1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for( let number of numbers) {
console.log(number)
}
//exercicio2
let soma = 0; 
for( let index = 0; index < numbers.length; index = index + 1) {
  soma +=  numbers[index]     }
console.log(soma)
//exercicio3
let media = 0 
for(let index = 0; index < numbers.length; index += 1 ) {
  media += numbers[index]
}
let average = media / numbers.length;
console.log(average)
//exercicio4
if(average > 20) {
  console.log("É maior que 20")
}
else{
  console.log("É menor ou igual a 20")
}
//exercicio5
let maior = 0
for(let index = 0; index < numbers.length; index += 1 ) {
 if(numbers[index] > maior) {  
  maior = numbers[index] }
}
console.log(maior)
//exercicio5