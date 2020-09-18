// Add a class list to the navigation class list
var parentDiv = document.querySelector("nav>ul");
parentDiv.classList.add('list');

// Add a link to the nav link list
var newListItem = document.createElement('LI');
var newLink = document.createElement('a');
newLink.setAttribute('href', 'http://localhost:3000/');
newLink.innerText = "Localhost"
newListItem.appendChild(newLink);
parentDiv.appendChild(newListItem);

// Add a new list item 
const newFirstItem = document.createElement('LI');
newFirstItem.innerText = "Item 0";
const orderedList = document.getElementById('ordered');
orderedList.prepend(newFirstItem);

// Remove class navi
const selectedList = document.getElementById('todo');
selectedList.classList.remove('navi');

// Delete the second item from todo list
selectedList.removeChild(selectedList.childNodes[3]);