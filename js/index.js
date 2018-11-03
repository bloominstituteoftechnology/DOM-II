// Your code goes here

//navs mouseover (mouseenter/out)
const link = document.querySelectorAll('a');

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

images[0].addEventListener('keydown', function(){
	console.log('asdf')
})


//wheel
let hex = 0xF0;
document.addEventListener('wheel', function (event) {
  console.log(event)
  hex += 50;
  event.target.style = ` background-color: #${hex.toString("16")}`
  
})
