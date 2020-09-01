// Your code goes here
let test = document.getElementById("purple");
  
// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {   
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "orange";
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
//changes a tag home to purple mouseover event

  //onmousedown Event
  function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  //onmouseup Event
  function mouseUp() {
    document.getElementById("myP").style.color = "green";
  }
  
  //resize event
  const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

window.addEventListener('resize', reportWindowSize);

//onclick event
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });
  var x = document.getElementById("myBtnn");
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("click", mySecondFunction);
  x.addEventListener("mouseout", myThirdFunction);
  
  function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>"
  }
  
  function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>"
  }
  
  function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>"
  }
  document.getElementById("myBtt").addEventListener("click", function(){
    this.style.backgroundColor = "red";
  });
//   var x = document.getElementById("myBtnnn");
// if (x.addEventListener) {
//   x.addEventListener("click", myFunction);
// } else if (x.attachEvent) {
//   x.attachEvent("onclick", myFunction);
// }

// function myFunction() {
//   alert("Hello World!");
// }
function dbl() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
//prevntdefault
  document.querySelector("#id-checkbox").addEventListener("click", function(event) {
    document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
}, false);

gsap.registerPlugin(MotionPathPlugin);

const motionPathData =
	"M-399.25379,-340.71797 C-399.25379,-340.71797 386.70813,-284.92113 420.50613,-152.49513 454.28013,-20.09013 -159.91287,-245.09513 -159.91287,-91.90313 -159.91287,61.26087 378.10113,-103.60513 384.90413,21.27287 391.70213,146.13787 122.70503,104.22685 122.70503,104.22685 ";

const exitPathData =
"M579.41621,-174.11096 C579.41621,-174.11096 502.92821,-184.48396 411.31121,-159.05496 309.72221,-130.85696 292.54621,-121.82696 196.91321,-90.59496 134.95521,-70.35696 62.36621,-19.28196 55.60721,29.13604 48.81421,77.74604 120.07209,102.90601 120.07209,102.90601 ";

gsap.set(".alien", {
	xPercent: -50,
	yPercent: -20,
	autoAlpha: 1,
	transformOrigin: "50% 50%"
});
gsap.to(".star", {
	duration: 1,
	opacity: 0.2,
	stagger: {
		each: 0.5,
		yoyo: true,
		repeat: -1,
		repeatDelay: 0,
		ease: "Power1.easeInOut",
		from: "start"
	}
});

function alien() {
	var tl = gsap.timeline({ defaults: { ease: Power1.easeOut } })
		.addLabel("tiltOne", 0.2)
		.addLabel("tiltTwo", 0.7)
		.addLabel("tiltThree", 1.6)
		.to(".alien", {
				duration: 10,
				immediateRender: true,
				ease: Elastic.easeOut.config(1, 1.2),
				motionPath:motionPathData
			},0)
		.from( ".alien", {
				duration: 4,
				scale: 0.1,
				immediateRender: false
			},0)
		.to( ".alien", {
				duration: 0.5,
				rotate: "15deg",
				ease: Power1.easeInOut
			},"tiltOne")
		.to( ".alien", {
				duration: 0.5,
				rotate: "-15deg",
				ease: Power1.easeInOut
			},"tiltTwo")
		.to(".alien", {
				duration: 0.5,
				rotate: "15deg",
				ease: Power1.easeInOut
			},"tiltThree")
		.to(".alien", {
				duration: 0.7,
				rotate: "0deg",
				ease: Back.easeOut.config(8)
			},"tiltThree+=1");
	
	return tl;
}
function sheep() {
	var tl = gsap.timeline({ defaults: { ease: Power1.easeOut } })
	.from(".head", {
			duration: 0.2,
			ease: Power1.easeInOut,
			rotate: "30deg",
			transformOrigin: "0% 50%",
			xPercent: 5,
			yPercent: 32
		})
	.to(".head", {
			duration: 0.4,
			ease: Power1.easeInOut,
			rotate: "-80deg",
			transformOrigin: "0% 50%",
			xPercent: 10,
			yPercent: 10
		},"+=1")

	.to(".sheep",{
			duration: 0.4,
			ease: Power1.easeInOut,
			rotate: "50deg",
			transformOrigin: "100% 50%",
			yPercent: -30,
			xPercent: -20
		})
	.to(".head",{
			duration: 0.4,
			ease: Power1.easeInOut,
			rotate: "-15deg",
			transformOrigin: "0% 50%"
		},"+=0.2")
	.fromTo(".leg", {
			duration: 0.1,
			rotate: "30deg",
			transformOrigin: "50% 0%",
			immediateRender: false
		},
		{
			duration: 0.1,
			rotate: "-30deg",
			transformOrigin: "50% 0%",
			immediateRender: false,
			stagger: {
				each: 0.1,
				yoyo: true,
				repeat: 12,
				repeatDelay: 0,
				ease: "Power1.easeInOut",
				from: "start"
			}
		},"-=1")
	.to(".sheep", {
			duration: 0.4,
			ease: Power1.easeInOut,
			transformOrigin: "50% 50%",
			yPercent: -250,
			scale: 0.6,
			opacity: 0
		}, "-=0.8");
	
		return tl;
}
function lightOpen() {
	var tl = gsap.timeline({ defaults: { ease: Power1.easeOut } })
	.to(".sheep", {duration: 0.01, autoAlpha: 1})
	.from( ".light", {
			duration: 0.2,
			scaleX: 0,
			transformOrigin: "50% 0%"
		},0)
	.to( ".groundlight", {
			autoAlpha: 1
		},0)
	.from( ".groundlight", {
			duration: 0.2,
			scale: 0,
			transformOrigin: "50%, 50%"
		},0)
	.to( ".lightcircle", {
			duration: 0.2,
			opacity: 1
		},0)
	.to( ".lightring", {
			fill: "#9bf1ed"
		},0)
		return tl;
}
function alienExit() {
	var tl = gsap.timeline({ defaults: { ease: Power1.easeOut } })
	.to( ".light", {
			duration: 0.2,
			scaleX: 0,
			transformOrigin: "50% 0%"
		},0)
	.to( ".groundlight", {
			duration: 0.2,
			scale: 0,
			transformOrigin: "50%, 50%"
		},0)
	.to( ".lightcircle", {
			duration: 0.2,
			opacity: 0
		},0)
		.to( ".lightring", {
			fill: "#fff"
		},0)
		.to(".alien", {
				ease: Power2.easeOut,
				duration: 1.5,
				scale: 0,
				motionPath:{
					path: exitPathData,
					start: 1,
					end: 0,
				}
		},"-=0.3")
		return tl;
}

const mainTimeline = gsap.timeline({ defaults: { ease: Power1.easeOut } })
	.add(alien(), 0.5)
	.add(lightOpen(), 3.2)
	.add(sheep(), 3.4)
	.add(alienExit(), 7)

	

// THE COOLEST BIT, tweak the motion path!
// MotionPathHelper.create(".alien")

//Chris Gannons timeline scrubber tool
// ScrubGSAPTimeline(mainTimeline);
