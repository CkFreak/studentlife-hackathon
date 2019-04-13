import { Request, Response } from "express";

export interface UserHandlerT {
	createUser(req: Request, res: Response): void;
}
