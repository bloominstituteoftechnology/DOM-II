const block = document.querySelectorAll(".block");

block.forEach((elements) => {
    elements.addEventListener("click", () => {        
        const blocks = elements.parentNode;
        blocks.removeChild(elements); // removes
        blocks.prepend(elements); // adds element to start of list
    });
});
