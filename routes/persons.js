const express = require('express');
const Ajv = require('ajv');
const debug = require('debug')('app:persons');
const definitions = require('../validations/definitions');
const router = express.Router();
var ajv = new Ajv();

const persons = [];

router.get('/', (req, res) => {
	if (!Array.isArray(persons) || !persons.length) {
		res.status(400).send('Invalid List');
	} else {
		res.send(persons);
	}
});

router.get('/:name', (req, res) => {
	let person = persons.find(p => p.name === req.params.name);
	if (!person) {
		debug('Invalid Person');
		res.status(400).send('Invalid Person');
	} else {
		res.send(person);
	}
});

router.delete('/:name', (req, res) => {
	let person = persons.find(p => p.name === req.params.name);
	if (!person) {
		debug('Invalid Person');
		res.status(400).send('Invalid Person');
	} else {
		const index = persons.indexOf(person);
		persons.splice(index, 1);
		res.send(persons);
	}
});

router.put('/:name', (req, res) => {
	let person = persons.find(p => p.name === req.params.name);
	if (!person) {
		debug('Invalid Person');
		res.status(400).send('Invalid Person');
	} else {
		persons.splice(person, 1, req.body);
		res.send(persons);
	}
});

router.post('/', (req, res) => {
	const valid = definitions.validate(req.body);
	if (valid) {
		persons.push(req.body);
		res.send(persons);
	} else {
		res.status(400).send(`Invalid ${ajv.errorsText(definitions.validate.errors)}`);
	}
});

module.exports = router;
