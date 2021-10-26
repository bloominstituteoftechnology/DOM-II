// Your code goes here
//onmouseOver
const imgSelected = document.querySelector('.img-content');
imgSelected.onmouseover = imgMouseOver;
imgSelected.onmouseout = imgMouseOut;

function imgMouseOver() {
  imgSelected.style.color = "purple";
  imgSelected.textContent = 'You Turned me purple!';
}

function imgMouseOut(){
    imgSelected.style.color = "Black";
    imgSelected.textContent = 'Back to Normal';
}
//
