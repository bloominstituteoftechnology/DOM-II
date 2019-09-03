// Your code goes here
// Resize Browser Window
window.addEventListener("resize", function(){
    alert('The browser is now:' + window.innerWidth);
  });


// MouseOver Event
var imageShake = document.getElementById('img-shake');
imageShake.addEventListener('mouseover', function() {
    imageShake.classList.add("ss");
});
// For doubleclick
var getDenmark = document.getElementById('denmark');
getDenmark.addEventListener('click', function() {
    alert('An Image of Denmark (I think)');
});

// For scrolling
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// For Drag and Drop down 
var getImageDiv1 = document.getElementById('db-img-1');
var getImageDiv2 = document.getElementById('db-img-2');
var getDragImage = document.getElementById('drag1');

function allowDrop(evt) {
    evt.preventDefault();
}
function drag(evt) {
    evt.dataTransfer.setData("text", evt.target.id);
    console.log('fff')
}
function drop(evt) {
    evt.preventDefault();
    var data = evt.dataTransfer.getData("text");
    evt.target.appendChild(document.getElementById(data));
    console.log('fff')
}

// Load Event
var loader;
function loadFunction() {
    loader = setTimeout(showPage, 1000);
} 
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById('myiv').style.display = "block";
}

// Modal Event
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.addEventListener('click', function() {
    console.log('llll')
    modal.style.display = "block";
  })

// When the user clicks on <span> (x), close the modal
span.addEventListener('click',  function() {
    console.log('llll')
    modal.style.display = "none";
  }) 

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
});

var footerText = document.querySelector('footer p');
footerText.addEventListener("wheel", function myFunction() {
    footerText.style.fontSize = "2rem";
  });

