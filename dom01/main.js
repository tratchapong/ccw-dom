// console.log('ok')

// const myTitle1 = document.getElementById('mytitle')
// const myTitle2 = document.querySelector('#mytitle')
// myTitle1.style.color = 'red'
// myTitle2.style.backgroundColor = 'gold'

// console.log(myTitle1.outerHTML)
// console.log(myTitle2.outerHTML)

// const allLi1 = document.getElementsByTagName('li')
// const allLi2 = document.querySelectorAll('li')

// console.log(allLi1)
// console.log(allLi2)
// console.log(allLi1[0].outerHTML)
// console.log(allLi2[2].outerHTML)

// for(let el of allLi2) {
//   console.log(el.innerHTML)
// }

// allLi2.forEach( el => {
//   el.style.color = 'red'
//   console.log(el.outerHTML)
// } )

// const para1 = document.querySelectorAll('.big-text')
// console.log(para1[0].outerHTML)

// const para2 = document.getElementsByClassName('big-text')
// console.log(para2[0].outerHTML)

//******* Walking DOM

// console.log(document.documentElement.outerHTML) //HTML
// console.log(document.body.outerHTML)

// const ul = document.querySelector('ul')

// console.log(ul.outerHTML)

// console.log(ul.parentNode.outerHTML)
// console.log(ul.parentElement.outerHTML)

// console.log(ul.parentNode.parentNode)

// console.log(ul.childNodes)
// console.log(ul.children)
// console.log(ul.children.length)

// console.log(ul.previousSibling)
// console.log(ul.nextSibling)

// console.log(ul.previousElementSibling.outerHTML)
// console.log(ul.nextElementSibling.outerHTML)

// console.log(ul.firstElementChild.outerHTML)
// console.log(ul.lastElementChild.outerHTML)

// const el = document.body.children[3].nextElementSibling.children[0].outerHTML
// console.log(el)

// ****** NodeType

// const ulChild = ul.childNodes
// console.log(ulChild)

// for(let el of ulChild) {
//   // console.log(el.outerHTML)
//   // console.log(el.nodeType)
//   if(el.nodeType===8) {
//     console.log(el.textContent)
//   }
// }

// console.log(ul.tagName)
// console.log(ul.nodeName)


// ***** Content

const ul = document.querySelector('ul')
// console.log(ul.innerHTML)
// console.log(ul.textContent)
// console.log(ul.innerText)

// const myTitle = document.querySelector('#mytitle')
// console.log(myTitle.innerHTML)
// console.log(myTitle.textConteGitgnt)


ul.innerHTML += "<li>React.js</li>"
ul.innerHTML += "<li>Node.js</li>"

const btn1 = document.querySelector('#btn1')


let name = prompt('input name')
console.log(name)
ul.innerHTML += `<li>${name}</li>`

btn1.onclick = function() {
  ul.innerHTML = ''
}