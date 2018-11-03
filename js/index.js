// Your code goes here

//navs mouseover (mouseenter/out)
const link = document.querySelectorAll('a');
console.log(link)
for(i=0;i<link.length;i++){
	link[i].addEventListener('mouseenter',function(event){
		event.target.style.color = "blue";
	})
	link[i].addEventListener('mouseout', function(event){
		event.target.style.color = "black";
	})
}


//keydown
const images = document.getElementsByTagName('img')
console.log(images) 

document.addEventListener('keydown', function(){
	images[0].style.transform = "rotate(7deg)"
})


//wheel
let hex = 0xF0;
document.addEventListener('wheel', function (event) {
  // console.log(event)
  hex += 50;
  event.target.style = ` background-color: #${hex.toString("16")}`
  
})


//click
const contact = link[3]
// console.log(contact);

contact.addEventListener('click', function(event){
	alert("hello")
})

//dragstart
document.addEventListener('dragstart', function(){
	alert("don't do that")
})


//mouseup
document.addEventListener('mouseup', function(){
	images[1].src = "none"
})

//dbclick

const bottomButtons = document.querySelectorAll('.btn')

console.log(bottomButtons)

bottomButtons[2].addEventListener('dbclick', function(){
		alert('I get it! stop clicking so much!')
})