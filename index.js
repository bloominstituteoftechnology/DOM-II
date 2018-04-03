// Rachelle Pestanas & Brett Sullivan
const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];
const blockParent = document.getElementsByClassName("blocks")[0];

blockParent.style.width = "100%";

/*redBlock.addEventListener("mousedown" , (event) => {
    document.getElementById("block--red").style.alignSelf;
})*/

blockParent.addEventListener("mousedown", (event) => {
    function Brett(blockX) {
        blockX.style.alignSelf = "center";
    }
    
    redBlock.addEventListener("mousedown" , (event) => {
        Brett(redBlock);
    })
    blueBlock.addEventListener("mousedown" , (event) => {
        Brett(blueBlock);
    })    
    greenBlock.addEventListener("mousedown" , (event) => {
        Brett(greenBlock);
    })  
    pinkBlock.addEventListener("mousedown" , (event) => {
        Brett(pinkBlock);
    })  
    grayBlock.addEventListener("mousedown" , (event) => {
        Brett(grayBlock);
    })  
})