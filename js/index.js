// Your code goes here
const images = document.querySelectorAll('img');

images.forEach.call(images,function(e){e.addEventListener('mouseenter', event => event.target.style.opacity = '0.8')});
images.forEach.call(images,function(e){e.addEventListener('mouseleave', event => event.target.style.opacity = 'initial')});



document.addEventListener('keydown', function(event) {
    if (event) {
        let rando = (Math.floor(Math.random() * 7) +1)
        if (rando === 7) {
            event.target.style.backgroundColor = 'mediumspringgreen';
            console.log(`Winner, result was ${rando}`);
        } else if (rando % 2 !== 0) {
        event.target.style.backgroundColor = 'salmon';
        console.log(`Odd, result was ${rando}`);
        } else {
        event.target.style.backgroundColor = 'dodgerblue';
        console.log(`Even, result was ${rando}`);
      }
    }
})

document.addEventListener('keyup', function(event) {
    if (event) {event.target.style.backgroundColor = 'white'}
})




