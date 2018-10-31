import {expect} from 'chai';
import Db       from './db';

const SequelizeMock = require('sequelize-mock');

describe('Database', () => {
    it('Should contain sequelize instance', () => {
        let sequelize = new SequelizeMock();
        sequelize.key = 'working';

        const db = new Db(sequelize);

        expect(db.connection.key).to.equal('working');
    });
});
