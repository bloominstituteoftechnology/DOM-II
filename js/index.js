// Your code goes here




const Launch = document.querySelector(".nav")


Launch.addEventListener("click", function (event){
   event.target.textContent = "Happy Days"

})

const text = document.querySelector("h2");


    text.addEventListener("click", function (event){
        event.target.textContent = "Happy Days";

    
    })

   text.addEventListener("focus", function (event){
 event.target.style.background = "red"
},
true
 );
        

function bus(){
   document.getElementById("busImg").src = "img/adventure.jpg"

}

function oldBus(){
  document.getElementById("busImg").src = "img/fun-bus.jpg"
}

//mouseover will be excuted pnly when moce over the text


const introColor2 = document.querySelector(".intro");
introColor2.addEventListener("mouseover", function(event){
   event.target.style.color = "blue";

})


const introColor = document.querySelector(".content-section");
introColor.addEventListener("mouseover", function(event){
   event.target.style.color = "orange";

})



const introColor3 = document.querySelector(".destination");

introColor3.addEventListener("mouseover", function(event){
   event.target.style.color = "red";


})





introColor3.addEventListener("mouseleave", function(event){
   event.target.style.color = "blue";
   setTimeout(function() {
      event.target.style.color = "";
    }, 1000);
  }, true);
  