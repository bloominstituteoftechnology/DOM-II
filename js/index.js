// Your code goes here
//1. mouseover
const funBus = document.querySelector(".logo-heading")
funBus.addEventListener("mouseover", () => {
    funBus.style.transform = "scale(1.2)"
    funBus.style.transition = "all 0.3s"
})

//2. mouseleave
funBus.addEventListener(("mouseleave"), () =>{
    funBus.style.transform = ("scale(1.0")
    funBus.style.transition = "all 0.3s"
})

//3. doubleclick
const mainImg = document.querySelector(".intro img")
mainImg.addEventListener("dblclick", () =>{
    mainImg.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2Fimage%2F2016%2F11%2Fmain%2Fhotlist_0213_15.jpg%3Fitok%3DZI9gPSn4&w=1200&c=sc&poi=face&q=85";
})

//4. keydown keypressing
const para = document.querySelector("body")
para.addEventListener("keydown", ()=>{
    para.style.backgroundColor = "purple";
})

//5. wheel
const desImage = document.querySelector(".content-destination img");
desImage.addEventListener("wheel", () => {
    desImage.style.transform = "scale(1.5)";
    desImage.style.transition = "all .05s";
})

//6. load
window.addEventListener("load", ()=>{
    alert("Keep Calm! Your vacation has loaded!");
})

//7. focus
// const destText = document.querySelector("content-destination h2");
// destText.addEventListener("focus", ()=>{
//     destText.style.color = "purple";
// }, true)

//8. resize
const middlePics = document.querySelectorAll(".content-section img")
// console.log(middlePics);

window.addEventListener("resize", ()=>{
    // middlePics.style.border = "20px purple solid";
    // middlePics.src = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
    middlePics.forEach(picture => picture.src = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ");
})

//9. select
// cont funSun = document.querySelector(".destination h4")
// funSun.addEventListener("change", ()=>{
//     funSun.style.color = "red";
// }, true)

//10. drag/drop
const dragged = document.querySelector(".footer p")
dragged.addEventListener("drag", ()=> {
    dragged.style.color = "purple";
})

//propagation set-up
const body = doccument.querySelector("body")

body.addEventListener("click", () => {
    body.style.backgroundColor = "pink";
    console.log("end")
})

const middle = document.querySelector(".content-section");
middle.addEventListener("click",(event) =>{
    middle.style.backgroundColor = "papayawhip";
    console.log("end")
});

const middlePara = document.querySelector(".text-content");
middlePara.addEventListener("click",(event)=>{
    middlePara.style.backgroundColor = "purple";
    console.log("middle")
});

const line = document.querySelector(".text-content p");
line.addEventListener("click",(event) => {
    line.style.backgroundColor = "hotpink";
    event.stopPropagation();
    console.log("start")
})



//preventing the nav items from regreshing the page by using prevenDefault()
const stopLink = document.querySelector(".nav-link");
stopLink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("stopped!");
})