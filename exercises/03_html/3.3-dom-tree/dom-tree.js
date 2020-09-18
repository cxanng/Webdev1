// Add a class list to the navigation class list
const parentDiv = document.getElementByClassName("navi");
parentDiv.classList.add('list');

// Add a link to the nav link list
var newItem = document.createElement('LI');
var newLink = document.createElement('a');
var textLink = document.createTextNode('Localhost');
newLink.appendChild(textLink);
newLink.setAttribute('href', 'http://localhost:3000/');
newItem.appendChild(newLink);
document.getElementsByClassName("navi").appendChild(newItem);

// Add a new list item 
const newFirstItem = document.createElement('LI');
var inText = document.createTextNode("Item 0");
newFirstItem.appendChild(inText)
const parentDiv = document.getElementById('ordered')
// parentDiv.insertBefore(newFirstItem, parentDiv.firstChild);
parentDiv.prepend(newFirstItem);

// Remove class navi
const selectedList = document.getElementById('todo');
selectedList.classList.remove('navi');

// Delete the second item from todo list
selectedList.removeChild(selectedList.childNodes[1]);