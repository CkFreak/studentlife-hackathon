import * as Bluebird from "bluebird";

export interface MySQLServiceT {
	saveScore(userId: string, score: string): Bluebird<any>;
	getScoresForUser(userId: string): Bluebird<any>;
	getAllScores(): Bluebird<any>;
	createUser(name: string): Bluebird<any>
}
