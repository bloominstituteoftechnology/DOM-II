// Your code goes here



/** Navigation */
let navLink = document.querySelectorAll('.nav-link');

navLink.forEach((element) => {
    element.addEventListener('mouseenter', function(){
        element.style.transform = "scale(1.2)";
        element.style.transition = 'transform .5s';
    })
        element.addEventListener('mouseleave', function(){
        element.style.transform = "scale(1)";
    })
})

/** h2 text rotate */

let intro = document.querySelectorAll('h2');
intro.forEach((element) => {
    element.addEventListener('mouseover', function(){
        element.style.transform = "rotateX(360deg)";
        element.style.transition = 'transform 1.5s';
    })
        element.addEventListener('mouseout', function(){
        element.style.transform = "";
    })
})


let p = document.querySelectorAll('p');
p.forEach((click) => {
    click.addEventListener ('click', function(){
        if (click.style.backgroundColor === 'black'){
            click.style.backgroundColor = 'white';
            click.style.color = 'black';
        }
        else {
            click.style.backgroundColor = 'black';
            click.style.color = 'white';
        }
    
    })
    
})

document.addEventListener('keydown', (event) => { alert('YOU PRESSED A KEY');
  });


const img = document.querySelectorAll('img');
img.forEach((dbl) => {
    dbl.addEventListener('dblclick', function (e) {
      if (dbl.style.transform === 'scale(1.2)') {
          dbl.style.transform = 'scale(1)';
          dbl.style.transition = "1.2s";
      } else {
          dbl.style.transform = 'scale(1.2)';
          dbl.style.transition = "1.2s";
      }  
})  
});