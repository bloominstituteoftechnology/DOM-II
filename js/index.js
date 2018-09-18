let logoHeading = document.querySelector('.logo-heading');

let navLink = document.querySelectorAll('.nav-link');

let body = document.querySelector('body');
window.addEventListener('resize', (e) => {
  body.classList.add('uppercase');  
})


let headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseover', (e) => {
  headerImg.classList.add('blackAndWhite');
});


function showCoords(evt){
  console.log(
    "screenX value: " + evt.screenX + "\n"
    + "screenY value: " + evt.screenY + "\n"
  );
}


// window.addEventListener("load", function(event) {
//   this.alert('Here\'s an annoying pop-up!');
// });



  // for (let i = 0; i < navLink.length; i++) {
  //   navLink[i].classList.add('navLink');
  // }


let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // console.log(last_known_scroll_position);
  let scrollY = last_known_scroll_position;
  let scrollHeightTotal = document.body.scrollHeight;
  let scrollBox = document.querySelector('.xycoords');
  scrollBox.innerText = `Y: ${scrollY} / ${scrollHeightTotal}`;

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