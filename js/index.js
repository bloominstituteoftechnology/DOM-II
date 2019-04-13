// Your code goes here
const newText = document.querySelector(".text-content p");

newText.addEventListener('click', function(event){
    newText.textContent = "new words"
})

const newColor = document.querySelector(".text-content p");
newColor.addEventListener('mouseover', function(event){
    newColor.style.color = "red"
})

const changeToBlue = document.querySelector(".intro h2");
changeToBlue.addEventListener('wheel', function(event){
    changeToBlue.style.color = "blue"
})

window.addEventListener("keydown", function(event){
    alert(`The Keycode for that key is ${event.keyCode}`)
})

const dragParagraph = document.querySelector(".intro p");
dragParagraph.addEventListener('drag', function(event){
    dragParagraph.style.display = "none"
})

// window.addEventListener('drop', function(event){
//     alert("Woops You Dropped the paragraph, now its gone!")
// })


// const removeLogo = document.querySelector(".logo-heading")
// removeLogo.addEventListener('load', function (event){
//     console.log("testing")
// })

const removeLogo = document.querySelector(".logo-heading")
window.addEventListener("load", function(event) {
    removeLogo.style.display = "none"
    alert("The logo is shy. When you reload it disappears");
    if(confirm("Press Ok To Return Logo")){
        removeLogo.style.display = ""
    }
});


const tryFocus = document.querySelector(".intro h2")
tryFocus.addEventListener('load', function (event){
    console.log("testing")
})

const tryResize = document.querySelector(".intro h2")
tryResize.addEventListener('resize', function (event){
    console.log("testing")  
})
