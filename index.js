const blocks = document.querySelectorAll(".block");
blocks.forEach((element) => {

    element.addEventListener("click", (e) => {
        let parent = e.target.parentNode;
        parent.removeChild(element);
        parent.prepend(element);
    })
    element.addEventListener("mouseenter", (e) => {
        console.log(e);
        e.target.style.transform = "translateX(200px)";
    });

    element.addEventListener("mouseleave", (e) => {
        e.target.style.transform = "translateX(0px)";
    });
});