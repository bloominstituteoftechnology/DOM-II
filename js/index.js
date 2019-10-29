// Your code goes here
//event listener affecting nav color
const nav = document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color="red"
    })
    link.addEventListener("mouseup", () => {
        link.style.color="yellow"
    })
    link.addEventListener("mouseleave", () => {
        link.style.color="black"
    })
    link.addEventListener("click",
    (event) => {
    event.preventDefault();
    event.stopPropagation();
    })
})



//move bus with 'a' key

const bus = document.querySelector('.busImg')

document.addEventListener('keydown', function (press) {
    
    if (press.key === 'a') {
        var leftNum = bus.style.left ? bus.style.left : 0
        var left = parseFloat(leftNum)
    
    bus.style.left = `${left - 1}px`
    }
    if (press.key === 's') {
        var rightNum = bus.style.right ? bus.style.right : 0
        var right = parseFloat(rightNum)
    
    bus.style.right = `${right - 1}px`
    }
})

//when any is clicked on changes size and then when dbl clicked it returns to normal size, and when you copy an image it shows an alert
const allImages = document.querySelectorAll("img").forEach(all => {
    all.addEventListener("click", () => {
        all.style.transform ="scale(1.2)";
        all.style.transition = "all 0.4s"
    })
    all.addEventListener("dblclick", () => {
        all.style.transform ="scale(1)";
        all.style.transition = "all 0.4s"
    })
    all.addEventListener("copy", alertFunct);
    function alertFunct(event){
        event.preventDefault();
        alert ("Hey, don't copy these images!");
    }
    all.addEventListener("cut", alertFunct2);
    function alertFunct2(event){
        event.preventDefault();
        alert ("Hey, don't cut these images!");
    }
})

//makes text color different when window is resized
const resizeWin = document.querySelectorAll("p").forEach(allTxt => {
    window.addEventListener("resize", () => {
        allTxt.style.color = "red"
    })
    
})

//changes h1 to be larger when you scroll
const h1Bigger = document.querySelector('h1');
document.addEventListener('wheel', () => {
    h1Bigger.style.fontSize = "6rem"
})

//nested elements with propogation, click to change color
const bodyChangeClr = document.querySelector('body');
bodyChangeClr.addEventListener('click', () => {
    bodyChangeClr.style.backgroundColor = "skyblue";  
})
const h2ChangeClr = document.querySelectorAll("h2").forEach(allH2 => {
    allH2.addEventListener("click", () => {
        allH2.style.color = "orange"
        allH2.stopPropogation();
    })
})
 
