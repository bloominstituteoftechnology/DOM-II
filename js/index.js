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