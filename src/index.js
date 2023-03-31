import './less/index.less'

// Your code goes here!
console.log("Hello World");


// -1 LOAD
window.onload = function(evt){
    console.log(`event ${evt.type} fired! Ready to go`)

    const heading = document.querySelector("h1")
    heading.textContent = 'READY TO GO!!'
// -2COPY
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })
// -3 click 
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })
// -4 dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })
// -5 keydown
    window.addEventListener('keydown', evt =>{
        if(evt.key == 6){
            document.body.innerHTML = 'YOU RAN ORDER 66</h1'
        }
    })
// -6 mousemove
    document.body.addEventListener('mousemove', evt => {
        const {clientX, clientY} = evt
        //console.log(`mouse is at ${clientX} and at ${clientY}`)
    })

// -7 mouseenter
// -8 mouseleave

    const destinations = document.querySelectorAll('.destination')
    for(let destination of destinations){
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial'
        }, 500)
        })
    }
}