/* Your code goes here
/ Using your [index.js file](js/index.js), create 10 [unique event listeners]
(https://developer.mozilla.org/en-US/docs/Web/Events). 
using your creativity to make the Fun Bus site more interactive.  
Here are some unique events you could try to use: 
*/
//mouseover
let bus = document.getElementById('bus');

bus.addEventListener("mouseover", function(event){
    event.target.style.border = '25px solid gold';
    event.target.style.margin = '5% 0%';

    setTimeout(function(){
    event.target.style.border = '0px';
    event.target.style.margin = '0%';
    }, 1500);


})

let text = document.getElementsByTagName('p');
// grabs a html collection of all text
let textArr = Array.prototype.slice.call(text);
// converts html collection into array
textArr.forEach(element =>{
element.addEventListener('mouseover', function (event){
    event.target.style.color = '#760111';

    setTimeout(function(){
    event.target.style.color = 'black';

    }, 1000);
})
//should iterate through, and add an event listener to each for
})

//keydown


let heading = document.getElementById("logo-heading");

document.addEventListener('keydown', dont);

function dont(){
    heading.innerHTML = "Quit hitting buttons back there!!!";

    setTimeout(function(){
    heading.innerHTML = "Fun Bus";
    }, 1800)
}






//wheel
//drag / drop




// load





// focus





// resize




//scroll




//select





// duble click





//Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.
/*
* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
*/