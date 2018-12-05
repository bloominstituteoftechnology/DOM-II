// CODE: //

// ============== CONSTANTS ============ //

const navLinks = document.querySelector('.nav');



// =============== MOUSEOVER ============ //

navLinks.addEventListener('mouseover', (e) => {
    e.target.style.color= "#411f9e";
    setTimeout(function() {
        e.target.style.color = "";
      }, 400);
    }, false);


// ================ KEYDOWN ============= //

document.addEventListener('keydown', (e) => {
    const keyDown = e.key;
    console.log('Hey! I am working.')
    alert ('Uhm, that tickled!!!');
});


// ================WHEEL =============== //



// ================ DRAG START ========= //


document.addEventListener("dragstart", (e) => {
    dragged = e.target;
    console.log ('You dragged me!')
    
e.target.style.opacity = .5;
}, false);

// ================ LOAD =============== //

window.addEventListener("load", (e) => {
    console.log("Loading -> complete.");
});


// ================ FOCUS ============== //

// const introPic = document.querySelector(".intro img");
// introPic.addEventListener('focus', (e) =>  {
//       e.target.style.background = "black";    
//     }, true);
//     introPic.addEventListener("blur", (e) => {
//           e.target.style.background = "";    
//         }, true);
        



// ================ RESIZE ============== //


window.addEventListener('resize', (e) => {
    console.log('Woah! I am shrinking or maybe growing larger!');
});







// ================ SCROLL ============== //

const headings = document.querySelector('h4');
//  const furtherheadings = document.querySelectorAll('h4');
window.addEventListener('scroll', (e) => {
    headings.style.color = '#acefde';
    console.log('Look at me move!');
});





// ================ SELECT ============== //

const words = document.querySelector('.intro p');
words.addEventListener('select', (e) => {
    console.log('So many words!!!');
});




// ================ DBLCLICK ============== //

const headers = document.querySelector('h2');
headers.forEach(function(h2){
    h2.addEventListener('dblclick',function(e) {
        e.target.style = '#82bc43';
    });
});