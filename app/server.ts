const Koa = require('koa');
const db = require('db');

class Server {
    private _db: Db;
    private _app: Koa;

    constructor(db: Db, koa: Koa, port: int){
        this._db = db;
        this._app = new koa();

        this._app.use(async ctx => {
            ctx.body = 'Hello World';
        });

        this._listen(port);
    }

    private _listen(port) {
        this._app.listen(port);
    }
}

new Server(db, Koa, 3000);


