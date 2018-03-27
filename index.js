
const redElement=document.getElementById("red");/* Added Id Cant figure it out how to call by class name */
const blueElement=document.getElementById("blue");
const greenElement=document.getElementById("green");
const pinkElement=document.getElementById("pink");
const grayElement=document.getElementById("gray");

var size=0;
const rocketUp = (event) => {
    event.target.style.order = size;
    size--;
   };

const travelersDown =(event) => {
    event.stopPropagation();
    event.target.style = 'margin-left: 800%'
// Everytime click on box it will move to the right to give 800% margin on left 
};

const travelersUp =(event) => {
    event.target.style.position = '0.5'

//Everytime click on box it will move to the right to give 800% margin on right.
};



redElement.addEventListener('click', rocketUp);
blueElement.addEventListener('click', rocketUp);
greenElement.addEventListener('click', rocketUp);
pinkElement.addEventListener('click', rocketUp);
grayElement.addEventListener('click', rocketUp);

redElement.addEventListener('mousedown', travelersDown);
blueElement.addEventListener('mousedown', travelersDown);
greenElement.addEventListener('mousedown', travelersDown);
pinkElement.addEventListener('mousedown', travelersDown);
grayElement.addEventListener('mousedown', travelersDown);

redElement.addEventListener('mouseup', travelersUp);
blueElement.addEventListener('mouseup', travelersUp);
greenElement.addEventListener('mouseup', travelersUp);
pinkElement.addEventListener('mouseup', travelersUp);
grayElement.addEventListener('mouseup', travelersUp);