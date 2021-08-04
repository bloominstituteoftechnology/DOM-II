window.addEventListener("load", function(){
    let input ="";//name inter
   let body = document.querySelector("body");
   body.style.padding=" 0,50px, 0 ,50px";

   //nav starts here
   let mainNav = document.querySelector(".main-navigation");
  // console.log("main nav", mainNav)
  //  mainNav.style.width="100%";
  //  mainNav.style.height="90px";
   mainNav.style.backgroundColor="blue";
   mainNav.style.borderBottom = "2px dashed black";
   mainNav.style.margin ="0 auto";
   mainNav.style.position="fixed";
   let navBarParent = document.querySelector(".nav-container");
    console.log("nav bar ", navBarParent);
    navBarParent.style.display="flex";
    navBarParent.style.flexDirection="row";
    navBarParent.style.textAlign="center";
    navBarParent.style.alignItems ="center";
    navBarParent.style.height="100%";
  //   navBarParent.style.marginTop= 0;
    navBarParent.style.justifyContent ="space-between";
   let navBar = document.querySelectorAll("a");
   navBar.forEach(x=>{
       x.style.textDecoration="none";
       x.style.padding ="20px";
       x.style.color ="red";
       x.style.fontSize="1.2rem"
   })
   //still working nav and h1
   let headLog = document.querySelector("h1");
//    
   headLog.style.padding="20px";
  //Done===========nav end here===================
   //header starts here targeting h2
   let headerH2 = document.querySelectorAll("h2");
  console.log(headerH2)
   headerH2.forEach(x=>{
       x.style.color="black";
       x.style.letterSpacing ="1.2rem";
       x.style.textAlign="center"  
   })
  //===================
  //logo image header image border-radius;
  let logContainer = document.querySelector(".home .intro img");
  logContainer.style.padding="15% 10% 0 10%";
  logContainer.style.display="block";
   let log = document.querySelector("header img");

       log.style.height="100%";
       log.style.borderRadius ="70px"
  let bodyOne = document.querySelector(".container");


  // //section images flex box advance flex-direction row
  let images = document.querySelectorAll(".img-content");
  images.forEach(image=>{
      image.addEventListener("mouseover", ()=>{

      image.style.opacity = 1; 
      image.style.transform= "rotate(180deg)";
      })
  })
  images.forEach(image=>{
      image.addEventListener("mouseleave", ()=>{
      image.style.opacity = 1;  
      image.style.transform="rotate(360deg)"  
      })
  })
  // //text content div first
  let textContentDiv = document.querySelectorAll(".text-content");

  //class content-pick as parent and three divs child flex them
  let contentDestination = document.querySelectorAll(".destination");
    console.log("parent is ", contentDestination)
    contentDestination[0].style.display="flex";
    contentDestination[0].style.flexDirection="column";
    contentDestination[0].style.textAlign="center"
  // //================================
  // //Fun in the sum paragraph and section content-pict formating
  let contentPick = document.querySelectorAll(".content-section");
  // contentPick[0].style.alignItems ="center"
  contentPick[0].children[0].style.backgroundColor ="blue";
  // contentPick[0].children[0].classList.add("funSun");

  //Sign ME up button added

  let footer = document.querySelector("footer")
  footer.style.backgroundColor ="black";
  footer.style.color="white";
  footer.style.opacity = .6;
  footer.style.fontSize="48px";

  footer.style.width="100%";
  console.log(footer)

  let navContainer = document.querySelectorAll(".nav-link");
  navContainer.forEach(x=>{
      x.addEventListener("mouseover", ()=>{
         x.style.backgroundColor="red";
         x.style.padding ="20px";
         x.style.borderRadius = "5px"
         x.style.margin="5px";
         if(`${x.style.color}`=="blue"){
             x.style.color= "white"
         }else{
             x.style.color ="blue"
         }
      })

  })

  document.addEventListener("keydown", event=>{
    event.preventDefault;
    let divOne = document.createElement("h4");
    divOne.textContent = `${event.key}`
   alert("You Press " + JSON.stringify(input))

})
document.body.addEventListener("mouseover", (event)=>{
    document.body.style.backgroundColor="wheat";
      event.defaultPrevented;
    if(event.target.style.backgroundColor=="wheat"){
        document.body.style.backgroundColor ="white"
    }
})
function changeImage(event){
   console.log(event.target);
      event.preventDefault;
//    event.target.src ="https://source.unsplash.com/random"
      event.target.src ="./img/barkon.jpeg"
}
let imageBus = document.querySelector("img");
   imageBus.addEventListener("dblclick", changeImage)

//dblclick on on the car image
let keyPush = document.querySelector('body')
console.log("keypush",keyPush)
keyPush.addEventListener('dblclick', function(event) {
    input = prompt("You sure you want to go to Google?");
    event.target.style.color = 'pink';
    keyPush.style.backgroundColor ="black";
});   

 }) 