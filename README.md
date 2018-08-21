# NodeTut

### Installation 

Install NodeJs and Npm using Homebrew. Start a Node server.
```sh
$ brew install node
$ cd NodeTut
$ npm install -d
$ node index
```

Hit the [server](http://localhost:3000/) to see if its working


Expected result:
```json
{
    "Message": "Hello World"
}
```

### Configuration
```sh
$ npm i config
$ vi config/default.json
```

```json
// default.json
{
	"instance-name": "Default App",
	"enable-logging": true,
	"log-path": "./logs",
	"logfile": "access.log",
	"dbConfig": {
		"host": "localhost",
		"port": 1234,
		"dbName": "businessdb"
	}
}
```

Overriding configs for other environments
```sh
$ vi config/production.json
```

```json
// production.json
{
	"instance-name": "Prod App",
	"enable-logging": false,
	"log-path": "./share_logs",
	"logfile": "access.log"
}
```

Toggle environments
```sh
$ export NODE_ENV=production
$ node index.js
```



**API Docs**
----
| Package | URL |
| ------- | --- |
| express | http://expressjs.com/en/4x/api.html |
| ajv     | https://www.npmjs.com/package/ajv |
| helmet  | https://www.npmjs.com/package/helmet |
| debug   | https://www.npmjs.com/package/debug |
| config  | https://www.npmjs.com/package/config |
| morgan  | https://www.npmjs.com/package/morgan |