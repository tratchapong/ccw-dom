const userform = document.querySelector('#userform')
const inp1 = document.querySelector('#inp1')
const inp2 = document.querySelector('#inp2')
const favcolor = document.querySelector('#favcolor')
const inp3 = document.querySelector('#inp3')

function hdlSubmit(evt) {

  let userInput = {
    username: '',
    email: ''
  }
  evt.preventDefault()
  userInput.username = inp1.value
  userInput.email = inp2.value

  userInput.gender = document.querySelector('input[name="gender"]:checked').value
  userInput.color = favcolor.value
  userInput.subscribe = inp3.checked

  console.log(userInput);
  fetch('https://httpbin.org/post', {
    method: 'post',
    body: JSON.stringify(userInput)
  }).then(rs => rs.json())
    .then(data => console.log(data))



}

userform.addEventListener('submit', hdlSubmit)