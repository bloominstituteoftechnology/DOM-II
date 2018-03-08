const blocks = document.querySelectorAll(".block");
blocks.forEach((element) => {
    element.addEventListener("click", () => {
        const parent = element.parentNode;
        parent.removeChild(element);
        parent.prepend(element);
    });
});