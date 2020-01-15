// Your code goes here

let busDrive = document.getElementsByTagName("img")
    busDrive[0].addEventListener('mouseenter', () => {
        busDrive[0].style.transform = "scale(0.8)"
    })

let mapRotate = document.getElementsByTagName('img')
    mapRotate[1].addEventListener('mousemove', () => {
        mapRotate[1].style.transform = 'rotate(70deg)'
    })

let cityRotate = document.getElementsByTagName('img')
    cityRotate[2].addEventListener('click', () => {
        cityRotate[2].style.transform = 'rotate(-70deg)'
    })

let textGrow = document.querySelectorAll('h2')
    textGrow[0].addEventListener('mouseenter', () =>{
        textGrow[0].style.fontSize = "10rem";
    })
  
let bodyColorBackground = document.querySelector('body')
    bodyColorBackground.addEventListener('mouseenter', () => {
        bodyColorBackground.style.backgroundColor = "blue";    
    })

let enterTextColor = document.querySelector('body')
    enterTextColor.addEventListener('mouseenter', () => {
        enterTextColor.style.color = "red";
    }) 

let exitTextColor = document.querySelector('body')
    exitTextColor.addEventListener('mouseleave', () => {
        exitTextColor.style.color = "green";
    })

let navColorBackground = document.querySelector('.main-navigation')
    navColorBackground.addEventListener('mouseenter', () => {
        navColorBackground.style.backgroundColor = '#32CD32';
    })


let flipButton = document.querySelectorAll('.btn')
    flipButton.forEach(el => {
       el.addEventListener('click', (event) => {
        el.style.transform = 'rotate(180deg)'
        event.stopPropagation();
    } )
    })

let enlargeText = document.querySelectorAll('p')
    enlargeText[3].addEventListener('mouseenter' , () => {
        enlargeText[3].style.fontSize = '4rem';
    })

let stopNav = document.querySelectorAll(".nav-link");
    stopNav.forEach(i => {
    i.addEventListener("click", (event) => {
        event.preventDefault();
})
})

      

    
    
    

 