// Your code goes here
//Setting up event listeners 
let logo = document.querySelector(".logo-heading");         //Changing logo color on mouseover

logo.addEventListener('mouseover', function(event){
    event.target.style.color = 'yellow';
    setTimeout(function(){
        event.target.style.color = "";
    }, 400);
    
},false);

let navLinks = document.querySelectorAll('.nav');               //Changing Link colors on mouseover NAV
navLinks.forEach(link => {
    link.addEventListener('mouseover', function(event){
        event.target.style.color = 'Orange';
        setTimeout(function(){
            event.target.style.color = "";
        }, 400);
    })
});





function Keypressed(event){                             // if Enter is pressed all text turns green
    if(event.key === "Enter"){
        event.target.style.color = "green";
    }
}

document.addEventListener("keydown", Keypressed);



let h2Hover = document.querySelectorAll("h2");         //Changing h2 color on mouseover

for( let i =0; i <= h2Hover.length; i++){
h2Hover[i].addEventListener('mouseover', function(event){
    event.target.style.color = 'red';
    setTimeout(function(){
        event.target.style.color = "";
    }, 800);
    
},false);
}



let h4Hover = document.querySelectorAll("h4");         //Changing h4 color on mouseover

for( let i =0; i <= h4Hover.length; i++){
h2Hover[i].addEventListener('mouseover', function(event){
    event.target.style.color = 'red';
    setTimeout(function(){
        event.target.style.color = "";
    }, 800);
    
},false);
}
