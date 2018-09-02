// Your code goes here
//<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>

function funBus() {
    
    const imgBus = document.querySelector("img");
    const imgAdventure = document.querySelector(".img-content img");
    const imgFun = document.querySelector(".img-fluid");
    const imgDestination = document.querySelector(".content-destination img");
    
    const title = document.querySelector(".logo-heading");
    const nav = document.querySelector(".nav");
    
    const introH2 = document.querySelector(".intro h2");
    const introP = document.querySelector(".intro p");
    
    const textH2 = document.querySelector(".text-content h2");
    const textP = document.querySelector(".text-content p");
    
    const invH2 = document.querySelector(".inverse-content .text-content h2");
    const invP = document.querySelector(".inverse-content .text-content p");
    
    const contentH2 = document.querySelector(".content-destination h2");
    const contentP = document.querySelector(".content-destination p");  
    
    const h4 = document.querySelectorAll('h4');

    const destination = document.querySelectorAll('.destination p');

    const btns = document.querySelectorAll('.btn');

    let savedRadius = 0;
    /******* ADD LISTENERS *************/
   
    
    /**** FOR USE WITH THE GSAP GREENSOCK PLUGIN *******/
    imgBus.id = "imgBus";
    imgAdventure.id = "imgAdventure";
    imgFun.id = "imgFun";  
    imgDestination.id = "imgDestination";
   title.id = "title";
   nav.id = "nav";
   introH2.id = "introH2";
   introP.id = "introP";
   textH2.id = "textH2";
   textP.id = "textP";
   invH2.id = "invH2";
   invP.id = "invP";
   
   for (let i = 0; i < h4.length; i++) { 
        h4[i].id = `h4${i}`;
        Draggable.create(`#h4${i}`);
    };

    for (let i = 0; i < destination.length; i++) { 
        destination[i].id = `destination${i}`;
        Draggable.create(`#destination${i}`);
    };

    for (let i = 0; i < btns.length; i++) { 
        btns[i].id = `btns${i}`;
        Draggable.create(`#btns${i}`);
    };
   
   contentH2.id = "contentH2";
   contentP.id = "contentP";

    //**** MAKE ALL THE IMAGES DRAGGABLE *******/
    Draggable.create("#imgBus");
    Draggable.create("#imgAdventure");
    Draggable.create("#imgFun");
    Draggable.create("#imgDestination");
    Draggable.create("#title");
    Draggable.create("#nav");
    Draggable.create("#introH2");
    Draggable.create("#introP");
    Draggable.create("#textH2");
    Draggable.create("#textP");
    Draggable.create("#invH2");
    Draggable.create("#invP");
    
    Draggable.create("#contentH2");
    Draggable.create("#contentP");
    
    
    const imgMod = document.querySelector(".intro img");
 
   function mouseWheelHandler(e) {
    let moveAmt = event.deltaY;
    if (moveAmt > 0) {
        savedRadius = (savedRadius + 10);
        imgMod.style.borderRadius = savedRadius + "px";
        event.stopPropagation();
        console.log(imgMod.style.borderRadius);
        console.log(event);
    } else {
        savedRadius = (savedRadius - 10);
        event.stopPropagation();
        console.log(savedRadius);
        imgMod.style.borderRadius = savedRadius + "px";
        console.log(event);
    }
  }

    function mouseHandler() {
       // imgMod.style.borderRadius = "50%";
    }

    const txtMod = document.querySelector(".content-section");

    /*******EVENT 3*************/
    txtMod.addEventListener("wheel", txtModHandler);

    /*******EVENT 4*************/
    txtMod.addEventListener("mouseout", txtOutHandler);

    
    function txtModHandler(e) {
        txtMod.style.backgroundColor = "tomato";
        txtMod.style.Color = "saddleBrown";
        txtMod.style.padding = "10px";
        txtMod.style.borderRadius = "15px";
        let moveAmt = event.deltaY;
        console.log(moveAmt);
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
        console.log(event);
        console.log(event.target);
        alert('keydown event\n\n' + 'key: ' + keyName);
    });

    let btn = document.querySelector('.btn');

    function random(number) {
        return Math.floor(Math.random() * number);
    }

    /*******EVENT 6*************/
    btn.onclick = function () {
        let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        btn.style.backgroundColor = rndCol;
    };

    /*******EVENT 7*************/
    document.addEventListener('contextmenu', (event) => {
        alert('right mouse click');
    });

    let h2 = document.querySelectorAll('h2');

    let navLink = document.querySelectorAll('.nav-link');

    for (let i = 0; i < navLink.length; i++) {
        /*******EVENT 9*************/
        navLink[i].addEventListener('dblclick', navHandler);
        navLink[i].addEventListener('click', navClickHandler);
    };

    function navHandler() {
        for (let i = 0; i < navLink.length; i++) {
            if (navLink[i].style.color === "red") {
                navLink[i].style.fontSize = "";
                navLink[i].style.color = "";
            } else {
                navLink[i].style.color = "red";
                navLink[i].style.fontSize = "24px";
            }
        }
    }

    /*******PREVENT DEFAULT*************/
    function navClickHandler(event) {
        for (let i = 0; i < navLink.length; i++) {
            event.preventDefault();
        }
    }
    /*******EVENT 10*************/
    window.addEventListener('resize', (event) => {
        alert('screen has been resized');
    });

   for (i = 0; i < h4.length; i++) {
        h4[i].addEventListener('click', h4ClickHandler, false);
    };

    for (i = 0; i < destination.length; i++) {
        destination[i].addEventListener('click', destinationClickHandler, false);
    };

    function h4ClickHandler(event) {
        for (let i = 0; i < h4.length; i++) {
            /*******STOP PROPAGATION*************/
            event.stopPropagation();
            h4[i].style.color = "yellow";
        }
    };

    function destinationClickHandler() {
        for (let i = 0; i < destination.length; i++) {
            destination[i].style.color = "blue";
        }
    };
};
funBus();