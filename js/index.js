const aTag = document.querySelectorAll(".nav-link");
aTag.forEach(tag => {
    tag.addEventListener('click', function (event) {
        event.preventDefault()
    });
});
const underLine = function (event) {
    event.target.style.textDecoration = 'line-through';
}

aTag.forEach(under => {
    under.addEventListener('click', underLine);
});

const para = document.querySelectorAll('p');
const textColorChange = function (event) {
    event.target.style.color = 'green';
}

para.forEach(text => {
    text.addEventListener('mouseover', textColorChange)
});

const headerOne = document.querySelectorAll('h1');
const headerColorChange = function (event) {
    event.target.style.color = 'dodgerblue';
}

headerOne.forEach(head => {
    head.addEventListener('mousemove', headerColorChange);
});

const headerTwo = document.querySelectorAll('h2');
headerTwo.forEach(head => {
    head.addEventListener('mousemove', headerColorChange);
});

const headerFour = document.querySelectorAll('h4');
headerFour.forEach(head => {
    head.addEventListener('mousemove', headerColorChange);
});

const images = document.querySelectorAll('img');

const imgRemove = function(event) {
    if(event.target.style.display === ''){
    event.target.style.display = 'none';
    } else {        
        event.target.style.display = '';
    }
}

images.forEach(img => {
    img.addEventListener('mousedown', imgRemove);
});


aTag.forEach(color => {
    color.addEventListener('click', textColorChange);
});

const button = document.querySelectorAll('.btn');

window.addEventListener('resize', function(event) {
    alert ("This has been resized.");
  });

window.addEventListener('scroll', function(event) {
    button[0].style.backgroundColor = "red"
    button[1].style.backgroundColor = "purple"
    button[2].style.backgroundColor = "dodgerblue"
});

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    console.log('start');
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    console.log('end');
    this.className = 'fill';
}

function dragOver(e) {
    console.log('over');
    e.preventDefault();
}

function dragEnter(e) {
    console.log('enter');
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    console.log('leave');
    this.className = 'empty';
}

function dragDrop() {
    console.log('drop');
    this.className = 'empty';
    this.append(fill);
}