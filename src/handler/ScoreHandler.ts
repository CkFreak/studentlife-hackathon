import { Request, Response } from "express";
import { MySQLServiceT } from "../types/service/MySQLService";
import { ScoreHandlerT } from "../types/handler/ScoreHandler";

export const ScoreHandler = (mysql: MySQLServiceT): ScoreHandlerT => {
	const saveScore = (req: Request, res: Response) => {
		mysql.saveScore(req.body.user, req.body.score).then(() => {
			res.status(200).send({message: "Success"});
		}).catch((err: Error) => {
			console.error("There was an error when saving a score for a user", err);
			res.status(500).send({message: "Internal Server Error"});
		});
	};

	const getScoresForUser = (req: Request, res: Response) => {
		mysql.getScoresForUser(req.params.id).then(result => {
			res.status(200).send({message: "Success", data: result});
		}).catch((err: Error) => {
			console.error("There was an error when getting scores for a user", err);
			res.status(500).send({message: "Internal Server Error"});
		});
	};

	const getAllScores = (req: Request, res: Response) => {
		mysql.getAllScores().then(result => {
			res.status(200).send({message: "Success", data: result});
		}).catch((err: Error) => {
			console.error("There was an error getting all scores", err);
			res.status(500).send({message: "Internal Server Error"});
		});
	};

	return {
		saveScore,
		getScoresForUser,
		getAllScores,
	}
};
