const value = {
    1: "ones",
    2: "twos",
    3: "threes",
    4: "fours",
    5: "fives",
    6: "sixes"
}

document.addEventListener('rollDice', (e) => {
    const result = e.detail.value;
    console.log(result);
    var change = document.getElementById(value[result]).querySelector('p');
    if (change.innerText === '-') {
        change.innerText = 1;
    }
    else {
        change.innerText = parseInt(change.innerText) + 1;
    }
    var counter = document.querySelector("div > p > span");
    counter.innerText = parseInt(counter.innerText) + 1;
});

document.getElementById("roll-button").addEventListener('click', rollDice);