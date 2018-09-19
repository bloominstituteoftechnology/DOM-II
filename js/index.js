// Your code goes here

const myBtn = document.querySelector('.content-pick .btn');
const contentPick = document.querySelector('.content-pick');
const myHeader = document.querySelectorAll('.home h2');
const myNav = document.querySelector('body');
const readerProgress = document.querySelector('.progress');
const introImg = document.querySelector('.intro img');
const imgScooby = document.querySelector('.content-section img');
const imgWendy = document.querySelector('.inverse-content img');
const navPrevent = document.querySelectorAll('.nav-container a');
const logoText = document.querySelector('.nav-container .logo-heading');


console.log(logoText);

window.addEventListener('load', () => {
    alert('Press g to change the background color, w to change it back')
});


contentPick.addEventListener('click', () => {
    contentPick.classList.toggle('change-background');
});


myBtn.addEventListener('click', () => {
    contentPick.style.color ='red';
    event.stopPropagation();
});


myHeader.forEach(item => item.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.parentNode.style.backgroundColor = 'darkblue';
    event.target.parentNode.style.color ='orange';
    
    
    event.target.style.color = 'red';

    setTimeout(() => {
        event.target.style.color = '';
    }, 733);
    }, false));

myNav.addEventListener('keydown', (e) => {
    if (event.key == 'g'){
        document.body.style.background = 'darkblue';
        document.body.style.color= 'orange';
    }
});

myNav.addEventListener('keydown', (e) => {
    if (e.key =='w'){
        document.body.style.background = '';
        document.body.style.color= '';
    }
});

window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    readerProgress.style.width = `${(pageYOffset / max) * 100}%`;
  });

  introImg.addEventListener('mouseover', (event) => {
    event.target.src ='http://2.bp.blogspot.com/-euazKXrGMNs/T56zLMVzWKI/AAAAAAAAAV4/29hCX8d7Usw/s1600/Mystery+machine+cartoon+version-ScoobyDoo.jpg'
  
    setTimeout(() => {
        event.target.src = 'img/fun-bus.jpg';
    }, 3000);
    }, false);

imgScooby.addEventListener('mouseover', (event) => {
event.target.src ='https://www.wbkidsgo.com/Portals/4/Images/Content/Characters/Scooby/characterArt-scooby-SD.png'
      
setTimeout(() => {
event.target.src = 'img/adventure.jpg';
}, 3000);
}, false);

imgWendy.addEventListener('mouseover', (event) => {
event.target.src ='https://vignette.wikia.nocookie.net/p__/images/e/ec/Daphne.png/revision/latest?cb=20130504082505&path-prefix=protagonist'
          
setTimeout(() => {
event.target.src = 'img/adventure.jpg';
}, 3000);
}, false);


navPrevent.forEach(item => item.addEventListener('click', (e) => {
    event.preventDefault();
}));

logoText.addEventListener('click', (e) => {
    TweenMax.to('.logo-heading', 10, {
        opacity:0
    });
});

TweenMax.from('.logo-heading', 3, {x:300,
opacity:0, scale:0.5});

