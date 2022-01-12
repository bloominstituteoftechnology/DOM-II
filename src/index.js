import './less/index.less'

// Your code goes here!
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready!`)
}

const heading = document.querySelector('h1')
heading.textContent = "Fun Bus? More like Bun Bus!"


// copy

window.addEventListener('copy', ()=>{
    navigator.clipboard.readText()
    .then(text =>{
    heading.textContent += text
    })
})

// click

document.body.addEventListener('click', evt =>{
    evt.target.classList.toggle('mirror')
})

// two click

document.body.addEventListener('dblclick', evt =>{
    evt.target.outerHTML = ""
})

// Keydown
window.addEventListener('keydown', evt =>{
  if (evt.key === 6){
      document.body.innerHTML = "NO MORE FUN BUS"
  }  
})