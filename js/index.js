
let bus = document.getElementById('bus');
let busF = true;

// Try to make a sprite image of the funbus in the fixed header
var img = new Image(40,40);   // Create new img element
img.addEventListener('load', function(e) {
  // execute drawImage statements here
      var canvas  = document.getElementById("funbus");
      var context = canvas.getContext('2d');
      img.onload = function (e){
      context.drawImage(img, 30, 30);

      }
      img.src = '../img/fun-bus.jpg'; // Set source path 
      
}, false);


// Double click the fun bus to make it smaller

bus.addEventListener("dblclick", (e) => {
    if(busF){
        e.target.style.width = '50%';
        e.target.style.height = '100%';
        e.target.style.marginLeft = '25%';
        e.target.style.marginRight = '25%';
        busF= false;
    }else{
        e.target.style.width = '100%';
        e.target.style.height = '100%';
        e.target.style.marginLeft = '0%';
        e.target.style.marginRight = '0%';
        busF=true;
    }
});





// Mouse over the bus to move it after its been double clicked
let backward = false;
bus.addEventListener("mouseover", (e) => {
    if(!busF){
        // let start = Date.now();
        e.target.style.margin = '0% 0% 0% 0%';
        e.target.style.animateFillMode = 'backwards';

        e.target.animate([
            // keyframes
            { transform: 'translateX(-80%)' }, 
            {transition: 'all 3s linear'},
            { transform: 'translateX(100%)' },
            {transition: 'all 3s linear'},
          ], { 
            // timing options
            duration: 1000,
            
            iterations: 1
          })
          
          busF=true;
       

        // if(backward){
        //     // e.target.style.transition = 'all 1s easein'
        //  e.target.style.transform = 'translateX(100%)';
        //  e.target.style.transition = 'all 3s linear'
        // }
    }else{
        e.target.style.width = '100%';
          e.target.style.height = '100%';
          e.target.style.marginLeft = '0%';
          e.target.style.marginRight = '0%';
    }
});

// Click the destination header for a world globe gif
let selectDst = true;
let selectDestination = document.querySelector('.content-destination');
selectDestination.addEventListener('click', (e) => {
    let himg = document.getElementById('world');
    let h = document.querySelector('.content-destination > div > h2');
    let hh = document.querySelector('.content-destination > div');
    // let himg = document.createElement('img');
    // image properties
    // himg.style.height = '100%';
    // himg.style.width = '100%';
    // himg.style.position = 'relative';
    himg.style.width = '40%';
    himg.style.height = '40%';
    himg.style.display = 'flex'; 
    // hh.appendChild(himg);
    if(selectDst){
        h.style.width='25%';
        h.style.margin='0 auto 30px';
        selectDst = false;
        hh.prepend(himg);
        console.log(himg)
    }else{
        h.style.width='75%';
        himg.style.display = 'none';
    // h.style.margin='0 auto 30px';
        selectDst = true;
    }
    
    
},false );

// Mouse over the image and rotate it while the pointer is on the image
//TODO Error Find Out why Now the image appears to be fixed while scrolling down
// Tried zindex for this and it works but won't allow you to animate it again after 
/// zindex is changed
let degs = 5;
let logoMove = document.getElementById('mouseme');
logoMove.addEventListener('mousemove', e => {
    // logoMove.style.zIndex = '0';
  logoMove.style.transform = 'rotate('+degs+'deg)';
  if(degs <= 360){
    degs = degs + 5;
  }else{
    degs = 5;
  }
});
logoMove.addEventListener('mouseleave', e => {
    // logoMove.style.zIndex = '-1';
    logoMove.style.transform = 'rotate(0deg)';
});


// The image below the mouseme ID with the rounded class and img fluid
let logoTornado = document.querySelector('.rounded');
logoTornado.addEventListener('mousedown', e => {

  logoTornado.style.transform = 'rotate('+degs+'deg)';
  if(degs <= 360){
    degs = degs + 5;
  }else{
    degs = 5;
  }
});

logoTornado.addEventListener('mouseup', e => {
    // logoMove.style.zIndex = '-1';
    logoTornado.style.transform = 'rotate('+degs+'deg)';
    if(degs <= 360){
        degs = degs + 35;
      }else{
        degs = 35;
      }
});


// Change all the h2s to red on mouse enter or black on mouse out
let h2Sel = document.querySelectorAll('h2');
h2Sel[0].addEventListener('mouseenter', (e) =>{
    e.target.style.color = 'red';
});

h2Sel[0].addEventListener('mouseout', (e) =>{
    e.target.style.color  = 'black';
});

h2Sel[1].addEventListener('mouseenter', (e) =>{
    e.target.style.color = 'red';
});

h2Sel[1].addEventListener('mouseout', (e) =>{
    e.target.style.color  = 'black';
});


h2Sel[2].addEventListener('mouseenter', (e) =>{
    e.target.style.color = 'red';
});

h2Sel[2].addEventListener('mouseout', (e) =>{
    e.target.style.color  = 'black';
});

h2Sel[3].addEventListener('mouseenter', (e) =>{
    e.target.style.color = 'red';
});

h2Sel[3].addEventListener('mouseout', (e) =>{
    e.target.style.color  = 'black';
});






