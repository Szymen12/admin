const Sequelize = require('sequelize');

class Db {
    _connection:Sequelize = null;

    constructor(sequelize: Sequelize, password: string){
        this._connection = new sequelize({
            password,
            database: 'head',
            username: 'root',
            host: 'mysql',
            dialect: 'mysql',
            port: 3306,
        });
    }

    get connection(){
        return this._connection;
    }
}

const db = new Db(Sequelize, 'root');

export default db.connection;