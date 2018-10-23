// Your code goes here
let myHeader = document.querySelector('.main-navigation');
let myButton = document.querySelector('.btn');
let myP = document.querySelector('.intro p');
let myImg = document.querySelector('.intro img');
let selected = document.querySelector('input');
let myFooter = document.querySelector('.footer');
let myFooterP = myFooter.querySelector('p');
// mouseover keydown wheel drag / drop load focus resize scroll select dblclick
//head
myHeader.addEventListener('mouseenter', function(event){
    document.body.scroll = "no";
    event.currentTarget.style.background = "white";
    myImg.style.display ="block";
})
myHeader.addEventListener('mouseleave', function(event){
    event.currentTarget.style.background = "lightgrey";
})
myHeader.addEventListener('dblclick', function(event){
    event.stopPropagation();
})

//document funcitons

document.addEventListener('keydown', function(event){
    event.target.style.fontStyle = "italic";
})
document.addEventListener('keyup', function(event){
    event.target.style.fontStyle = "normal";
})
document.addEventListener('dblclick', function(event){
    event.target.style.fontWeight = "bold";
    event.target.style.textDecoration = "underline";
})
document.addEventListener('scroll', function(event){
    myImg.style.display = "none";
})

//button

myButton.addEventListener('drag', function(event){
    event.target.style.color = "red";
    event.target.style.background = "red";
})
myButton.addEventListener('dragend', function(event){
    event.target.style.color = "white";
    event.target.style.background = "#17A2B8"
})

//footer

selected.addEventListener('select', function(event){
    myFooter.style.background = "pink";
})

myFooterP.addEventListener('dblclick', function(event){
    event.stopPropagation();
    event.target.style.fontWeight = "lighter";
    event.target.textContent = "Im a footer";
})

//intro paragraph

let fontSize = 16;
let tooBig = false;
myP.addEventListener('wheel', function(event) {
    if(fontSize >30){
        tooBig = true;
    }else if(fontSize < 10){
        tooBig = false;
    }
    if (event.deltaY < 0 && tooBig == false) {
        fontSize++;
    }else {
        fontSize--;
    }
    document.body.scroll = "no";
    event.currentTarget.style.fontSize = `${fontSize}px`;
});

//nav

let navArr = document.querySelectorAll('a');
console.log(navArr);
navArr.forEach(function(item, i){
    navArr[i].addEventListener('click', function(event){
        event.preventDefault();
        console.log("it worked!");
    })
})



