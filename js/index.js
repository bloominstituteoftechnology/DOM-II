// Your code goes here
var els = document.getElementsByClassName("destination");

Array.prototype.forEach.call(els, function(el) {
    // Do stuff here
    el.addEventListener('mouseover', logElement);
});


function logElement() {
    console.log('hello');
}