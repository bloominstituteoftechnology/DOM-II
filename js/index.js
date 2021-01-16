// Your code goes here

const text = document.querySelectorAll('p');

const navBar = document.querySelectorAll('a');

const heads = document.querySelectorAll('h2');

const pics = document.querySelectorAll('.image-content');

const lilheads = document.querySelectorAll('h4');


//H2's 

heads[0].addEventListener('click', function(e){
    e.target.style.color = 'orange';
    e.target.style.border = '2px dashed red'
})
heads[1].addEventListener('click', function(e){
    e.target.style.color = 'green';
    e.target.style.border = '2px dotted purple'
    })
heads[2].addEventListener('click', function(e){
    e.target.style.color = 'blue';
    e.target.style.border = '2px dashed yellow'
})
heads[3].addEventListener('click', function(e){
    e.target.style.color = 'magenta';
    e.target.style.border = '2px dotted aquamarine'
})


//NAV

navBar[0].addEventListener('mouseover', function(e){
    e.target.style.color = 'red';
})
navBar[1].addEventListener('mouseover', function(e){
    e.target.style.color = 'purple';
})
navBar[2].addEventListener('mouseover', function(e){
    e.target.style.color = 'green';
})
navBar[3].addEventListener('mouseover', function(e){
    e.target.style.color = 'pink';
})
navBar[0].addEventListener('mouseleave', function(e){
    e.target.style.color = 'blue';
})
navBar[1].addEventListener('mouseleave', function(e){
    e.target.style.color = 'magenta';
})
navBar[2].addEventListener('mouseleave', function(e){
    e.target.style.color = 'orange';
})
navBar[3].addEventListener('mouseleave', function(e){
    e.target.style.color = 'aquamarine';
})

//H4's

lilheads

// paragraphs font size increase, lilheads should become bold or italic, images become opaque kinda see through.

