// Your code goes here

// MOUSEOVER STYLE

document.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);


// KEYDOWN 


const funColor = document.querySelectorAll('h2');

document.addEventListener('keydown', function (event) {
    if (event.key === 'f') {
       
        }
    }



