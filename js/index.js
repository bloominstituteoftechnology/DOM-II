// Your code goes here



/** Navigation */
let navLink = document.querySelectorAll('.nav-link');

navLink.forEach((element) => {
    element.addEventListener('mouseenter', function(){
        element.style.transform = "scale(1.2)";
        element.style.transition = 'transform .5s';
    })
        element.addEventListener('mouseleave', function(){
        element.style.transform = "scale(1)";
    })
})

/** h2 text rotate */

let intro = document.querySelectorAll('h2');
intro.forEach((element) => {
    element.addEventListener('mouseover', function(){
        element.style.transform = "rotateX(360deg)";
        element.style.transition = 'transform 1.5s';
    })
        element.addEventListener('mouseout', function(){
        element.style.transform = "";
    })
})

/** paragraph color change on click */

let p = document.querySelectorAll('p');
p.forEach((click) => {
    click.addEventListener ('click', function(){
        if (click.style.backgroundColor === 'gray'){
            click.style.backgroundColor = 'white';
            click.style.color = 'black';
        }
        else {
            click.style.backgroundColor = 'gray';
            click.style.color = 'white';
        }
    
    })
})

/** alert when any key is pressed */


document.addEventListener('keydown', (event) => { alert("YOU PRESSED " + `${event.code}`);
event.preventDefault();
  });


/** images scale up when dbl clicked */

const img = document.querySelectorAll('img');
img.forEach((dbl) => {
    dbl.addEventListener('dblclick', function (e) {
        e.preventDefault();
      if (dbl.style.transform === 'scale(1.2)') {
          dbl.style.transform = 'scale(1)';
          dbl.style.transition = "1.2s";
      } else {
          dbl.style.transform = 'scale(1.2)';
          dbl.style.transition = "1.2s";
      }  
})  
});


/** fun bus header logo wheel event */

function zoom(event) {

    //prevent default
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.logo-heading');
  el.onwheel = zoom;


/** no content menu */

noContext = document.querySelectorAll('.img-content');

noContext.forEach((noTxt) => {
noTxt.addEventListener('contextmenu', e => {
  e.preventDefault();
})
});


/** blurring intro image */

let introImg = document.querySelector('.intro img');
introImg.addEventListener('click' , myfunction);

function myfunction(){
    
    if (introImg.style.opacity === "0.3"){
        introImg.style.opacity = "1";}

    else {
    introImg.style.opacity = "0.3";
}}

/**green sock */
gsap.from("nav", {duration: 2.5, x: 400});

gsap.from(".destination", {duration: 1.5, x: -400});
