/**
 * Created by apple on 17/2/18.
 */
const util = require('util');

function Parent () {
    this.name = 'father';
    this.age = 50;
    this.say = () => {
        console.log(this.name);
    }

}

Parent.prototype.showName = () => {
    console.log('show', this.name);
};

function Child () {
    Parent.call(this);
    this.name = 'child';
}

util.inherits(Child, Parent);

let c = new Child();

console.log(c);