// Your code goes here
const headerImage = document.querySelector('.container img')

function rotate(){
    headerImage.style.transform = 'rotate(180deg)';

}

headerImage.addEventListener('mouseover', rotate)

function removeImage(event){
    if(event.key === 'Escape'){
        headerImage.remove()
    }
}

document.addEventListener('keydown', removeImage)

const funBus = document.querySelector('.main-navigation .logo-heading')

function funBusFont(){
    funBus.style.fontSize = 'small';
}

funBus.addEventListener('wheel', funBusFont)

const button1 = document.querySelector('.destination:nth-child(1) .btn')

const button2 = document.querySelector('.destination:nth-child(2) .btn')

const button3 = document.querySelector('.destination:nth-child(3) .btn')

const section1 = document.querySelector('.destination:nth-child(1) ')

const section2 = document.querySelector('.destination:nth-child(2) ')

const section3 = document.querySelector('.destination:nth-child(3) ')

const section1P = document.querySelector('.destination:nth-child(1) p')

function button1Click(){
    section2.style.display = 'none'
    section3.style.display = 'none'
}

function button2Click(){
    section1.style.display = 'none'
    section3.style.display = 'none'
}

function button3Click(){
    section1.style.display = 'none'
    section2.style.display = 'none'
}

button1.addEventListener('click', button1Click)

button2.addEventListener('dblclick', button2Click)

button3.addEventListener('click', button3Click)


//I'm having trouble understanding the other events, i could not get load, focus, resize, scrol, and select to work