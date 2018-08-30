// Your code goes here
//<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>

    function funBus() {
 
        const imgMod = document.querySelector(".intro img");
        
        /*******EVENT 1*************/    
        imgMod.addEventListener("mouseover", mouseHandler);
        
        /*******EVENT 2*************/
        imgMod.addEventListener("mouseout", mouseOutHandler);
       
               
       function mouseHandler() {   
            imgMod.style.borderRadius = "50%";
       }
       
       function mouseOutHandler() {  
            imgMod.style.borderRadius = "0";
       }
        
       const txtMod = document.querySelector(".content-section");
       
       /*******EVENT 3*************/
       txtMod.addEventListener("wheel", txtModHandler);
       
       /*******EVENT 4*************/
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
        
       /*******EVENT 5*************/ 
       document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            alert('keydown event\n\n' + 'key: ' + keyName);
      });
        
      /*******EVENT 6*************/ 
      let btn = document.querySelector('.btn');
      
      function random(number) {
        return Math.floor(Math.random() * number);
      }
      
      btn.onclick = function() {
        let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        btn.style.backgroundColor = rndCol;
      };
      
      /*******EVENT 7*************/ 
        document.addEventListener('contextmenu', (event) => {
            alert('right mouse click');
        });
    
           
        let h2 = document.querySelectorAll('h2');
        
        for (i = 0; i < h2.length; i++) {
           /*******EVENT 8*************/
            h2[i].addEventListener('mouseover', h2Handler);
        }
       
        function h2Handler () {
            for (i=0; i < h2.length; i++) {
                h2[i].innerHTML = "LAMBDA STUDENTS HAVE BEEN HERE!"
            }
        };
        
        let nav = document.querySelectorAll('.nav-link');
         
         for (i = 0; i < nav.length; i++) {
            /*******EVENT 9*************/
            nav[i].addEventListener('dblclick', navHandler);
         };

        function navHandler() {
            for (i = 0; i < nav.length; i++) {
                if (nav[i].style.color === "red") {
                    nav[i].style.fontSize = "";
                    nav[i].style.color = "";
                } else {
                    nav[i].style.color = "red";
                    nav[i].style.fontSize = "24px";
                }
            }
        }
        
        /*******EVENT 10*************/ 
        window.addEventListener('resize', (event) => {
            alert('screen has been resized');
        });
        
        
       

    };

    funBus();