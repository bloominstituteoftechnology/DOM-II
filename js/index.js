// Your code goes here
const navA = document.querySelectorAll("nav a");
navA.forEach((item) =>  {
        item.addEventListener("mouseover",   function() {       // 1
            this.style.color = "red";
        })
        item.addEventListener("mouseout",   function()  {       // 2
            this.style.color = "black"
        })
        item.addEventListener("click",  function(event)  {      // 3
            event.preventDefault();
            event.stopPropagation();
            this.style["text-decoration"] = "underline";
        })
})

const imgs = document.querySelectorAll("img");
imgs.forEach((item) =>  {
    item.addEventListener("mousedown",  function()  {           // 4
        this.style.border = "5px solid black";
        this.style["border-radius"] = "10px";
    });
    item.addEventListener("mouseup", function() {               // 5
        this.style.border = ""
        this.style["border-radius"]="0px"
    })
})
const logo = document.querySelector(".logo-heading");
logo.addEventListener("click",  function(event)  {              // 6
    event.stopPropagation();
    this.style.background = "black";
    this.style.color = "white";

})
const mainNav = document.querySelector(".main-navigation");
mainNav.addEventListener("click", function()    {               // 7
    this.style.background = "yellow";
})
const destinations = document.querySelectorAll(".destination p");
console.log(destinations)
destinations.forEach((item) =>  {
    item.addEventListener("select", function()  {
        console.log("selected")
        this.style.color = "red";
    })
})
document.addEventListener("keydown", function(event)    {       // 8
    if(event.key == "ArrowUp")  {
        document.addEventListener("keydown", function(event)    {
            if(event.key == "ArrowUp")  {
                document.addEventListener("keydown", function(event)    {
                    if(event.key == "ArrowDown")    {
                        document.addEventListener("keydown",    function(event) {
                            if(event.key == "ArrowDown")    {
                                document.addEventListener("keydown", function(event) {
                                    if(event.key == "ArrowLeft")    {
                                        document.addEventListener("keydown",    function(event) {
                                            if(event.key == "ArrowRight")   {
                                                document.addEventListener("keydown",    function(event) {
                                                    if(event.key == "ArrowLeft")    {
                                                        document.addEventListener("keydown", function(event)    {
                                                            if(event.key == "ArrowRight")   {
                                                                document.addEventListener("keydown",    function(event) {
                                                                    if(event.key == "b"){
                                                                        document.addEventListener("keydown",    function(event) {
                                                                            if(event.key == "a")    {
                                                                                document.addEventListener("keydown",    function(event) {
                                                                                    if(event.key == "Enter")    {
                                                                                        document.querySelector("body").innerHTML = ""
                                                                                        let run = setInterval(()  =>  {
                                                                                            let r = Math.round(Math.random() * 255);
                                                                                            let g = Math.round(Math.random() * 255);
                                                                                            let b = Math.round(Math.random() * 255);
                                                                                            body.style.background = `RGB(${r}, ${g}, ${b})`
                                                                                        }, 1)
                                                                                        document.addEventListener("keydown",  function() {
                                                                                            console.log("test")
                                                                                            clearInterval(run);

                                                                                            body.style.background = "white";
                                                                                        });
                                                                                    }
                                                                                })
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

const body = document.querySelector("body");
body.addEventListener("dblclick",   function()  {       // 9
    this.style.background = "white";
})
document.addEventListener("scroll", function()  {       // 10
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    body.style.background = `RGB(${r}, ${g}, ${b})`
})
