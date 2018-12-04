// Your code goes here

// There are three buttons. Let's fiddle with them

const btn = document.querySelectorAll('.btn')

btn[0].addEventListener('mouseover', () => {
    btn[0].style.color = 'red';
});

btn[0].addEventListener('mouseout', () => {
    btn[0].style.color = 'white';
});

// Snuck in two there. Mouseover and mouseout. Simple, but gets us 20% done. On to 2nd Button

btn[1].addEventListener('click', () => {
    btn[1].classList.toggle('getBigger');
});

btn[2].addEventListener('dblclick', () => {
    btn[2].classList.toggle('shiftText');
});

// Got 4 of 10 done on 3 buttons. Could not get rotate to work, so moving on. Used skew instead. Very ugly, but creativity in design is not a strength of mine
// If I get done in time (looking doubtful) I may try to put some GSAP stuff in there


// There are 4 images. What can be done with them? Probably nothing exciting


const images = document.querySelectorAll('img')

images[0].addEventListener('mousemove', () => {
    images[0].classList.toggle('grayscale');
});

// for some reason can't get access to the other images. No idea why. Shouldn't they all be in the array?


// Uing alert to show a key was pressed. Yeah, that's brilliant. A glorified console.log. Creativity is not my thing
const homePage = document.querySelector('.home')

// commented this out because it seems to interfere with keydown and keyup
//  window.addEventListener('keydown', () => {
//      alert("You pressed a key");
//      });


// These next 3 change the color scheme of the window. Hold a key down and you get the god-awful color combination of the hated Ohio State
// Buckeyes. Makes you want to puke, doesn't it? Let the key go and it goes back to the default. However if you scroll, you get the
// beautiful beautiful colors of the University of Michigan. Isn't that pretty?

    window.addEventListener('keypress', () => {
        homePage.style.color = '#bb0000';
        homePage.style.backgroundColor = '#666666';
    });
    
    window.addEventListener('keyup', () => {
        homePage.style.color = 'black';
        homePage.style.backgroundColor = "white";
    
    });
    
    
    window.addEventListener('scroll', () => {
        homePage.style.color = '#ffcb05';
        homePage.style.backgroundColor = '#00274c';
    });
    
   

