// arquivo script.js
document.getElementById('elementoOndeVoceEsta').parentNode.style.color ='red'
document.getElementById('primeiroFilhoDoFilho').innerText = 'Foda'
document.getElementById('pai').firstElementChild.style.color = 'blue'
document.getElementById('elementoOndeVoceEsta').previousElementSibling.style.color = 'green'
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
let elementoIrmao = document.createElement('section')
elementoIrmao.setAttribute("id", "elementoIrmao")
elementoOndeVoceEsta.parentElement.appendChild(elementoIrmao)
let elementoFilho = document.createElement('section')
elementoFilho.setAttribute('id', 'elementoFilho')
elementoOndeVoceEsta.appendChild(elementoFilho)
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let filhoDoPrimeiroFilho = document.createElement('section')
filhoDoPrimeiroFilho.setAttribute('id', 'FilhoDoPrimeiroFilho')


primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilho)
console.log(filhoDoPrimeiroFilho.lastElementChild)