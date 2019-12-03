// Your code goes here

//image scale
const images = document.querySelectorAll('img');

images.forEach( item => {
    item.addEventListener('mouseover', function () {
        item.style.transform = 'scale(1.1)';
        item.style.transition = "transform 0.4s";
        console.log('moused over!');
    });

    item.addEventListener('mouseleave', function (){
        item.style.transform = 'scale(1.0)';
item.style.zIndex = '.1';
    })

});

// SCROLL EVENT LISTENERS


let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  let funBusIcon = document.querySelector('.fun-bus-icon');


  console.log('scrolllerrrr');
  console.log(window.outerWidth);
  funBusIcon.style.left = `${window.scrollY}px`;
  console.log(window.scrollY)


//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });

//     ticking = true;
//   }
});

//DOUBLE CLICK EVENT LISTENER
let body = document.querySelector('body');
let newBusIcon = document.createElement('img');
newBusIcon.src = "img/funBusIcon.png";
newBusIcon.style.position = 'absolute';
newBusIcon.style.width = '50px';

let counter = 1;
let alreadyBus = false;

document.querySelector('body').addEventListener('dblclick', function (e) {

    if (!alreadyBus){
        console.log('dbl click');
        console.log(e);
        console.log(e.clientX);
        console.log(e.clientY);
        newBusIcon.style.top = `${e.clientX}px`;
        newBusIcon.style.left = `${e.clientY}px`;
        body.appendChild(newBusIcon);
    
        //makes bus drive across screen
        let busInterval = window.setInterval(busDrive, 10);
        function busDrive() {
            // Your code here
            // Parameters are purely optional.
        
                newBusIcon.style.left = `${counter}px`; 
                counter += 10;
        
                if (counter > window.outerWidth) {
                    clearInterval(busInterval);
                    newBusIcon.remove();
                }
        
            // if(msTensValue == 9) {
            // msTens.textContent = msTensValue++;
            // msTensValue = 0;
            // } else {
            // msTens.textContent = msTensValue++;
            // }
            // console.log('msTens'); 
            alreadyBus = true;
            }

    } else {
        newBusIcon.remove();
        counter = 0;
        console.log('dbl click');
        console.log(e);
        console.log(e.clientX);
        console.log(e.clientY);
        newBusIcon.style.top = `${e.clientY}px`;
        newBusIcon.style.left = `${e.clientX}px`;
        body.appendChild(newBusIcon);
    
        //makes bus drive across screen
        let busInterval = window.setInterval(busDrive, 10);
        function busDrive() {
            // Your code here
            // Parameters are purely optional.
        
                newBusIcon.style.left = `${counter}px`; 
                counter += 10;
        
                if (counter > window.outerWidth) {
                    clearInterval(busInterval);
                    newBusIcon.remove();
                }
        
            // if(msTensValue == 9) {
            // msTens.textContent = msTensValue++;
            // msTensValue = 0;
            // } else {
            // msTens.textContent = msTensValue++;
            // }
            // console.log('msTens'); 
            alreadyBus = true;
            }
    }

});



// COPY EVENT LISTENER

const source = document.querySelector('div.source');

body.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    alert("You Just Copied =>      " + selection);
    event.preventDefault();
});


// KEYDOWN EVENT LISTENER
let footerBusCounter = 1;

document.addEventListener('keydown', moveFooterBus);

function moveFooterBus(e) {
    let footerFunBus = document.querySelector('.footer-bus-icon');
    footerFunBus.style.left = `${footerBusCounter}px`;
    footerBusCounter += 10;

}


// LOAD EVENT LISTENER

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
  });


  // MOUSE LEAVE 

  document.querySelector('body').addEventListener('mouseleave', e => {
    console.log('dont leave!!!!                          This popup is very annoying I know.');
    return;
  });


  //RESIZE SCREEN

  function changeBodyColor(){
    body.style.backgroundColor = 'red';
  }

  window.onresize = changeBodyColor;



  //keypress color change

document.addEventListener('keydown', logKey);

function logKey(e) {
  console.log(e.code);
    if (e.code === 'KeyB') {
        body.style.color = 'blue';
    } else if (e.code === 'KeyG') {
        body.style.color = 'green';
    } else if (e.code === 'KeyR') {
        body.style.color = 'red';
    } else if (e.code === 'KeyP') {
        body.style.color = 'purple';
    }
}


// adds selection to bottom of screen


function logSelection(event) {
    const bottomText = document.getElementById('bottom-text');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    // bottomText.textContent = `You selected: ${selection}`;
    let newPara = document.createElement('p');
    newPara.textContent = selection;
    body.appendChild(newPara);

  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);


  // stopping the navigation links from refreshing the page

  let links = document.querySelectorAll('a');
  links.forEach(link => {
      link.addEventListener('click', function(event){
          event.preventDefault();
      })
  });




  //prevent event propogation

  paragraph = document.querySelector('p');
  intro = document.querySelector('.intro');
  containerHome = document.querySelector('.home');

  paragraph.addEventListener('click', function(evenet) {
      paragraph.style.backgroundColor = 'green';
      event.stopPropagation();
  });

  intro.addEventListener('click', function() {
    intro.style.backgroundColor = 'red';
});