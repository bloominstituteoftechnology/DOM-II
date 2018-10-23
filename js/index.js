// Your code goes here

const busImg = document.querySelector('.intro img');
const introSection = document.querySelector('.intro');
const introHeading = document.querySelector('.intro h2');

busImg.addEventListener('mouseenter', function(event) {
    event.target.style.transform = 'scale(.8)';
    event.target.style.transition = 'all .4s ease-out';
    introSection.style.background = `rgba(237, 201, 175, .4)`;
    introSection.style.transition = 'all .4s ease-out';
});

document.addEventListener('keydown', function(event){
    //console.log(event);
    introHeading.style.color = '#756345';
    introHeading.style.fontSize = '5rem';
});


