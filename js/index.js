
// EVENT LISTENER #1 - mouseover
let navLinks = document.querySelectorAll('a');
navLinks.forEach(link => link.addEventListener("mouseover", function(event){
    link.style.color = 'blue';
    link.style.textDecoration = 'underline';
    event.preventDefault();
}));

// EVENT LISTENER #2 - mouseout
navLinks.forEach(link => link.addEventListener("mouseout", function(){
    link.style.color = 'initial';
    link.style.textDecoration = 'none';
}));

// EVENT LISTENER #3 - mouseup
const text = document.querySelectorAll('p');
text.forEach(p => {
    p.addEventListener('mouseup', function(event) {
        event.target.style.background = 'yellow'
    })    
});

// EVENT LISTENER #4 - load 
window.addEventListener("load", function(event) {
    setTimeout(function(){
        document.querySelector('.modal').style.display = 'none';
    },1000); //change to 3000
});   

// EVENT LISTENER #5 - Keydown
window.addEventListener("keydown", function(event) {
    TweenMax.to("img", .2, {scale:0.5});
    TweenMax.to("img", .2, {scale:1});
});   

// EVENT LISTENER #6 - Scroll 
window.addEventListener("scroll", function(event) {
    document.querySelectorAll('img').forEach(image => {
        image.style.filter = "invert(100%)";
        image.style.transition = '1s';
    });
});   

// EVENT LISTENER #7 - Transition End 
window.addEventListener('transitionend', function(event) {
    document.querySelectorAll('img').forEach(image => {
        image.style.filter = "invert(0%)";
        image.style.transition = '1s';
    });
});   

// EVENT LISTENER #8 - Double Click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.target.innerHTML = 'Try double-clicking'
        event.target.style.fontSize = '15px';
        event.target.style.textAlign = 'center';
    })    
});

// EVENT LISTENER #9 - copy
window.addEventListener('copy', function(event) {
    alert('Why are you copying our site?');
});   

// EVENT LISTENER #10 - click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('dblclick', function(event) {
        confirm(`Is ${event.target.parentNode.firstChild.nextSibling.innerText} the trip you want to go on?`);
    })    
});

// EVENT LISTENER #11 - stop Propagation of click
document.querySelector('.content-pick').addEventListener('click', function(event){
    event.target.style.fontFamily = 'Helvetica';
    event.stopPropagation(); 
    // I feel like this is not doing anything. The events are not bothering each other for whatever reason.
})