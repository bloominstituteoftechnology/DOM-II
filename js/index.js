let contentSectionImages = document.querySelectorAll(".content-section img, .content-destination img");
contentSectionImages = Array.from(contentSectionImages);
contentSectionImages

contentSectionImages.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        this.classList.toggle('expand')
    })
    ele.addEventListener("mouseleave",function(){
        this.classList.toggle('expand')
    })
})

let button = document.querySelectorAll(".btn");

button.forEach(function(ele){
    ele.addEventListener("click",function(){
        alert("Thank You for Your Interest!")
    })
})

let navContainer = document.querySelector(".nav-container");

navContainer.addEventListener("dblclick",function(){
    console.log("clicked")
    this.classList.toggle("nav-container-color");
})
