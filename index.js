const express = require('express');
const config = require('config');
const helmet = require('helmet');
const debug = require('debug')('app:index');
const httpLogger = require('./middleware/httpLogger');
const personRoutes = require('./routes/persons');
const app = express();

// Declaring express middleware
app.use(express.json());

// Using third-party middleware
app.use(helmet());

// Using customised middleware
app.use(httpLogger.morgan);

// Assign routes to express Application
app.use('/api/persons', personRoutes);

// Declare default endpoint
app.get('/', (req, res) => {
	res.send({
		Message: 'Hello World',
	});
});

// Configure express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => debug(`Listening on port ${PORT} - ${config.get('instance-name')}`));
