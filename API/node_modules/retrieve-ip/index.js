module.exports = (req) => {
	if(typeof req === 'object') {
		return req.connection.remoteAddress;
	}
	return new Error('Provide a request object from Express.js');
};
