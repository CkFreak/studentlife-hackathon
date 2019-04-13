import { Request, Response } from "express";

export interface ScoreHandlerT {
	saveScore(req: Request, res: Response): void;
	getScoresForUser(req: Request, res: Response): void;
	getAllScores(req: Request, res: Response): void;
}
