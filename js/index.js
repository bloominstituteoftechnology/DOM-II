
// EVENT LISTENER #1 - mouseover
let navLinks = document.querySelectorAll('a');
navLinks.forEach(link => link.addEventListener("mouseover", function(){
    link.style.color = 'green';
    link.style.textDecoration = 'underline';
}));

// EVENT LISTENER #2 - mouseout
navLinks.forEach(link => link.addEventListener("mouseout", function(){
    link.style.color = 'initial';
    link.style.textDecoration = 'none';
}));

// EVENT LISTENER #3 - select
// document.querySelector('p').addEventListener("select", function(event){
//     console.log(event.target)
//     event.target.style.backgroundColor = 'yellow';
// })

// EVENT LISTENER #4 - load 
window.addEventListener("load", function(event) {
    setTimeout(function(){
        document.querySelector('.modal').style.display = 'none';
    },100);
});   

// EVENT LISTENER #5 - Keydown
window.addEventListener("keydown", function(event) {
    TweenMax.to("img", .2, {scale:0.5});
    TweenMax.to("img", .2, {scale:1});
});   

// EVENT LISTENER #6 - Scroll 
window.addEventListener("scroll", function(event) {
    document.querySelectorAll('img').forEach(image => {
        image.style.filter = "invert(100%)";
        image.style.transition = '0.3s';
    });
});   