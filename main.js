const questions = document.querySelectorAll('.flex')
const answers = document.querySelectorAll('p')
const h5s  = document.querySelectorAll('h5')


questions.forEach((question,i)=>{
 question.addEventListener('click',()=>isActive(i))
})



function isActive(i){
  answers.forEach((answer,j)=>{
    if(i !== j) return  answer.classList.remove('is-active')

   answers[i].classList.toggle('is-active')
  
  h5s.forEach((h5,j)=>{
    if(i!==j) return  h5.classList.remove('larger')
    
  })
  h5s[i].classList.toggle('larger')
 
  })

}