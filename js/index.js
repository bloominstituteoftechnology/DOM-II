// Your code goes here

//MOUSEENTER AND MOUSE LEAVE SECTION
const roadMap = document.querySelectorAll('.img-content');
roadMap.forEach((element) => {
element.addEventListener("mouseenter" , function(){

    element.addEventListener('click', (event) => {
        event.stopPropagation();
    })
    
    element.style.transform = "scale(1.6)";
    element.style.transition = "transform 2s";
    
})

element.addEventListener('mouseleave', function() {
    element.style.transform = "scale(1)";
})
})


//WHEEL AND DBLCLICK SECTION
const body = document.querySelector('body');
 body.addEventListener('wheel', function(){

    body.style.transform = "scale(1.6)";
    body.style.transition = "2s";
    body.addEventListener('dblclick', function(){
    body.style.transform = "scale(1)";
    } )  
 })

 //KEYDOWN AND KEYUP SECITON
    body.addEventListener('keydown' , function(){
    body.style.transform = 'rotate(180deg)';
 } )
    body.addEventListener('keyup', function() {
    body.style.transform = 'rotate(0deg)';

})
// BUILD A TEXT BOX SECTION
const navCont = document.querySelector('.nav-container');


    var box = document.createElement('input');
    box.type="text";
    box.placeholder = "click here";
    navCont.appendChild(box);
    
    const clickHere = document.querySelector('input[type="text"]');

    //FOCUS, BLUR AND SCROLL SECTION

    clickHere.addEventListener('focus', (event) => {
        event.target.style.background ="pink";
    })

    clickHere.addEventListener('blur', (event) => {
        event.target.style.background = "";
    })

    window.addEventListener('scroll', () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if (scrolled === scrollable) {
            alert('IT IS TIME TO PLAN YOUR TRIP.  CALL US AT 1-800-555-5555');
        }

    })

    //COPY EVENT SECTION
    const source = window.addEventListener('copy', (event) => {

        alert("COPY IS NOT ALLOWED ON THIS WEBSITE");

    })

    //PREVENTDEFAULT() SECTION
    homeLink = document.querySelector('.nav-link');
     
    homeLink.addEventListener('click', function(event){
        event.preventDefault();
    })