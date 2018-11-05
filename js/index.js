// Your code goes here
let rotateImg = document.querySelectorAll('img');

rotateImg.forEach(x => x.addEventListener('mouseenter', function(event){
    x.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, .2)"
}))

rotateImg.forEach(x => x.addEventListener('mouseleave', function(event){
    x.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)"
}))


let page = window;
page.addEventListener('scroll', function(event){
    page.style.background = "blue"
})