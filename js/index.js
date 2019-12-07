// Your code goes here
const topImg = document.querySelector('.intro');
topImg.addEventListener('mouseover', function(){
    topImg.style.color = 'blue';
})

topImg.addEventListener('mouseleave', function(){
    topImg.style.color= 'black';
})

const wheel1 = document.querySelector('.img-content');
wheel1.addEventListener("mouseenter", function (){
    wheel1.style.transform = 'scale(1.5)'
    wheel1.style.transition = 'transform 0.3s'
    
})

wheel1.addEventListener('mouseleave', function(){
    wheel1.style.transform = 'scale(1)'
})


let counter = 0;
const buttonall = document.querySelectorAll('.btn');
buttonall.forEach((btn) => {
    btn.addEventListener('click', function (event){
        counter += 1;
        // test.innerHTML = `Click count: ${event.detail}`;
        updateAllBtns(`Click count: ${counter}`);
    });
});

function updateAllBtns(innerHTML) {
    buttonall.forEach(btn => btn.innerHTML = innerHTML);
}


