// On load display 'Loaded" then fade out

const body = document.body;

const loadDiv = document.createElement('div');
const loadMessage = document.createElement('p')
loadMessage.textContent = 'data loading'
loadDiv.className = 'load-animation'
const loadGif = document.createElement('img');
loadGif.src = './img/load-img.gif';

loadDiv.appendChild(loadMessage);
loadDiv.appendChild(loadGif);

window.addEventListener('load', () => { 
  body.prepend(loadDiv);
});

TweenMax.from('body', 0.2, {opacity:0});

setTimeout(function() {
  loadDiv.remove();
}, 3000)

// Add hover motion to element when mouse enters and leaves

function addHoverMotion(element) {
  Array.from(element).map(item => {
    item.addEventListener('mouseenter', function(e){
      TweenMax.to(item, 1, {x:1, y:1});
    });
    item.addEventListener('mouseleave', function(e){
      TweenMax.to(item, 1, {x:-1, y:1});
    });
  })
}

const navLinks = document.querySelectorAll('nav a');

const signUpButtons = document.querySelectorAll('.destination .btn');

addHoverMotion(navLinks);
addHoverMotion(signUpButtons);

// Bubble current target anywhere on the page when double clicked

function bubbleMotion(element) {
  element.addEventListener('dblclick', function(e) {
    console.log(e.target);

    function Tween(){
      const T = TweenLite.to(e.target,1.15,{x:R(-1,1),y:R(-1,1),scale:R(1.01,0.99),rotation:R(-1,1),ease:Sine.easeInOut,onComplete:Tween});
    };
    // e.stopPropagation();

    Tween();

    function R(max,min){return Math.random()*(max-min)+min};

  })
};
// console.log(document.body)
bubbleMotion(window);


// Dragging boat changes opactity and location

const destinationImg = document.querySelector('.content-destination img');

destinationImg.addEventListener('dragstart', function(e) {
  destinationImg.style.opacity = 0.1;
  TweenMax.to('.content-destination img', 1, {x:30, y:30});
})

destinationImg.addEventListener('dragend', function(e) {
  destinationImg.style.opacity = 1;
  TweenMax.to('.content-destination img', 1, {x:-30, y:-30});
})

// Enter key down toggles big text

const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs)

window.addEventListener('keydown', function(e) {
  let keyDown = e.key;
  if(keyDown === 'Enter') {
    allParagraphs.forEach(p => p.classList.toggle('bigP'))
    console.log('nice')
  }
  
})

// Select text make its bigger

window.addEventListener('scroll', function(e) {
  const random = e.timeStamp % 256 * Math.random();
  document.body.style.background = `rgba(${random},${random},${random},0.3`;
  console.log(e.timeStamp % 256 * Math.random())
})

// Mediocre Stop Propagation Example


window.addEventListener('click', function() {
  console.log('window click')
})

const funBusLogo = document.querySelector('.intro img');

funBusLogo.addEventListener('click', function(e) {
  event.stopPropagation();
  console.log('bus click');

})

// Focusing on input turns its background coral

const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', function(e) {
  e.target.style.background = 'coral'
});

// Selecting text turns input background green

inputFocus.addEventListener('select', function(e) {
  e.target.style.background = 'green'
});
// Window Resize adjusts Bus Logo

window.addEventListener('resize', function() {
  TweenMax.to('.intro img', 1, {scale: .9});
})

// Prevent Default on Navigation

const homeNavLink = document.querySelector('.nav a');
homeNavLink.addEventListener('click', function(e) {
  e.preventDefault();
})

