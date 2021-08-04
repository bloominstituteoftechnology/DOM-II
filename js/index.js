// Your code goes here

const nav = document.querySelector('.nav-link')
nav.addEventListener('mouseover', function(event){
    nav.style.color = 'white'
    nav.style.backgroundColor = 'blue'
    nav.style.transform = 'rotate(20deg)'
})

function sKey(event) {
    if(event.key === 's'){
        alert('Sexy')
    }
}
document.addEventListener('keydown', sKey)

const footer = document.querySelector('.footer') 
footer.addEventListener('dblclick', function (event){
    footer.style.backgroundColor = 'red'
})

const header = document.querySelector('h2')
header.addEventListener('mouseover', function(event) {
    header.style.transform = 'rotate(20deg)'
})

// const navLink = document.querySelectorAll('a')
//     navLink[0].addEventListener('click', () =>{
//         navLink[0].style.background = 'lightgreen'
//         navLink[0].style.transform = 'rotate(20deg)'
//         navLink[1].style.background = 'red'
//         navLink[2].style.background = 'blue'
//         navLink[3].style.background = 'yellow'
        
//     })

const textChange = document.querySelector('.text-content')
textChange.addEventListener('click', function(event){
    textChange.textContent = 'I hope this works'
    // stopPropagation();
})

const button = document.querySelector('.btn')
button.addEventListener('mouseover', function(event){
    button.style.color = 'red'
})

const 