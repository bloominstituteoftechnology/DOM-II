let contentSectionImages = document.querySelectorAll(".content-section img, .content-destination img");
let image1 = Array.from(contentSectionImages)[0];

function changeStyle(param){

}

image1.addEventListener("mouseenter",function(event){
    console.log("mouse on")
    console.dir(event.target)
    image1.classList.add('display-none')
    //console.dir(event.target.classList("display-none"),"new CSS Class");
    //style = window.getComputedStyle(event.target)
    //console.dir(style);
    //return event.target.style["border-radius"]="50%";
    //console.log(style.borderRadius);
})

image1.addEventListener("mouseout",function(event){
    //console.dir(document.styleSheets);
    console.log("mouse out")
    image1.classList.toggle('display-none')
    //return event.target.style.borderRadius="10px";
    //event.target.classList.toggle("display-none");
})


