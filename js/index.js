// Your code goes here
//event listener 1 - onmouseover : mouse moves onto the element that has the listener attached, or onto one of it's children
const logo = document.querySelector(".logo-heading");
logo.onmouseover = (e) => {
    console.log('got it');
    zoom(logo);
};

function zoom(element){
    element.style.fontSize = "4rem";
    element.style.color = "red";
};

//event listener 2 - keydown : when ANY key is pressed it fires

let arrayOfWelcomeLanguages = [
    {language: "English", message: "Welcome To Fun Bus"},//[0]
    {language: "Norwegian", message: "Velkommen til Fun Bus"},//[1]
    {language: "Hawaiian", message: "Welina mai i ke kaʻa ʻōhua leʻaleʻa"},//[2]
    {language: "Vietnamese", message: "Chào mừng đến với Chuyến xe vui nhộn"}//[3]
];

document.addEventListener('keydown', (e) => {
    const welcomeToTheFunBus = document.querySelector("header h2");
    console.log('received');
    console.log(welcomeToTheFunBus);
    changeWelcome(welcomeToTheFunBus);
});

let i = 0;
function changeWelcome(element){
    console.log(i);
    if (i === 0){
        i++;
        return element.textContent = arrayOfWelcomeLanguages[0].message;
    } else if (i === 1){
        i++
        return element.textContent = arrayOfWelcomeLanguages[1].message;
    } else if (i === 2){
        i++;
        return element.textContent = arrayOfWelcomeLanguages[2].message;
    } else {
        i = 0;
        return element.textContent = arrayOfWelcomeLanguages[3].message;
    }
};

//eventlistener 3 - wheel : a wheel button of a pointing device is rotated in any direction
document.addEventListener('wheel', (e) => {
    const wholeWebPage = document.querySelector("body");
    //console.log('received', );
    wheelMovement(wholeWebPage);
});

function wheelMovement(element){
    element.style.color = "blue";
    
    //console.log('the wheel is scrolling up or down');
};

//eventlistener 4 - load : progression successful
window.addEventListener('load', (e) => {
    console.log('page is fully loaded');
  });

//eventlistener 5 - focus: 

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(navLink => {
    navLink.addEventListener('focus', (e) => {
        navLink.style.background = 'pink'; 
    });
})

//eventlistener 6 - resize: 
//eventlistener 7 - scroll :
//eventlistener 8 - select : 

//eventlistner 9 - dblclick: mouse clicks twice on an element & also execute preventDefault() here

const signMeUpButtons = document.querySelectorAll('.btn');
const islandGetawayButton = signMeUpButtons[2];

islandGetawayButton.addEventListener('dblclick', (e) => {
    eventIsFullyBooked(islandGetawayButton);  
});


function eventIsFullyBooked(element){
    window.alert("Sorry, this trip is at capacity.");
    
};



//eventlistener 10 - drag/drop: 


//e.preventDefault()
const firstButton = signMeUpButtons[0];
firstButton.addEventListener("click", (e) => {
    alert("working");
     e.preventDefault();
 });


