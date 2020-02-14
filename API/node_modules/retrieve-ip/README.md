# retrieve-ip [![Build Status](https://travis-ci.org/rajikaimal/retrieve-ip.svg?branch=master)](https://travis-ci.org/rajikaimal/retrieve-ip)

Get IP address of a HTTP request object

## Install

```
npm install --save retrieve-ip
```

## Usage

```js
const app = require('express')();
const retrieveIp = require('retrieve-ip');

app.get('/', function(req, res) {
  const ip = retrieveIp(req);
});
```

## API

### retrieveIp(requestObject)

Return IP address of request

#### requestObject

Type: `object`

Request object

## License

MIT © [Rajika Imal](https://rajikaimal.github.io)
