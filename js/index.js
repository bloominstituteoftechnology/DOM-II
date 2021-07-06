// Your code goes here

//On loading the page changing all the font-color to green
const onload = function(event){
    document.body.style.color = "green";
}
window.addEventListener('load',onload);


//On mouseover changing the fontcolor
let mainmover = document.querySelector('.container.home');
mainmover.addEventListener("mouseover", function(event){
    event.target.style.color = "violet";

    //to reset the color after a short delay
    setTimeout(function(){
        event.target.style.color = "";
    }, 500)

},false)


let kdown = document.querySelector('.main-navigation');

kdown.addEventListener("dblclick", function (event){
    event.target.style.color= "red";
 });


//changing the content of sign me up of first
let button = document.querySelector('.btn');

document.addEventListener('click', function(event){
    if(event.target === button){
        button.textContent = `Click count: ${event.detail}`;  
    }else{
        console.log('clicking somewhere else')
    }
})
//onmuseenter event on h1
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function(e){
    alert('addEventListener: Great! You are reading the heading');
});

//nav events when mouseover 
const navn = document.querySelector('.nav-container');
navn.addEventListener('mouseover',function(e){
    if(e.target.classList.contains('nav-link')){
        const link = e.target;
        const siblings  = link.closest('.nav').querySelectorAll('.nav-link');
        const logon = link.closest('.nav').querySelector('.img-content');

        siblings.forEach(el =>{
            if(el !== link) el.style.opacity = 0.1;
        });
        logon.style.opacity = 0.5;
    }
})

navn.addEventListener('mouseout',function(e){
    if(e.target.classList.contains('nav-link')){
        const link = e.target;
        const siblings  = link.closest('.nav').querySelectorAll('.nav-link');
        const logon = link.closest('.nav').querySelector('.destination');

        siblings.forEach(el =>{
            if(el !== link) el.style.opacity = 1;
        });
        logon.target.style.opacity = 1;
    }
})







