const _ = require("lodash");

let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

function hellonode(array) {
    console.log(_.first(array));
    console.log(_.last(array));
}

hellonode(words);

module.exports = hellonode;