const nodeList = document.querySelectorAll('.blocks')
const redBox = document.getElementsByClassName('.block--red')
const blueBox = document.getElementsByClassName('.block--blue')
const greenBox = document.getElementsByClassName('.block--green')
const pinkBox = document.getElementsByClassName('.block--pink')
const grayBox = document.getElementsByClassName('.block--gray')



const moveTop = (event) =>{
event.stopPropagation();

for (let i = 0; i < nodeList.length; i++) {
    if(nodeList[i] === blueBox) {
        blueBox = nodeList[0];
    }
    
}

}
nodeList.addEventListener('click', moveTop);

