import './less/index.less'

// Your code goes here!

// 1 
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector(`h1`)
    heading.textContent = `READY TO GO!!`

    // 2 - 
    window.addEventListener(`copy`, () => {
        navigator.clipboard.readText()
        .then(text => {
        heading.textContent += text 
        })
    })

    // 3 click 
    document.body.addEventListener(`click` , evt => {
        evt.target.classList.toggle(`mirror`)
    })

    // 4 dblclick
    document.body.addEventListener(`dblclick` , evt => {
        evt.target.innerHTML = ``
    })
    
    //5 Keydown 
    window.addEventListener(`keydown` , evt => {
        if (evt.key == 6) {
            document.body.innerHTML = 'YOU RAN ORDER 66'
        }
    })

    // 6 Mouse Move 
    document.body.addEventListener(`mousemove` , evt => {
        const { clientX , clientY} = evt
        // console.log(`mouse is at ${clientX}, ${clientY}`)
    })
    // 7 Mouseenter 
    //8 Mouseleave 

    const destination = document.querySelectorAll(`.destination`)

    for ( let destination of destination) {
    destination.addEventListener(`mouseenter` , () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener(`mouseleave` , () =>{
        destination.style.fontWeight = 'initial'
    })
    }   
}