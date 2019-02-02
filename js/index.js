// Your code goes here


// Variables //
let body = document.querySelector('body')
let footer = document.querySelector('footer')
let banana = document.querySelector('img')
let anchors = document.querySelector('.nav, a')
let btn = document.querySelectorAll('.btn') 
let images = document.querySelectorAll('img')

// 1. Turns banner into a banana for Chance with a 'mouseover'//
banana.addEventListener('mouseover', (object) =>{
    banana.setAttribute('src', 'img/banana.jpg')
})

// 2. nav anchors talk with a 'click'//  
anchors.addEventListener('click', (object) => {
    alert("Ouch!! why did you poke me?")
})

// 3. Buttons alert with 'doubleClick'//
btn[0].addEventListener('dblclick', (object) => {
	alert("I'm going... I'm going")
	event.stopPropagation();
})
btn[1].addEventListener('dblclick', (object) => {
	alert("I'm going... I'm going")
	event.stopPropagation();
})
btn[2].addEventListener('dblclick', (object) => {
	alert("I'm going... I'm going")
	event.stopPropagation();
})

// 4. Changes background color with a 'keydown'//
body.addEventListener('keydown', (object) =>{
    body.style.backgroundColor = 'black'
    alert("Click for White text")
})

// 5.  All Images leave with 'mouseleave'// 
images.forEach(image => {
    image.addEventListener('mouseleave', (object)=>{
        image.style.display = 'none'
        alert('What did you do?')
    })
})

// 6. Click for white text// 
body.addEventListener('click', (object)=>{
	body.style.color = 'white'
})
// 7 . Double to bring text back// 
body.addEventListener('dblclick', (object)=>{
	body.style.color = 'black'
})

//8. Log to console when resizing window 'resize'//
window.addEventListener('resize', (object) =>{
	console.log('I hope this is Responsive....')	
})

// 9. Alert to prepare user for experience using 'load'//
window.addEventListener('load', (object) => { 
    alert('This will be the best site you have ever seen')
})

// 10. Change color of footer with 'mouseover'// 
footer.addEventListener('mouseover', (object)=>{ 
    footer.style.backgroundColor = '#15a7a7'
})