// ให้เพิ่ม,​ ลบ รายการ movie ได้ 

const inp1 = document.querySelector('#inp1')
const movieForm = document.querySelector('#movie-form')
const movieList = document.querySelector('.movie-list')

function delMovie(evt) {
  evt.target.parentElement.remove()
}

function hdlSubmit(evt) {
  evt.preventDefault()
  if (!inp1.value) {
    return
  }
  const newMovie = document.createElement('div')
  newMovie.classList.add('movie-item')
  const span = document.createElement('span')
  span.textContent = inp1.value
  const button = document.createElement('button')
  button.textContent='Del'
  button.addEventListener('click', delMovie)
  newMovie.append(span)
  newMovie.append(button)
  console.log(newMovie)
  movieList.append(newMovie)
  inp1.value = ''
}

movieForm.addEventListener('submit', hdlSubmit)