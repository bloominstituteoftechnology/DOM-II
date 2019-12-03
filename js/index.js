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