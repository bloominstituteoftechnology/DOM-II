// Your code goes here
const deleteC = document.querySelector('.btn, .logo-heading');
const btnClick = document.querySelectorAll('.btn');
const mouseOver = document.querySelector('.intro img');
const dblClick = document.querySelectorAll('.img-content');
const body = document.querySelector('.body');
const classChange = dblClick.classList;
const drag = document.querySelector('.content-destination img');
const a = document.querySelectorAll('a');


deleteC.addEventListener('click', function(event){
    event.target.style.display = 'none';
    console.log(`${event.target} deleted`);
});

for(let i = 0; i < btnClick.length; i++){
    btnClick[i].addEventListener('click', function(event){
        event.stopPropagation();
        console.log('not deleted');
    });
}

body.addEventListener('keydown', function(e){
    for(let i = 0; i < dblClick.length; i++){
        if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
            dblClick[i].classList.toggle('display-change');        
        }
    }
});

let x = 0;
body.addEventListener('wheel', function(e){

    for(let i = 0; i < dblClick.length; i++){
        x++;
        dblClick[i].style.transform = `rotate(${x}deg)`;
    }
});



mouseOver.addEventListener('mouseover', function(event){
    event.target.style.width = '50%';
});

for(let j = 0; j < dblClick.length; j++){
    dblClick[j].addEventListener('dblclick', function(event){
        event.target.style.width = '50%';
    });
}

for(let i = 0; i < a.length; i++){
    a[i].addEventListener('click', function(e){
        console.log('it works');
        e.preventDefault;
    });
    
}

// destination.addEventListener("focus", function( event ) {
//     event.target.style.background = "red";    
//   });

const form = document.getElementById("form");
form.addEventListener("focus", function( event ) {
  event.target.style.background = "red";    
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.background = "";    
}, true);


const elem = document.querySelector('#test');
  elem.addEventListener('select', function() {
    console.log('Selection changed!');
  }, false);

  drag.addEventListener('drag',function(e){
    e.target.style.display = 'none';
  });

  const p = document.querySelector('.keypress p');
  let placeholder = "";
  body.addEventListener('keypress', function(e){
    placeholder = `${placeholder}${e.key}`
    p.textContent = placeholder;
});