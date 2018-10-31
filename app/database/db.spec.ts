import {expect} from 'chai';
import Db       from './db';

const SequelizeMock = require('sequelize-mock');

describe('Hello function', () => {
    it('should return hello world', () => {
        let sequelize = new SequelizeMock();
        sequelize.key = 'working';

        const db = new Db(sequelize);

        expect(db.connection.key).to.equal('working');
    });
});
