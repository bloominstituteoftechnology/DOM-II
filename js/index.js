// Your code goes here
document.addEventListener("keydown", function(event) {
    if(event.keyCode == '40') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    };
});

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', (event) => {
    event.target.style.fontSize= 'x-large';
    event.target.style.color= '#17A2B8';
}); 
nav.addEventListener('mouseout',(event) => {
    event.target.style = 'initial';
}); 

const reset = document.querySelector('.nav-link');
reset.addEventListener('click', (event) => {
    document.body.style = 'initial';
});


const button1 = document.querySelector('.content-pick .destination:nth-of-type(1) .btn');
button1.addEventListener('dblclick', (event) => {
    button1.textContent = 'You chose Fun In The Sun';
});

const button2 = document.querySelector('.content-pick .destination:nth-of-type(2) .btn');
button2.addEventListener('dblclick', (event) => {
    button2.textContent = 'You chose Mountain Excursion';
});

const button3 = document.querySelector('.content-pick .destination:nth-of-type(3) .btn');
button3.addEventListener('dblclick', (event) => {
    button3.textContent = 'You chose Island Getaway';
});

// const picks = document.querySelector('destination');
// picks.addEventListener('dblclick', (event) => {
//     event.target.style.backgroundColor = 'white'; 
// })