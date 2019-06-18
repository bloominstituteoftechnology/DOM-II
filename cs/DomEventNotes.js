/*
*******EVENT LISTENER*******
-HOF here: .addEventListener
-callback fxn: the anonymous fxn
-a new object event is made through the string value you pass into the fxn
-event/e is the newly created object
-event propagation: when all events with the same event type fire when you activate one
  //(e.g. if you have multiple events with 'click' as their fxn and you click on one element, all 'click' events will activate)


//MOUSE EVENT EXAMPLE + PROPAGATION EXAMPLE
const workBtn = document.getElementById('work-btn');
workBtn.addEventListener('dblclick', function(event){
    console.log('workBtn fired');
        //.stopPropagation is a method on event type that will prevent event from accidentally bubbling up the tree and propagating every 'click' event
    event.stopPropagation();
});

const mainContent = document.querySelector('.main-content');
mainContent.addEventListener('dblclick', function(event){
    console.log('mainContent fired');
});


//KEYBOARD EVENT EXAMPLES
const firstName = document.querySelector('.first-name');

A)
firstname.addEventListner('keydown', function(e){
      //keyboard event is the object so you can add .code property to see the key codes
    console.log(`A key was pressed and this is the event: ${e.code}`)
});

B)
firstname.addEventListner('keydown', function(e){
      //keyboard event is the object so you can add .key property
    console.log(`A key was pressed and this is the event: ${e.key}`)
});


//PREVENT DEFAULT EXAMPLE
A)
const formSubmit = document.querySelector('.form-submit');
formSubmit.addEventListener('click', function(e){
      //this will prevent the form from submitting to action_page.php
    e.preventDefault();
});

B)
const anchorTag = document.querySelector('a');
anchorTag.addEventListener('click', function(e){
      //this will prevent the anchor tag from its action(linking to page)
    e.preventDefault();
});


//TARGET and CURRENT TARGET EXAMPLES
const container = document.querySelector('.container');
container.addEventListener('click', function(e){
      //.target will target anything with the same event, in this 'click'; it looks at INDIVIDUAL things clicked
    console.log(`Event Target: ${e.target}`);
      //.currentTarget is directly associated w/ where your eventListener is pointed; it looks at WHOLE thing that is clicked
    console.log(`Current Target: ${e.currentTarget}`);
      //this will change everything you can click on to crimson
    e.target.style.color = 'crimson';
});


//GREEN SOCK EXAMPLE
-Banner Add CDNs is faster than CDN option or NPM

const workBtn = document.querySelector('work-btn');
workBtn.addEventListener('click', function(e){
    console.log('workBtn fired');
      //code below says if you click button the list will move over 100px
    TweenMax.to('.work-list', 1, {x:100});
});


*/