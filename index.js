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

//Rockets Code

    /*for (let i = 0; i < allBlocks.length; i++) {
        allBlocks[i].addEventListener("click", function moveUp(event) {
            let firstChild = event.target.parentNode.firstChild; 
            event.target.parentNode.insertBefore(event.target, firstChild);  
            } ) 
    }*/

const allBlocks = document.querySelectorAll('.blocks');
const eachBlock = document.querySelectorAll('.blocks');
for (let i = 0; i < allBlocks.length; i++) {
eachBlock.forEach(moveBlock => {
    moveBlock.addEventListener("mousedown", (event => {
        distance = 10;
        slideRight = setInterval(() => {
            distance += 1;
            event.target.style.marginLeft = `${distance}px`;

        }, 10)
    }))
    for (let i = 0; i < allBlocks.length; i++) {
    moveBlock.addEventListener("mouseup", (event => {
        distance = 0;
        slideRight = setInterval(() => {
            distance -= 1;
            event.target.style.marginLeft = `${distance}px`;        
        }, 10)
    }))
} 
})
}

