// Your code goes here




const img = document.querySelectorAll("img");




const boxIn = function(){
    this.style.border = '1px solid black';
};

const boxOut = function(){
    this.style.border = "";
}

img.forEach((imgs) => {
    imgs.addEventListener("mouseover", boxIn);
    imgs.addEventListener("mouseleave", boxOut);
})



//keydown

document.body.addEventListener('keydown', function(e){
    alert('Hello User')
})

//wheel



const menu = document.querySelector('.main-navigation');

menu.addEventListener('wheel', function(e){
    this.style.background = 'blue';
})


//drag 
const navItem = document.querySelectorAll('.nav a');
navItem.forEach(element => {
    element.addEventListener('drag', () => { // Drag
        console.log('drag');
    });
});


//load 


window.addEventListener('load',function(e){
    console.log('Script is finished loading')
})

//focus
navItem.forEach(element => { // Focus
    element.addEventListener('focus', () => {
        element.classList.add('Focus');
    });
});


//drag / drop


//resize



//db click
document.querySelector("header img").addEventListener("dblclick", function(){ alert("This is a bus!")});
