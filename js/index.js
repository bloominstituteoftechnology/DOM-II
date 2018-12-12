// Your code goes here
const navMouse = document.querySelectorAll('a');
navMouse[0].addEventListener('mouseover', function(e){
    e.target.style.color = 'gold';
    setTimeout(function(){
        e.target.style.color = '';
    }, 500);
});
navMouse[1].addEventListener('mouseover', function(e){
    e.target.style.color = 'blue';
    setTimeout(function(){
        e.target.style.color = '';
    }, 500);
});


// const divMove = document.querySelector('.content-destination');
const last_position = 0;

window.addEventListener('scroll', function(e){
    last_position = window.scrollY;
})

const imgGone = document.querySelector('.welcome');
console.log(imgGone);


navMouse[0].addEventListener('click', function(e){
    imgGone.classList.toggle('display-none');
});



// navMouse[3].addEventListener('dblclick', function(e){
//     imgGone.classList.toggle('destination');
// });
