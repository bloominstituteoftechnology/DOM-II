// Your code goes here


//lock the page
const wholePage = document.querySelector('body');
const funBus = document.querySelector('#funBus');
const signUpButton = document.querySelector('.btn');
const intro = document.querySelector('.intro');




wholePage.addEventListener('wheel', (e) => {
//   e.preventDefault();  
})

intro.addEventListener("mouseover", function( e ) {
    e.target.style.color = 'red';
});

window.addEventListener('load', function( e ) {
    console.log('All Done!');
});

signUpButton.addEventListener('dblclick', function( e ) {
    e.target.parentNode.style.order = '1';
})

