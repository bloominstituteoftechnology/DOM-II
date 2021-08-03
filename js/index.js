// Your code goes here
window.addEventListener('load', event => 
{
    console.log(`${event.type} happened`);
});

let navA = document.querySelectorAll('.nav a');

navA[0].addEventListener('click', event => 
{
    event.target.style.backgroundColor = "yellow";
    document.h1;
});
