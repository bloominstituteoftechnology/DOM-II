const allBlocks = document.querySelectorAll(".block");

allBlocks.forEach(function(x){
    x.addEventListener("click", moveTop);
});

function moveTop() {
    console.log(event.target.parentNode);
    event.target.parentNode.insertBefore(event.target, event.target.parentNode.firstChild);
}