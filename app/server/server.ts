import Koa         from 'koa';
import Db          from './../database/db';
import {Sequelize} from 'sequelize-typescript';

class Server {
    private _db: Db;
    private _app: Koa;

    constructor(_Db: Db, koa: Koa, port: number) {
        this._db  = _Db;
        this._app = koa;

        this._app.use(async (ctx: any) => {
            ctx.body = 'Hello sdfdsf';
        });

        this._listen(port);
    }

    private _listen(port: number) {
        this._app.listen(port);
    }
}

const connection = new Sequelize({
          password: 'root',
          database: 'head',
          username: 'root',
          host    : 'mysql',
          dialect : 'mysql',
          port    : 3306,
      });

new Server(new Db(connection), new Koa(), 3000);


