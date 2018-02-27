const blocks = document.getElementsByClassName("blocks");
const redBlock = document.getElementsByClassName("block block--red");
const blueBlock = document.getElementsByClassName("block block--blue");
const greenBlock = document.getElementsByClassName("block block--green");
const pinkBlock = document.getElementsByClassName("block block--pink");
const grayBlock = document.getElementsByClassName("block block--gray");

blocks.addEventListener("click", (event) => {
    if(event.target.className === red) {
        console.log('red');
    }
});

redBlock.addEventListener("click", (event) => {
  event.color = 'red';
   
});

blueBlock.addEventListener("click", (event) => {
    event.color = 'blue';
});

greenBlock.addEventListener("click", (event) => {
    event.color = 'green';
});

pinkBlock.addEventListener("click", (event) => {
    event.color = 'pink';
});

grayBlock.addEventListener("click", (event) => {
    event.color = 'gray';
});