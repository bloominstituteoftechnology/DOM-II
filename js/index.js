// Your code goes here


//Resizes the parent node of btn when the btn is clicked
const btns = document.querySelectorAll('.btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {
        event.stopPropagation();
        event.target.parentNode.style = `transform:scale(${(0.2 + i) * .7})`
    });
}


//Selects the jumbo image and animates it when you wheel over it
const firstImg = document.querySelector('img');
firstImg.addEventListener('wheel', function (event) {
    firstImg.animate([
            {transform: 'translateY(-1000px)'},
            {transform: 'translateY(0px)'}
        ],
        {
            duration: 1000,
            iterations: 1
        }
    );
});


//Selects the content images and changes the opacity when doubleclicked
const imgContent = document.querySelectorAll('.img-content');

for (let i = 0; i < imgContent.length; i++) {
    imgContent[i].addEventListener('dblclick', function (event) {
        event.target.style.opacity = 0.5;
    })
}

//When the window is resized, the footer becomes 50px
window.addEventListener('resize', function (event) {
    document.querySelector('footer').style.width = '50px'
});



//resizes the entire page when a key is pressed
window.addEventListener('keydown', () => {
    document.querySelector('body').animate([
            {transform: 'scale3d(0.1, 0.5, 0.2)'},
            {transform: 'scale3d(1, 1, 1)'}
        ],
        {
            duration: 1000,
            iterations: 1
        }
    )
});


//Changes the font family when the mouse goes over the text content
const textContent = document.querySelectorAll('.text-content');

for (let i = 0; i < textContent.length; i++) {
    textContent[i].addEventListener('mouseover', function (event) {
        event.target.style.fontFamily = 'Arial'
    });
}

//rotates navbar items and navbar itself when the mouse leaves the nav
const navBar = document.querySelector('nav');
navBar.addEventListener('mouseout', function(event) {
    event.target.style.transform = 'rotate(180deg)';
});

//changes the background color of fun in the sun when the mouse is pressed down
const firstDestinationDiv = document.querySelector('.destination');
firstDestinationDiv.addEventListener('mousedown', function(event) {
    event.target.style.backgroundColor = 'red'
});


//Adds a border to the funbus image when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.logo-heading').style.border = '5px black dashed';
});


document.querySelector('.intro').addEventListener('mouseup', function(event) {
    event.target.style.backgroundColor="green";
});


