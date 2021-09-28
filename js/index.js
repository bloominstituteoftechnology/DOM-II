// Your code goes here

const contentPick = document.querySelector('.content-pick');
const destinationLeft = contentPick.querySelector('.destination');
const destinationMiddle = destinationLeft.nextElementSibling;
const destinationRight = destinationMiddle.nextElementSibling;

const btnLeft = destinationLeft.querySelector('.btn');
const btnMiddle = destinationMiddle.querySelector('.btn');
const btnRight = destinationRight.querySelector('.btn');

btnLeft.onclick = () =>  console.log("You are try to sign up <Fun In The Sun>");
// btnMiddle.onclick = () =>  console.log("You are try to sign up <Mountain Excursion>");
// btnRight.onclick = () =>  console.log("You are try to sign up <Island Getaway>");

btnMiddle.addEventListener('click', function(event) {
    console.log(event.target);
});

document.addEventListener('click', function(event) {
    console.log(event.target);
    if (event.target === btnMiddle) {
        console.log("You are try to sign up <Mountain Excursion>");
    } else {
        console.log("Clicking somewhere else...");
    }
});

function launch() {
    console.log("You are try to sign up <Island Getaway>");
}
btnRight.addEventListener('click', launch);

