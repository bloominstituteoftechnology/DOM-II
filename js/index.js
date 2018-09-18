// Your code goes here
/*
1. click 
2. scroll 
3. submit
4. mouse over 
5. reset 
4. on copy 
5. on dbl click
6. touch list  
9. on error - 
10. on text select -
*/

//--- 1 --- CLICK 
const imageClick = document.querySelectorAll('img');
imageClick.addEventListener ('click', () => {
    console.log("hey look - you clicked me!");
});
console.log(imageClick);

//--- 2 --- SCROLL
const scrollOptIn = document.querySelector(".content-section .text-content h2");
scrollOptIn.addEventListener ('scroll',() => {
    console.log("slow your scroll!");
 });
 console.log(scrollOptIn);


//--- 3 --- SCROLL


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