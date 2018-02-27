//get array from .block class HTML list object
const blocks = Array.from(document.getElementsByClassName('block'));
//get element from HTML list object for each color block class
const redBlock = blocks[0];
const blueBlock = blocks[1];
const greenBlock = blocks[2];
const pinkBlock = blocks[3];
const grayBlock = blocks[4];

//set attribute "style", "order: -1" to clicked
//set attribute "style", "order: null" to all unclicked
const blastOff = (index) => {
    blocks[index].setAttribute('style', 'order: -1');
    for(let i = 0; i < blocks.length; i++) {
        if (i !== index) {
            blocks[i].setAttribute('style', 'order: null')
        }
    }
}


//set event listener for click on each color box
blocks.forEach(function(content, index) {
    blocks[index].addEventListener("click", () => {
        blastOff(index);
    });
});