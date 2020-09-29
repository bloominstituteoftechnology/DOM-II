// Your code goes here
const nav = document.querySelector('.container')
console.log(nav)
const section1 = document.querySelector('.intro')
console.log(section1)
const section3 = document.querySelector('.content-destination')
console.log(section3)
const section4 = document.querySelector('.content-section')
console.log(section4)
const home = document.querySelector('.home')
console.log(home)
const adventure = document.querySelectorAll('.text-content')
const section2 = adventure[1]

nav.addEventListener('keydown',function(event){
    if (event.key === 'Escape'){
    nav.style.backgroundColor = 'yellow'

}
})

 function backGround1(event) {section1.style. backgroundColor = 'yellow'
}

function backGround2(event) {section2.style. backgroundColor = 'skyblue'
}
home.addEventListener('click', backGround1)
function backGround3(event) {section3.style. backgroundColor = 'purple'
}
section4.addEventListener('click', backGround3)
//section1.addEventListener('click', backGround1)
section3.addEventListener('click', backGround2)
//section1.toggle(backGround1)
//section2.toggle(backGround2)