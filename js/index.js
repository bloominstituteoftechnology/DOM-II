// Your code goes here

const navItems = document.querySelectorAll('.nav-link');
navItems.forEach.call(navItems,function(e){e.addEventListener('click', event => event.preventDefault())})
const images = document.querySelectorAll('img');

images.forEach.call(images,function(e){e.addEventListener('mouseenter', event => event.target.style.opacity = '0.8')});
images.forEach.call(images,function(e){e.addEventListener('mouseleave', event => event.target.style.opacity = 'initial')});

images.forEach.call(images,function(e){e.addEventListener('dragstart', event => event.target.classList.add('animateMe') )});
images.forEach.call(images,function(e){e.addEventListener('dragend', event => event.target.classList.remove('animateMe') )});


const anchors = document.querySelectorAll('a');

const target = document.querySelector('h1');

anchors.forEach.call(anchors,function(e){e.addEventListener('mouseover', event => ((Math.floor(Math.random()*10) + 1) % 2 === 0)? target.style.transform = 'rotate(180deg)' : target.style.transform = 'rotate(360deg)')});

document.addEventListener('keydown', function(event) {
    if (event) {
        let rando = (Math.floor(Math.random() * 7) +1)
        if (rando === 7) {
            event.target.style.backgroundColor = 'mediumspringgreen';
            console.log(`Winner, result was ${rando}`);
        } else if (rando % 2 !== 0) {
        event.target.style.backgroundColor = 'salmon';
        console.log(`Odd, result was ${rando}`);
        } else {
        event.target.style.backgroundColor = 'dodgerblue';
        console.log(`Even, result was ${rando}`);
      }
    }
})

document.addEventListener('keyup', function(event) {
    if (event) {event.target.style.backgroundColor = 'white'}
})

const buttons = document.querySelectorAll('.btn');
const destinations = document.querySelectorAll('.destination');

buttons.forEach.call(buttons,function(e){e.addEventListener('mousedown', event => {
    event.target.textContent = 'Boo!'
    event.stopPropagation();
    }
)})

buttons.forEach.call(buttons,function(e){e.addEventListener('mouseup', event => {
    event.target.textContent = 'Sign Me Up!'
    event.stopPropagation();
    }
)})

destinations.forEach.call(destinations,function(e){e.addEventListener('mousedown', event => {
    event.target.style.backgroundColor = '#ffd800'
    }
)})

destinations.forEach.call(destinations,function(e){e.addEventListener('mouseup', event => {
    event.target.style.backgroundColor = 'initial'
    }
)})

const body = document.querySelector('body');

body.addEventListener('mousewheel', function(event) {
    let scrollStop 
    body.classList.add('bodyBG');
    event.stopPropagation();
    clearTimeout(scrollStop);
    scrollStop = setTimeout(function() {
        body.classList.remove('bodyBG')
	}, 2000);
}, true)


