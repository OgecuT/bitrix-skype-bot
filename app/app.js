const HttpServer = require('./config/httpServer');
const request = require('request');
const BotConnector = require('./services/botConnector');
const BotService = require('./services/botService');

/**
 * @class App
 * @property app express.application
 */
class App {
	/**
	 * @param {number} port
	 */
	constructor(port = 5000) {
        this.port = port;
    }

    init() {
        this.start();
	    new BotService();
        this.routes();
    }

    start() {
        this.server = new HttpServer(this.port).getInstance();
    }

    routes() {
		this.server.post('/api/messages', BotConnector.getConnector().listen());
    }
}

module.exports = App;
