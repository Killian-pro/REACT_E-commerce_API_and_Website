const getIp = require('../index');
const assert = require('chai').assert;
const isIp = require('is-ip');

describe('test retrieve-ip', function() {
  it('should return an IP address', function(done) {
    const req = {};
    Object.defineProperty(req, 'connection', {
      value: {}
    });
    Object.defineProperty(req.connection, 'remoteAddress', {
      value: '172.168.10.5'
    });
    const ip = getIp(req);
    if(isIp(ip)) {
        assert('172.168.10.5', ip);
        done();
    }
  });
});
