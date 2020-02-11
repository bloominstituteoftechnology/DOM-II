let box = document.querySelectorAll(".block")
box.forEach(el =>{
    el.addEventListener("mouseenter", () =>{
        gsap.to(el, {duration: 1, rotation: 360, repeat: -1})
    })
})