// Your code goes here
let buttonBig = document.querySelectorAll('.btn');
buttonBig.forEach(item =>{
    item.addEventListener('mouseenter', e =>{
    item.style.transform = 'scale(1.5)';
    item.style.transition = '0.5s';
    });
});

let buttonSmall = document.querySelectorAll('.btn');
buttonSmall.forEach(item => {
    item.addEventListener('mouseleave', e => {
        item.style.transform = 'scale(1)';
        item.style.transition = '0.5s';
    })
});

let body = document.querySelector('body');
body.addEventListener('click', e => {
    body.style.backgroundColor = 'black';
})

let bodyLight = document.querySelector('body');
bodyLight.addEventListener('dblclick', e => {
    bodyLight.style.backgroundColor = 'white';
})

let imgScale = document.querySelectorAll('.img-content');
imgScale.forEach(item => {
    item.addEventListener('click', e => {
        item.style.transform = 'scale(2.5)';
        item.style.transition = '0.5s';
    })
})

let imgSmall = document.querySelectorAll('.img-content');
imgSmall.forEach (item => {
    item.addEventListener('dblclick', e => {
        item.style.transform = 'scale(1)';
        item.style.transition = '0.5s';
    })
})

let destImg = document.querySelectorAll('.content-destination');
destImg.forEach(item => {
    item.addEventListener('mouseenter', e => {
        item.style.transform = 'scale(2)';
        item.style.transition = '0.5s';
        e.stopPropagation();
    });
    
})
let destSmall = document.querySelectorAll('.content-destination');
destSmall.forEach(item => {
    item.addEventListener('mouseleave', e => {
        item.style.transform = 'scale(1)';
        item.style.transition = '0.25s';
        e.stopPropagation();
        
    });
})

let headText = document.querySelectorAll('h2');
headText.forEach(item => {
    item.addEventListener('mouseover', e => {
        item.style.color = "blue";
        item.textContent = "Secret Text!";
        e.stopPropagation();
    });
});

let navcolor = document.querySelectorAll('.nav')[0];
navcolor.addEventListener('mouseover', e => {
    navcolor.style.backgroundColor = 'blue';
})