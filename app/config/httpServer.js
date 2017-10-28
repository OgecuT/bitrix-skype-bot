const restify = require('restify');

/**
 * @class HttpServer
 * @property restify server
 * @method getInstance
 */
class HttpServer {
	/**
	 * @param {number} port
	 */
    constructor(port) {
        this.server = restify.createServer({
	        name: 'botServer'
        });

        this.server.listen(port, this.handler.bind(this));
    }

	/**
	 * @return {restify|Server}
	 */
	getInstance() {
        return this.server;
    }

    handler() {
	    console.log('%s listening to %s', this.server.name, this.server.url);
    }
}

module.exports = HttpServer;
