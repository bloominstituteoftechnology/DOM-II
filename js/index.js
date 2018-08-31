function bigger(e) {
    e.target.style.fontSize = "30px"
}

function smaller(e) {
    e.target.style.fontSize = "20px"
}

function drag(e) {
    const rect = document.getElementById('italy').getBoundingClientRect();

    if ((e.offsetX > rect.x && e.offsetX < rect.width) && (e.offsetY > rect.y && e.offsetY < rect.y + rect.height)) alert('You went to Italy!')
}

function dragEnd() {
    document.getElementById('bus').removeEventListener('drag', drag)
}

let size = 40;
function fixNav(e) {
    let header = document.querySelector('header .container');
    header.querySelector('h1').style.fontSize = size > 20 ? size + "px" : "20px";
    size --;
}

function loaded() {
    alert('Hey the page is all loaded and ready for you!')
}

function hide(e) {
    e.target.style.display = "none"
}

function yell() {
    alert("Hey this page isn't responsive yet! Stop messing with the window size!")
}

function alerty() {
    alert("This does not work");
    document.getElementById('search').removeEventListener('focus', alerty);

}

function highlight(e) {
    e.target.style.color = 'red'
}


// Event listeners
for (let a of document.getElementsByTagName("a")) {
    a.addEventListener("mouseover", bigger);
    a.addEventListener("mouseout", smaller);
}

document.getElementById('bus').addEventListener('drag', drag);
document.getElementById('bus').addEventListener('dragend', dragEnd);
document.getElementById('search').addEventListener('focus', alerty);

window.addEventListener("scroll", fixNav);
window.addEventListener("load", loaded);
window.addEventListener("resize", yell);


document.addEventListener('click', highlight);
document.addEventListener('dblclick', hide);

