
//logo items

const title = document.querySelector("body > header > div > h1")
title.style.color = 'yellow'
title.style.marginLeft = '140px'
title.style.fontWeight = 'bold'

//nav items

const mainNav = document.querySelector("body > header > div > nav")
mainNav.style.marginRight = '150px'
mainNav.style.zIndex = '1'


const navItCo = document.querySelectorAll('a')
navItCo.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault() // prevents from being navigated away from our website to lambdaschool.
    event.stopPropagation()
    event.target.style.color = 'red'
  })
})

const navItCo2 = document.querySelectorAll('a')
navItCo.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    event.preventDefault() // prevents from being navigated away from our website to lambdaschool.
    event.stopPropagation()
    event.target.style.color = 'yellow'
    
  })
})

const navA = document.querySelectorAll('a')
navA.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    event.target.style.transform = "scale(2.2)";
    event.target.style.transition = "all 0.3s";// smoth transition effect 
  })
})

const navB = document.querySelectorAll('a')
navA.forEach(link => {
  link.addEventListener('mouseleave', (event) => {
    event.target.style.transform = "scale(1)"
    event.target.style.transition = "all 0.3s";// smoth transition effect 
    // event.target.style.color = 'unset'
  })
})
const bttmBorder= document.querySelector("body > header")
bttmBorder.style.borderBottom = 'unset'

const navBottons = document.querySelector("body > header > div > nav")
navBottons.style.border = '3px solid orange'
navBottons.style.borderRadius = '20px'

// const navSty = document.querySelector("body > header > div > nav > a:nth-child(1)")
// navSty.style.margin = '10px'


//nav background

const navBk = document.querySelector("body > header > div")
navBk.style.backgroundColor="lightBlue";
navBk.style.borderRadius = '20px'
navBk.style.border = '3px solid orange'
  
//body background
 const bodyBk0 = document.querySelector("body > div > header")
 bodyBk0.style.borderRadius = '20px'

const bodyBK = document.querySelector("body > div")
bodyBK.style.backgroundColor="papayawhip";
bodyBK.style.borderRadius = '20px'

bodyBK.addEventListener("mouseover", (event) => {
    event.preventDefault() // prevents from being navigated away from our website to lambdaschool.
    event.stopPropagation()

})
//body imgs
const busImg = document.querySelector("body > div > header > img")
busImg.style.height = '230px'
// busImg.style.filter = "grayscale(80%)"
busImg.style.border = '1px solid orange';
busImg.style.borderRadius = '20px'
busImg.style.margin = '18px'

// const busImg2 = document.querySelector("body > div > header > img")
// busImg2.addEventListener('mouseover', (event) => {
// event.target.style.filter = "grayscale(0%)";

// })


//body headers 

// var x = document.querySelectorAll("h2")
// x.style.color = 'orange'
// x.style.margin = '20px'
// x.style.fontWeight = 'bold'


//Footer 

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes






// const foot = document.querySelector("body > footer")
// // foot.style.marginLeft = '275px'
// foot.style.width = '800px'


// function ChangeCenteredText () {
//   // var centerTag = document.getElementById ("myCenter");
//   var foot = document.querySelector("body > footer")
//       // works if the element only contains pure text
//   var foot = foot.innerHTML;
//   newText = foot.substr (1) + foot.charAt (0);
//   foot.innerHTML = newText;
// }







// var options = {
//     imgSrc : "https://unsplash.it/g/1024/768?image=874",
//     containerName : "header",
//     rows:5,
//     columns:5,
//     margin:2.5,
//     animTime: 0.3
//   }
  
//   function ImageGrid(defaults)
//   {
//     var r = defaults.rows;
//     var c = defaults.columns;
//     var margin = defaults.margin;
      
//     var placeholder = document.getElementsByClassName(defaults.containerName)[0];
//     var container = document.createElement('div');
//     container.className = "gridContainer";
//     placeholder.appendChild(container); 
      
//     var gridTile;  
  
//     var w = (container.offsetWidth / c) -margin;
//     var h = (container.offsetHeight / r) -margin;
//     var arr = [];
      
//     for (var i=0, l=r*c; i < l; i++)
//     {    
//       gridTile = document.createElement('div');
//       gridTile.className = "gridTile";
//       gridTile.style.backgroundImage = "url("+defaults.imgSrc+")";
      
         
//       arr = [(w+margin)*(i%c), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), (h+margin)*Math.floor(i/c), ((w+margin)*(i%c)+w-margin), ((h+margin)*Math.floor(i/c) + h-margin), (w+margin)*(i%c), ((h+margin)*Math.floor(i/c) + h-margin)];
          
//      // console.log(i + " ====>>> " + arr + " ||||| " + i%c  + " |||||| " + i/c);  
      
          
//       TweenMax.set(gridTile, {webkitClipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)', clipPath:'polygon('+arr[0]+'px '+ arr[1]+'px,'+arr[2]+'px '+arr[3]+'px, '+arr[4]+'px '+ arr[5] +'px, '+arr[6]+'px '+ arr[7] +'px)'});
         
//       container.appendChild(gridTile);    
      
//       fixTilePosition(gridTile, i);
//     }
    
//     placeholder.addEventListener("mouseover", function(e){
//       var allTiles = e.currentTarget.querySelectorAll(".gridTile");
//       for (var t=0, le = allTiles.length; t < le; t++)
//         {
//           TweenMax.to(allTiles[t], defaults.animTime, {css:{backgroundPosition:"0px 0px"}, ease:Power1.easeOut});
//         }
//     })
                               
//     placeholder.addEventListener("mouseleave", function(e){
//       var allTiles = e.currentTarget.querySelectorAll(".gridTile");
//       for (var ti=0, len = allTiles.length; ti < len; ti++)
//         {
//           fixTilePosition(allTiles[ti], ti, defaults.animTime);
//         }
//     })
    
//     function fixTilePosition(tile, ind, time)
//     {
//       if(time==null)time=0;
//       var centr, centrCol, centrRow, offsetW, offsetH, left, top;
      
//       centr = Math.floor(c * r / 2);
//       centrCol = Math.ceil(centr/c);
//       centrRow = Math.ceil(centr/r);
          
//       offsetW = w/centrCol;
//       offsetH = h/centrRow;
      
//       left = (Math.round((ind % c - centrCol + 1) * offsetW));
//       top = (Math.round((Math.floor(ind/c) - centrRow + 1) * offsetH));
      
//       //console.log(left, top)
      
//       TweenMax.to(tile, time, {css:{backgroundPosition:left+"px "+top+"px"}, ease:Power1.easeOut});
//     }
//   }
  
//   ImageGrid(options);

// // window.onload = function(){

// //     var hayden2 = new stackBoxBlurIt('hayden2').blur(40)
// //     hayden2.onmouseover = function(){
// //       this.blurit(0, 2000)
// //     }
// //     hayden2.onmouseout = function(){
// //       this.blurit(40, 2000)
// //     }
  
// //   }
  