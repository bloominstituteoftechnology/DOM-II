// Your code goes here

const nav = document.querySelector('.nav')
//mouseover
nav.addEventListener('mouseover', (event) =>{
    event.target.style.color = '#11C6CC';
    event.target.style.fontSize = 'x-large'
})
//mouseout
nav.addEventListener('mouseout', (event) =>{
    event.target.style = 'initial';
})

//keydown
document.addEventListener('keydown', (event) =>{
    if(event.keyCode == '40'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
})

//click reset when click home
const reset = document.querySelector('.nav-link');
reset.addEventListener('click', (event) => {
    document.body.style = 'initial';
});

//double click
const button1 = document.querySelector('.content-pick .destination:nth-of-type(1) .btn');
button1.addEventListener('dblclick', (event) => {
    button1.textContent = 'You chose Fun In The Sun';
    button2.textContent = 'Sign Me Up!';
    button3.textContent = 'Sign Me Up!';

});

const button2 = document.querySelector('.content-pick .destination:nth-of-type(2) .btn');
button2.addEventListener('dblclick', (event) => {
    button2.textContent = 'You chose Mountain Excursion';
    button1.textContent = 'Sign Me Up!';
    button3.textContent = 'Sign Me Up!';

});

const button3 = document.querySelector('.content-pick .destination:nth-of-type(3) .btn');
button3.addEventListener('dblclick', (event) => {
    button3.textContent = 'You chose Island Getaway';
    button2.textContent = 'Sign Me Up!';
    button1.textContent = 'Sign Me Up!';

});

//mouseenter
const header= document.querySelector('.intro')
header.addEventListener('mouseenter', (event) => {
    event.target.style.border = '5px dashed #11C6CC';
})

//mouseleave
header.addEventListener('mouseleave', (event) => {
    event.target.style = 'initial';
})
