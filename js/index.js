// Your code goes here
const links = document.querySelector('.nav-container');

const pS = document.querySelector('.content-section');

const txt = document.querySelector('.inverse-content .text');

const rick = document.querySelector('.intro');

const sun = document.querySelector('.btn');

links.addEventListener('click', event => {
    document.querySelector('main-navigation').getElementsByClassName.backgroundColor = 'lightBlue';
});

pS.addEventListener('mousemove', event => {
    pS.style.backgroundColor = 'yellow';
});

Text.addEventListener('mousemove', event => {
    Text.style.backgroundColor = 'white';
});

rick.addEventListener('click', function(event){
    const A = document.createElement('a');
    const newLink = document.createTextNode("Travell now!");
    A.title = "Travel Now!";
    A.href = "#";
    document.querySelector('.nav').appendChild(A);
});

Sun.addEventListener('click', event => {
    window.open.location = '#'
}); 





