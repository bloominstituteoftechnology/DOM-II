import './less/index.less'

// Your code goes here!

document.body.onload = function(evt){
    console.log(`event ${evt.type} fun bus` )
const heading = document.querySelector('h1');
heading.textContent = 'now even funner!'

}
document.body.addEventListener('click', evt => {
    evt.target.classlist.toggle('')
})

document.body.addEventListener('copy', ()=> {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text
    })
})
document.body.addEventListener('dbclick', evt => {
    evt.target.innerHTML = ''
})

document.body.addEventListener('keydown', evt => {
    if (evt.key == 6) {
        document.body.innerHTML = '<h1> out of order </h1>'
    }
})
const destinations = document.querySelectorAll('.destinations')
for (let destination of destinations){
    destination.addEventListener('mouseenter', () =>{
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
    destination.style.fontWeight = 'initial'
        }, 400)
    })
}

document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
})