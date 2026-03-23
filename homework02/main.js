const phoneform = document.querySelector('#phone-form')
const inp1 = document.querySelector('#inp1')
const errorArea = document.querySelector('#err-message')

errorArea.textContent=''
inp1.focus()

function hdlSubmit(evt) {
  evt.preventDefault()
}

phoneform.addEventListener('submit', hdlSubmit)