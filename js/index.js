// Your code goes here

const intro = document.querySelector(".intro");
const introImg = document.querySelector(".intro img");
const navigation = document.querySelector(".nav");
const textContainer = document.querySelector(".text-content");
const imgContent = document.querySelector(".img-content img");
const imgDestination = document.querySelector(".content-destination img");
const contentSection = document.querySelector(".content-section");

const focusIntro = intro.focus();

//mouseOver
function MouseOver(intro) {
    intro.style.color("yellow");
}

//keydown 
document.addEventListener("keydown", function(event){
    if (event.code =='KeyZ'){
        alert('You pressed key Z')
    }
});

document.addEventListener('keydown', escKey);


  //dblclick
  imgContent.addEventListener("dblclick", () => {
    imgContent.src = "https://prod-virtuoso.dotcmscloud.com/dA/e17624af-d351-448c-bd26-56081432fc58/partner2Image/NorwegianCruiseLine.jpg";
  });

  contentSection.addEventListener("dblclick", (event) => {
      event.target.style.backgroundColor = "hotpink";
  })

  //resize
  window.addEventListener("resize", () => {
      imgDestination.src = "https://www.gojourny.com/journy-assets/assets/img/luxe-content-image.882e9102.jpg"
  })

  //wheel
  textContainer.addEventListener("wheel", wheelFunction);
  function wheelFunction(){
      this.style.fontSize = "50px";
  }
  
  //load
  window.addEventListener('load', (event) =>{
      console.log('page is fully loaded');
  })

  introImg.addEventListener("mouseenter", ()=> {
    introImg.style.transform = "scale(1.9)";
    introImg.style.transition = "all 0.5s";
  })

  imgContent.addEventListener("mouseleave", () => {
    imgContent.style.transform = "scale(1)";
  })

//scroll
  window.addEventListener("scroll", () => {
    console.log("window.scrollY", window.scrollY);
    if (window.scrollY >= 1000) {
      alert("scrolled");
    }
  });
  