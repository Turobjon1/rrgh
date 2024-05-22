let plusbtn = document.getElementById('plus')
let minusbtn = document.getElementById('minus')
let span = document.getElementById('son')

let num = 0

plusbtn.style.backgroundColor = 'green'
minusbtn.style.backgroundColor = 'red'

plusbtn.addEventListener('click', ()=>{
   num++
   span.innerHTML = num
})

minusbtn.addEventListener('click', ()=>{
   num--
   span.innerHTML = num
})