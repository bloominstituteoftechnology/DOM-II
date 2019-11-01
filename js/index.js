/* Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
	* [ ] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc. */

// `mouseover` nav to change color
let test = document.querySelector("nav");
test.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "purple";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);


// flip nav links
const links = document.querySelectorAll(".nav-link")

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        link.style.transform = "rotate(360deg)";
        link.style.transition = "all 0.5s"
    })
})


// content
  const allPtext = document.querySelectorAll("p")

  allPtext.forEach(theP => {
    theP.addEventListener("wheel", (e) => {
        theP.style.color = "indigo";
        theP.style.backgroundColor = "lavender";
        e.stopPropagation()
    })
  })

// destinations 

const destinations = document.querySelectorAll(".destination");

destinations.forEach(place => {
    place.addEventListener("mouseover", (e) => {
        place.style.backgroundColor = "lightblue";
        place.style.transform = "scale(1.2)";
        place.style.transition - "all 0.3s";
    })
    place.addEventListener("mouseleave", (e) => {
        place.style.backgroundColor = "lightgreen";
        place.style.transform = "scale(1.1)";
        place.style.transition = "all 0.3s";
    })
})


//logo changes
const logo = document.querySelectorAll(".logo-heading");

logo.forEach(logohead => {
    logohead.addEventListener ("mouseover", () => {
        logohead.style.transform = "scale(1.5)";
        logohead.textContent = "Made you look!"
        logohead.style.color = "lightseagreen";
        logohead.style.transition = "all 0.3s"
    })

    logohead.addEventListener ("mouseout", () => {
        logohead.style.transform = "scale(1)";
        logohead.textContent = "Happy Halloween!"
        logohead.style.color = "teal";
        logohead.style.transition = "all 0.3s"
    })
})


//pics
const pics = document.querySelectorAll("img");

pics.forEach(busImage => {
    picImage.addEventListener("mouseenter", () => {
        picImage.style.transform = "scale(1.5)";
        picImage.style.transition = "all 0.3s"
    })

    picImage.addEventListener("mouseleave", () => {
        picImage.style.transform = "scale(1)";
        picImage.style.transition = "all 0.3s"
    })
})

