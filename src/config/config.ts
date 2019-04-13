export const PORT = process.env.PORT || 3001;

export const MYSQL_HOST = process.env.MYSQLCONNSTR_localdb || "localhost";

export const MYSQL_PORT = 50681;

export const MYSQL_USER = process.env.MYSQL_USER || "root";

export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "";

export const SCORES_TABLE = "scores";

export const USERS_TABLE = "users";

export const LOGLEVEL = process.env.LOGLEVEL || "debug";
