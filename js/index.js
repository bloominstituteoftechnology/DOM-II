
//#1 double click
const title = document.querySelector("h1")
title.addEventListener("dblclick", () =>{
    title.style.color = "red"
})



//#2 & #3 mouse enter and mouse leave events 

const busImage  = document.querySelector(".intro img")
busImage.addEventListener("mouseenter", () =>{
    busImage.style.transform="scale(1.15)";
    busImage.style.transition = "all 0.5s"
})

busImage.addEventListener("mouseleave", () =>{
    busImage.style.transform = "scale(1)"
})

//#4 scroll over

const headerTwo = document.querySelector("h2")
headerTwo.addEventListener("keydown", (event) =>{
if(event.isComposing || event.keyCode === 229){
    return;
}
headerTwo.style.color = "blue"
});
