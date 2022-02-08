# DOM II

## Project Description

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Git Setup

* [X] Create a forked copy of this project.
* [X] Clone your OWN version of the repository.
* [X] Implement the project on the main branch, committing changes regularly.
* [ ] Push commits: `git push origin main`.

## Running the project

This project uses [Webpack and Babel](https://bloomtech-1.wistia.com/medias/bhi99dwr2x). Inside `src/index.html` you will notice there is no `script` tag linking the JavaScript, nor a `link` tag linking the styles. When the project starts, Webpack transcompiles the LESS into CSS, and injects the JavaScript and the styles into the HTML.

Do not **move or rename any files** in this project. The website's source files live inside the `src` folder. Do not make changes to any files outside of the `src` folder, unless it's new dependecies declared in the `package.json` due to installing NPM libraries (E.G. `npm i lodash`).

* [X] Run `npm install` to download the project's dependencies.
* [X] Run `npm start` to launch the website on `http://localhost:3000`.

## MVP

### Create listeners of 10 types of events

* [ ] Using your [index.js file](src/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, add DOM elements, remove them, etc.

* [ ] Here are some event types you could try to use:
  * [ ] `mouseover`
  * [ ] `keydown`
  * [ ] `wheel`
  * [ ] `load`
  * [ ] `focus`
  * [ ] `resize`
  * [ ] `scroll`
  * [ ] `select`
  * [ ] `dblclick`
  * [ ] `drag / drop`

Note: Drag and drop is a bit more advanced than the others. It's not actually a single type of event but several types that need to work together.

### Use preventDefault

* [ ] Find a usecase for preventDefault. For example, you could prevent a link from navigating when clicked, or to navigate somewhere surprising.

## Submission Format

* [ ] Submit link to your github repo in canvas.
