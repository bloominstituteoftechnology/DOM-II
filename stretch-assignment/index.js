let block = document.querySelectorAll('.block')
let blocks = document.querySelector(".blocks")
let red = document.querySelector ('.block--red');
let blue = document.querySelector ('.block--blue');
let green = document.querySelector ('.block--green');
let pink = document.querySelector ('.block--pink');
let gray = document.querySelector ('.block--gray');
//let blockArray = [red[0],blue[0],green[0],pink[0],gray[0]]
//console.log(blockArray)
//console.log(gray)
console.log(blocks)



//let redChange = red.addEventListener('click',reChange)

//   let theTarget = blockArray[1].addEventListener('click', function toThetop() {
//         console.log(event.target)
//         target = event.target;
//       //document.block.prependChild(document.getElementByClassName('.block')); 
//         blockArray.unshift(event.target)
//         console.log(blockArray)
//     })
//      console.log(theTarget)


// for (var i = 0; i < blocks.length; i++) {
//     blocks[i].addEventListener("click", splice)
// }

red.addEventListener('click',redFunc)
// blocks.addEventListener('click')

function redFunc(){
    newRed = red;
    blocks.removeChild(red)
    blocks.prepend (newRed);

}


blue.addEventListener('click', blueFunc)
// blocks.addEventListener('click')

function blueFunc() {
    newBlue = blue;
    blocks.removeChild(blue)
    blocks.prepend (newBlue);

}

green.addEventListener ('click', greenFunc);
// blocks.addEventListener('click')

function greenFunc () {
    newGreen = green;
  blocks.removeChild (green);
    blocks.prepend(newGreen)
}

pink.addEventListener('click', pinkFunc)
// blocks.addEventListener('click')

function pinkFunc() {
    newPink = pink;
    blocks.removeChild(pink)
    blocks.prepend (newPink);

}


gray.addEventListener('click', grayFunc)
// blocks.addEventListener('click')

function grayFunc() {
    newGray = gray;
    blocks.removeChild(gray)
    blocks.prepend(newGray)
}
