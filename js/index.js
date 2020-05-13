// Your code goes here

//can make these shorter
const anchorSelector = document.querySelectorAll('a')

anchorSelector.forEach(element => element.addEventListener('mouseover', () => element.style.textDecoration = 'underline'));
anchorSelector.forEach(element => element.addEventListener('mouseout', () => element.style.textDecoration = 'none'));
anchorSelector.forEach(element => element.addEventListener('click', function(event) {
    event.preventDefault()
}))

const bodySelector = document.querySelector('body')
bodySelector.addEventListener('keypress', () => {
    bodySelector.style.backgroundColor = 'black'
    bodySelector.style.color = 'white'
    document.getElementsByTagName('h1')[0].style.color = 'black';
})
bodySelector.addEventListener('keyup', () => {
    bodySelector.style.backgroundColor = 'white'
    bodySelector.style.color = 'black'
});


const headerImg = document.getElementsByTagName('img')[0];  //.setAttribute('src', 'img/partyBus.jpg');
headerImg.addEventListener('dblclick', () => {
    headerImg.setAttribute('src', 'img/partyBus.jpg');
})


const paraSelector = document.querySelectorAll('p')
paraSelector.forEach(element => element.addEventListener('click', () => element.style.color = 'blue'))





//doesn't work very well, trying to figure it out
//can't make it work on each image
let scale = 1;
const resizeableElement = document.querySelector('.intro');
const imgSelector = document.querySelector('.img-content')

function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.5, scale), 2);

    // resizeableElement.style.transform = `scale(${scale})`;
    imgSelector.style.transform = `scale(${scale})`
}

imgSelector.addEventListener('wheel', zoom)

// resizeableElement.addEventListener('wheel', zoom)

// paraSelector.forEach(element => element.addEventListener('wheel', zoom))

// const buttonSelector = document.querySelectorAll('btn')
// buttonSelector.forEach(element => element.addEventListener('focus', (event) => {
//     event.target.style.animation = '';
// }))

window.scroll({
    top: 0,
    behavior: 'smooth'
});

window.addEventListener('resize', (event) => {
    event.stopPropagation();
    anchorSelector.forEach(element => element.style.border = "2px solid red")
    anchorSelector.forEach(element => element.style.borderRadius = "4px")
    anchorSelector.forEach(element => element.style.padding = "2px")
    anchorSelector.forEach(element => element.addEventListener('click', (event) => {
        element.style.backgroundColor = "red";
    }))
})

window.onload = function() {
    document.querySelector('.intro').focus();
}

//





























/*.block {
  height: 5em;
  line-height: 5em;
  width: 10em;
  background: #464646;
  color: #fdfdfd;
  text-align: center;
  margin: 1em auto;
  text-shadow: 0 0 1px #333; /* so one can see fadeBgColor properly
}

.animatable {
  
  // initially hide animatable objects 
  visibility: hidden;
  
  //initially pause animatable objects their animations 
  -webkit-animation-play-state: paused;   
  -moz-animation-play-state: paused;     
  -ms-animation-play-state: paused;
  -o-animation-play-state: paused;   
  animation-play-state: paused; 
}

@-webkit-keyframes bounceInLeft {
	0% {
		opacity: 0;
		-webkit-transform: translateX(-2000px);
	}
	60% {
		-webkit-transform: translateX(20px);
	}

	80% {
		-webkit-transform: translateX(-5px);
	}

	100% {
		opacity: 1;
		-webkit-transform: translateX(0);
	}
}

@-moz-keyframes bounceInLeft {
	0% {
		opacity: 0;
		-moz-transform: translateX(-2000px);
	}

	60% {
		-moz-transform: translateX(20px);
	}

	80% {
		-moz-transform: translateX(-5px);
	}

	100% {
		opacity: 1;
		-moz-transform: translateX(0);
	}
}

@-o-keyframes bounceInLeft {
	0% {
		opacity: 0;
		-o-transform: translateX(-2000px);
	}

	60% {
		opacity: 1;
		-o-transform: translateX(20px);
	}

	80% {
		-o-transform: translateX(-5px);
	}

	100% {
		opacity: 1;
		-o-transform: translateX(0);
	}
}

@keyframes bounceInLeft {
	0% {
		opacity: 0;
		transform: translateX(-2000px);
	}

	60% {
		transform: translateX(20px);
	}

	80% {
		transform: translateX(-5px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
*/