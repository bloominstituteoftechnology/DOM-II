const allBlocks = document.querySelector(".blocks")
const red = document.getElementById("redBlock");
const blue = document.getElementById("blueBlock");
const green = document.getElementById("greenBlock");
const pink = document.getElementById("pinkBlock");
const gray = document.getElementById("grayBlock");


//-----Rearrange Order
function orderSet() {
    document.getElementbyId('red').style.order = "0";
    document.getElementbyId('blue').style.order = "0";
    document.getElementbyId('blue').style.order = "0";
    document.getElementbyId('green').style.order = "0";
    document.getElementbyId('pink').style.order = "0";
    document.getElementbyId('gray').style.order = "0";
}

let count = 0;
const changeOrder = (event) => {
    event.stopPropagation();
    event.target.style.order = count--;
}

//----set interval movement attempt
// const moveRight = setInterval((event) => {
//     event.target.style.left = "1px";
//   }, 100);



//-----Move object right
const moveRight = (event) => {
    event.stopPropagation();
    event.target.style.marginLeft = "100px";
}
//---Return Object
const moveBack = (event) => {
    event.stopPropagation();
    event.target.style.marginLeft = "10px";
}

red.addEventListener('click', changeOrder);
blue.addEventListener('click', changeOrder);
green.addEventListener('click', changeOrder);
gray.addEventListener('click', changeOrder);
pink.addEventListener('click', changeOrder);

red.addEventListener('mousedown', moveRight);
blue.addEventListener('mousedown', moveRight);
green.addEventListener('mousedown', moveRight);
gray.addEventListener('mousedown', moveRight);
pink.addEventListener('mousedown', moveRight);


red.addEventListener('mouseup', moveBack);
blue.addEventListener('mouseup', moveBack);
green.addEventListener('mouseup', moveBack);
gray.addEventListener('mouseup', moveBack);
pink.addEventListener('mouseup', moveBack);


