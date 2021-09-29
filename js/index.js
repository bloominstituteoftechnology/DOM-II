// Your code goes here
//navigation hover (1&2)
const links = document.querySelectorAll('nav a');
const linksArray = Array.from(links);
linksArray.forEach(link => {
    link.addEventListener('mouseover', function(e){
        link.classList.add('hover');
    });
    link.addEventListener('mouseout', function(e){
        link.classList.remove('hover');
    });
});
//image zoom (3)
const images = document.querySelectorAll('img');
const imageArray = Array.from(images);
imageArray.forEach(image =>{
    image.addEventListener('click', function(e){
        e.preventDefault(e);
        image.classList.toggle('zoom');
    });
});
//img exit (4)
function handleEsc(e){
    if(e.key === 'Escape'){
        let zoomedImg = document.querySelectorAll('img.zoom');
        Array.prototype.forEach.call(zoomedImg, function(el, i){
            e.preventDefault();
            el.classList.toggle('zoom')
        });
    }
}
document.addEventListener('keyup', handleEsc);
//image drag (5 - 10)
const trashParent = document.querySelector('div.trash')
const trashBin = document.createElement('img');
trashBin.setAttribute('src', '/img/delete.svg');
trashBin.classList.add('trash');

document.addEventListener("drag", function(e) {
}, false);

document.addEventListener("dragstart", function(e) {
    trashParent.classList.toggle('off');
    trashParent.appendChild(trashBin);
    dragged = e.target;
    e.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(e) {
    e.target.style.opacity = "";
    trashParent.classList.toggle('off');
}, false);

document.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);
  
document.addEventListener("dragenter", function(event) {
    if (event.target.className == "trash") {
      event.target.style.background = "lightgrey";
    }
}, false);
  
document.addEventListener("dragleave", function(event) {
    if (event.target.className == "trash") {
      event.target.style.background = "";
    }
}, false);
//drop (11)
document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className == 'trash') {
        event.target.style.background = "";
        console.log(dragged);
        dragged.classList.add('off');
    }
    console.log(event.target)
}, false);
