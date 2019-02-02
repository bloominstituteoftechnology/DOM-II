// Your code goes here
//commit edit

navSelector = document.querySelector('.main-navigation');
navAnchors = document.querySelectorAll('.nav a');
navh1 = document.querySelector('.nav-container h1');
bodySelector = document.querySelector('body');
htmlSelector = document.querySelector('html');
imgSelector = document.querySelectorAll('img');
h2Selector = document.querySelectorAll('h2');
pSelector = document.querySelectorAll('p');

 // mouseout-----------------------
 navSelector.addEventListener('mouseout', function() {
    navSelector.style.padding = '0 0';
    navAnchors.forEach(item => 
        item.style.fontSize = '');
    navAnchors.forEach(item =>
        item.style.fontSize='');
    navh1.style.fontSize = '';
    })

 // mouseup-----------------------
 bodySelector.addEventListener('mouseup', function(e) {
    e.target.style.color = '';
    if (e.target.nodeName === 'IMG') {
        e.target.style.maxWidth = '';
        }
})


 // mouseover 
navSelector.addEventListener('mouseover', function() {
navSelector.style.padding = '100px 0';
navAnchors.forEach(item => 
    item.style.paddingRight = '23%');
navAnchors.forEach(item =>
    item.style.fontSize= '3rem');
navh1.style.fontSize = '6rem';
})

 //copy -----------------------
bodySelector.addEventListener('copy', function() {
    bodySelector.remove();
    newbody = document.createElement('body');
    newtext = document.createTextNode('Please do not copy material from the Fun Bus');
    newbody.style.fontSize='7rem'
    newbody.appendChild(newtext);
    htmlSelector.append(newbody)
})

 // mousedown-----------------------
bodySelector.addEventListener('mousedown', function(e) {
    e.target.style.color = 'green';
    if (e.target.nodeName === 'IMG') {
    e.target.style.maxWidth = '105%';
    };
    e.preventDefault()
})

 // mousedown on h4s -----------------
h2Selector.forEach(item => item.addEventListener ('mousedown', function(e) {
    e.target.style.color = 'red';
    e.stopPropagation();
}))


 // load--------------------------
imgSelector.forEach(item => item.addEventListener('load', function(e) {
    e.target.style.border = '3px groove black';
}))

 //dblclick-----------------------
imgSelector.forEach(item => item.addEventListener('dblclick', function(e) {
    e.target.style.border = '';
}))


 // select------------------
bodySelector.addEventListener('select', function(e) {
    e.target.style.backgroundColor= 'red';
})

 // scroll---------------------
window.addEventListener('scroll', function(e) {
    pSelector.style.backgroundColor= '';
}) 