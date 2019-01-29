# DOM II - Event Exploration

  

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

  

## Task 1: Set Up The Project With Git

  

* [x] Fork the project into your GitHub user account

* [x] Clone the forked project into a directory on your machine

* [x] You are now ready to build this project with your preferred IDE

  

## Task 2: Set Up LESS Preprocessor

* [x] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* [x] Open your terminal and navigate to your preprocessing project by using the `cd` command

* [x] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* [x] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.

* [x] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 3: Create Unique Event Listeners

* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
	* [ ] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`

## Stretch Task:

* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

  

## Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.