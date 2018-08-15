// Your code goes here
let logo = document.querySelector('.logo-heading');
let navItems = document.querySelectorAll('nav a');
let funImg = document.querySelector('.fun-bus')
let sectionContent = document.querySelector('.scroll');
let buttons = document.querySelectorAll('.btn');
let form = document.querySelector('.form');


//update window
window.addEventListener('load', function(event) {
    alert('Click OK to open Fun Bus');
})

window.addEventListener('offline', function(event){
    console.log("You lost connection.");
});

window.addEventListener('online', function(event){
    console.log("You are now back online.");
});


//update logo
logo.addEventListener('mouseenter', function(event) {
    logo.style.cursor = 'pointer';

    logo.addEventListener('click', event => {
        logo.style.color = 'orange';
    })
})


//update navbar
navItems.forEach((item) => {
  item.style.color = 'blue';
  item.style.textDecoration = 'none';

  item.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'aqua';
  })
    
  item.addEventListener('mouseleave', function(event) {
    event.target.style.color = 'blue';
  })
})


//update intro image
funImg.addEventListener('mouseenter', function(event) {
    event.target.style.width = '800px';
    event.target.style.height = '300px';

        funImg.addEventListener('mouseleave', function(event) {
            event.target.style.width = '100%';
            event.target.style.height = '100%';
        })
})


//update bottons
buttons.forEach((item) => {

    item.addEventListener('mouseover', function(event) {
        event.target.style.color = 'blue';
        event.target.style.fontSize = '15px';
    })
})


//update form
form.addEventListener('focus', function(event) {
    event.target.style.background = 'whitesmoke';
}, true);

form.addEventListener('blur', function(event) {
    event.target.style.background = '';
}, true);





