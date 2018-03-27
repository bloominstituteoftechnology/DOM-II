const blocks = document.querySelectorAll(".block");

const rocket = (e) => {
    let parent = e.target.parentNode;
    let current = e.target;
    parent.removeChild(current);
    parent.prepend(current);
}

const travelRight = (e) => {
    e.target.style.transform = "translateX(100px)";
}
const travelBack = (e) => {
    e.target.style.transform = "translateX(0px)";
}

blocks.forEach(element => {
    element.addEventListener("click", rocket); 
    element.addEventListener("mouseenter", travelRight);
    element.addEventListener("mouseleave", travelBack);
});
