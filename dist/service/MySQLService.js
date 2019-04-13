"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("promise-mysql");
const config_1 = require("../config/config");
exports.MySQLService = () => {
    let pool;
    const saveScore = (userId, score) => {
        let con;
        return pool.getConnection().then((connection) => {
            con = connection;
            return con.query(`INSERT INTO ${config_1.SCORES_TABLE} (userid, score) VALUES (${userId}, ${score});`);
        }).then(() => {
            con.end();
            return Promise.resolve();
        });
    };
    const getScoresForUser = (userId) => {
        let con;
        return pool.getConnection().then(connection => {
            con = connection;
            return con.query(`SELECT score FROM ${config_1.SCORES_TABLE} WHERE userid=${userId};`);
        }).then((data) => {
            con.end();
            return Promise.resolve(data);
        });
    };
    const getAllScores = () => {
        let con;
        return pool.getConnection().then(connection => {
            con = connection;
            return con.query(`SELECT s.score, u.name from ${config_1.SCORES_TABLE} s JOIN ${config_1.USERS_TABLE} u ON u.userid = s.userid`);
        }).then((data) => {
            con.end();
            return Promise.resolve(data);
        });
    };
    const createUser = (name) => {
        let con;
        return pool.getConnection().then(connection => {
            con = connection;
            return con.query(`INSERT INTO ${config_1.USERS_TABLE} (name) VALUES ('${name}')`);
        }).then((data) => {
            con.end();
            return Promise.resolve(data);
        });
    };
    const MySQLService = {
        saveScore,
        getScoresForUser,
        getAllScores,
        createUser,
    };
    const createPool = () => {
        pool = mysql.createPool({
            host: "localhost",
            port: config_1.MYSQL_PORT,
            database: "arni",
            user: config_1.MYSQL_USER,
            password: config_1.MYSQL_PASSWORD,
            connectionLimit: 10,
        });
    };
    const init = () => {
        createPool();
        return Promise.resolve(MySQLService);
    };
    return {
        init,
    };
};
//# sourceMappingURL=MySQLService.js.map