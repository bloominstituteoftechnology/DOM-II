// Your code goes here
//<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>

    function funBus() {

         

        const imgMod = document.querySelector(".intro img");
            
        imgMod.addEventListener("mouseover", mouseHandler);
        imgMod.addEventListener("mouseout", mouseOutHandler);
               
       function mouseHandler() {   
        imgMod.style.borderRadius = "50%";
       }
       
       function mouseOutHandler() {  
        imgMod.style.borderRadius = "0";
       }

       const txtMod = document.querySelector(".content-section");

       txtMod.addEventListener("wheel", txtModHandler);
       txtMod.addEventListener("mouseout", txtOutHandler);

       function txtModHandler() {
        txtMod.style.backgroundColor = "tomato";
        txtMod.style.Color = "saddleBrown";
        txtMod.style.padding = "10px";
        txtMod.style.borderRadius = "15px";  
       }

       function txtOutHandler() {
        txtMod.style.backgroundColor = "";
        txtMod.style.Color = "";
        txtMod.style.padding = "";
        txtMod.style.borderRadius = "0px";
       }

      
      
      
      
       //  const mouseHandler = function(event){
       //     event.target.style.radius = "15px";
       //    console.log(event.target);
//};
            
        //    e.stye.radius = "15px";
      //  });


       
        //const containerClickHandler = function(event){
            // change the bg color of the entire container to blue;
            // event.target.style.backgroundColor = 'blue';
      //      this.style.backgroundColor = 'dodgerblue';
      //    }
       
       
       
        //document.getElementById("test").addEventListener("mouseover", function( event ) {
   
   
   
   
            //var target = event.target, related = event.relatedTarget, match;








    };

    funBus();