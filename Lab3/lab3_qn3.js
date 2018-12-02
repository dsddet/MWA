var events = require('events');
var eventEmitter = new events.EventEmitter();

class Gym {
    constructor() {
        (() => {
            setInterval(() => {
                eventEmitter.emit('go');
            }, 1000);
        })()
    }

}


//Create an event handler:
var myEventHandler = function () {
    console.log('Athlete working out');
}

//Assign the event handler to an event:
eventEmitter.on('go', myEventHandler);

new Gym()

