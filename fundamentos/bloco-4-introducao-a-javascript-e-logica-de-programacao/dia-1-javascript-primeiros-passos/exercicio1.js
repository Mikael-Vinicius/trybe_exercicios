 //exercicio 1
 const a = 20
 const b = 10
 const soma = a + b
 const subtracao = a - b
 const multiplicacao = a * b
 const divisao = a / b
 const modulo = a % b
 console.log(soma)
 console.log(subtracao)
 console.log(multiplicacao)
 console.log(divisao)
 console.log(modulo)

 //exercicio 2
 const c = 5
 const d = 5
 if(c > d ) {
   console.log(c)
 }
 else if(d > c) {
   console.log(d)
 }
 else {
   console.log("valores sao iguais")
 }
 //exercicio 3
const e = 75
const f = 60
const g = 10
if(e > f && e > g) {
  console.log(e)
}
else if (f > e && f > g) {
console.log(f)
}
else {
  console.log(g)
}
//exercicio 4 
const n = 3
if(n > 0) {
  console.log("positive")
}
else if (n < 0) {
  console.log("negative")
}
else {
  console.log("zero")
}
//exercicio 5
const triangulo = 180 
const angulo1 = 60
const angulo2 = 60
const angulo3 = 60
if (angulo1 + angulo2 + angulo3 === triangulo) {
  console.log("true")
}
else if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0 ) {
  console.log("erro angulo invalido")
}

 else {
  console.log("false")
}

