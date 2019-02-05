// Your code goes here

// Event Listeners
const navLogo = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav-link');
const headerIntro = document.querySelector('.intro');
const button = document.querySelectorAll('.btn');
const secondImage = document.querySelector('.img-content');
const letsGo = document.querySelector('.text-content');
const footer = document.querySelector('.footer');
const destination1 = document.querySelector('.content-destination');
const destination2 = document.querySelector('.destination');
const window1 = document.querySelector('window');
  




// Adding Event Listeners
navLogo.addEventListener('click', (event) => {
    event.target.style.color = "red";
    console.log(`this is working`)

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  
  nav.addEventListener('click', (event) => {
    TweenMax.to(".nav-link", 1, {
      opacity: 0
    });
    nav.addEventListener('click', (event) => {
        event.preventDefault();
    })
  
});

headerIntro.addEventListener('mouseover', (event) => {
    TweenMax.to(".intro", 3, {
      opacity: 0
    });
  
});

window.addEventListener('resize', (event) => {
    console.log(`this is working`)
})
button[0].addEventListener('click', (event) => {
    event.target.style.display = 'none';
});
button[1].addEventListener('dblclick', (event) => {
    event.target.style.border = '6px dashed yellow'
})
button[2].addEventListener('mouseover', (event) => {
    event.target.style.color = 'green'
})
secondImage.addEventListener('mouseover', (event) => {
    event.target.style.display = 'none';
});

letsGo.addEventListener('mouseover', (event) => {
    event.target.style.border = '5px solid blue';
});

destination1.addEventListener('mouseover', (event) => {
    event.target.style.display = 'flex';
    event.stopPropagation;
})

destination2.addEventListener('dblclick', (event) => {
    event.target.style.color = 'red'
})