// Your code goes here



/** MOUSEENTER / MOUSELEAVE event Navigation */
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

/** nav PREVENT DEFAULT from reloading */
let nav = document.querySelector('.nav');
nav.addEventListener('click', (e) => {e.preventDefault();
    return e;}
    );


/** MOUSEOVER / MOUSEOUT h2 text rotate */

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

/** CLICK event | change color of p */

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


//STOP PROPAGATION event
let destination = document.querySelectorAll('.destination');
destination.forEach((click) => {
    click.addEventListener('click' , (event) => {
        event.stopPropagation(); //here
        event.target.style.backgroundColor = 'pink';
    })
})

let contentPick = document.querySelector('.content-pick')

contentPick.addEventListener('click' , (event) => {
    event.target.style.backgroundColor = 'lightblue';
})




/** alert when any key is pressed */

// document.addEventListener('keydown', (event) => { alert("YOU PRESSED " + `${event.code}`);
// event.preventDefault();
//   });


/** DOUBLECLICK event on all images */

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


/** WHEEL event */

function zoom(event) {

//PREVENT DEFAULT
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.logo-heading');
  el.onwheel = zoom;

 
/** NO CONTENT menu */

noContext = document.querySelectorAll('.img-content');

noContext.forEach((noTxt) => {
noTxt.addEventListener('contextmenu', e => {
  e.preventDefault();
})
});


/** CLICK blur intro image */

let introImg = document.querySelector('.intro img');
introImg.addEventListener('click' , myfunction);

function myfunction(){
    
    if (introImg.style.opacity === "0.3"){
        introImg.style.opacity = "1";}

    else {
    introImg.style.opacity = "0.3";
}}


/** BLUR event on form */

const password = document.querySelector('input[type="password"]');
password.addEventListener('blur',  (event) => {
    event.target.style.background = '';    
  });


/** FOCUS event on form */

password.addEventListener('focus', (event) => {
    event.target.style.background = 'PapayaWhip';    
  });


  
/** SUBMIT event alert */

const form = document.getElementById('form');
form.addEventListener('submit', subForm);

function subForm(event) {
    alert('Just kidding! The button doesn\'t work');
    event.preventDefault();
  }


/**green sock */
gsap.from("nav", {duration: 2.5, x: 400});

// gsap.from(".destination", {duration: 1.5, x: -400});
