const h1 = document.querySelector('h1')
const btnRed = document.querySelector('#btn1')
const btnBlue = document.querySelector('#btn2')
const btnRemove = document.querySelector('#btn3')
const btnBorder = document.querySelector('#btn4')

btnRed.onclick = function() {
  // h1.setAttribute('class', 'text-red')
  if(h1.classList.contains('text-blue')) {
    h1.classList.remove('text-blue')
  }
  h1.classList.add('text-red')
  console.log(h1.outerHTML)
}
btnBlue.onclick = function() {
  if(h1.classList.contains('text-red')){
    h1.classList.remove('text-red')
  }
  h1.classList.add('text-blue')
  console.log(h1.outerHTML)
}

btnRemove.onclick = function() {
  h1.classList.remove('text-red')
  h1.classList.remove('text-blue')
  console.log(h1.outerHTML)
}

btnBorder.onclick = function () {
  h1.classList.toggle('border')
  console.log(h1.outerHTML)
}
