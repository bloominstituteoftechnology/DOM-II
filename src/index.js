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
      document.body.innerHTML = "<h1> NO MORE FUN BUS</h1>"   
  }  
})

// mousemove
document.body.addEventListener('mousemove', evt => {
    const { clientX, clientY } = evt
});


// mouse enter&leave

const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', ()=>{
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', ()=>{
        setTimeout(() =>{
            destination.style.fontWeight = 'initial'
        }, 500)
    })
}
