// Your code goes here

// references 
const mouse = document.querySelector('.logo-heading');
const links = document.querySelectorAll('.nav-link');
const headerImg = document.querySelector('.intro img'); 
const containerHeader = document.querySelector('.intro h2');
const textHeaders = document.querySelectorAll('.text-content h2');
const contentDestinationImg = document.querySelector('.content-destination img');
const changeButtons = document.querySelectorAll('.btn'); 


// 1. mouseover event
mouse.addEventListener("mouseover" , () => {
mouse.style.transform = "scale(1.5)";
mouse.style.transition = "all 0.5s";
})

//  2. mouseleave event 
mouse.addEventListener("mouseleave", () => {
    mouse.style.transform ="scale(1.0)";
    mouse.style.transition =  "all 2.0s";
})

//  3. onclick event 
links.forEach(link => {
    link.addEventListener('click', () => {
        link.style.color = "dodgerblue";
    });
});

// 4. wheel event 
containerHeader.addEventListener("wheel", () => {
    containerHeader.style.backgroundColor = "red";
})

//  5 mousemove event 
textHeaders.forEach(textHeader => {
    textHeader.addEventListener('mousemove', () => {
        textHeader.style.color = 'pink';
    });
});


// 6. contextmenu event
contentDestinationImg.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert("Sorry, image can not be copied!!");
});

//  7. load event
window.addEventListener('load', () => {
    alert('Book your trip within the next 15 minutes and save 20%');
});

// 8. resize event
window.addEventListener('resize', () => {
    alert('you have resized the window');
});

// 8. scroll event 
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  console.log(last_known_scroll_position);
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

// 10. double click event
changeButtons.forEach(button => {
    button.addEventListener('dblclick', () => {
        alert('Great Selection!');
    });
});


