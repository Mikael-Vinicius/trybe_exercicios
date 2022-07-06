let paragrafo = document.getElementById("paragraph")
let inputColor = document.getElementById("inputColor")
let body = document.getElementsByTagName('body')[0]
let inputBody = document.getElementById('inputBody')
inputColor.addEventListener('input', changeColor)
inputBody.addEventListener('input', changeColor)
botao = document.getElementById('button')
botao.addEventListener('click', changeFont)

function changeColor() {
  inputColor.style.color = inputColor.value
  paragrafo.style.color = inputColor.value
  inputBody.style.backgroundColor = inputBody.value
  body.style.backgroundColor = inputBody.value
}

function changeFont() {
  paragrafo.style.fontSize = '18px'
  paragrafo.style.letterSpacing = '1px'
  paragrafo.style.fontFamily = 'monospace'
}

function addPhraseToLocalStorage() {
  
}



function initialRenderization() {

}


window.onload = addPhraseToLocalStorage