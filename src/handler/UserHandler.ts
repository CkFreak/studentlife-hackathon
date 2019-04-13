import { Request, Response } from "express";
import { MySQLServiceT } from "../types/service/MySQLService";
import { UserHandlerT } from "../types/handler/UserHandler";
import { logger } from "../utils/logger";

export const UserHandler = (mysql: MySQLServiceT): UserHandlerT => {

	const createUser = (req: Request, res: Response) => {
		mysql.createUser(req.body.name).then(() => {
			res.status(200).send({message: "Success"});
		}).catch((err: Error) => {
			logger.error("There was an error when saving a new user", err);
			res.status(500).send({message: "Internal Server Error"});
		});
	};

	return {
		createUser,
	};
};
