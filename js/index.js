// Your code goes here


window.addEventListener("load", (event) => {
    TweenMax.from('.nav', 2, {
        opacity: 0
      });
});


let images = document.querySelectorAll('img');


// for (let i = 0; i < images.length; i++){
//     images[i].addEventListener('mouseover', (event) => {
//     images[i].classList.toggle('grayscale');
//     });
// }

images.forEach(image => {
    image.addEventListener('mouseover', (event) => {
    image.classList.toggle('grayscale');
    });
});

// for (let i = 0; i < images.length; i++){
//     images[i].addEventListener('mouseleave', (event) => {
//     images[i].classList.toggle('grayscale');
//     });
// }

images.forEach(image => {
    image.addEventListener('mouseleave', (event) => {
    image.classList.toggle('grayscale');
    });
});


let h2 = document.querySelectorAll('h2');

// for (let i = 0; i < images.length; i++) {
//     h2[i].addEventListener('mouseenter', (event) => {
//         TweenMax.to(h2[i], 3, {x:100})
//     });
// }

h2.forEach(h2 => {
    h2.addEventListener('mouseenter', (event) => {
    TweenMax.to(h2, 3, {x:100})
    });
});

let p = document.querySelectorAll('p'); 

// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('dblclick', (event) => {
//     p[i].style.fontWeight = 'bold';
//     });       
// }

p.forEach(p => {
    p.addEventListener('dblclick', (event) => {
    p.style.fontWeight = 'bold';
    });
});

window.addEventListener('copy', (event) => {
    alert('Please give credit to the author. (message 1)');
});


// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('copy', (event) => {
//     alert('Please give credit to the author. (message 2)');
//     event.stopPropagation();
//     });      
// }


p.forEach(p => {
    p.addEventListener('copy', (event) => {
    alert('Please give credit to the author. (message 2)');
    event.stopPropagation();
    }); 
});


// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('auxclick', (event) => {
//     p[i].style.fontSize = '2rem';
//     });      
// }

p.forEach(p => {
    p.addEventListener('auxclick', (event) => {
    p.style.fontSize = '2rem';
    }); 
});


let h1 = document.querySelector('h1');

h1.addEventListener('contextmenu', (event) => {
    TweenMax.to(h1, 3, {x:100})
});


let mainNavigationContainer = document.querySelector('.main-navigation');

mainNavigationContainer.addEventListener('wheel', (event) => {
    event.currentTarget.style.borderBottom = '2px dashed black';
});


window.addEventListener('beforeprint', (event) => {
    alert('Please click on link for printer friendly page structure. (there is none)');
});


let mainNavItems = document.querySelectorAll('.nav a');

// for (let i = 0; i < mainNavItems.length; i++)
//     mainNavItems[i].addEventListener('click', (event) => {
//     event.preventDefault();
// });

mainNavItems.forEach(item => {
    item.addEventListener('click', (event) => {
    event.preventDefault();
    });
});
