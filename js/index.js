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
    return('keydown e\o\o' + 'key: ' + keyDown);
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

const introPic = document.querySelector(".intro img");
introPic.addEventListener('focus', (e) =>  {
      e.target.style.background = "black";    
    }, true);
    introPic.addEventListener("blur", (e) => {
          e.target.style.background = "";    
        }, true);
        



// ================ RESIZE ============== //










// ================ SCROLL ============== //




// ================ SELECT ============== //




// ================ DBLCLICK ============== //