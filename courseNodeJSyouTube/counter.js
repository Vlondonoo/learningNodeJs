var counter = function(arr) {
    return "this an array with " + arr.length + " elements inside"
};

var adder = function(a, b) {
    return `the sum of the 2 numbers is ${a+b} `;

}

var pi = 3.141516;

// first way 
// module.exports.counter = counter;

// module.exports.adder = adder;

// module.exports.pi = pi;


//second way with objects
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};



// anoter way to do it

// module.exports.counter = function(arr) {
//     return "this an array with " + arr.length + " elements inside"
// };

// module.exports.adder = function(a, b) {
//     return `the sum of the 2 numbers is ${a+b} `;

// }


// module.exports.pi = 3.141516;