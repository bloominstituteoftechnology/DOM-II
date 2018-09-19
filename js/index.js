// Your code goes here
//All my references


let funLogo = document.querySelector('.logo-heading')
let funNav = document.querySelector('nav')
let funDestination = document.querySelector('.destination');
let funFoot = document.querySelector('.footer')
let getFoot = document.getElementsByTagName('p');
let getBody = document.querySelector('body');
// let funButton = document.querySelector()
// let funImageContent = document.querySelector()
// let fun = document.querySelector()
// let buttonFun = document.querySelector()
// let buttonFun = document.querySelector()
// let buttonFun = document.querySelector()
// let buttonFun = document.querySelector()
// let buttonFun = document.querySelector()
// let buttonFun = document.querySelector()
let getImg = document.getElementsByClassName('img-content');


let getButtons = document.getElementsByClassName('btn');
getButtons[0].addEventListener('click', (event) => {
    event.stopPropagation();
funNav.style.backgroundColor = 'yellow';
funNav.style.color = 'red';
funNav.style.padding = '30px';
funNav.style.width = '600px';



})


getButtons[0].addEventListener('dblclick', (event) => {
funNav.style.backgroundColor = 'white';

})

getButtons[1].addEventListener('mouseover', (event) => {
    
        
funDestination.style.backgroundColor = 'yellow';
        
})

getButtons[1].addEventListener('mouseleave', (event) => {
    funDestination.style.backgroundColor = 'white';
    funDestination.classList.toggle('everybodyJump')
})

getBody.addEventListener('wheel', (event) => {
    event.stopPropagation();
getFoot[9].style.color = 'red';
getFoot[9].classList.toggle('everybodyJump')
})

let newNavItem = document.createElement('a');
newNavItem.innerText = "Click To Search";
funNav.prepend(newNavItem);

let newAnchorItem = document.createElement('input');
funNav.prepend(newAnchorItem);

let getInput = document.querySelector('input');
getInput.addEventListener('keydown', (event) => {
getImg[0].style.width = '300px';
getImg[0].style.height = '300px';
getImg[0].classList.toggle('everybodyJump')
    
})

getInput.addEventListener('keyup', (event) => {
    getImg[0].style.width = '250px';
    getImg[0].style.width = '250px';
    // getImg[0].classList.toggle('fadeDown');
    TweenMax.from(".logo-heading",5,{
        marginLeft:1000,
        ease: SlowMo.ease.config( 0.8, 0.7, false),
        rotation: 360,
     });
    });

    funNav.addEventListener('click', (event) => {event.preventDefault()})


getImg[0].addEventListener('mouseenter', (event) => {
    TweenMax.from(".intro",5,{
        paddingLeft:1000,
        ease: SlowMo.ease.config( 0.8, 0.7, false),
        rotation: 360,
     });
    });


    getImg[0].addEventListener('load', (event) => {
        getImg[1].style.backgroundColor = "red";
    });

        getImg[0].addEventListener('focus', (event) => {
            getImg[1].style.backgroundColor = "blue";
        });