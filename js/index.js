// Your code goes here
const aTags = document.querySelectorAll('a');
aTags.forEach(function(aTag){
    aTag.addEventListener('click',function(){
        aTag.style.color = 'green';
    })
    aTag.addEventListener('click',function(e){
        e.preventDefault();
    })
});

const busImg = document.querySelector('img');
busImg.addEventListener('mouseenter',function(){
    busImg.style.width = '50%';
    busImg.style.marginLeft = '25%';
});
busImg.addEventListener('mouseleave', function(){
    busImg.style.width = '100%';
    busImg.style.marginLeft = '0%';
});

const allImgs = document.querySelectorAll('img');
allImgs[2].addEventListener('drag',function(){
    allImgs[2].style.paddingRight = "30%";
});

const allPs = document.querySelectorAll('p');
allPs.forEach(function(p){
    p.addEventListener('mouseover',function(){
        p.style.color = 'red';
    })
});

const btn1 = document.querySelector('.btn');
btn1.addEventListener('mouseover', function(){
    btn1.textContent = "DONT CLICK ME!"
});
// btn1.addEventListener('mouseleave', function(){
//     btn1.textContent = "Sign Me Up!"
// });

const allBtns = document.querySelectorAll('.btn');
allBtns[1].addEventListener('mouseover', function(){
    allBtns[1].textContent = "PLEASE DONT CLICK ME!"
    allBtns[1].style.textAlign = 'center';
});
allBtns[2].addEventListener('mouseover', function(){
    allBtns[2].textContent = "You'll Regret It!"
    allBtns[2].style.textAlign = 'center';
});
allBtns.forEach(function(button){
    button.addEventListener('mouseleave',function(){
        button.textContent = "Sign Me Up!";
    })
});

window.addEventListener('scroll',function(){
    allPs[1].style.border = '1px dashed red';
})

allPs.forEach(function(p){
    p.addEventListener('click', function(){
        p.classList.toggle('click-style')
    })
});
let lastSec = document.querySelector('.content-destination');
lastSec.addEventListener('click',function(){
    console.log('Should not be logged')
});
allImgs[3].addEventListener('click', function(e){
    console.log('Should be logged');
    e.stopPropagation();

})



