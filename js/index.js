// Your code goes here
/*


mouseenter [done]

dblclick [done]

mouseleave [done]

mouseover [done]

click [done]

load [done]

drag [done]

*/
/*Default prevention.*/
let navLinks = document.querySelectorAll('.nav-link');
let adventureImg = document.querySelector('.img-content img');
console.log(navLinks);

navLinks.forEach(item => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        console.log(event);
    })
})

navLinks.forEach(item => {
    item.addEventListener('mouseenter', function(){
       if ( item.style.fontStyle === ''){
           item.style.fontStyle = 'italic' ;
       }

    })

    item.addEventListener('click', function(){
        item.style.fontStyle = 'bold';
    })
})

let fontColor = function(){
    this.style.color = 'purple'
}

navLinks.forEach(item => {
    item.addEventListener('click', fontColor);
})


adventureImg.addEventListener('dblclick', function(){
    
    adventureImg.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/29/09/49/adventure-1868817_1280.jpg');
})

console.log(adventureImg);

let buttonSet = Array.from(document.getElementsByClassName('btn'));
buttonSet.forEach(item => {
    item.addEventListener('mouseover', function(){
        item.style.color = 'Black';
        item.style.backgroundColor = 'blanchedalmond';
    })

    item.addEventListener('mouseleave', function(){
        item.style.color = 'white';
        item.style.backgroundColor = '#17A2B8';
    })
})
console.log(buttonSet);

let headerImg = document.querySelector('.intro img');


headerImg.addEventListener('load', function(event){
    event.target.style.border = '8px solid darkslategray';
  
})


let body = document.querySelector('html');
let logoHeader = Array.from(document.getElementsByClassName('logo-heading'));
console.log(logoHeader);
let middleImg = document.querySelector('.content-destination img')

let headerClass = document.querySelector('.main-navigation');
middleImg.addEventListener('drag', function getRandomColor(event) {
    // event.stopPropagation();
    let hexText = '0123456789ABCDEF';
    let color = '#';
    
      for (let i = 0; i < 6; i++ ) {
          color += hexText[Math.floor(Math.random() * 16)];

          if (i % 3 === 0){
              event.target.style.backgroundColor = color;
              headerClass.style.color = color
          }

          else {
              logoHeader[0].innerText = 'TIME TO PARTY!'; 
              headerClass.style.backgroundColor = color ;
       ;
          }

      }
      body.style.backgroundColor = color ;
      ;
})


