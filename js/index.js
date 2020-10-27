// Your code goes here
const nav = document.querySelectorAll('nav a')
console.log(nav)
nav.forEach(nav =>{
nav.addEventListener('mouseover', e =>{
    nav.style.color = 'red'
})
})
nav.forEach(nav =>{
    nav.addEventListener('mouseleave', e =>{
        nav.style.color = 'black'
    })
    })
const picture = document.querySelector('.img-content')
document.addEventListener('keydown',e=>{
    if(e.key === 'a'){
        picture.classList.add('off')
        console.log('I pressed key')
    }
})
document.addEventListener('keydown',e=>{
    if(e.key === 's'){
        picture.classList.remove('off')
        console.log('I pressed key')
    }
})

// document.querySelectorAll('nav a').forEach(item=>{
//     item.addEventListener('mouseenter', event=>{
//         style.color = 'red'
//     })
// })

// const nav = document.querySelectorAll('nav a')

// nav.forEach(item =>{
//     item.addEventListener('mouseenter', event =>{
//         nav.style.color = 'red'
        
//     })
//     console.log(nav)
// })

const header = document.querySelector('.logo-heading')
console.log(header)
header.addEventListener('mouseenter', e =>{
    header.style.color = 'red'
})
header.addEventListener('mouseleave', e =>{
    header.style.color = 'black'
})