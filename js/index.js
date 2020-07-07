// Your code goes here

//mouseover
const links = document.querySelectorAll('a')

links.forEach(link => {
    link.addEventListener('mouseover',() => {
        link.style.color = 'aqua'
    })
})

//keydown
document.addEventListener('keydown', (e) => {
    if(e.keyCode === 27 || e.key === 'Escape'){
        alert('There is no escape.')
    }
})