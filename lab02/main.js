// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0
// 13:10

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const numberArea = document.querySelector('#number')
let counter = 0

numberArea.textContent = counter

// function hdlAdd() {
//   counter += 1
//   numberArea.textContent = counter
// }
// function hdlDec() {
//   counter -= 1
//   numberArea.textContent = counter
// }
// function hdlClear() {
//   counter = 0
//   numberArea.textContent = counter
//   return undefined
// }

function hdlUpdate(step) {

  if(counter+step < 0) {
    return
  }
  counter += step // counter = counter + step
  numberArea.textContent = counter
}

// Wrapper function 
btn1.addEventListener('click', (evt) => hdlUpdate(-1) )
btn2.addEventListener('click', () => hdlUpdate(1))
btn3.addEventListener('click', () => hdlUpdate(-counter))

// btn1.addEventListener('click', function() { hdlUpdate(-1)})
// btn2.addEventListener('click', function() { hdlUpdate(1) })
// btn3.addEventListener('click', function() { hdlUpdate(-counter)})


// event target
// function hdlClick(evt) {
//   console.log(evt.target)
//   console.log(999)
// }

// numberArea.addEventListener('click',hdlClick )



