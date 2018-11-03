// Your code goes here
//const heading =document.querySelector(".nav-container .logo-heading");

const navAsList =document.querySelectorAll(".nav a");

for (let i=0; i < navAsList.length; i++) {
    navAsList[i].addEventListener("focus", function (event) {
        console.log("In event " + i);

        if (i % 2 == 0) {
            event.target.style.backgroundColor = "purple";
            console.log("I am trying the even's to be blue!! ")
        } else {
            event.target.style.backgroundColor = "yellow";
            console.log("Odd numbers please bear with red!!!")

        }

    }, true);


    navAsList[i].addEventListener("click", function (event) {

        event.preventDefault();
        console.log("Navigation a's has been prevented from their defaults!")
    });

}

document.addEventListener("click", function (event) {

    event.stopPropagation();
    console.log("Whole doc click stopped");
})

const para =document.querySelector(".intro p");
para.addEventListener("dblclick",function(event){
   event.target.style.fontSize="40px";
   console.log("I want you to be big!!");
});

window.addEventListener("resize", function(event) {
    console.log("Resizing...!!");
});

const heading =document.querySelector(".nav-container .logo-heading");

heading.addEventListener("click", function(event){
    heading.textContent="Most Exciting Bus Trip"
console.log("Text has been changed  ");
});

 const secondHeading =document.querySelector(".intro h2");
secondHeading.addEventListener("drag",function(event){
  console.log("Text is dragged!");
});

const destinationList = document.querySelectorAll(".destination");
for(let i=0; i<destinationList.length;i++){
    destinationList[0].addEventListener("mouseover",function(event){

        event.target.style.display='none';
    });
    destinationList[1].addEventListener("mouseover",function(event){

        event.target.style.backgroundColor='green';
    });

    destinationList[2].addEventListener("mouseover",function(event){

        event.target.style.fontStyle='italic';
    });

}


let fontSize=16;
const btnList= document.querySelectorAll(".btn");

for (let i=0; i < btnList.length; i++) {
    btnList[i].addEventListener("wheel", function (event) {

        if (event.deltaY < 0) {

            fontSize++;
            console.log("I am increasing");
        }
        else {
            fontSize--;
            console.log("I am decreasing");
        }

        event.target.style.fontSize = `${fontSize}px`;

    });
}

const contentPara =document.querySelector(".content-section .text-content p");
contentPara.addEventListener("copy",function(event){
    console.log("This Paragraph is copied.");
})

const destPara =document.querySelector(".content-section .text-content p");
destPara.addEventListener("cut",function(event){
    console.log("This Paragraph is cut.");

});
destPara.addEventListener("paste",function(event){
        console.log("This Paragraph is pasted.");
});



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
});

const container=document.querySelector(".container")
container.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
});



const textArea = document.querySelector (".comment");
textArea.addEventListener("select", function(event) {
    console.log("Selected...!");
});

textArea.addEventListener("scroll", function(event) {
    console.log("scrolled...!");
});






