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
Setting configuration for different environments. 
```sh
$ npm i config
$ vi config/default.json
```
Default config directory resides in application root. Can be overridden by setting $NODE_CONFIG_DIR environment variable.
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

### Debugging
```sh
$ npm i debug
$ export DEBUG=app:*
```
```sh
  app:worker:a Doing interesting stuffs... +0ms
  app:worker:b Testing uninteresting things... +0ms
  app:index Listening on port 3000 - Stage App +0ms
  app:worker:a Doing interesting stuffs... +101ms
  app:worker:a Doing interesting stuffs... +754ms
  app:worker:a Doing interesting stuffs... +257ms
  app:worker:b Testing uninteresting things... +2s
```

To run as Docker image (default port: 8080)
```docker
docker-compose up -d
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