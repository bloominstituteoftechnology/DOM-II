import './less/index.less'

// Your code goes here!

//!------------------------  LOAD EVENT -----------------------------!
///*used to ensure that program runs after DOM is constructed 

window.onload = function (evt) {
    console.log(`event ${evt.type} is gucci let's go get`)
    //in english ^ : once DOM is fully constructed these next steps are what we want this fn to do
    //first we need a reference to what we want, in this case we're trying to change the heading so we make a point of ref to heading
    const heading = document.querySelector("h1")
    heading.textContent = "Alexander Supertramp Revival"
    // console.log(heading);

//!------------------- COPY EVENT ------------------------------------!
    //*fires when user puts smth on the clipboard/ copies
    //in this case we're having it log what was copied to the console
    window.addEventListener("copy", () => {
        navigator.clipboard.readText()
        .then(text => {
            // console.log(text);
            heading.textContent += text
        })
    })

//!------------------- CLICK EVENT ------------------------------------! 
//*click can toggle class name on an element which causes css to kick in
//* so we have to set styling rules and set up code for class names to be applied to that element


document.body.addEventListener("click", evt => {
    evt.target.classList.toggle("mirror");
})

//!------------------------ DOUBLE CLICK EVENT --------------------!
//make an element disappear after double click
//add the listener to document body
//the element that will disappear is the target of the event (the innermost element that got clicked)
document.body.addEventListener("dblclick", evt => {
    evt.target.innerHTML = "" //the empty string is what makes the element disappear
})
//to check if code is working or not, place a breakpoint inside of it!
//inside of broswer , inspect, sources, in file , dot, js file, click on line you want to test,
//then insert break point and test code :)

//!------------------------ KEY DOWN EVENT -----------------------!

window.addEventListener("keydown", evt => {
    // console.log(evt); //this line tells us the info we need for what keys (when you look at console in browser while inspecting)
    if (evt.key == 6) {
        document.body.innerHTML = "<h1>(⌐▀͡ ̯ʖ▀) forbidden key</h1>" //remember innerHTML = "" deletes that element (in this case that element is the body (・｀u ´・) )
        //and replaces it with the input string
        
    }
})

//!------------------------ MOUSEMOVE EVENT ----------------------------!
//if you wanted to find out the coordinates of mouse in order to use those coordinates
//so as mouse moves lots of events fire, and code gives access to position of cursor on page

document.body.addEventListener("mousemove", evt => {
    // console.log(evt);// when you go to browser and inspect, this will give you
    // the coordinates of mouse as you move it across screen **IT'S A LOT OF INFO ALL AT ONCE**
    //you want clientX (how far from the top) and clientY (how far from the left)
    const { clientX, clientY } = evt
    // console.log(`mouse is at ${clientX}, ${clientY}`)
    //very rapidly changing info but useful for things like video games/spfx
    //you would need to throttle these events
    //throttle prevents code from running every time you move, rather at intervals for performance issues
})  




//!------------------------ MOUSEENTER EVENT ----------------------------!
//*use in-line styles to set bold --or any styling-- as mouse enters div 
const destinations = document.querySelectorAll (".destination");
// console.log(destinations);
//*we need to apply mouse enter/leave listener events to all destinations so we need a loop
//*this loop basically tells the console to do something any time the mouse enters that particular element
for (let destination of destinations) {
    destination.addEventListener("mouseenter", () => {
        // console.log(destination)
        //*but since we want to alter the font..
        destination.style.fontWeight = "bold";
    })
//!------------------------ MOUSELEAVE EVENT ----------------------------!
//*use in-line styles to set bold --or any styling-- as mouse enters div 
//*as mouse leaves the font will reset itself
destination.addEventListener("mouseleave", () => {
    setTimeout( () => {
        destination.style.fontWeight = "initial";
    }, 500) // <-- half a second
})
}

//!------------------------ RESIZE EVENT ----------------------------!


//!------------------------ SCROLL EVENT ----------------------------!



}

//!to highlight and target multiple items/text in vscode ctrl + d







// let navHover = document.querySelectorAll(".nav-link");

// navHover.addEventListener("mouseover", function(event) {
//     //highlight the text/change font color
//     event.target.style.color = "pink";

//     //reset color after timeout
//     setTimeout( function () {
//         event.target.style.color = "";
//     }, 500);
// }, false);



//tab? 





