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

//keydown



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