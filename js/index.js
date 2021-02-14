
window.addEventListener('load', (event) => {
    alert('Wecome to The Fun Bus');
  });

 

const navchan = document.querySelector('.nav');

navchan.addEventListener("mouseover", function( event ){
    event.target.style.color = "red";

    setTimeout (function(){
        event.target.style.color = "gold";
    }, 800)

   
    setTimeout (function(){
        event.target.style.color = "black";
    }, 1500)
})


const wel = document.querySelector('h2');

wel.addEventListener("mouseenter", function( event ){
    event.target.style.color = "red";

    setTimeout (function(){
        event.target.style.color = "gold";
    }, 500)

    setTimeout (function(){
        event.target.style.color = "black";
    }, 1000)
})

const fristp = document.querySelector('.intro p');
 

let scale = 1;

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 2);
    fristp.style.transform = `scale(${scale})`;
  }
  
fristp.addEventListener("wheel", zoom)




let move                       = document.querySelectorAll('mover'),
    last_knows_scroll_position = 0,
    ticking                    = false;

(function init(){

    for(let i = 0; i < move.length; i++){
        move[i].style.top = (i * 10) + 'px';
    }
})();

function onScroll(){
    last_knows_scroll_position = window.scrollY;
    requestTick();
}

function requestTick(){
    if(!ticking){
        requestAnimationFrame(update);
        ticking = true;
    }
}

function update(){
    let mover        = null,
    moverTop          = [],
    halfWindowHeight = window.innerHeight * 0.5;
    // offset           = 0;

    for(let i = 0; i < move.length; i++){

        mover    = move[i];
        moverTop =mover.offsetTop;
    }

    for(let i = 0; i < move.length; i++){

        mover = move[i];

        if(last_knows_scroll_position > moverTop[i] - halfWindowHeight){
            mover.classList.add('left');
        } else{
            mover.classList.remove('left')
        }
    }
    ticking = false;
}

window.addEventListener('scroll', onScroll, false);