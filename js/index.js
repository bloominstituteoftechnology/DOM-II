// Your code goes here

//load(1)
window.addEventListener('load', (event) =>{
    alert('Welcome to Fun Bus Travel Agency')
})

const nav = document.querySelector('.nav')
//mouseover(2)
nav.addEventListener('mouseover', (event) =>{
    event.target.style.color = '#11C6CC';
    event.target.style.fontSize = 'x-large'
})
//mouseout(3)
nav.addEventListener('mouseout', (event) =>{
    event.target.style = 'initial';
})

//keydown(4)
document.addEventListener('keypress', (event) =>{
    alert(`You pressed  ${event.code}.`)
})

//click reset when click home(5)
const reset = document.querySelector('.nav-link');
reset.addEventListener('click', (event) => {
    document.body.style = 'initial';
    button1.textContent = 'Sign Me Up!';
    button2.textContent = 'Sign Me Up!';
    button3.textContent = 'Sign Me Up!';
});

//double click(6)
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

//mouseenter(7)
const header= document.querySelector('.intro')
header.addEventListener('mouseenter', (event) => {
    event.target.style.border = '5px dashed #11C6CC';
    event.target.style.backgroundColor = '#E32F97'
})

//mouseleave(8)
header.addEventListener('mouseleave', (event) => {
    event.target.style = 'initial';
})

//scroll(9)

document.addEventListener('scroll', (event) =>{
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
})

//keyup(10)
document.addEventListener('keyup', (event) =>{
    if(event.keyCode == '20'){
        document.body.style = 'initial'
        button1.textContent = 'Sign Me Up!';
        button2.textContent = 'Sign Me Up!';
        button3.textContent = 'Sign Me Up!';
    }
})

//focusin
// const footer = document.querySelector('.footer');
// footer.addEventListener('focusin', (event) => {
//     event.target.style.color = 'green';    
//   });

//   //focusout
//   footer.addEventListener('focusout', (event) => {
//     event.target.style = 'initial';    
//   });


