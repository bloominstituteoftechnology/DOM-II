const blocks = document.querySelectorAll(".block");
blocks.forEach((element) => {
    element.addEventListener("mousedown", () => {
        element.style.transform = "translateX(200px)";
    });

    element.addEventListener("mouseup", () => {
        element.style.transform = "translateX(0px)";
    });
});