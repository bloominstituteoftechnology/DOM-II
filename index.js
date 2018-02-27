/*const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[1];
const greenBlock = document.getElementsByClassName("block--green")[2];
const pinkBlock = document.getElementsByClassName("block--pink")[3];
const grayBlock = document.getElementsByClassName("block--gray")[4];
//



redBlock.addEventListener("click", (event) => {
    
})

blueBlock.addEventListener("click", (event) => {
    
})

greenBlock.addEventListener("click", (event) => {
    
})

pinkBlock.addEventListener("click", (event) => {
    
})

grayBlock.addEventListener("click", (event) => {
    
})*/




const allBlocks = document.querySelectorAll(".block");
    for (let i = 0; i < allBlocks.length; i++) {
        allBlocks[i].addEventListener("click", event)  
    }

    function event() {
        console.log(0);
    }


