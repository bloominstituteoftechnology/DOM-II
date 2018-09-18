// Your code goes here


//mouseover

let logoText = document.querySelector('h1');
logoText.addEventListener('mouseover', function(event) {
                    logoText.style.fontSize = '200';
                    logoText.style.fontFamily = 'Roboto';
                    logoText.style.color = 'pink';
                    logoText.innerText = 'Mindy was Here!'
});

//keydown

window.addEventListener('keydown', (event) => {
   
       alert('Stop Pressing Keys Please!')
    
});

//wheel
const image = document.querySelector('.intro img')
image.addEventListener('wheel' , () => {
    image.style.display = "none";
});

//drag/drop
const imgAdventure = document.querySelector(".content-section img")
imgAdventure.addEventListener('dragstart', (event) => {
    //dragged = event.target;
    imgAdventure.style.opacity = 0.3;
}, false);

//load

//focus
//resize
//scroll
//select
//dblclick
