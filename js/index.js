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
        w.focus()
        this.setTimeout(function() {w.close();}, 2500)
    }
});



//select

//dblclick

