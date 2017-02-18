/**
 * Created by apple on 17/2/18.
 */

const EventEmitter = require('events');
const util = require('util');


function Girl(name) {
    this.name = name;
    EventEmitter.call(this);
}

function Boy(name) {
    this.name = name;
    this.say = () => {
        console.log('');
    }
}
util.inherits(Girl,EventEmitter);

let girl = new Girl();

let xiaoming = new Boy('小明');

girl.addListener('look', () => {
    console.log('look');
});

girl.emit('look');