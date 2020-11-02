// Your code goes here
// mouseover    DONE
// keydown      DONE
// wheel        DONE
// load         DONE
// focus        DONE
// resize       DONE
// scroll       
// select       DONE
// dblclick     DONE
// drag / drop
const fun = document.querySelector('h1');
fun.addEventListener('mouseover', event => event.target.style.backgroundColor = 'yellow');

fun.addEventListener('dblclick', event => event.target.style.color = 'blue');

fun.addEventListener('wheel', event => event.target.style.textAlign = 'center');


const welcomeContent = document.querySelector('p');
// welcomeContent.addEventListener('focus', event => {event.target.style.backgroundColor = 'pink';}, true)

// window.addEventListener('scroll', event => {event.target.scrollTop > 50)}

const html = document.querySelector('html');
html.addEventListener('keydown', event => {
    alert("NO TYPING ALLOWED!")
});
html.addEventListener('click', event => event.target.style.textAlign = 'center')


window.addEventListener('load', event => {
    alert("Hey welcome to the page!")
});

window.addEventListener('resize', myFunction);
let x = 0;
function myFunction() {
    let txt = x += 1;
    document.getElementById("counter").innerHTML = txt;
  }

  document.querySelectorAll('a').forEach(aTag => {
    aTag.addEventListener('focus', event => {
      event.target.style.border = "1px solid red";
    });
  });

 window.addEventListener('scroll', event => {console.log("No scrolling!")})
let dragged
document.addEventListener('dragstart', event =>{
    dragged = event.target
    console.log(dragged)
}, false)

document.addEventListener('drop', event => {
    dragged.parentNode.removeChild(dragged)
    event.target.appendChild(dragged)
}, false)
document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);