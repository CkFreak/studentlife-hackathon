import * as winston from "winston";
import { LOGLEVEL } from "../config/config";


export const logger = (() => {
	return new winston.Logger({
		level: LOGLEVEL,
		transports: [
			new winston.transports.Console({colorize: true, timestamp: true}),
			new winston.transports.File({filename: "events.log", colorize: true, timestamp: true})
		],
		exitOnError: false
	});
})();
