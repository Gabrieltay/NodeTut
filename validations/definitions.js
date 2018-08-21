const Ajv = require('ajv');
var ajv = new Ajv();
var exports = (module.exports = {});

const personSchema = {
	$id: 'tech.gov.sg/molb/schemas/person',
	type: 'object',
	properties: {
		name: { $ref: 'base#/definitions/str' },
		email: { format: 'email' },
		nric: { $ref: 'common#/definitions/nric' },
		address: {
			$ref: 'address',
		},
		siblings: {
			type: ['array', 'null'],
			items: {
				$ref: 'sibling',
			},
		},
	},
	required: ['name', 'nric'],
};

const addressSchema = {
	$id: 'tech.gov.sg/molb/schemas/address',
	type: 'object',
	properties: {
		street: { $ref: 'base#/definitions/str' },
		unit: { $ref: 'base#/definitions/str' },
		postal: { type: 'integer', minimum: 100000, maximum: 999999 },
	},
};

const siblingSchema = {
	$id: 'tech.gov.sg/molb/schemas/sibling',
	type: 'object',
	properties: {
		name: { $ref: 'base#/definitions/str' },
		nric: { $ref: 'common#/definitions/nric' },
	},
};

const commonSchema = {
	$id: 'tech.gov.sg/molb/schemas/common',
	definitions: {
		nric: { pattern: '^S[0-9]{7}[a-zA-Z]$' },
	},
};

const baseSchema = {
	$id: 'tech.gov.sg/molb/schemas/base',
	definitions: {
		int: { type: 'integer' },
		str: { type: 'string' },
	},
};

exports.validate = ajv
	.addSchema(baseSchema)
	.addSchema(commonSchema)
	.addSchema(siblingSchema)
	.addSchema(addressSchema)
	.compile(personSchema);
