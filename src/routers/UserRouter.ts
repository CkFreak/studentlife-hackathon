import { Router } from "express";
import { UserHandlerT } from "../types/handler/UserHandler";

export const UserRouter = (() => {
	const getRouter = (userHandler: UserHandlerT) => {
		const router = Router();

		router.post("/user", userHandler.createUser);

		return router;
	};

	return {
		getRouter,
	}
})();
