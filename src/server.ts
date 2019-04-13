const appInsights = require("applicationinsights");
appInsights.setup("a96023ab-acad-4682-81d1-a87623aac394");
appInsights.start();

import { App } from "./app";
import { PORT } from "./config/config";
import { MySQLService } from "./service/MySQLService";
import { MySQLServiceT } from "./types/service/MySQLService";
import { logger } from "./utils/logger";


MySQLService().init().then((mysql: MySQLServiceT) => {
	return App(mysql).listen();
}).then(() => {
	logger.info(`Server is listening on Port ${PORT}`);
}).catch((err: Error) => {
	logger.error("There was an error when starting the server!", err);
});
