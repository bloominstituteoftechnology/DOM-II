function logSelection(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    selection.target.style.border = "solid 2px red";
}
// Your code goes here
document.addEventListener('copy', (event) => {
    console.log('copy action initiated')
});

const navBar = document.querySelector('.nav');
const introPic = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.container');

introPic.onclick = function(event) {
    event.target.style.border = "solid 1px orange";
    console.log("clicked it!");
}
navBar.addEventListener('mouseenter', e => {
    navBar.style.background = "pink";
})
navBar.addEventListener('mouseleave', e => {
    navBar.style.background = "white";
})

// introP.addEventListener('focus', (event) => {
//     event.target.style.background = 'pink';
// }, true);
// introP.focus = function(event) {
//     event.target.style.background = "orange";
// }
// introP.blur = function(event) {
//     event.target.style.background = " ";
// }
introH2.addEventListener('mouseover', function(event) {
    event.target.style.color = "green";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);



const content = document.querySelector('.content-section');
const conH2 = content.querySelector('.text-content h2');
const conP = content.querySelector('text-content p');
const conImg = content.querySelector('img');

conImg.ondblclick = function(event) {
    event.target.style.border = "solid 3px red";
    setTimeout(function() {
        event.target.style.border = "";
      }, 500);
    }, false;