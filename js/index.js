//Corey Gumbs
//Sept 18, 2018
// Your code goes here



///Navigation
let aLinks = document.querySelectorAll("a");
aLinks.forEach((link) => {

    link.addEventListener("mouseover", (event) => {
        event.target.style.color = "#17A2B8";
    });

    link.addEventListener("mouseleave", (event) => {
        event.target.style.color = "#212529";
    });
});



let images = document.querySelectorAll("img");
let txtContent = document.querySelectorAll(".text-content");
let imgContent = document.querySelectorAll(".img-content");

let imgArray = Array.from(images).map((image => {
    image.style.opacity = 0;
    image.style.width = "10%";
}));



images.forEach((image) => {
    if(image.parentNode.className == "img-content"){
        txtContent.forEach(item => {
            item.style.width = "100%";
        })
    }

    window.addEventListener("scroll", (event) => {
        imgContent.forEach(img =>{
            img.width = "100%";
        })
        txtContent.forEach(item => {
            item.style.width = "48%";
        })

        image.style.width = "100%";
        image.style.opacity = 1;
        image.style.zIndex = -9999;
        image.style.transition = "width 3s, opacity 4s";
    });
    console.log(image)
});


