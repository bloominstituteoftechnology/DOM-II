let red = document.querySelector('.block--red')
let blue = document.querySelector('.block--blue')
let green = document.querySelector('.block--green')
let pink = document.querySelector('.block--pink')
let gray = document.querySelector('.block--gray')
let allBoxes = gray.parentNode;
let topOrder = -1;



allBoxes.addEventListener('click', e =>{
    topOrder--;
    if (e.target === red){
        red.style.order = topOrder;
    }
    if (e.target === blue){
        blue.style.order = topOrder;
    }
    if (e.target === green){
        green.style.order = topOrder;
    }
    if (e.target === pink){
        pink.style.order = topOrder;
    }
    if (e.target === gray){
        gray.style.order = topOrder;
    }
})