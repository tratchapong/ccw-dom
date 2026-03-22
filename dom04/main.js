const item1 = document.querySelector('#item1')
const h2 = document.querySelector('h2')
const ul =document.querySelector('ul')

function itemClick(evt) {
  console.log(evt)
  evt.stopPropagation()
  h2.textContent = 'item click'
  console.log('item1 click')
}

item1.addEventListener('click', itemClick)

ul.addEventListener('click', ()=>{
  console.log('UL Click')
})

document.body.addEventListener('click', ()=> {
  console.log('Body Click')
})
