import { Router } from "express";
import { ScoreHandlerT } from "../types/handler/ScoreHandler";

export const ScoreRouter = (() => {
	const getRouter = (scoreHandler: ScoreHandlerT) => {
		const router = Router();

		router.get("/score", scoreHandler.getAllScores); // get all scores
		router.get("/score/:id", scoreHandler.getScoresForUser); // get a users score
		router.post("/score", scoreHandler.saveScore); // send a new users score

		return router;
	};

	return {
		getRouter,
	}
})();
