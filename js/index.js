// Your code goes here
class Component {
    constructor(object) {
        this.source = object.source;
        this.event = object.event;
        this.callbacks = object.callbacks;
    }
    manipulateStyle(target, change) {
        this.source.style.target = change;
    }
    setupEvent(i) {
        this.source.addEventListener(this.event[i], this.callbacks[i]);
    }
}

const destPic = new Component({
    'source' : document.querySelector('.content-destination').querySelector('img'),
    'event' : ['click', 'dblclick', 'mouseover'],
    'callbacks' : [
        function click() {
            event.target.style.transform = 'scalex(1.05)';
            event.target.style.transition = '1.1s';
        },
        function twoClick() {
            event.target.style.transform = 'scalex(1.1)';
            event.target.style.transition = '1.1s';
        },
        function hover() {
            event.target.style.transform = 'scalex(1.025)';
            event.target.style.transition = '1.1s';
        }
    ]
});

const navbar = new Component({
    'source' : document.querySelector('.main-navigation'),
    'event' : ['mouseover'],
    'callbacks' : [
        function hover() {
            event.target.style.transform = 'scalex(1.05)';
            event.target.style.transition = '1.0s';
            event.target.style.backgroundColor = 'lightgrey';
        }
    ]
});

const headPic = new Component({
    'source' : document.querySelector('.intro').querySelector('img'),
    'event' : ['click', 'dblclick', 'mouseover'],
    'callbacks' : [
        function click() {
            event.target.style.transition = '1.1s';
            event.target.style.opacity = '0.8';
        },
        function twoClick() {
            event.target.style.transition = '1.1s';
            event.target.style.opacity = '0.65';
        },
        function hover() {
            event.target.style.transition = '1.1s';
            event.target.style.opacity = '0.9';
        }
    ]
});

const destCont = new Component({
    'source' : document.querySelector('.intro').querySelector('p'),
    'event' : ['click', 'copy', 'wheel'],
    'callbacks' : [
        function hover() {
            event.target.style.transition = '1.0s';
            event.target.style.backgroundColor = "lightgrey";
        },
        function copy() {
            alert('You have copied text!');
        },
        function wheel() {
            alert('Scroll faster!');
        }
    ]
});

// Event 1
destPic.setupEvent(0);
// Event 2
destPic.setupEvent(1);
// Event 3
destPic.setupEvent(2);
// Event 4
navbar.setupEvent(0);
// Event 5
headPic.setupEvent(0);
// Event 6
headPic.setupEvent(1);
// Event 7
headPic.setupEvent(2);
// Event 8
destCont.setupEvent(0);
// Event 9
destCont.setupEvent(1);
// Event 10
destCont.setupEvent(2);