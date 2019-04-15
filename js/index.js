// Your code goes here


const letsGoParagraph = document.querySelector(".text-content p");
letsGoParagraph.addEventListener('click', function(event){
    letsGoParagraph.textContent = "new words"
})

//MOUSEOVER
letsGoParagraph.addEventListener('mouseover', function(event){
    letsGoParagraph.style.color = "red"
})

//WHEEL
const firstH2 = document.querySelector(".intro h2");
firstH2.addEventListener('wheel', function(event){
    firstH2.style.color = "blue"
})

//KEYDOWN
window.addEventListener("keydown", function(event){
    alert(`The Keycode for that key is ${event.keyCode}`)
})

//DRAG *You have to highlight the entire paragraph to drag*
const firstParagraph = document.querySelector(".intro p");
firstParagraph.addEventListener('drag', function(event){
    firstParagraph.style.display = "none"
})

//DROP *Cant get this to work
window.addEventListener('drop', function(event){
    if(event.target.className == "btn"){
        console.log("test")
    }
})

//LOAD
const theLogo = document.querySelector(".logo-heading")
window.addEventListener("load", function(event) {
    theLogo.style.display = "none"
    alert("The logo is shy. When you reload it disappears");
    if(confirm("Press Ok To Return Logo")){
        theLogo.style.display = ""
    }
});

//RESIZE
window.addEventListener('resize', function (event){
    theLogo.style.color = "red"
})

//SCROLL
window.addEventListener('scroll', function(event){
    firstH2.textContent = "Your scroll wheel broke this"
})

//SELECT *MDN says this only works on input tags....."The event 
// is not available for all elements in all languages. For example, 
// in HTML, select events can be dispatched only on form <input type="text">
//  and <textarea> elements.
// "
const firstBottomButton = document.querySelector(".btn")
firstBottomButton.addEventListener('select', changeText(event))

function changeText(event){
    alert ("TEST")
}

//DBLCLICK
firstBottomButton.addEventListener('dblclick', function(e){
    firstBottomButton.style.backgroundColor = "red"
})
