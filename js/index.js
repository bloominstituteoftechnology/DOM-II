// CODE: //

// ============== CONSTANTS ============ //

const navLinks = document.querySelector('.nav');


// =============== MOUSEOVER ============ //

navLinks.addEventListener('mouseover', function(e) {
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



// ================ DRAG/DROP ========= //

document.addEventListener("dragstart", (e) => {
     dragged = e.target;
   console.log ('Drag me')
    
    e.target.style.opacity = .5;
}, false);

// ================ LOAD =============== //





// ================ RESIZE ============== //




// ================ SCROLL ============== //




// ================ SELECT ============== //




// ================ DBLCLICK ============== //