// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */
const createDOMElement = (tagName) => {
  return document.createElement(tagName);
};

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */
const addPTag = (text) => {
  let body = document.querySelector("body");
  let pTag = createDOMElement("p");
  pTag.innerText = text;
  body.append(pTag);
};

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */
const addElementWithClass = (tagName, text, className) => {
  let body = document.querySelector("body");
  let tag = createDOMElement(tagName);
  tag.innerText = text;
  tag.classList.add(className);
  body.append(tag);
};

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */
const addElementWithMultipleClasses = (tagName, text, classes) => {
  let body = document.querySelector("body");
  let tag = createDOMElement(tagName);
  tag.innerText = text;
  classes.forEach((cssClass) => {
    tag.classList.add(cssClass);
  });
  body.append(tag);
};

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */
const buildAList = (listType, listClass, numberListElements) => {
  let body = document.querySelector("body");
  let list = createDOMElement(listType);
  list.classList.add(listClass);
  let i = 0;
  while (0 < numberListElements) {
    i++;
    let li = document.createElement("li");
    li.innerText = `Item ${i}`;
    list.append(li);
    numberListElements--;
  }
  body.append(list);
};

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */
const prependLiToList = (text, className) => {
  let li = document.createElement("li");
  li.innerText = text;
  li.classList.add(className);

  let list = document.querySelector("ul");
  let firstChildOfList = list.querySelector("li:first-of-type");
  list.insertBefore(li, firstChildOfList);
};

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */
const pushToSelectedPosition = (text, className, index) => {
  let li = document.createElement("li");
  li.innerText = text;
  li.classList.add(className);

  let list = document.querySelector("ul");
  let childElementPosition = list.querySelector(`li:nth-of-type(${index + 1})`);
  list.insertBefore(li, childElementPosition);
};

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */
const deleteSelectedElements = (parentSelector, elementSelector) => {
  let parentElement = document.querySelector(parentSelector);
  let elements = parentElement.querySelectorAll(elementSelector);
  elements.forEach((element) => {
    parentElement.removeChild(element);
  });
};
