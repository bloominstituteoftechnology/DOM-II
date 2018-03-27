const nodeList = document.querySelectorAll('.blocks')
const redBox = document.getElementsByClassName('.block--red')
const blueBox = document.getElementsByClassName('.block--blue')
const greenBox = document.getElementsByClassName('.block--green')
const pinkBox = document.getElementsByClassName('.block--pink')
const grayBox = document.getElementsByClassName('.block--gray')



const moveTop = (event) =>{
event.stopPropagation();
if(event.target.parentNode.classList === blocks){
    event.target.parentNode.insertBefore(event.target,event.target.parentNode.childList[0])
}

}
nodeList.addEventListener('click', moveTop(event));

