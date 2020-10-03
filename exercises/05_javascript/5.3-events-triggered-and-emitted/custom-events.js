const value = {
    1: ["ones", "template1"],
    2: ["twos", "template2"],
    3: ["threes", "template3"],
    4: ["fours", "template4"],
    5: ["fives", "template5"],
    6: ["sixes", "template6"]
}

document.addEventListener('rollDice', (e) => {
    const result = e.detail.value;
    console.log(result);
    var change = document.getElementById(value[result][0]).querySelector('p');
    if (change.innerText === '-') {
        change.innerText = 1;
    }
    else {
        change.innerText = parseInt(change.innerText) + 1;
    }
    var counter = document.querySelector("div > p > span");
    counter.innerText = parseInt(counter.innerText) + 1;

    // const clone = document.getElementById(value[result][1]).contentEditable.cloneNode(true);
    var button = document.getElementById("roll-button");
    button.innerHTML = document.getElementById(value[result][1]).innerHTML;

});

document.getElementById("roll-button").addEventListener('click', rollDice);