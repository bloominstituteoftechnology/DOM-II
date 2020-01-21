
window.addEventListener('load', (event) => {
  alert('The Bus Is Loaded with Fun!');
});


//logo items
const title = document.querySelector("body > header > div > h1")
title.style.color = 'yellow'
title.style.fontWeight = 'bold'
title.style.margin = '10px'

// const mainNav = document.querySelector("body > header > div > nav")

// document.querySelector("body > header > div > nav").style.marginRight = '150px'
// document.querySelector("body > header > div > nav").style.margin = '10px'

const navItCo = document.querySelectorAll('a')
navItCo.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault() // prevents from being navigated away from our website to lambdaschool.
    event.stopPropagation()
    event.target.style.color = 'red'
  });
link.addEventListener('mouseover', (event) => {
      event.target.style.transform = "scale(2.2)";
      event.target.style.transition = "all 0.3s";// smoth transition effect 
      event.target.style.color = 'yellow'
    });
    link.addEventListener('mouseleave', (event) => {
          event.target.style.transform = "scale(1)"
          event.target.style.transition = "all 0.3s";// smoth transition effect 
         
        });

});
// // background if Function @media 

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector("body > header").style.backgroundColor = "dodgerBlue";
    document.querySelector("body > header > div > h1").style.marginLeft = 'unset'
  } else {
   
    document.querySelector("body > header").style.backgroundColor = "lightBlue";
   document.querySelector("body > header > div > h1").style.marginLeft = '140px'
  
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function  'run time'
x.addListener(myFunction)// Attach listener function  'state changes'


const bttmBorder= document.querySelector("body > header")
bttmBorder.style.borderBottom = 'unset'

const navBottons = document.querySelector("body > header > div > nav")


navBottons.style.border = '3px solid orange'
navBottons.style.borderRadius = '20px'



//nav background

const navBk = document.querySelector("body > header ")
navBk.style.backgroundColor="lightBlue";
navBk.style.borderRadius = '20px'
navBk.style.border = '3px solid orange'
  



//body imgs
// const busImg = document.querySelector("body > div > header > img")
// busImg.forEach(link => {
//   busImg.addEventListener('click', (link) => {
//     busImg.style.border = '1px solid orange';
// busImg.style.borderRadius = '20px'
//   });
// })


// document.querySelectorAll('.img').forEach(item => {
//   item.addEventListener('click', event => {
//     item.style.border = '1px solid orange';
//     item.style.borderRadius = '20px'
//     //handle click
//   }
// })
// busImg.style.height = '230px'
// busImg.style.filter = "grayscale(80%)"

// busImg.style.margin = '18px'

const busImg = document.querySelector("body > div > header > img")
busImg.style ="z-index 0"
busImg.addEventListener('dblclick', (event) => {
event.target.style.filter = "grayscale(90%)";
busImg.addEventListener('click', (event) => {
event.target.style.filter = "grayscale(0%)";
})
})

// const imgs = document.querySelector("body > div > section:nth-child(2) > div.img-content")

// form.addEventListener('click', (event) => {
//   event.target.style.border = '2px solid orange';    
// }, true);

// form.addEventListener('blur', (event) => {
//   event.target.style.border = '';     
// }, true);

var i = 0;
function change() {
  var doc = document.querySelector("body");
  var color = ["dodgerBlue", "blue", "lightBlue", "lightGreen"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);

//body headers 

// var x = document.querySelectorAll(".h2")
// x.style.color = 'orange'
// x.style.margin = '20px'
// x.style.fontWeight = 'bold'


// //Footer 


// // const foot = document.querySelector("body > footer")
// // // foot.style.marginLeft = '275px'
// // foot.style.width = '800px'


// // function ChangeCenteredText () {
// //   // var centerTag = document.getElementById ("myCenter");
// //   var foot = document.querySelector("body > footer")
// //       // works if the element only contains pure text
// //   var foot = foot.innerHTML;
// //   newText = foot.substr (1) + foot.charAt (0);
// //   foot.innerHTML = newText;
// // }







// // var options = {
// //     imgSrc : "https://unsplash.it/g/1024/768?image=874",
// //     containerName : "header",
// //     rows:5,
// //     columns:5,
// //     margin:2.5,
// //     animTime: 0.3
// //   }
  
// //   function ImageGrid(defaults)
// //   {
// //     var r = defaults.rows;
// //     var c = defaults.columns;
// //     var margin = defaults.margin;
      
// //     var placeholder = document.getElementsByClassName(defaults.containerName)[0];
// //     var container = document.createElement('div');
// //     container.className = "gridContainer";
// //     placeholder.appendChild(container); 
      
// //     var gridTile;  
  
// //     var w = (container.offsetWidth / c) -margin;
// //     var h = (container.offsetHeight / r) -margin;
// //     var arr = [];
      
// //     for (var i=0, l=r*c; i < l; i++)
// //     {    
// //       gridTile = document.createElement('div');
// //       gridTile.className = "gridTile";
// //       gridTile.style.backgroundImage = "url("+defaults.imgSrc+")";
      
         
// //       arr = [(w+margin)*(i%c), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), ((h+margin)*Math.floor(i/c) + h-margin), (w+margin)*(i%c), ((h+margin)*Math.floor(i/c) + h-margin)];
          
// //      // console.log(i + " ====>>> " + arr + " ||||| " + i%c  + " |||||| " + i/c);  
      
          
// //       TweenMax.set(gridTile, {webkitClipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)', clipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)'});
         
// //       container.appendChild(gridTile);    
      
// //       fixTilePosition(gridTile, i);
// //     }
    
// //     placeholder.addEventListener("mouseover", function(e){
// //       var allTiles = e.currentTarget.querySelectorAll(".gridTile");
// //       for (var t=0, le = allTiles.length; t < le; t++)
// //         {
// //           TweenMax.to(allTiles[t], defaults.animTime, {css:{backgroundPosition:"0px 0px"}, ease:Power1.easeOut});
// //         }
// //     })
                               
// //     placeholder.addEventListener("mouseleave", function(e){
// //       var allTiles = e.currentTarget.querySelectorAll(".gridTile");
// //       for (var ti=0, len = allTiles.length; ti < len; ti++)
// //         {
// //           fixTilePosition(allTiles[ti], ti, defaults.animTime);
// //         }
// //     })
    
// //     function fixTilePosition(tile, ind, time)
// //     {
// //       if(time==null)time=0;
// //       var centr, centrCol, centrRow, offsetW, offsetH, left, top;
      
// //       centr = Math.floor(c * r / 2);
// //       centrCol = Math.ceil(centr/c);
// //       centrRow = Math.ceil(centr/r);
          
// //       offsetW = w/centrCol;
// //       offsetH = h/centrRow;
      
// //       left = (Math.round((ind % c - centrCol + 1) * offsetW));
// //       top = (Math.round((Math.floor(ind/c) - centrRow + 1) * offsetH));
      
// //       //console.log(left, top)
      
// //       TweenMax.to(tile, time, {css:{backgroundPosition:left+"px "+top+"px"}, ease:Power1.easeOut});
// //     }
// //   }
  
// //   ImageGrid(options);

// // // window.onload = function(){

// // //     var hayden2 = new stackBoxBlurIt('hayden2').blur(40)
// // //     hayden2.onmouseover = function(){
// // //       this.blurit(0, 2000)
// // //     }
// // //     hayden2.onmouseout = function(){
// // //       this.blurit(40, 2000)
// // //     }
  
// // //   }
  