// Your code goes here
const mainNav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');
//const imageSwap = document.querySelectorAll('.img=content')

const navLinkHandlerGray = function(event){
    this.style.backgroundColor = 'gray';
}

const navLinkHandlerWhite = function(event){
    this.style.backgroundColor = 'white';
}

let navtext = '';

function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    //ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.setData("text/plain", ev.target.id);
    
    ev.dropEffect = "move";
   }
   function dragover_handler(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"
   }
   function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    
    var data = ev.dataTransfer.getData("text/plain");
    navtext = ev.target.id.innerHTML;
    ev.target.appendChild(document.getElementById(data));
   }

let i = 0;
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseover', navLinkHandlerGray );
    navLink.addEventListener('mouseout', navLinkHandlerWhite);
    navLink.addEventListener('dblclick', function(){
        this.style.color = 'crimson';
    });
    navLink.id = 'nav' + [i];
    navLink.draggable = 'true';

    navLink.addEventListener("dragstart", dragstart_handler);
    navLink.addEventListener("dragover", dragover_handler);
    navLink.addEventListener("drop", drop_handler);
    
    i++;
})

//imageSwap.forEach(im => {
    //im.addEventListener("resize", dragstart_handler);
    //im.addEventListener("dragover", dragover_handler);
    //im.addEventListener("drop", drop_handler);
//})



