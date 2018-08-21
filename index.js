const express = require('express');
const debug = require('debug')('app:index');
const httpLogger = require('./middleware/httpLogger');
const app = express();

app.use(httpLogger.morgan);

app.get('/', (req, res) => {
	res.send({
		Message: 'Hello World',
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => debug(`Listening on port ${PORT}`));
