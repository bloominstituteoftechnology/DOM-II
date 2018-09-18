// Your code goes here

const navBar = document.querySelector(".main-navigation");
let navBarOpacity = 0.2;
navBar.style.backgroundColor = `rgba(71, 37, 14, ${navBarOpacity})`;
navBar.addEventListener("wheel", navBarChange);

function navBarChange(e) {
    e.preventDefault();
    console.log(e);
    navBarOpacity += e.deltaY > 0 ? .02 : -.02;
    navBarOpacity = Math.min(navBarOpacity, 1);
    navBarOpacity = Math.max(navBarOpacity, 0);
    navBar.style.backgroundColor = `rgba(71, 37, 14, ${navBarOpacity})`;
}

const mainTitle = document.querySelector(".logo-heading");
mainTitle.style.cursor = "pointer";
mainTitle.style.position = "relative";
let dragging = false;
let anchorX = 0;
let anchorY = 0;
let mouseOriginX = 0;
let mouseOriginY = 0;
mainTitle.addEventListener("mousedown", startDrag);
mainTitle.addEventListener("mousemove", dragMove);
mainTitle.addEventListener("mouseup", stopDrag);
function startDrag(e) {
    if (e.button === 0) {
        console.log("startDrag");
        dragging = true;
        mouseOriginX = e.screenX;
        mouseOriginY = e.screenY;
    }
}
function dragMove(e) {
    if (dragging) {
        console.log("dragMove");
        mainTitle.style.left = `${anchorX + (e.screenX - mouseOriginX)}px`;
        mainTitle.style.top = `${anchorY + (e.screenY - mouseOriginY)}px`;
    }
}
function stopDrag(e) {
    if (e.button === 0 && dragging) {
        console.log("stopDrag");
        anchorX += e.screenX - mouseOriginX;
        anchorY += e.screenY - mouseOriginY;
        dragging = false;
    }
}