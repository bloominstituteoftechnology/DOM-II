// Your code goes here


//mouseover
document.getElementById('headerpic').style.filter = "sepia(100%)";

let headerpic = document.getElementById('headerpic');
headerpic.addEventListener("mouseover", function(event) {
    //this = event.target
    event.target.style.filter = "sepia(0%)";
    // reset color so once mouseover, effect takes place
    // setTimeout(function(){
    //     event.target.style.filter = "sepia(100%)";
    // }, 1000);
});
headerpic.addEventListener("mouseleave", function(event){
    event.target.style.filter = "sepia(100%)";
})


//keydown

//wheel

//drag/drop

//load

window.addEventListener('load', function(){
    let windowload = this.window.open('','', 'width=500,height=500');
    windowload.document.write(`Welcome to the Fun Bus!`);
    // windowload.focus()
    this.setTimeout(function() {windowload.close();}, 2000);
})


//focus

//resize




//scroll
window.addEventListener('scroll', function(){
    //take actual height of entire document, subtract height of window
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;  //scrollable === 1107 max
    
    //if scrolled value is equal to scrollable, page bottom has been reached
    if(Math.ceil(scrolled) === scrollable){
        // alert(`Now that you've scrolled to the bottom, sign up for a program! :) `);

        //alternative to alert - window with timer, must enable pop-ups
        let w = this.window.open('','', 'width=200,height=100');
        w.document.write(`Now that you've scrolled to the bottom, sign up for a program! :) `)
        // w.focus()
        this.setTimeout(function() {w.close();}, 2500)
    }
});



//select

//dblclick

//dbclick to create pop-up window to choose your package
let clickbutton = document.getElementById("btn1");
clickbutton.addEventListener("dblclick", function(){
    //.open() method takes three arguments
    window.open("signup.html", "newWindow", "menubar=true,location=true,resizable=false,scrollbars=false,width=400,height=300,top=200,left=200");
})

//incorporate "focus" + "resize"

// function getFocus() {
//     document.getElementById("name-label").focus();
// }



