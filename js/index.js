// Your code goes here

//mouseover
const links = document.querySelectorAll('a')

links.forEach(link => {
    link.addEventListener('mouseover',() => {
        link.style.color = 'aqua'
    })
})

//mouseout
links.forEach(link => {
    link.addEventListener('mouseout',() => {
        link.style.color = 'pink'
    })
})

//keydown
document.addEventListener('keydown', (e) => {
    if(e.keyCode === 27 || e.key === 'Escape'){
        alert('There is no escape.')
    }
})

//keyup
document.addEventListener('keyup', (e) => {
    if(e.keyCode != 27 || e.key != 'Escape'){
        alert('Press the escape key')
    }
})

//mousemove
const divs = document.querySelectorAll('div')
divs.forEach(div => {
    div.addEventListener('mousemove',(e) => {
        e.target.style.backgroundColor = 'red'
})
})

//load
const p = document.querySelectorAll('p')
window.addEventListener('load',() => {
    setTimeout(function(){
        p.forEach(instance => {
            instance.textContent = 'Press escape while you still can!'
        })
        },3000)
})

//focus
links.forEach(link => {
    link.addEventListener('focus', () => {
        link.style.transform = 'scale(1.2)'
    })
})

//resize
window.addEventListener('resize', () => {
    document.querySelector('body').style.backgroundColor = 'silver'
})

//scroll
const imgs = document.querySelectorAll('img')

window.addEventListener('scroll', () => {
    imgs.forEach(img => {
        img.style.display = 'none'
    })
})

//dblclick
links.forEach(link => {
    link.addEventListener('dblclick', () => {
        alert('CALM DOWN! No double clicks allowed!')
    } )
})

//event propagation 
//prevent default
const navBar = document.querySelector('.nav')

navBar.addEventListener('click', () => {
    alert('thy navbar hath been clicked')
})

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation()
        alert('thy link hath been clicked')
    })
})