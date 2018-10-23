// Your code goes here


  // +++------------- ALERTS SECTION --------------+++++++++
  // stealing this from another student, but going to use an alert to tell an user what they should try

  window.addEventListener("load", function(event) {
    alert("Hey, you wannna feel like a 1337 hacker? Try using different keystrokes to manipulate the webpage. There are also cool things like a wheel animation, hover over some elements to make them disappear (and reappear!), and some other stuff to get to videos on youtube! I have no idea if we learn security stuff later on, but this is how something like this would work! Also, try to make me thin, lol!");
  });

  // simple resizer, can i determine when it triggers? and at what size?

  window.addEventListener('resize', function onlyOneTime() {

    alert("lol thanks, i can get in my swimsuit now. But I wish you wouldnt stretch me so hard lol.")
    //window.removeEventListener('resize', onlyOneTime());
});


  window.addEventListener("beforeunload", function (event) {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = 'Hey, you really really want to leave? Come on and play a little longer!';
    this.console.log("does this work?");
});


  // +++------------- BUTTONS SECTION --------------+++++++++


  const myButton = document.querySelector('.destination .btn'); //this also works, good work everyone!


  // myButton.addEventListener('click', banana);
  // function banana(){
  //   console.log('This was called back on click!');
  // }
  
  myButton.addEventListener('click', banana);
  
  function banana(){
      console.log('quick banana check!'); //yes, it works! nice.
  
  }

  
  

  // +++------------- DUMB ANIMATiONS AND OTHER NARLY STUFF SECTION --------------+++++++++

// so, this is the codepen stuff, with the console log going nuts, and colors changing
document.addEventListener('wheel', (event) => {
  
    console.log('jesus is my wheel, and lol josh it works without a wheel computers HOW DO THEY WORK');
    event.target.style.color = "pink";
    event.target.style.background= "blue";
  });

// okay, going to try getting the nav elements to get bigger if you dbl click them, kind of for accessability

const nav = document.querySelector(".nav");

nav.addEventListener("dblclick", function(big) {
    //also need these guys to not refresh the page
    big.preventDefault();
    //and i need this to not break if i do something later with dblclick
    big.stopPropagation();

    big.target.style.fontSize = "40px"
});

const logoThingy = document.querySelector(".logo-heading")


//how about a mouse hover, and we use transform/scale instead of fontSize
logoThingy.addEventListener('mouseover', function(cool) {
    cool.stopPropagation(); //do i REALLY need this?

    cool.target.style.transform = "scale(1.5)";

});

// make stuff disappear with keystrokes!

const pic = document.querySelectorAll("img")
console.log('pic[0]');
// this is so bad how do i make it better...
window.addEventListener("keydown", () => pic[0].style.display = "none");
window.addEventListener("keydown", () => pic[1].style.display = "none");
window.addEventListener("keydown", () => pic[2].style.display = "none");







