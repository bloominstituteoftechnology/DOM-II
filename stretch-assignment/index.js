const getBlockContainer = document.querySelectorAll('.block');
const newArrayOfBlocks = [];

Array.from(getBlockContainer);

const removeElements = () => {
    getBlockContainer.forEach(block => {
        block.addEventListener('click', () => {
            removeElementsFromDom(block);  
        });
    });
};

const createNewElements = () => {
    getBlockContainer.forEach(block => {
        block.addEventListener('click', () => {
            addElementsToNewArray(block);
        });
    });
};

const addElements = () => {
    const elements = document.querySelector('.blocks');
    // const elements = getElementsToAdd('.blocks')
    getBlockContainer.forEach(block => {
        block.addEventListener('click', () => {
            addElementsToDom(elements, block);
            console.log('new array: ',newArrayOfBlocks);
        });
    });
    
    
};

const addElementsToDom = (parentElement, childElement) => {
    parentElement.appendChild(childElement);
     
};


// for some reason this function isn't working
const getElementsToAdd = (node) => {
    document.querySelector(node);
};

const removeElementsFromDom = (element) => {
    element.remove();
};

const addElementsToNewArray = (item) => {
    newArrayOfBlocks.unshift(item);
};


const executionFunction = () => {
    removeElements();
    addElements();
    createNewElements();

};

executionFunction();

