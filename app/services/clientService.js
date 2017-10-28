const users = require('./../db/users');
const ClientEntity = require('./../entities/clientEntity');

class ClientService {
    constructor() {
        this._clients = this._setClients();
    }

    getClients() {
        return this._clients;
    }

    _setClients() {
        return users.map(item => new ClientEntity(item));
    }
}

module.exports = ClientService;
