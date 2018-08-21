const morgan = require('morgan');
const config = require('config');
const rfs = require('rotating-file-stream');
const uuid = require('uuid/v4');
const fs = require('fs');
const path = require('path');

var logDirectory = config.get('log-path');
var instanceName = config.get('instance-name');

// ensure log directory exists, else create directory
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// configure write stream
var accessLogStream = rfs(getFileName, {
	size: '10M',
	path: logDirectory,
});

// padding
function pad(num) {
	return (num > 9 ? '' : '0') + num;
}

// generate logfile name using timestamp
function getFileName() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = pad(now.getMonth());
	var day = pad(now.getDate());
	var hour = pad(now.getHours());
	var min = pad(now.getMinutes());
	var sec = pad(now.getSeconds());
	return `${year}${mon}${day}-${hour}${min}${sec}_${config.get('logfile')}`;
}

// configuring morgan logging parameters
morgan.token('id', uuid);

morgan.token('namespace', () => {
	return instanceName;
});

morgan.token('body', req => {
	return JSON.stringify(req.body);
});

module.exports.morgan = morgan(
	':id :date[iso] :namespace :method :url :status :response-time :referrer :user-agent :body',
	{
		stream: accessLogStream,
	}
);
