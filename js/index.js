// Your code goes here
/*
img sources
  <img id="funbus" src="img/fun-bus.jpg" alt="bus in the sand">
  <img id="adventure" src="img/adventure.jpg" alt="Let's go on an adventure!"> 
  <img id="fun" src="img/fun.jpg" class="img-fluid rounded" alt="Lets have fun!">
  <img src="img/destination.jpg" alt="Second slide">

headers
<h2>Welcome To Fun Bus!</h2>  | 

<h2 id="LetsGo" >Let's Go!</h2> | https://earth.google.com/web/

<h2>Adventure Awaits</h2>  | 

<h2>Pick Your Destination</h2> | https://www.kayak.com/news/the-10-hottest-destinations-of-2018/

<h4 id="FunInSun">Fun In The Sun</h4>  |  https://www.kayak.com/news/summers-cheapest-travel-weekends/

<h4>Mountain Excursion</h4>  | 

<h4>Island Getaway</h4>   | 

ACTIONS
3 options
Learn more (wikipedia)
Watch Videos
I want to go (priceline, kayak)


 EVENTS
  select

const elementName = document.getElementById('');
  const button4 = document.querySelector('.button4');
button.addEventListener('click', function(){
	console.log('Inline style bg color:', button4.style.backgrounColor)
	if( this.style.backgroundColor === 'green'){
		this.style.backgroundColor = 'aqua'
	}else {
		button.style.backgroundColor = 'green';
	}
})
id="imgFunbus"
id="imgAdventure"
id="imgFun"
id="imgDestination"

id="Welcome"
id="LetsGo"
id="adventureAwaits"
id="pickDestination"
id="FunInSun"
id="MountainExcursion"
id="islandGetaway"

// ☞ 54129a6a-319d-493b-966b-50a841a981b5

*/

id="imgFunbus"
const imgFunbus = document.getElementById('imgFunbus');
imgFunbus.addEventListener('click',function(){
  console.log('I Work!');
})

id="imgAdventure"
const imgAdventure = document.getElementById('imgAdventure');
imgAdventure.addEventListener('click',function(){
  window.open('https://earth.google.com/web/','Adventure');
})

id="imgFun"
const imgFun = document.getElementById('imgFun');
imgFun.addEventListener('click',function(){
  console.log('I Work!');
})

id="imgDestination"
const imgDestination = document.getElementById('imgDestination');
imgDestination.addEventListener('click',function(){
 window.open('https:www.kayak.com/news/the-10-hottest-destinations-of-2018/', 'Destinations');

})

id="Welcome"
const Welcome = document.getElementById('Welcome');
Welcome.addEventListener('click',function(){
  console.log('I Work!');
})

id="LetsGo"
const LetsGo = document.getElementById('LetsGo');
LetsGo.addEventListener('click',function(){
  window.open('https://earth.google.com/web/','LetsGo');
})

id="adventureAwaits"
const adventureAwaits = document.getElementById('adventureAwaits');
adventureAwaits.addEventListener('click',function(){
  console.log('I Work!');
})

id="pickDestination"
const pickDestination = document.getElementById('pickDestination');
pickDestination.addEventListener('click',function(){
  console.log('https://www.kayak.com/news/the-10-hottest-destinations-of-2018/')
})

id="FunInSun"
const FunInSun = document.getElementById('FunInSun');
FunInSun.addEventListener('click',function(){
  console.log('https://www.kayak.com/news/summers-cheapest-travel-weekends/');
})

id="MountainExcursion"
const MountainExcursion = document.getElementById('MountainExcursion');
MountainExcursion.addEventListener('click',function(){
  console.log('I Work!');
})

id="islandGetaway"
const islandGetaway = document.getElementById('islandGetaway');
islandGetaway.addEventListener('click',function(){
  console.log('I Work!');
})
