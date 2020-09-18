const counter = document.getElementById('counter');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

const MIN = -5;
const MAX = 5;


incrementButton.addEventListener("click",() => {
    var num = parseInt(counter.innerText, 10);
    if (num < 5) {
        num += 1;
    }
    else {
        num = -5;
    }
    counter.innerHTML = num;
})
decrementButton.addEventListener("click",() => {
    var num = parseInt(counter.textContent,10);
    if (num > -5) {
        num -= 1;
    }
    else {
        num = 5;
    }
    counter.innerHTML = num;
})
resetButton.addEventListener("click",() => {
    var num = parseInt(counter.textContent,10);
    num = 0;
    counter.innerHTML = num;
})

