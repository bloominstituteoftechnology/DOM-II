// Your code goes here

//`MOUSEOVER` - images have border

let contentImg1 = document.querySelector('.cont-img1');

contentImg1.addEventListener('mouseover', function(event){
   
    event.target.style.border = "solid 10px red";
});

let contentImg2 = document.querySelector('.cont-img2');

contentImg2.addEventListener('mouseover', function(event){
   
    event.target.style.border = "solid 10px red";
});

let contentImg3 = document.querySelector('.cont-img3');

contentImg3.addEventListener('mouseover', function(event){
   
    event.target.style.border = "solid 10px red";
});

//`SCROLL` - images shake

window.addEventListener('scroll', function(){ 
    contentImg1.style.border = "solid 10px #17A2B8";
    contentImg2.style.border = "solid 10px #17A2B8";
    contentImg3.style.border = "solid 10px #17A2B8";

});

//`SELECT` - turns opaque when selected

let input = document.querySelector('#input');

input.addEventListener('select', function(event){
    input.style.backgroundColor = '#17A2B8';
    input.style.color = 'white';
    console.log('Blaah');
    //input.setAttribute('style', "background-color: #17A2B8");
}, false);

// `KEYDOWN` - smiley face/bus flashes on the side of the screen

let body = document.querySelector('body');
let allParas = document.querySelectorAll('.container p');

/* allParas.addEventListener('keydown', function(event){
    allParas.style.fontStyle = 'bold';
}); */

document.addEventListener('keydown', function(event){
    allParas[1].style.transform = 'scale(1.5)';
});

// `KEYUP`

document.addEventListener('keyup', function(event){
    allParas[1].style.transform = 'scale(1)';
});



//`DBLCLICK` - Signmeup button clicked and related text expands

let btns = document.querySelectorAll('.btn');
let destPList = document.querySelectorAll('.destination p');
let destHeaderList = document.querySelectorAll('.destination h4');



btns[0].addEventListener('dblclick', function(event){
    destHeaderList[0].style.transform = 'scale(2)';
});

//`MOUSEDOWN`  - 

btns[1].addEventListener('mousedown', function(event){
    event.target.style.color = 'black';
    event.target.style.transform = 'scale(1.5)';
}, true);




//`MOUSEOUT` -

btns[2].addEventListener('mouseout', function(event){
    event.target.style.color = 'white';
    event.target.style.transform = 'scale(1)';
});
btns[1].addEventListener('mouseout', function(event){
    event.target.style.color = 'white';
    event.target.style.transform = 'scale(1)';
}, true);


//`RESIZE` - image shakes


window.addEventListener('resize', function(event){
    body.style.display = 'none';
})

//`FULLSCREEN CHANGE`


window.addEventListener('fullscreenchange', function(event){
    body.style.display = 'display';
})












// UNUSED JUNK PILE 

/* let foot = document.querySelector('footer');

footer.addEventListener('wheel', ) */
	 
	 //`drag / drop`
	 //`load` - text fades in
	
	 //`resize` - 
	 
	 
	 
	 //`animationiteration` - logo spins; everytime is spins the color changes
	 




//Paragraphs; possibly for later use.

     /* let allParas = document.querySelectorAll('.container p');

for (let i = 0; i < allParas.length; i++){
    allParas[i].addEventListener('select', function(event){
        event.target.backgroundColor = '#17A2B8';
        event.target.opacity = '.3';
        event.preventDefault();
    })
} */