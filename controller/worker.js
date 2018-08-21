const debugA = require('debug')('app:worker:a');
const debugB = require('debug')('app:worker:b');

//export DEBUG=app:main,app:worker:a
//export DEBUG=app:main,-app:worker:*
//export DEBUG=app:worker:*
//export DEBUG=app:*

function workA() {
	debugA('Doing interesting stuffs...');
	setTimeout(workA, Math.random() * 1000);
}

function workB() {
	debugB('Testing uninteresting things...');
	setTimeout(workB, Math.random() * 2000);
}

workA();

workB();
