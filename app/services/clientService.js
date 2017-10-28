const users = require('./../db/users');
const ClientEntity = require('./../entities/clientEntity');

/**
 * @class ClientService
 */
class ClientService {
    constructor() {
	    /**
	     * @type ClientEntity[] _clients
	     */
        this._clients = this._setClients();
    }

	/**
	 * @return ClientEntity[]
	 */
	getClients() {
        return this._clients;
    }

	/**
	 * @param {string} name
	 * @return ClientEntity
	 */
	findAndGetClient(name) {
		return this.getClients().find((item) => item.nameAlias === name);
    }

    _setClients() {
        return users.map(item => new ClientEntity(item));
    }
}

module.exports = ClientService;
