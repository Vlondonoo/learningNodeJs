//  module exports

// var stuff = require('./counter');

// console.log(stuff.counter(["vero", "sebas", "mami"]));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 5))




var events = require('events');
var util = require('util');

// event emitter to create custom events

// we can create elements like this
// element.on('click', funtion() {});

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(msg) {
    console.log(msg);
});
//myEmitter.emit('someEvent', 'the event was emitted');

//utils show utilities from the project
// allow to take function from the other events

var Person = function(name) {
    this.name = name;
}

// is going to inherent others event, first is gonna be the object to inherent, 
// then is gonna be the event
util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryan = new Person('Ryan');
var people = [james, mary, ryan];

people.forEach((person) => {
    person.on('speak', function(mssg) {
        console.log(person.name + ' said ' + mssg);
    });
});

james.emit('speak', 'hey dudes');
ryan.emit('speak', 'this is a test message');