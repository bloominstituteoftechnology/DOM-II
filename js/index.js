// Your code goes here


//mouseover
document.getElementById('headerpic').style.filter = "sepia(100%)";

let headerpic = document.getElementById('headerpic');
headerpic.addEventListener("mouseover", function(event) {
    //this = event.target
    event.target.style.filter = "sepia(0%)";
    // reset color so once mouseover, effect takes place
    setTimeout(function(){
        event.target.style.filter = "sepia(100%)";
    }, 500);
})

//keydown

//wheel

//drag/drop

//load

//focus

//resize

//scroll

//select

//dblclick

