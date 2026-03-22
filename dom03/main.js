console.log('ok')

const h2 = document.querySelector('h2')

function hdlClick() {
  h2.textContent = 'Click'
}

function hdlClick2() {
  alert(h2.outerHTML)
}

h2.addEventListener('click', hdlClick)
h2.addEventListener('click', hdlClick2)

// h2.onclick = function() {
//   h2.textContent = 'Click'
// }

function hdlRightClick() {
  h2.textContent = 'Right click'
}

h2.addEventListener('contextmenu', hdlRightClick)

// h2.oncontextmenu = function() {
//   h2.textContent = 'Right click'
// }
h2.addEventListener('mouseover', () => {
  h2.textContent = 'Mouse Over'
}) // แบบนี้ removeEvent ไม่ได้

function hdlkeyup(evt) {
  console.log(evt.code)
  h2.textContent = evt.code
}

document.addEventListener('keyup', hdlkeyup)

setTimeout( ()=>{
  h2.removeEventListener('click', hdlClick)
},5000 )

// h2.onmouseover = function() {
//   h2.textContent = 'MouseOver'
// }
// h2.onmouseout = function() {
//   h2.textContent = 'MouseOut'
// }

// document.onkeyup = function(evt) {
//   console.log(evt.code)
//   console.log(evt.key)
//   h2.textContent = evt.code
// }

// document.onmousemove = function(evt) {
//   console.log(evt)
//   h2.textContent = `${evt.clientX}, ${evt.clientY}`
// }

// setTimeout( ()=>{
//   h2.onclick = null
// },5000 )