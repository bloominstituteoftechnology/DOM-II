// Your code goes here
let rotateImg = document.querySelectorAll('img');

rotateImg.forEach(x => x.addEventListener('mouseenter', function(event){
    x.style.boxShadow = "12px 12px 2px 1px black"
}))

rotateImg.forEach(x => x.addEventListener('mouseleave', function(event){
    x.style.boxShadow = "0px 0px 0px 0px black"
}))

window.addEventListener('wheel', function(event){
    let pageBody = document.getElementsByTagName('body')
    pageBody[0].style.background = "blue"
});

let paragraphs = document.querySelectorAll('p')
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].addEventListener('mouseover',function(){
        paragraphs[i].style.fontSize = "30px"
        paragraphs[i].style.color = "white"
    });
    paragraphs[i].addEventListener('mouseout', function(){
        paragraphs[i].style.fontSize = "25px"
    })
}

window.addEventListener("load", function(event) {
    alert("All resources finished loading!");
});

let navLinks = document.querySelectorAll('a');

navLinks.forEach(x => x.addEventListener('dblclick', function(){
    x.style.color = "blue"
}))

let sectionBorder = document.querySelectorAll('section');
sectionBorder.forEach(x => x.addEventListener('mouseover', function(){
    x.style.borderBottomColor = "black"
}));

let selectedText = document.querySelectorAll('h2')
selectedText.forEach(x => x.addEventListener('mouseup', function(){
    alert("Stop That!")
}))

let imgGreenSock = document.querySelectorAll("img");
imgGreenSock.forEach(x => x.addEventListener('load', function(){
    TweenLite.to(x, 2, {left:"542px", backgroundColor:"black", borderBottomColor:"#90e500", color:"white"});
}));
