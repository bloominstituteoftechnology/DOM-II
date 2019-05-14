// Your code goes here

const images = document.querySelectorAll('img');

Array.from(images).forEach(element =>
	element.addEventListener('mouseover', () => element.classList.toggle('grayscale')),
);

Array.from(images).forEach(element =>
	element.addEventListener('mouseleave', () => element.classList.toggle('grayscale')),
);

const destinations = document.querySelectorAll('.destination');
const buttons = document.querySelectorAll('.btn');

const container = document.querySelectorAll('body');
let idList = [];
Array.from(container).forEach((element, i) => {
	element.setAttribute('id', `section-1-${i}`);
	idList = [ ...idList, `1-${i}` ];
	Array.from(element.children).forEach((element2, i2) => {
		idList = [ ...idList, `2-${i2}${i}` ];
		element2.setAttribute('id', `section-2-${i2}${i}`);
		Array.from(element2.children).forEach((element3, i3) => {
			idList = [ ...idList, `3-${i3}${i2}${i}` ];
			element3.setAttribute('id', `section-3-${i3}${i2}${i}`);
			Array.from(element3.children).forEach((element4, i4) => {
				cidList = [ ...idList, `4-${i4}${i3}${i2}${i}` ];
				element4.setAttribute('id', `section-4-${i4}${i3}${i2}${i}`);
			});
		});
	});
});

Array.from(buttons).forEach((element, i) => element.setAttribute('id', destinations[i].id));

Array.from(buttons).forEach(element =>
	element.addEventListener('click', e => {
		Array.from(destinations).forEach(element => {
			console.log(element.id);
			if (element.id !== e.target.id) {
				element.classList.toggle('hidden');
			} else {
				element.classList.toggle('selected');
			}
		});
	}),
);

const divs = document.querySelectorAll('div');

Array.from(divs).forEach(element =>
	element.addEventListener('dblclick', () => {
		let index = Math.ceil(Math.random() * idList.length - 1);
		let item = `section-${idList[index]}`;
		let goodbyeFriend = document.getElementById(item);
		goodbyeFriend.classList.toggle('thanos');
		idList = idList.filter(itemGone => itemGone !== `${idList[index]}`);
	}),
);

const color = () => Math.ceil(Math.random() * 256);
const randomColor = () => `rgb(${color()}, ${color()}, ${color()})`;

Array.from(container).forEach(element =>
	element.addEventListener('wheel', e => {
		e.target.style.backgroundColor = randomColor();
	}),
);

const secondaryHeadings = document.querySelectorAll('h2');

Array.from(secondaryHeadings).forEach(element =>
	element.addEventListener('mouseenter', e => (e.target.style.fontSize = '4rem')),
);

Array.from(secondaryHeadings).forEach(element =>
	element.addEventListener('mouseout', e => (e.target.style.fontSize = '3.2rem')),
);

Array.from(container).forEach(element =>
	element.addEventListener('contextmenu', e => {
		e.preventDefault();
	}),
);

const newDiv = document.createElement('div');
newDiv.setAttribute('id', 'disclaimer');
const newh1 = document.createElement('h1');
const h1message = document.createTextNode('Disclaimer');
newh1.appendChild(h1message);
newDiv.appendChild(newh1);
const newP1 = document.createElement('p');
const newP2 = document.createElement('p');
const newP3 = document.createElement('p');
const newP4 = document.createElement('p');
const newP5 = document.createElement('p');
const p1msg = document.createTextNode('Last updated: May 14, 2019');
const p2msg = document.createTextNode(
	'The information contained on localhost.com website (the "Service") is for general information purposes only.',
);
const p3msg = document.createTextNode(
	'Fun Bus assumes no responsibility for errors or omissions in the contents on the Service.',
);
const p4msg = document.createTextNode(
	'In no event shall Fun Bus be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Fun Bus reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice.',
);
const p5msg = document.createTextNode(
	'Fun Bus does not warrant that the website is free of viruses or other harmful components.',
);
newP1.appendChild(p1msg);
newP2.appendChild(p2msg);
newP3.appendChild(p3msg);
newP4.appendChild(p4msg);
newP5.appendChild(p5msg);
newDiv.appendChild(newP1);
newDiv.appendChild(newP2);
newDiv.appendChild(newP3);
newDiv.appendChild(newP4);
newDiv.appendChild(newP5);
const headerIntro = document.querySelector('.intro');
headerIntro.prepend(newDiv);

newDiv.addEventListener('mouseover', e => {
	let opacityView = 1;
	const removeDisclaimer = () => {
		e.target.style.opacity = opacityView;
		opacityView = opacityView - 0.1;

		if (opacityView < 0) {
			clearInterval(msgGone);
			e.target.style.display = 'none';
			return;
		}
	};
	const msgGone = setInterval(removeDisclaimer, 500);
});
