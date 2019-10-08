// Your code goes here

let headerImage = document.querySelector('.intro img')
let imgNum = 0
headerImage.addEventListener('click', (e)=>{

    e.target.setAttribute('src', 'https://picsum.photos/1000/300?random=' + imgNum)
    imgNum++
})

headerImage.addEventListener('dblclick', (e)=>{
    welcome.textContent = "That's just rude! "
})

let logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mouseover', (e)=>{
    e.target.innerHTML = `<img width="32px" src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif"> Fun Bus <img width="32px" src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif">`
})

 let nav = document.querySelector('.main-navigation')
nav.addEventListener('drag', ()=>{
    alert(`Yo! Don't poke me ther B!`)
})



let navLink = document.querySelectorAll('.nav .nav-link')
navLink.forEach(link=>{
    link.addEventListener('wheel', (e)=>{
        e.stopPropagation()
        e.preventDefault()
        e.target.innerHTML = `<img width="32px" src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif">`
    })
})

let welcome = document.querySelector('.intro h2')
document.addEventListener('keydown', (e)=>{
    e.preventDefault()
    welcome.innerHTML = `You pressed: '${e.key}' and the key code is: '${e.keyCode}'` 
})




let letsGo = document.querySelector('.text-content h2')

document.addEventListener('copy', (e)=>{
    letsGo.textContent = 'YO, YO! Stop copying that!'
})

document.addEventListener('cut', (e)=>{
    letsGo.textContent = 'Now you cutting!?'
})

document.addEventListener('mousedown', (e)=>{
    letsGo.textContent = 'You have been pressing that for too long'
})





document.addEventListener('scroll', (e)=>{
    logoHeading.innerHTML = 'Yeah, keep scrolling pal'
})

document.addEventListener('resize', (e)=>{
    console.log('WHAT ARE YOU DOING?')
})