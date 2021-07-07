// Your code goes here!
// Change 1
const navLinks = document.querySelector('.nav a')

function colorChange(event){
    if(event.keyCode === 81){// Q key
        navLinks.style.backgroundColor = 'red'
        console.log('you changed the nav links background color to red')
    }
}

document.addEventListener('keydown', colorChange)

// Change 2
// const topPic = document.querySelector('header h1')

// function picChange(event){
//     topPic.
// }
// Change 3
const signMeUp = document.querySelectorAll('.btn')

signMeUp.onclick = function(event){
    console.log('pressed button')
    signMeUp.src = 'https://www.travelocity.com/'
}

document.addEventListener('onclick', signMeUp)

// Change 4

const para = document.querySelectorAll('p')

function paraColor(event){
    if(event.keyCode === 49){// 1 Key
        para.color === 'red'
        console.log('You pressed 1')
    }
}

document.addEventListener('keydown', paraColor)