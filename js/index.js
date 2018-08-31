const aTag = document.querySelectorAll(".nav-link")

aTag.forEach(tag => {
    tag.addEventListener('click', function(event) { event.preventDefault() });
});