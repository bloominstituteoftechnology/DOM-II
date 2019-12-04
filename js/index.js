// Your code goes here


// Mouse unique event listeners- "mouseenter" & "mouseleave" "mouseover" & "mouseout" & "click" & "dblclick"

 const navlink = document.querySelectorAll("a").forEach(navlink =>{
    navlink.addEventListener("mouseenter", () =>{
        navlink.style.color = "hotpink";
        navlink.style.backgroundColor = "gray";
        navlink.style.padding= "3%";
    })
    navlink.addEventListener("mouseleave", ()=>{
        navlink.style.color = "black";
        navlink.style.backgroundColor = "white";
      })
})

            // ********************************


const midimgs = document.querySelectorAll(".img-content").forEach(midimgs=>{
    midimgs.addEventListener("click", ()=>{
        midimgs.style.transform = "scale(1.5)";
        midimgs.style.transition = "transform 0.3s" })

    midimgs.addEventListener("dblclick", () => {
        midimgs.style.transform = "scale(1)";
        midimgs.style.transition = "transform 0.3s" })
  })

            // ********************************


const bottomimg = document.querySelector(".content-destination img");
    bottomimg.addEventListener("mouseover", ()=>{
        bottomimg.style.transform = "scale(2)";
        bottomimg.style.transition = "transform 0.3s" })

    bottomimg.addEventListener("mouseout", ()=>{
        bottomimg.style.transform = "scale(1)";
        bottomimg.style.transition = "transform 0.3s" })

            // ********************************


// View unique event listener "resize" & "scroll"

const largeimgs = document.querySelector(".intro img");
    window.addEventListener('resize', ()=>{
        largeimgs.style.border = "thick solid lime";
        largeimgs.style.borderRadius = "30px";
    })
            // ********************************     
          
const backg = document.querySelector("body");
    document.addEventListener("scroll", ()=>{
        backg.style.backgroundColor = "lightgray";
    })

// Keyboard unique event listeners "keydown" & "keyup"

const mainmsg = document.querySelector(".intro h2");
    document.addEventListener("keydown", ()=>{
        mainmsg.style.backgroundColor = "hotpink";})

    document.addEventListener("keyup", () => {
        mainmsg.style.backgroundColor = "white"; })


