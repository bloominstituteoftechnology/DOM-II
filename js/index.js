// Your code goes here

//mouseover 
var navColor = document.querySelector("#nav-id");
navColor.addEventListener('mouseover', turnPurple)
function turnPurple(event) {
    event.target.style.color = 'purple'
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}

//wheel 
var image = document.querySelector("img[src='img/adventure.jpg']")
image.onwheel = zoom

    // //load
    // let imgLoad = document.querySelector('.img-content')
    // imgLoad.load();

    //focus
    // focusButton = function getFocus() {
    //     document.getElementsByClassName(".btn").focus();
    // }
