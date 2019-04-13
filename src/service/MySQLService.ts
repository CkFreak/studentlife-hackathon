import mysql = require("promise-mysql");
import { MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER, SCORES_TABLE, USERS_TABLE } from "../config/config";
import { MySQLServiceT } from "../types/service/MySQLService";
import * as Bluebird from "bluebird";

export const MySQLService = () => {
	let pool: mysql.Pool;

	const saveScore = (userId: string, score: string): Bluebird<any> => {
		let con: mysql.Connection;
		return pool.getConnection().then((connection) => {
			con = connection;
			return con.query(`INSERT INTO ${SCORES_TABLE} (userid, score) VALUES (${userId}, ${score});`)
		}).then(() => {
			con.end();
			return Promise.resolve();
		});
	};

	const getScoresForUser = (userId: string) => {
		let con: mysql.Connection;
		return pool.getConnection().then(connection => {
			con = connection;
			return con.query(`SELECT score FROM ${SCORES_TABLE} WHERE userid=${userId};`);
		}).then((data) => {
			con.end();
			return Promise.resolve(data);
		})
	};

	const getAllScores = () => {
		let con: mysql.Connection;
		return pool.getConnection().then(connection => {
			con = connection;
			return con.query(`SELECT s.score, u.name from ${SCORES_TABLE} s JOIN ${USERS_TABLE} u ON u.userid = s.userid`);
		}).then((data) => {
			con.end();
			return Promise.resolve(data);
		});
	};

	const createUser = (name: string) => {
		let con: mysql.Connection;
		return pool.getConnection().then(connection => {
			con = connection;
			return con.query(`INSERT INTO ${USERS_TABLE} (name) VALUES ('${name}')`);
		}).then((data) => {
			con.end();
			return Promise.resolve(data);
		});
	};

	const MySQLService: MySQLServiceT = {
		saveScore,
		getScoresForUser,
		getAllScores,
		createUser,
	};

	const createPool = () => {
		pool = mysql.createPool({
			host: MYSQL_HOST,
			port: MYSQL_PORT,
			database: "arni",
			user: MYSQL_USER,
			password: MYSQL_PASSWORD,
			connectionLimit: 10,
		});
	};

	const init = (): Promise<MySQLServiceT> => {
		createPool();
		return Promise.resolve(MySQLService);
	};

	return {
		init,
	}
};
