// Your code goes here

// 1. Disappearing Image!
function disappear (){
    mainImg.style.visibility = 'hidden';

}
function appear (){
    mainImg.style.visibility = 'visible';
}

let mainImg = document.querySelector("#bigBusImage");
mainImg.addEventListener('mouseover', disappear);
mainImg.addEventListener('mouseout', appear);
