
const a = document.querySelector('a')
const loginForm = document.querySelector('#login-form')
const inp1 = document.querySelector('#inp1')

// a tag
function hdlClick(evt) {
  let ans = confirm('do you wat to leave')
  if(!ans) {
    evt.preventDefault()
    return
  }
  console.log('ok')
}

a.addEventListener('click', hdlClick)

// form
function hdlSubmit(evt) {
  evt.preventDefault()
  // validation
  console.log(inp1.value)
  if(inp1.value === '') {
    return alert('please input username')
  }
  console.log('form submit')
  loginForm.submit()
  // console.log(evt.target)

}


loginForm.addEventListener('submit', hdlSubmit)