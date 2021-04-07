// Your code goes here

//Elements from the DOM
const signUpBtn = document.querySelector(".btn");
const firstImg = document.querySelector('#first-img');
const paragraph = document.querySelectorAll('p');
const destinationImg = document.querySelector('.content-destination img');
const adventureImg = document.querySelector('#adventureImg');
const funImg = document.querySelector('#funImg');
const img = document.querySelectorAll('img');
const body = document.querySelector('body');


console.log(destinationImg);
//One
signUpBtn.addEventListener("click",function(event){
    signUpBtn.style.background = 'red';
})


//two
firstImg.addEventListener("mouseover",function(event){
    firstImg.style.filter = "grayscale(100%)";
} )

// three
document.addEventListener("keydown",function(event){
    if(event.key === "w"){
        console.log(paragraph);
        paragraph.forEach(item => item.style.color = "white");
    }
})

// four
document.addEventListener("keydown",function(event){
    if(event.key === "b"){
        console.log(paragraph);
        paragraph.forEach(item => item.style.color = "black");
    }
})

//five
destinationImg.addEventListener("mouseover",function(event){
    destinationImg.style.filter = "grayscale(50%)";
} )

//six 
adventureImg.addEventListener("mouseover",function(event){
    adventureImg.style.filter = "grayscale(65%)";
} )
//seven
funImg.addEventListener("mouseover",function(event){
    funImg.style.filter = "grayscale(65%)";
} )

//eight
document.addEventListener("keydown",function(event){
    if(event.key === "i"){
        img.forEach(item => item.style.filteri = 'grayscale(0%)');
    }
})

//nine
document.addEventListener("keydown",function(event){
    if(event.key === "q"){
        body.style.backgroundColor = 'red';
    }
})
//ten
document.addEventListener("keydown",function(event){
    if(event.key === "u"){
        body.style.backgroundColor = 'white';
    }
})