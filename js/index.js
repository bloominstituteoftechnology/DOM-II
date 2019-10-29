// Your code goes here
//event listener affecting nav color
const nav = document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color="red"
    })
    link.addEventListener("mouseleave", () => {
        link.style.color="black"
    })
})

//move bus with 'a' key

const bus = document.querySelector('.busImg')

document.addEventListener('keypress', function (press) {
    if (press.key === 65) {
        var leftNum = bus.style.left.replace('px', '')
        var left = parseInt(leftNum, 10)
    
    bus.style.left = `${left - 1}px`
    }
    
});

//when any is clicked on changes size and then when dbl clicked it returns to normal size
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
    function alertFunct(){
        alert ("Hey, don't copy these images!");
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

