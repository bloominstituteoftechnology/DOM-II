// Your code goes here
const navTag = document.querySelectorAll('a');

(function () {
    navTag.forEach(key => {
        key.addEventListener('click', color => {
            color.preventDefault()
            key.style.color = '#ffc300';
            key.style.fontWeight = 'Bold';
        })
        key.addEventListener("focus", key => {
            key.style.backgroundColor = "green"
        });
    });

})();


// Heading 
const logoHeading = document.querySelector('.nav-container h1');

logoHeading.addEventListener('wheel', function(key) {
    key.target.style.fontSize = '50px';
    key.target.style.color = 'red';
    key.target.style.fontWeight = 'Bold';
});

//Header Image
const funBusImg = document.querySelector('img');

funBusImg.addEventListener('dblclick', key => {
    key.target.style.borderRadius = '100px';
});

//Lets Go
const adventureImg = document.querySelector('.img-content img');

adventureImg.addEventListener('load', function(key) {
    key.target.style.border = '4px solid #ffc300';
});

const container = document.querySelector('.text-content h2');

container.addEventListener('drag', () => {
    container.textContent = 'Lets Go Where???';
});

const welcome = document.querySelector('.intro h2');

window.addEventListener('scroll', () => {
    welcome.textContent = 'The fun Bus is Leaving...';
    welcome.style.fontWeight = 'Bold';
    welcome.style.color = 'red'
});

const body = document.querySelector('.home');

window.addEventListener('resize', () => {
    body.style.backgroundColor = 'grey';
});

const midImage = document.querySelector('.rounded');

midImage.addEventListener('mouseover', () => {
    midImage.style.boxShadow = '2px 2px 5px black'
});

// Last image
const lastPic = document.querySelector('.content-destination img');

lastPic.addEventListener('mouseover', () => {
    lastPic.style.boxShadow = '2px 2px 5px black'
});