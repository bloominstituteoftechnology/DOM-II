// Your code goes here
const links = document.querySelector('.nav-container');

const pS = document.querySelector('.content-section');

const txt = document.querySelector('.inverse-content .text-content');

const rick = document.querySelector('.intro');

const sun = document.querySelector('.btn');

const hot = document.querySelector('.destination h4');

const yes = document.querySelector('.content-destination img');


links.addEventListener('click', event => {
    document.querySelector('.main-navigation').style.backgroundColor = "lightBlue";
});

pS.addEventListener('mouseover', event => {
   pS.style.backgroundColor = 'yellow';
});

txt.addEventListener('mouseover', event => {
    txt.style.backgroundColor = 'green';
    txt.style.color = 'white';
});

rick.addEventListener('click', function(event){
    const A = document.createElement('a');
    const newLink = document.createTextNode("Travell Now!!");
    A.appendChild(newLink); 
    A.title = "Travell Now!!";
    A.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    document.querySelector('.nav').appendChild(A);
});

sun.addEventListener('click', event => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQs', '_blank').focus();
});

yes.addEventListener('dblclick', event =>{
    yes.style.width = '100%'
    yes.style.height = '50%'
});
