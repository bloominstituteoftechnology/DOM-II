// Your code goes here
const body = document.querySelector('body');
const links = document.querySelectorAll('nav a');
var count = 0;
////////event listener that changes the backgroundColor based on mouse movmentj
body.addEventListener('mousemove', (e)=>{
   x = e.clientX * .5;
   y = e.clientY * .5;
   z = window.scrollY * .25;

  body.style.backgroundColor = "rgb("+x+","+y+","+z+")";
})
/////// Event listener to add and remove text to my nav links
body.addEventListener('keydown', (e)=>{
  console.log(e);
  count +=1;
  if(e.key == 'Backspace' || e.keyCode == 32){
    links.forEach((link)=>{
      let text = link.innerText;
      link.innerText = text.slice(0,(1+(link.innerText.length - count)));
    });
    count = 0;
  }else if (e.key != "Backspace" || e.keyCode != 32) {
    links.forEach((link)=>{
      link.innerText += e.key;
    })
  }

  if(e.keyCode == 32){
    e.preventDefault();
  }
})
