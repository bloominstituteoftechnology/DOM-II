// Your code goes here

// __________________________________MOUSEOVER
const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', function(event) {
    event.target.style.color = "white";
});

// __________________________________KEYDOWN
document.addEventListener('keydown', function(event) {
    if (event.keyCode == '65') {
        alert("You need to go on vacation now!")
    };
  });

// __________________________________WHEEL
const container = document.querySelector('.container');
const home = document.querySelector('.home');

home.addEventListener('wheel', (e) => {
    
  home.style.backgroundColor = 'black';
  home.style.color = 'white';
    
});

// __________________________________DRAG / DROP
const mainImg = document.querySelector('.img-content');
const content = document.querySelector('.intro');

mainImg.addEventListener("drag", (e) => {

    var img = new Image();
    img.src = 'img/adventure.jpg';
    e.dataTransfer.setDragImage(img, 0, 0);
    content.style.display = 'hidden';
    alert("WHY ARE YOU TAKING MY PICTURE??? NOW YOU BROKE MY WEBSITE!!");
    showAlert = false;
});

// __________________________________DBLCLICK
const heading = document.querySelector('.logo-heading');
const welcome = document.querySelector('h2')

heading.addEventListener('dblclick', function(e)  {
    heading.innerText = 'Tr0ll Bus';
    welcome.innerText = 'Welcome To The Troll Bus!'
    // console.log('This is being clicked');
});

const signUp = document.querySelector('.btn');
const body = document.querySelector('body');

signUp.addEventListener('dblclick', function(e){
    body.style.display = 'none';
    alert('Why are you pressing my buttons?') 
    // console.log('btn clicked')
});






