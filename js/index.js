// Your code goes here

const body = document.querySelector('body');
body.addEventListener('mouseover', () => {
    body.style.backgroundColor = 'lime';

    body.addEventListener('mouseleave', () => {
        body.style.backgroundColor = 'white';


})
});



const funBus = document.querySelector('.intro img');
console.log(funBus);
funBus.addEventListener('mouseenter', () => {
    funBus.style.transform = 'scale(2.25)';

    funBus.addEventListener('mouseleave', () => {
        funBus.style.transform = 'scale(1)';
    })
});

const letsGo = document.querySelector('.img-content');
console.log(letsGo);
letsGo.addEventListener('click', () => {
    letsGo.style.visibility = 'hidden';

});

const adventure = document.querySelector('.inverse-content .img-content');
console.log(adventure);
adventure.addEventListener('click', (e) => {
    adventure.style.visibility = 'hidden';
});

const adventureText = document.querySelector('.inverse-content .text-content');
adventureText.addEventListener('click', (e) => {
    adventureText.style.visibility = 'hidden';
});

const yourDestination = document.querySelector('.content-destination img');
console.log(yourDestination);
yourDestination.addEventListener('dblclick', () => {
    yourDestination.style.transform = 'scale(3)';
    yourDestination.style.transition = '3s';
    yourDestination.addEventListener('click', () => {
        yourDestination.style.transform = 'scale(1)';
})
});



const destination = document.querySelector('.destination');
destination.addEventListener('click', (e) => {
    destination.style.color = 'orange';
    
});

const destinationHead = document.querySelector('.destination h4');
destinationHead.addEventListener('click',(e) => {
    destinationHead.style.color = 'purple';
    e.stopPropagation();
});

const destinationPara = document.querySelector('.destination p');
destinationPara.addEventListener('click', (e) => {
    destinationPara.style.color = 'blue';
})