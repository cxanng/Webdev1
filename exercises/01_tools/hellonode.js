const _ = require("lodash");

function hellonode(array) {

    return _.first(array) + ' ' +_.last(array);
}
module.exports = hellonode;

const words = ['hello', 'goodbye', 'alpha', 'omega', 'edge', 'node'];
const greeting = hellonode(words);

console.log(greeting);