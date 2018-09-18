// Your code goes here
/*
1. click 
2. scroll 
3. auxclick
4. mouse over 
5. Print
6. on copy 
7. on dbl click
8. wheel  
9. on error - 
10. on text select -
*/


//--- 1 --- CLICK 
const imageClick = document.querySelectorAll('img');

imageClick[0].addEventListener ('click', () => {
 console.log("hey look - you clicked me!");
});
console.log(imageClick);

//--- 2 --- SCROLL
const scrollOptIn = document.querySelector(".content-section .text-content h2");
scrollOptIn.addEventListener ('scroll',() => {
    console.log("slow your scroll!");
 });
 console.log(scrollOptIn);


//--- 3 --- AUXCLICK
const auxClick = document.querySelector("#homePage");
auxClick.addEventListener ('auxclick',() => {
    console.log("woah - weird click");
 });
 console.log(auxClick);

//--- 4 --- MOUSE OVER
const mouseTickle = document.querySelectorAll("img");
mouseTickle[1].addEventListener ('mouseover',() => {
    console.log("hehehe - that's a ticklish spot");
 });
 console.log(mouseTickle);

//--- 5 --- PRINT !!! not working
const printText = document.querySelector("#homePage");
printText.addEventListener ('beforeprint',() => {
    alert ("Happy Printing!");
 });
 console.log(printText);

 //--- 6 --- COPY
const copyText = document.querySelector("#homePage");
copyText.addEventListener ('copy',() => {
    console.log("Stealing isn't nice");
 });
 console.log(copyText);

 //--- 7 --- DBL Click
 const logoClick = document.querySelector(".logo-heading");
 logoClick.addEventListener ('dblclick',() => {
     console.log("Let's go for a ride!!");
  });
  console.log(logoClick);


 //--- 8 --- WHEEL
 const textWheel = document.querySelectorAll("#homePage p");
 textWheel[5].addEventListener ('wheel',() => {
    console.log("Woah - need me to take some notes for you?");
});
  console.log(textWheel);


 //--- 9 --- MOUSE DOWN
 const mouseColor = document.querySelector(".main-navigation");
 mouseColor.addEventListener ('mousedown',(event) => {
    event.target.parentNode.style.backgroundColor = "red";   
});
  console.log(mouseColor);

//--- 10 --- MOUSE UP
const mouseColorReverse = document.querySelector(".main-navigation");
 mouseColorReverse.addEventListener ('mouseup',(event) => {
   event.target.parentNode.style.backgroundColor = "white";   
});
 console.log(mouseColorReverse);


/* --- TO TRY LATER --- 
/*
1. click - image popout
2. scroll - email optin -popup
3. submit - share for X popup
4. mouse over - take a vacation quiz
5. reset - reset quiz to start again or leave
4. on copy - offer to use travel planner 
5. on dbl click-more details popout 
6. touch list - send data to UX team 
9. on error - if image doesn't load image isnt shown
10. on text select - mini-survey 

---- first ----

const imageClick = document.querySelectorAll('img');
const modal = document.querySelector('#myModal');
const modalImg = document.querySelector('#img01');
const captionText = document.querySelector('#caption');

imageClick.addEventListener ('click', () => {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
 });

const span = document.querySelector('.close');
span.addEventListener ('click', () => { 
   modal.style.display = "none";
});

---second to try later ---
const scrollOptIn = document.querySelector(".content-section .text-content h2");

scrollOptIn.addEventListener ('scroll',() => {
   window.prompt("Join our mailing list and get a discount code for your next trip!");
});
console.log(scrollOptIn);
*/