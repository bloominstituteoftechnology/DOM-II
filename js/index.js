// Your code goes here
const navBox = document.querySelectorAll('.nav a')
// console.log(navBox)
for (let i = 0; i < navBox.length; i++){
    navBox[i].addEventListener('mouseover', function(){

        navBox[i].classList.add('nav-link')
    });
    
    navBox[i].addEventListener('mouseout', function(){

        navBox[i].classList.remove('nav-link')
    }); 
}


const funBus = document.querySelector ('.logo-heading')
funBus.addEventListener('dblclick', function(){
    funBus.classList.add('funBusNew')
})


const funBusBack = document.querySelector('.container')
funBusBack.addEventListener('click', function(){
    funBus.classList.remove('funBusNew')
})

const 