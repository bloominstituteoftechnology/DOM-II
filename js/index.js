// Your code goes here

const allDoc = document.querySelector('body')
allDoc.addEventListener('dblclick', () => {
    allDoc.style.color = 'green';
})
allDoc.addEventListener('keydown', () => {
    allDoc.style.color = 'black';
})


const rainbow = document.querySelector('nav');
const r1 = document.querySelector('a');
const r2 = r1.nextElementSibling;
const r3 = r2.nextElementSibling;
const r4 = r3.nextElementSibling;
rainbow.addEventListener('click', () => {
    r1.style.color = 'violet'
    r2.style.color = 'blue'
    r3.style.color = 'yellow'
    r4.style.color = 'red'
    
});
rainbow.addEventListener('dblclick', () => {
    r1.style.color = 'black'
    r2.style.color = 'black'
    r3.style.color = 'black'
    r4.style.color = 'black'
    
});

// allDoc.addEventListener('select', (highlight) => {
// highlight.style.color = 'indigo';
// })

const pics = document.querySelectorAll('img');
const p1 = pics[0];
const p2 = pics[1];
const p3 = pics[2];
const p4 = pics[3];

p1.addEventListener('mouseenter', () => {
    p1.style.transform = 'scale(1.25)';
});
p1.addEventListener('mouseleave', () => {
    p1.style.transform = 'scale(1.0)';
});
p2.addEventListener('mousedown', () => {
    p2.src = '';
}); 
p2.addEventListener('mouseup', () => {
    p2.src = 'https://picsum.photos/200/300';
});

window.addEventListener('resize', () => {
    p3.src = 'https://picsum.photos/200/300';
})

const words = document.querySelectorAll('p');
words.forEach(title => {
    window.addEventListener('scroll', () => {
        allDoc.style.color = 'orange';
        console.log('yes');
    }, false);
});

allDoc.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
})

const container = document.querySelector('.content-pick');
const sections = document.querySelectorAll('.destination');
const clickers = document.querySelectorAll('h4');

container.addEventListener('click', () => {
    container.style.backgroundColor = 'rebeccapurple';
});
sections.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log('navy?')
        event.target.style.backgroundColor = 'navy';
        event.stopPropagation();
    });
});

clickers.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log('pinky')
        event.target.style.color = 'pink';
        event.stopPropagation();
    });
});

/// success list = click, dblclick, keydown, mouseenter, mouseleave, mousedown, mouseup, resize, scroll,
///fail list = 

// p2.addEventListener('mouseup', () => {
//     p2.src = 'C:\Users\Ryan\Desktop\Lambda_School\2_1_Applied_Javascript\Dom_II\DOM-II\img\adventure.jpg';
// });


/// What is throttling?








// p4.addEventListener('contextmenu', e => {
//     e.style.visibility = 'hidden';
// });
// p2.addEventListener('scroll', zoom);