// Your code goes here 
//1. mouseover
const busPic = document.querySelector(".logo-heading");
busPic.addEventListener("mouseenter", ()=>{
    busPic.style.transform = "scale(1.2)"
    busPic.style.transition = "all 0.3s"
})

//2. mouseleave
const busPicAfter = document.querySelector(".logo-heading");
    busPicAfter.addEventListener("mouseleave", ()=>{
        busPicAfter.style.transform = "scale(1.0)"
        busPicAfter.style.transition = "all 0.3s";
    })

//3. doubleclick
const headerPic = document.querySelector(".intro img")
headerPic.addEventListener("dblclick", ()=>{ 
    headerPic.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2Fimage%2F2016%2F11%2Fmain%2Fhotlist_0213_15.jpg%3Fitok%3DZI9gPSn4&w=1200&c=sc&poi=face&q=85";
})

//4. keydown

//5. wheel

//6. load

//7. focus

//8. resize

//9. select

//10. drag/drop
