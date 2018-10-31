import {Sequelize} from 'sequelize-typescript';

export default class Db {
    private _connection: any = null;

    constructor(connection: Sequelize) {
        this._connection = connection;
    }

    get connection() {
        return this._connection;
    }
}