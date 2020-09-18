// Add an unordered list to the navigation link list
const newList = document.createElement('ul');
const parentDiv = document.getElementByTagName("nav")[0].appendChild(newList);

// Add a link to the nav link list
const newItem = document.createElement('li');
const newLink = document.createElement('a');
newLink.innerText = "Localhost";
newLink.setAttribute('href', 'http://localhost:3000/');
newItem.appendChild(newLink);
document.getElementsByClassName("navi").appendChild(newItem);

// Add a new list item 
const newFirstItem = document.createElement('li');
newFirstItem.innerText = "Item 0";
const parentDiv = document.getElementById('ordered')
// parentDiv.insertBefore(newFirstItem, parentDiv.firstChild);
parentDiv.prepend(newFirstItem);

// Remove class navi
const selectedList = document.getElementById('todo');
selectedList.classList.remove('navi');

// Delete the second item from todo list
selectedList.removeChild(selectedList.childNodes[2]);