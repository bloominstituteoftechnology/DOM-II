let block = document.getElementsByClassName("block");

Array.from(block).forEach(function(element) {
    element.addEventListener('mousedown', function () {
        this.style.marginLeft = "30px";
    });
    element.addEventListener('mouseup', function () {
        this.style.marginLeft = "10px";
    })
    element.addEventListener('mouseout', function () {
        this.style.marginLeft = "10px";
    })
});