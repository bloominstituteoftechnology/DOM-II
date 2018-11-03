// Your code goes here
const h1 = document.querySelector('.logo-heading');
const body = document.querySelector('body');
const sandBus = document.querySelector('.intro img');

//Hovering cursor over 'Fun Bus' title toggles a palette of text colors
h1.addEventListener('mouseover', function(event){
    h1.classList.toggle('logo-colors');
    //need to remove class before next mouseover
})

//Toogles website dark palette by pressing '-'
body.addEventListener('keydown', function(event){
    const keyName = event.key;
    if(keyName === '-'){
        body.classList.toggle('dark-mode');
    }
    //Need to fix colors
})

sandBus.addEventListener('wheel', function(event){
    sandBus.classList.toggle('.vrooom');
})

