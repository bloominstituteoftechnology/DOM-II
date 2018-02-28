let block = document.getElementsByClassName("block");

Array.from(block).forEach(function(element) {
    element.addEventListener('click', function () {
        element.parentElement.prepend(element);
    })
});