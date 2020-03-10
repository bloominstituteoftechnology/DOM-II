// Your code goes here

let links = document.querySelectorAll("nav a");
Array.from(links).forEach(function (link) {
    link.addEventListener('click', function(e) {
        link.textContent = 'poop';
    });
});
let title = document.querySelector('.logo-heading');
title.addEventListener("mouseenter", () => {
    title.style.transform = "scale(1.2)";
    title.style.transition = "all 0.3s";
})
title.addEventListener("mouseleave", () => {
    title.style.transform = "scale(1)";
});

busImg.addEventListener('dblclick', function(e){
    busImg.classList.toggle("crazycolor")
    console.log(e);
})
let paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
Array.from(paragraphs).forEach(function (paragraph) {
    paragraph.addEventListener('load', function(e) {
        paragraph.textContent = 'you pressed a button';
        paragraph.style.transform = "scale(1.2)";
        paragraph.style.transition = "all 0.3s";
        console.log(e);
    });
});