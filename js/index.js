// Set some common DOM elements as variables
const body = document.querySelector('body'),
    header = document.querySelector('header.main-navigation'),
    navLinks = document.querySelectorAll('.nav-link');

// Mouseover to update nav links styles
// Click to update nav links based on active pages + event propagation
for (const navLink of navLinks) {
    navLink.addEventListener('click', (event) => {
        
        for (const navLink of navLinks) {
            navLink.classList.remove('activePage', 'navLinkHover');
        }
        event.target.classList.add('activePage');
        event.stopPropagation()
        event.preventDefault();
    });
    navLink.addEventListener('mouseover', (event) => {
        for (const navLink of navLinks) {
            navLink.classList.remove('navLinkHover');
        }        
        if(!event.target.classList.contains('activePage')){
            event.target.classList.add('navLinkHover');
        }
    });
}






// Enable dark mode with command-B or ctrl-b keydown
var map = {}; 
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    if((map[17] || map[91]) && map[66]){
        body.classList.toggle('darkMode');
        map = {}; 
    }
}

// Add a shadow to the nav when the user scrolls
let last_known_scroll_position = 0;
let ticking = false;

function addHeaderShadow(scroll_pos) {
  if(scroll_pos>0){
    header.classList.add('mainNavScrolled');
  }else{
    header.classList.remove('mainNavScrolled');
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      addHeaderShadow(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});


// When buttons are double clicked change text to loading
