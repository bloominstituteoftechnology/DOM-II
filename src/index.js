import './less/index.less'

// Your code goes here!
//#1 load
window.addEventListener('load', (evt) =>{
    console.log(`Site ${evt.type} ready! `)
});

//#2 click log how many times a sign me up buttton has be clicked
document.querySelectorAll('.btn').forEach(item => {
item.addEventListener('click', evt => {
    console.log(`Click count ${evt.detail}`)
})
})
    
//#3 copy
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        console.log(`User copied text ${text}`)
    })
})

//#4 mousemove
document.body.addEventListener('mousemove', evt => {
console.log(evt)    
})

//#5 keydown
window.addEventListener('keydown', evt => {
    if (evt.key == 8) {
        document.body.innerHTML = 'SORRY THIS BUS HAS LEFT'
    }
})


//#6 dblclick
document.body.addEventListener('dblclick', evt => {
    evt.target.classList.toggle('mirror')
})



