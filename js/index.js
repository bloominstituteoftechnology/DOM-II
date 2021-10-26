const welcome = document.querySelector('.intro .h2');
console.log(welcome);


const button = document.querySelector('.destination .btn');

button.addEventListener('click', function(){
    button.textContent = ('hey you clicked me!');
    button
});
