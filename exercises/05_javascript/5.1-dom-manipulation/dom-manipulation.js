/**
 * Sort table rows alphabetically based on the values in a column
 *
 * @param {Number} col column index (zero based)
 * @param {HTMLTableElement} table the table to be sorted
 */
function sortTableByColumn(col, table) {
  // TODO: Implement this function
  var array = [];
  const col_count = table.querySelector("thead > tr").childElementCount;
  const row_count = table.querySelector("tbody").childElementCount;
  const rows = table.querySelectorAll("tbody > tr");
  const str = "td:nth-of-type(" + (col+1) + ")" ;
  var elem;
  for (elem of rows) {
    array.push(elem.querySelector(str).innerText);
  }
  console.log(array);
  array.sort(function(a, b) {return a.localeCompare(b)});
  console.log(array);

  var element;
  for (element of array) {
    for (elem of rows) {
      if (elem.querySelector(str).innerText === element) {
        table.querySelector("tbody").appendChild(elem);
      }
    }
  }
}

/**
 * DO NOT EDIT THE CODE BELOW!
 *
 * The code below is there just to make it easier to test the code.
 *
 * If your function works correctly you should be able to sort the table
 * simply by clicking any column heading and the table should be immediately
 * sorted by values in that column.
 */

// find the table element
const table = document.getElementById('sortable');

// attach an event listener to each th element's click event
table.querySelectorAll('thead th').forEach((th, i) =>
  th.addEventListener('click', () => {
    sortTableByColumn(i, table);
  })
);
