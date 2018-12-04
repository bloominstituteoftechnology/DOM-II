// Your code goes here

// MOUSEOVER===========================================
const heading = document.querySelector('.logo-heading');

heading.addEventListener('mouseover', function(e){
    e.target.style.color = getColor()
})

function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// KEYDOWN=================================================

const audio = document.querySelector('audio')
document.addEventListener('keydown', function(){
    audio.play()
})


// LOAD=====================================================

window.addEventListener('load', function(){
    alert('Hey, this is the .load() method! Click ok to see that your page has loaded!');
})

// RESIZE======================================================
const links = document.querySelectorAll('.nav-link');

window.addEventListener('resize', function(){
    links.forEach(function(e){
       e.style.color = getColor();
    })
})

// SCROLL=====================================================
const h2 = document.querySelectorAll('h2')

document.addEventListener('scroll', function(){
    h2.forEach(function(e){
        e.classList.toggle('text-pop-up-top')
    })
})

// FOCUS & SELECT============================================

const input = document.getElementById('myText');
const btn = document.querySelector('.inputBtn');
const focusMethod = function() {
    input.focus()
    input.select()
}

// DRAG & DROP============================================
heading.addEventListener('dragstart', dragStart);
heading.addEventListener('dragend', dragEnd);

const empty = document.querySelector('.empty');

empty.addEventListener('dragover', dragOver);
empty.addEventListener('drop', dragDrop);
function dragStart(){
 this.classList.add('dragging');

}

function dragEnd(){
    this.classList.remove('dragging');
}
function dragOver(e){
    e.preventDefault();
    console.log('over')
}
function dragDrop(){
    this.append(heading)
}

// WHEEL================================================

empty.addEventListener('wheel', function(){
    console.log('hi')
})

// DBLCLICK============================================

const img = document.querySelector('img')
img.addEventListener('dblclick', function(){
    img.classList.toggle('border')
})