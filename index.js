const express = require('express');
const debug = require('debug')('app:index');
const httpLogger = require('./middleware/httpLogger');
const personRoutes = require('./routes/persons');
const app = express();

// setting express middleware
app.use(express.json());
app.use(httpLogger.morgan);
app.use('/api/persons', personRoutes);

app.get('/', (req, res) => {
	res.send({
		Message: 'Hello World',
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => debug(`Listening on port ${PORT}`));
