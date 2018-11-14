// Your code goes here
document.getElementsByClassName(".nav-link");
document.getElementsByClassName(".nav-link").addEventListener("mouseover", mouseOver);
document.getElementsByClassName(".nav-link").addEventListener("mouseout", mouseOut);
function mouseOver() {
    document.getElementsByClassName(".nav-link").style.color = "orange";
}
function mouseOut() {
    document.getElementsByClassName(".nav-link").style.color = "blue";
}








