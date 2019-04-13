import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { PORT } from "./config/config";
import { ScoreRouter } from "./routers/ScoreRouter";
import { ScoreHandler } from "./handler/ScoreHandler";
import { MySQLServiceT } from "./types/service/MySQLService";
import { UserHandler } from "./handler/UserHandler";
import { UserRouter } from "./routers/UserRouter";
import { logger } from "./utils/logger";

export const App = (mysql: MySQLServiceT) => {
	const app = express();
	const scoreHandler = ScoreHandler(mysql);
	const userHandler = UserHandler(mysql);

	app.use(cors());
	app.use(bodyParser.json());
	app.use(express.urlencoded({extended: true}));

	app.use((req: express.Request, res: express.Response, next: Function) => {
		logger.info("New Request: ", req.url);
		next();
	});

	app.get("/", (req: express.Request, res: express.Response) => {
		res.status(200).send("Up and running. JIJ");
	});

	app.use(ScoreRouter.getRouter(scoreHandler));

	app.use(UserRouter.getRouter(userHandler));

	const listen = () => {
		return new Promise(((resolve, reject) => {
			app.listen(PORT, (err: Error) => {
				if (err) return reject(err);
				return resolve();
			});
		}));
	};

	return {
		listen,
	}

};
