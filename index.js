
const redElement=document.getElementById("red");/* Added Id Cant figure it out how to call by class name */
const blueElement=document.getElementById("blue");
const greenElement=document.getElementById("green");
const pinkElement=document.getElementById("pink");
const grayElement=document.getElementById("gray");

var size=0;
const rocketUp = (event) => {
    size--;
    event.target.style.order = size;
   
    }

redElement.addEventListener('click', rocketUp);
blueElement.addEventListener('click', rocketUp);
greenElement.addEventListener('click', rocketUp);
pinkElement.addEventListener('click', rocketUp);
grayElement.addEventListener('click', rocketUp);

