// Your code goes here
let logo = document.querySelector('.logo-heading');
let navItems = document.querySelectorAll('nav a');
let funImg = document.querySelector('.fun-bus')
let textHeading = document.querySelector('.text-content h2');
let buttons = document.querySelectorAll('.btn');
let images = document.querySelectorAll("img-content");




window.addEventListener('load', function(event) {
    alert('Click OK to open Fun Bus');
})


logo.addEventListener('mouseenter', function(event) {
    logo.style.cursor = 'pointer';

    logo.addEventListener('click', event => {
        logo.style.color = 'orange';
    })
})


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


funImg.addEventListener('mouseenter', function(event) {
    event.target.style.width = '800px';
    event.target.style.height = '300px';

        funImg.addEventListener('mouseleave', function(event) {
            event.target.style.width = '100%';
            event.target.style.height = '100%';
        })
    
})


// textHeading.addEventListener('dblclick', function(event) {
//     images.classList.toggle('hide-this');
// })










// buttons.forEach(item) => {
//     item.addEventListener('mousenter', function(event) {
        
//     })
// }

