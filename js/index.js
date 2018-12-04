// Your code goes here


const logHead = document.querySelector('h1');
logHead.addEventListener('click', function(){
    logHead.style.border = '2px dashed hotpink';
});

const adventure = document.querySelector('.img-content img');
adventure.addEventListener('mouseover', function(){
    adventure.style.opacity = '0';
});

const blog = document.querySelector('a');
blog[3].addEventListener('click', function(e){
  e.preventDefault();
});


