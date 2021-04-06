// Your code goes here
// MOUSEOVER

const nav = document.querySelectorAll('.nav-link');
console.log(nav);

Array.from(document.links).forEach(function(link){
    link.addEventListener('mouseover', function(event){
        link.style.color = 'red';
    })
})

// AUXCLICK
const footer = document.querySelector('.footer p');

footer.addEventListener('auxclick', function(event){
    event.target.style.background = 'yellow';
});


// DBLCLICK
const h2 = document.querySelector('h2');

h2.addEventListener('dblclick', function(e){
    h2.style.fontSize = '2rem';
   
});

// COPY
document.addEventListener('copy', function (event){
    console.log('copy action has been taken');
})
// KEYDOWN
document.addEventListener('keydown', function(event){
    console.log('keyboard has been used.');
})
// CLICK
const button = document.querySelectorAll('.btn');

Array.from(button).forEach(function(btn){
    btn.addEventListener('click', function(event){
        btn.style.color = 'green';
    })
})

// POINTOVER
document.addEventListener('pointerover', function (event){
    console.log('Pointover has occured');
})