const ul = document.querySelector('ul')
const skillArea = document.querySelector('#skill')
let prevSkill = null

function hdlClick(evt) {
  // console.log(ul.children)
  // for(let el of ul.children) {
  //   el.style.backgroundColor = ''
  // }
  console.log(prevSkill)
  if(prevSkill !== null) {
    prevSkill.style.backgroundColor = ''
  }

  if(evt.target.nodeName ==='UL') {
    return
  }
  
  // console.dir(evt.target)
  console.log(evt.target.outerHTML)
  // คลิกเลือกตัวไหนให้ background เป็นสี lime
  // เฉพาะตัวนั้นตัวเดียว
  // 14:35
  evt.target.style.backgroundColor = 'lime'
  skillArea.textContent = evt.target.textContent

  prevSkill = evt.target
}

ul.addEventListener('click', hdlClick)