const questions = document.querySelectorAll('.flex')
const answers = document.querySelectorAll('p')
const h5s   = document.querySelectorAll('h5')



questions.forEach(question=>{
  question.addEventListener('click',isActive)
})


function isActive() {
 answers.forEach(answer=>{
  answer.classList.toggle('is-active')
 })

 h5s.forEach(h5=>{
  h5.classList.toggle('larger')
 })}



