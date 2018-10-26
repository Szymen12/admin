const Koa = require('koa');
const app = new Koa();

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    database: 'head',
    username: 'root',
    password: 'root',
    host: 'mysql',
    dialect: 'mysql',
    port: 3306,
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);

